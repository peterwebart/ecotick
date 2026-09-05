import nodemailer from "nodemailer";

/**
 * Outbound mail.
 *
 * TRANSPORTS, in priority order:
 *
 *   Resend (HTTPS)  RESEND_API_KEY. Talks to api.resend.com over 443.
 *   SMTP            SMTP_HOST/PORT/USER/PASS.
 *
 * Resend is listed first deliberately. Most cloud hosts — Hetzner included —
 * block outbound SMTP ports (25, 465, 587) by default to limit spam abuse, and
 * a blocked port presents as "Connection timeout" rather than anything that
 * names the real cause. An HTTPS API is unaffected by that policy.
 *
 * Sending over Resend does not move Eco-Tick's mailboxes off Google. Receiving
 * stays exactly where it is; only the outbound path changes, and it needs no
 * MX changes.
 *
 * Every path is time-bounded, and nothing here blocks the HTTP response.
 */
export type MailResult = "sent" | "logged" | "failed";

export type Message = {
  to: string[];
  from: string;
  replyTo: string;
  subject: string;
  text: string;
};

const OVERALL_TIMEOUT_MS = 10_000;

function withTimeout<T>(work: Promise<T>, fallback: T, label: string): Promise<T> {
  return Promise.race([
    work,
    new Promise<T>((resolve) =>
      setTimeout(() => {
        console.error(`[mail] ${label} timed out after ${OVERALL_TIMEOUT_MS}ms`);
        resolve(fallback);
      }, OVERALL_TIMEOUT_MS),
    ),
  ]);
}

export async function sendMail(msg: Message, label = "message"): Promise<MailResult> {
  if (process.env.RESEND_API_KEY) {
    return withTimeout(viaResend(msg, process.env.RESEND_API_KEY), "failed", label);
  }
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return withTimeout(viaSmtp(msg), "failed", label);
  }
  console.warn(`[mail] no transport configured — ${label} logged but not sent`);
  return "logged";
}

async function viaResend(msg: Message, key: string): Promise<MailResult> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: msg.from,
        to: msg.to,
        reply_to: msg.replyTo,
        subject: msg.subject,
        text: msg.text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      const detail = await res.text();
      console.error(
        `[mail] Resend returned ${res.status}. A 403 here usually means the ` +
          `"from" domain is not verified in Resend. Response: ${detail.slice(0, 400)}`,
      );
      return "failed";
    }
    return "sent";
  } catch (err) {
    console.error("[mail] Resend request failed:", err instanceof Error ? err.message : err);
    return "failed";
  }
}

/**
 * SMTP, with a 587/STARTTLS retry. Some hosts block the implicit-TLS port 465
 * but leave 587 open, so a single retry is worth the couple of seconds. If both
 * time out, outbound SMTP is blocked and no credential change will help.
 */
async function viaSmtp(msg: Message): Promise<MailResult> {
  const host = process.env.SMTP_HOST!;
  const user = process.env.SMTP_USER!;
  const pass = process.env.SMTP_PASS!;
  const configured = Number(process.env.SMTP_PORT ?? 465);
  const ports = configured === 465 ? [465, 587] : [configured];

  for (const port of ports) {
    try {
      const transport = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        connectionTimeout: 4000,
        greetingTimeout: 4000,
        socketTimeout: 6000,
      });
      const info = await transport.sendMail({
        from: msg.from,
        to: msg.to.join(", "),
        replyTo: msg.replyTo,
        subject: msg.subject,
        text: msg.text,
      });
      console.info(`[mail] sent via SMTP:${port}`, { accepted: info.accepted });
      return "sent";
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      const blocked = /timeout|ETIMEDOUT|ECONNREFUSED|ENETUNREACH/i.test(reason);
      console.error(
        `[mail] SMTP:${port} failed — ${reason}` +
          (blocked
            ? ". A connection timeout means the port never opened, so the " +
              "credentials were never tested. Cloud hosts commonly block " +
              "outbound SMTP; Hetzner blocks 25/465/587 by default. Either ask " +
              "them to unblock it, or set RESEND_API_KEY and send over HTTPS."
            : /invalid login|535|BadCredentials/i.test(reason)
              ? ". Authentication was rejected — with Google this almost always " +
                "means an account password was used where an App Password is required."
              : ""),
      );
    }
  }
  return "failed";
}

/** Recipients from QUOTE_NOTIFY_EMAIL, comma or semicolon separated. */
export function notifyRecipients(fallback: string): string[] {
  const list = (process.env.QUOTE_NOTIFY_EMAIL ?? fallback)
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter((s) => s.includes("@"));
  return list.length > 0 ? list : [fallback];
}
