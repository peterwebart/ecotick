import { NextResponse } from "next/server";
import { notifyRecipients, sendMail } from "@/lib/mail";
import { createReference } from "@/lib/reference";
import { site } from "@/content/site";

/**
 * Quote submission endpoint.
 *
 * Returns a reference the customer can quote back on the phone, and emails the
 * lead to the office with reply-to set to the customer — so hitting Reply in
 * Gmail goes straight to them, not back to the website.
 *
 * Expected payload: propertyType, size, acreage, buildings, visitors, address,
 * addressPlaceId, timing, firstName, lastName, email, phone, preferredContact,
 * marketingOptIn, notes.
 */

type Payload = Record<string, unknown>;

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

const LABELS: [key: string, label: string][] = [
  ["firstName", "First name"],
  ["lastName", "Last name"],
  ["email", "Email"],
  ["phone", "Phone"],
  ["preferredContact", "Preferred contact"],
  ["marketingOptIn", "Marketing consent"],
  ["propertyType", "Property type"],
  ["size", "Property size"],
  ["acreage", "Acreage"],
  ["buildings", "Buildings"],
  ["visitors", "People on site"],
  ["address", "Property address"],
  ["addressVerified", "Address verified via Google"],
  ["timing", "Preferred start"],
  ["notes", "Notes"],
];

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot: respond 200 so bots do not learn they were caught.
  if (str(body.website).length > 0) {
    return NextResponse.json({ ok: true, reference: createReference() });
  }

  const firstName = str(body.firstName);
  const lastName = str(body.lastName);
  const email = str(body.email);
  const phone = str(body.phone);
  const propertyType = str(body.propertyType);
  const address = str(body.address);
  const preferredContact = str(body.preferredContact);
  const marketingOptIn = body.marketingOptIn === true;

  const invalid =
    firstName.length < 2 ||
    lastName.length < 2 ||
    !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ||
    phone.replace(/\D/g, "").length < 10 ||
    propertyType.length === 0 ||
    address.length < 5 ||
    preferredContact.length === 0 ||
    // Required by Eco-Tick. Enforced here as well as in the UI, because a
    // client-side check is trivially bypassed and the stored consent record
    // would then be false.
    !marketingOptIn;

  if (invalid) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 });
  }

  const reference = createReference();
  const lead: Record<string, string | boolean> = {
    firstName,
    lastName,
    email,
    phone,
    preferredContact,
    marketingOptIn,
    propertyType,
    size: str(body.size),
    acreage: str(body.acreage),
    buildings: str(body.buildings),
    visitors: str(body.visitors),
    address,
    // Tells the office whether the address was picked from Google or typed by
    // hand, which is worth knowing before someone drives out to it.
    addressVerified: str(body.addressPlaceId).length > 0,
    timing: str(body.timing),
    notes: str(body.notes),
  };

  const rows = LABELS.filter(([k]) => lead[k] !== "" && lead[k] !== false)
    .map(([k, label]) => `${label}: ${lead[k] === true ? "Yes" : lead[k]}`)
    .join("\n");

  // Logged first and synchronously, so the lead survives any mail failure.
  console.info("[quote] lead received", { reference, propertyType, address });
  console.info(`[quote] ${reference} details:\n${rows}`);

  /**
   * Mail is dispatched WITHOUT awaiting. The customer should not wait on an
   * SMTP handshake — with a slow or unreachable server that meant a ten second
   * spinner for something they have no stake in. Coolify runs a persistent Node
   * process, so the send completes after the response has gone out, and the
   * outcome is logged either way.
   */
  const from = process.env.QUOTE_FROM_EMAIL ?? site.email;

  // 1. The office copy. Reply-to is the customer, so Reply in Gmail goes to them.
  void sendMail(
    {
      to: notifyRecipients(
        "info@eco-ticksolutions.ca,shawn@eco-ticksolutions.ca,admin@eco-ticksolutions.ca",
      ),
      from,
      replyTo: email,
      subject: `Quote request ${reference} — ${firstName} ${lastName}, ${propertyType}`,
      text: `New quote request from the website.\n\nReference: ${reference}\n\n${rows}\n`,
    },
    `${reference} office`,
  ).then((r) => console.info(`[quote] ${reference} office mail: ${r}`));

  // 2. The customer's confirmation — wording supplied by Eco-Tick.
  //    Reply-to is the office, so "simply reply to this email" reaches a person.
  void sendMail(
    {
      to: [email],
      from,
      replyTo: site.email,
      subject: `Thank you for reaching out to Eco-Tick Solutions! (Reference: ${reference})`,
      text: [
        `Hi ${firstName},`,
        ``,
        `Thank you for contacting Eco-Tick Solutions. We have received your`,
        `quotation request, and our team will review the details to provide a`,
        `customized quote directly via email.`,
        ``,
        `Your Reference Number: ${reference}`,
        `(Please quote this reference if you contact us.)`,
        ``,
        `What We Have on File:`,
        ``,
        `* Property: ${propertyType}, ${str(body.size)} (${address})`,
        `* Preferred Start: ${str(body.timing)}`,
        ``,
        `If any of this is incorrect, simply reply to this email to let us know.`,
        ``,
        `What Happens Next:`,
        ``,
        `1. Quote Preparation: We prepare your estimate based on your property`,
        `   details without needing an in-person visit.`,
        `2. Email Delivery: You will receive your custom quote and proposed`,
        `   seasonal schedule directly in your inbox.`,
        ``,
        `Need us sooner? Call ${site.phone}.`,
        ``,
        `Best regards,`,
        `Eco-Tick Solutions`,
        `${site.address.street}, ${site.address.city}, ${site.address.regionName} ${site.address.postalCode}`,
        `${site.phone} · ${site.email}`,
        `Take Back the Outdoors.`,
      ].join("\n"),
    },
    `${reference} customer`,
  ).then((r) => console.info(`[quote] ${reference} customer mail: ${r}`));

  return NextResponse.json({ ok: true, reference });
}
