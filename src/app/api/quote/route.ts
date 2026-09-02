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
 * marketingOptIn, notes.
 *
 * marketingOptIn records CASL consent and is stored with the lead. It is never
 * required to submit — see the note in QuoteWizard.
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
  const marketingOptIn = body.marketingOptIn === true;

  console.info("[quote] lead received", {
    propertyType,
    size: str(body.size),
    address,
    addressVerified: str(body.addressPlaceId).length > 0,
    timing: str(body.timing),
    preferredContact,
    marketingOptIn,
  });

  await notify({
    propertyType,
    size: str(body.size),
    acreage: str(body.acreage),
    buildings: str(body.buildings),
    visitors: str(body.visitors),
    address,
    addressVerified: str(body.addressPlaceId).length > 0,
    timing: str(body.timing),
    firstName,
    lastName,
    email,
    phone,
    preferredContact,
    marketingOptIn,
    notes: str(body.notes),
  });

  return NextResponse.json({ ok: true });
}

type Lead = Record<string, string | boolean>;

const LABELS: Record<string, string> = {
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone",
  preferredContact: "Preferred contact",
  marketingOptIn: "Marketing consent",
  propertyType: "Property type",
  size: "Property size",
  acreage: "Acreage",
  buildings: "Buildings",
  visitors: "People on site",
  address: "Address",
  addressVerified: "Address verified via Google",
  timing: "Preferred start",
  notes: "Notes",
};

/**
 * Emails the lead to QUOTE_NOTIFY_EMAIL via Resend's REST API.
 *
 * Plain fetch rather than the SDK: one less dependency to keep current, and the
 * payload is three fields. Without RESEND_API_KEY this is a no-op and the lead
 * still lands in the server log, so a missing key degrades rather than losing
 * the enquiry. A send failure is caught and logged for the same reason — the
 * customer must never see an error for something that is our problem.
 */
async function notify(lead: Lead): Promise<void> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_NOTIFY_EMAIL ?? "info@eco-ticksolutions.ca";
  const from = process.env.QUOTE_FROM_EMAIL ?? "quotes@eco-ticksolutions.ca";
  if (!key) {
    console.warn("[quote] RESEND_API_KEY not set — lead logged but not emailed");
    return;
  }

  const rows = Object.entries(lead)
    .filter(([, v]) => v !== "" && v !== false)
    .map(([k, v]) => `${LABELS[k] ?? k}: ${v === true ? "Yes" : v}`)
    .join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Eco-Tick website <${from}>`,
        to: [to],
        // Replying goes straight back to the customer, not to the website.
        reply_to: String(lead.email),
        subject: `Quote request — ${lead.firstName} ${lead.lastName}, ${lead.propertyType}`,
        text: `New quote request from the website.\n\n${rows}\n`,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[quote] notify failed", res.status, await res.text());
    }
  } catch (err) {
    console.error("[quote] notify threw", err);
  }
}
