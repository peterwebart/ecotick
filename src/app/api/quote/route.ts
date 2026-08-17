import { NextResponse } from "next/server";

/**
 * Quote submission endpoint.
 *
 * Validates and rejects bot traffic, then logs. It does NOT yet persist or
 * notify. Wire one of the following before launch, or leads are silently
 * discarded:
 *   1. Persist to a database
 *   2. Notify via QUOTE_NOTIFY_EMAIL
 *   3. Verify Cloudflare Turnstile using TURNSTILE_SECRET_KEY
 *
 * Expected payload: propertyType, size, acreage, buildings, visitors, address,
 * addressPlaceId, timing, firstName, lastName, email, phone, preferredContact,
 * notes.
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

  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);
  const phone = str(body.phone);
  const propertyType = str(body.propertyType);
  const address = str(body.address);
  const preferredContact = str(body.preferredContact);

  const invalid =
    firstName.length < 2 ||
    lastName.length < 2 ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    phone.replace(/\D/g, "").length < 10 ||
    propertyType.length === 0 ||
    address.length < 5 ||
    preferredContact.length === 0;

  if (invalid) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  // addressPlaceId is present when the customer picked a Google suggestion and
  // empty when they typed it. Worth keeping: it tells the office whether an
  // address has been verified before someone drives out to it.
  console.info("[quote] lead received", {
    propertyType,
    size: str(body.size),
    address,
    addressVerified: str(body.addressPlaceId).length > 0,
    timing: str(body.timing),
    preferredContact,
  });

  return NextResponse.json({ ok: true });
}
