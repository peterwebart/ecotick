"use client";

/**
 * Thin analytics wrapper. No IDs are hardcoded (brief section 29) - GA4 loads
 * only when NEXT_PUBLIC_GA4_ID is set, so local and preview builds stay clean.
 */
type EventName =
  | "quote_started"
  | "quote_submitted"
  | "phone_clicked"
  | "email_clicked"
  | "service_cta_clicked";

type DataLayerWindow = Window & {
  dataLayer?: unknown[];
};

export function track(event: EventName, params: Record<string, string> = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({ event, ...params });
}
