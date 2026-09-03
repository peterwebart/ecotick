import { NextResponse } from "next/server";

/**
 * Address autocomplete proxy.
 *
 * WHY A SERVER ROUTE instead of the Google Maps JS SDK:
 *
 * 1. The key never reaches the browser. Loading the Places JS SDK requires a
 *    NEXT_PUBLIC_ key, which is inlined into the bundle and readable by anyone.
 *    Google's own mitigation for that is HTTP-referrer restriction, which is
 *    real but weaker than simply not shipping the key. Here the key lives only
 *    in GOOGLE_PLACES_API_KEY on the server.
 * 2. No third-party script. The SDK is ~200KB and would load on the quote page
 *    whether or not anyone touches the address field.
 * 3. The dropdown is our own markup, so it inherits the form's styling and
 *    keyboard behaviour instead of fighting a web component's shadow DOM.
 *
 * Uses Places API (New) — the endpoint below is places.googleapis.com, NOT the
 * legacy maps.googleapis.com/maps/api/place. In Google Cloud you must enable
 * the library entry called "Places API (New)". Enabling only the older
 * "Places API" returns 403 and no suggestions appear.
 *
 * Restrict the key by IP address to the Coolify host. Do NOT use an HTTP
 * referrer restriction: the call is made server to server, so there is no
 * referrer header and every request is rejected.
 *
 * Failures are logged with Google's own response so a misconfiguration is
 * diagnosable from the Coolify logs rather than presenting as silence.
 *
 * Failure is always soft: any error returns an empty list so the customer can
 * still type an address by hand and submit. An address field that breaks
 * because Google is down would cost real leads.
 */

const ENDPOINT = "https://places.googleapis.com/v1/places:autocomplete";
const MIN_INPUT = 3;

/** Kingston, so suggestions surface local streets before distant same-named ones. */
const BIAS_CENTRE = { latitude: 44.2783, longitude: -76.6088 };
const BIAS_RADIUS_M = 60_000;

export type AddressSuggestion = {
  placeId: string;
  /** Full formatted address, used as the field value. */
  text: string;
  /** Street line, shown as the primary row in the dropdown. */
  main: string;
  /** City / province line, shown as the secondary row. */
  secondary: string;
};

type GoogleResponse = {
  suggestions?: {
    placePrediction?: {
      placeId?: string;
      text?: { text?: string };
      structuredFormat?: {
        mainText?: { text?: string };
        secondaryText?: { text?: string };
      };
    };
  }[];
};

function empty(unavailable = false) {
  return NextResponse.json({ suggestions: [], unavailable });
}

export async function POST(request: Request) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  // No key configured: the field degrades to a plain text input. Not an error.
  if (!key) return empty(true);

  let body: { input?: unknown; sessionToken?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return empty();
  }

  const input = typeof body.input === "string" ? body.input.trim() : "";
  if (input.length < MIN_INPUT) return empty();

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": key,
        "X-Goog-FieldMask":
          "suggestions.placePrediction.placeId,suggestions.placePrediction.text,suggestions.placePrediction.structuredFormat",
      },
      body: JSON.stringify({
        input,
        includedRegionCodes: ["ca"],
        // No includedPrimaryTypes filter. It was rejecting valid requests with
        // INVALID_ARGUMENT, and Canada + a Kingston bias already narrows results
        // enough that landmarks rarely surface above street addresses.
        locationBias: {
          circle: { center: BIAS_CENTRE, radius: BIAS_RADIUS_M },
        },
        ...(typeof body.sessionToken === "string"
          ? { sessionToken: body.sessionToken }
          : {}),
      }),
      // Never let a slow upstream hang the customer's keystroke.
      signal: AbortSignal.timeout(4000),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error(
        `[places] Google returned ${res.status}. ` +
          `403 usually means the key is restricted or "Places API (New)" is not ` +
          `enabled; 400 INVALID_ARGUMENT means the request body was rejected. ` +
          `Response: ${detail.slice(0, 500)}`,
      );
      return empty();
    }

    const data = (await res.json()) as GoogleResponse;
    const suggestions: AddressSuggestion[] = (data.suggestions ?? [])
      .map((s) => s.placePrediction)
      .filter((p): p is NonNullable<typeof p> => Boolean(p?.placeId))
      .slice(0, 5)
      .map((p) => ({
        placeId: p.placeId ?? "",
        text: p.text?.text ?? "",
        main: p.structuredFormat?.mainText?.text ?? p.text?.text ?? "",
        secondary: p.structuredFormat?.secondaryText?.text ?? "",
      }));

    return NextResponse.json({ suggestions, unavailable: false });
  } catch (err) {
    console.error("[places] request failed:", err instanceof Error ? err.message : err);
    return empty();
  }
}
