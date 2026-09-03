/**
 * Human-quotable reference for a quote request: ET-6K3P-9WQ2.
 *
 * Deliberately not a UUID — this gets read down a phone line. Uses Crockford
 * base32 with I, L, O and U removed, so 1/I, 0/O and similar are never
 * ambiguous when someone spells it out or writes it down.
 */
const ALPHABET = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

export function createReference(): string {
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  const chars = Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join("");
  return `ET-${chars.slice(0, 4)}-${chars.slice(4, 8)}`;
}

/** Accepts the format above, case-insensitively, for display validation. */
export function isReference(value: string): boolean {
  return /^ET-[0-9A-HJKMNP-TV-Z]{4}-[0-9A-HJKMNP-TV-Z]{4}$/i.test(value.trim());
}
