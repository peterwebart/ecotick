import { NextResponse } from "next/server";

/**
 * Quote submission endpoint.
 *
 * PHASE 1 SCOPE: validates and rejects bot traffic, then logs. It does NOT yet
 * persist or notify - that lands in phase 2 alongside Payload + Postgres
 * (ARCHITECTURE.md section 7). Wire one of the following before launch, or
 * leads are silently discarded:
 *   1. Persist to Payload `QuoteRequests`
 *   2. Notify via QUOTE_NOTIFY_EMAIL
 *   3. Verify Cloudflare Turnstile using TURNSTILE_SECRET_KEY
 */

type Payload = Record<string, unknown>;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: respond 200 so bots do not learn they were caught.
  if (str(body.website).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const phone = str(body.phone);
  const propertyType = str(body.propertyType);

  const invalid =
    name.length < 2 ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    phone.replace(/\D/g, "").length < 10 ||
    propertyType.length === 0;

  if (invalid) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  // TODO(phase 2): replace with Payload create + email notification.
  console.info("[quote] lead received", { propertyType, location: str(body.location) });

  return NextResponse.json({ ok: true });
}
