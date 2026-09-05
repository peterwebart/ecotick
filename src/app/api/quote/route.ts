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

  // 2. The customer's confirmation. Someone who has just handed over their
  //    details deserves proof it landed and something to quote back on the
  //    phone — otherwise the only evidence is a page they have already left.
  void sendMail(
    {
      to: [email],
      from,
      replyTo: site.email,
      subject: `We have your request — ${reference}`,
      text: [
        `Hi ${firstName},`,
        ``,
        `Thanks for getting in touch with Eco-Tick Solutions. We have your`,
        `request and someone will contact you by ${preferredContact.toLowerCase()}`,
        `to arrange a free property assessment.`,
        ``,
        `Your reference: ${reference}`,
        `Quote it if you call and we can pull your details up straight away.`,
        ``,
        `What we have on file`,
        `---------------------`,
        `Property: ${propertyType}, ${str(body.size)}`,
        `Address: ${address}`,
        `Preferred start: ${str(body.timing)}`,
        ``,
        `If any of that is wrong, just reply to this email and tell us.`,
        ``,
        `What happens next`,
        `-----------------`,
        `1. We confirm the property is inside our service area.`,
        `2. We contact you to book a free assessment. Nothing is priced until`,
        `   we have walked the ground, and there is no obligation.`,
        `3. You get a quote and a proposed schedule for the season.`,
        ``,
        `Need us sooner? Call ${site.phone}.`,
        ``,
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
