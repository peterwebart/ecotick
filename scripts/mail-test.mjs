/**
 * Mail transport diagnostic. Run ON THE SERVER, where the network policy that
 * matters applies:
 *
 *   pnpm mail:test you@example.com
 *
 * Reports which transport is configured, whether the outbound path is actually
 * open, and sends one real message if it is. Written because "Connection
 * timeout" in a production log does not distinguish a blocked port from a wrong
 * hostname from a firewall rule, and guessing costs a deploy each time.
 */
import net from "node:net";

const to = process.argv[2];
if (!to) {
  console.error("Usage: pnpm mail:test you@example.com");
  process.exit(1);
}

const { RESEND_API_KEY, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, QUOTE_FROM_EMAIL } =
  process.env;
const from = QUOTE_FROM_EMAIL ?? "info@eco-ticksolutions.ca";

function probe(host, port, ms = 5000) {
  return new Promise((resolve) => {
    const sock = net.createConnection({ host, port });
    const done = (ok, why) => {
      sock.destroy();
      resolve({ ok, why });
    };
    sock.setTimeout(ms);
    sock.on("connect", () => done(true, "open"));
    sock.on("timeout", () => done(false, "timed out — port is filtered, not refused"));
    sock.on("error", (e) => done(false, e.code ?? e.message));
  });
}

console.log("Transport configuration");
console.log(`  RESEND_API_KEY : ${RESEND_API_KEY ? "set" : "not set"}`);
console.log(`  SMTP_HOST      : ${SMTP_HOST ?? "not set"}`);
console.log(`  SMTP_USER      : ${SMTP_USER ?? "not set"}`);
console.log(`  SMTP_PASS      : ${SMTP_PASS ? `set (${SMTP_PASS.length} chars)` : "not set"}`);
if (SMTP_PASS && SMTP_PASS.replace(/\s/g, "").length !== 16) {
  console.log("    note: Google App Passwords are 16 characters. This may be an");
  console.log("          account password, which will always be rejected.");
}

if (SMTP_HOST) {
  console.log("\nOutbound reachability");
  for (const port of [Number(SMTP_PORT ?? 465), 587, 25]) {
    const r = await probe(SMTP_HOST, port);
    console.log(`  ${SMTP_HOST}:${port} — ${r.ok ? "OPEN" : `BLOCKED (${r.why})`}`);
  }
  console.log(
    "\n  All blocked means the host blocks outbound SMTP. Hetzner does this by\n" +
      "  default. Either request an unblock, or set RESEND_API_KEY and send\n" +
      "  over HTTPS instead — no credential change will fix a filtered port.",
  );
}

console.log("\nSending a test message...");
const { sendMail } = await import("../src/lib/mail.ts").catch(() => ({}));
if (!sendMail) {
  console.log("  (run this via `pnpm mail:test` so the TypeScript loader is active)");
  process.exit(0);
}
const result = await sendMail(
  {
    to: [to],
    from,
    replyTo: from,
    subject: "Eco-Tick mail transport test",
    text: "If you are reading this, outbound mail works from the server.",
  },
  "diagnostic",
);
console.log(`  result: ${result}`);
process.exit(result === "sent" ? 0 : 1);
