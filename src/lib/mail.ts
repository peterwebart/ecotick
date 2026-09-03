import nodemailer from "nodemailer";

/**
 * Sends the quote notification.
 *
 * Two transports, chosen by whichever credentials are present:
 *
 *   SMTP   — SMTP_HOST/PORT/USER/PASS. The route to use with Google Workspace:
 *            smtp.gmail.com, port 465, the mailbox address as the user, and an
 *            App Password (not the account password) as the pass. Requires
 *            2-step verification on the Google account.
 *   Resend — RESEND_API_KEY instead, if you would rather not hold SMTP
 *            credentials. Needs a verified sending domain.
 *
 * EVERY PATH IS TIME-BOUNDED. An SMTP connection that hangs — wrong port,
 * blocked egress, bad credentials against a server that stalls rather than
 * refuses — would otherwise hold the HTTP request open indefinitely and leave
 * the customer staring at a "Sending..." button that never resolves. Nodemailer
 * has no default timeouts, so they are set explicitly and the whole operation
 * is raced against a hard ceiling on top.
 */
export type MailResult = "sent" | "logged" | "failed";

/** Hard ceiling for the whole send, whichever transport is used. */
const OVERALL_TIMEOUT_MS = 12_000;

function withTimeout<T>(work: Promise<T>, fallback: T): Promise<T> {
  return Promise.race([
    work,
    new Promise<T>((resolve) =>
      setTimeout(() => {
        console.error(`[mail] timed out after ${OVERALL_TIMEOUT_MS}ms`);
        resolve(fallback);
      }, OVERALL_TIMEOUT_MS),
    ),
  ]);
}

export async function sendMail(opts: {
  /** One or more addresses. */
  to: string[];
  from: string;
  replyTo: string;
  subject: string;
  text: string;
}): Promise<MailResult> {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT, RESEND_API_KEY } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    return withTimeout(sendViaSmtp(opts), "failed");
  }
  if (RESEND_API_KEY) {
    return withTimeout(sendViaResend(opts, RESEND_API_KEY), "failed");
  }

  console.warn("[mail] no transport configured — lead logged but not emailed");
  return "logged";

  async function sendViaSmtp(o: typeof opts): Promise<MailResult> {
    try {
      const port = Number(SMTP_PORT ?? 465);
      const transport = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
        // Without these three, a stalled connection never returns.
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 10_000,
      });
      const info = await transport.sendMail({
        from: o.from,
        to: o.to.join(", "),
        replyTo: o.replyTo,
        subject: o.subject,
        text: o.text,
      });
      console.info("[mail] sent via SMTP", { accepted: info.accepted, rejected: info.rejected });
      return "sent";
    } catch (err) {
      // Log the real reason. "Invalid login" almost always means an account
      // password was used where an App Password is required.
      console.error("[mail] SMTP send failed:", err instanceof Error ? err.message : err);
      return "failed";
    }
  }

  async function sendViaResend(o: typeof opts, key: string): Promise<MailResult> {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: o.from,
          to: o.to,
          reply_to: o.replyTo,
          subject: o.subject,
          text: o.text,
        }),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) {
        console.error("[mail] Resend rejected", res.status, await res.text());
        return "failed";
      }
      return "sent";
    } catch (err) {
      console.error("[mail] Resend send failed:", err instanceof Error ? err.message : err);
      return "failed";
    }
  }
}

/**
 * Recipients from QUOTE_NOTIFY_EMAIL, comma or semicolon separated.
 * Falls back to the three Eco-Tick mailboxes.
 */
export function notifyRecipients(fallback: string): string[] {
  const raw = process.env.QUOTE_NOTIFY_EMAIL;
  const list = (raw ?? fallback)
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter((s) => s.includes("@"));
  return list.length > 0 ? list : [fallback];
}
