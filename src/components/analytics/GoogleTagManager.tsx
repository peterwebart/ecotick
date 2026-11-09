/**
 * Google Tag Manager — container GTM-KRP32ZRK.
 *
 * This is Google's current install snippet for a Tag Manager container: one
 * block, placed as high in <head> as possible, and no <noscript> iframe in
 * <body> (the old two-part snippet is retired; Google's install screen now
 * shows only this). It loads gtm.js asynchronously, so it does not block
 * rendering, and head placement keeps anything later added to the container
 * that must run before paint — a consent banner, an A/B test — from flickering.
 *
 * ONE container per page. GTM-5G97FBRL was replaced by GTM-KRP32ZRK in
 * November 2026 and must not load alongside it, so the retired ID is ignored
 * even if a stale NEXT_PUBLIC_GTM_ID still holds it in Coolify. Before that
 * switch goes live, anything still needed from the old container (GA4
 * configuration, conversion tags) has to exist in the new one; see
 * GTM-SETUP.md.
 *
 * NEXT_PUBLIC_GTM_ID overrides the default. Set it to an empty string on a
 * staging environment to keep test traffic out of the live container. It is a
 * build-time variable: prefixed NEXT_PUBLIC_, it is inlined at build, so it
 * must be marked as a build variable in Coolify, not runtime-only.
 */
const DEFAULT_GTM_ID = "GTM-KRP32ZRK";
const RETIRED_GTM_IDS = new Set(["GTM-5G97FBRL"]);

function resolveGtmId(): string {
  const configured = process.env.NEXT_PUBLIC_GTM_ID;
  if (configured === undefined) return DEFAULT_GTM_ID;
  const id = configured.trim();
  return RETIRED_GTM_IDS.has(id) ? DEFAULT_GTM_ID : id;
}

/** The container this build loads, or "" when Tag Manager is switched off. */
export const GTM_ID = resolveGtmId();

export function GtmHead() {
  if (!GTM_ID) return null;
  // Plain <script> tags rather than next/script on purpose: next/script would
  // load GTM with strategy="afterInteractive", after hydration.
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`} />
      <script
        id="gtm-init"
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || [];" +
            "function gtag(){dataLayer.push(arguments);}" +
            "gtag('js', new Date());",
        }}
      />
    </>
  );
}
