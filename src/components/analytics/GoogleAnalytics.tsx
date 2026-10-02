import Script from "next/script";

/**
 * Loads GA4 only when NEXT_PUBLIC_GA4_ID is set, so local, preview and CI
 * builds stay clean and no measurement ID is ever hardcoded (brief section 29).
 *
 * The custom events fired by lib/analytics.ts (quote_started, quote_submitted,
 * phone_clicked, email_clicked, service_cta_clicked) push to dataLayer. Register
 * them as conversions in the GA4 UI; that is configuration, not code.
 */
export function GoogleAnalytics() {
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  if (!id) return null;

  /**
   * GA4 is almost always configured inside GTM. Loading gtag.js here as well
   * means two libraries reporting to the same property, and every pageview and
   * event counted twice — which looks like growth rather than a bug, so it can
   * go unnoticed for months. Pick one: either leave NEXT_PUBLIC_GA4_ID unset and
   * add a GA4 tag in the GTM container, or leave GA4 out of GTM and keep this.
   */
  if (process.env.NEXT_PUBLIC_GTM_ID !== "" && process.env.NEXT_PUBLIC_GTM_ID !== undefined) {
    console.warn(
      "[analytics] Both NEXT_PUBLIC_GA4_ID and GTM are configured. If the GTM " +
        "container also holds a GA4 tag, every pageview is being counted twice. " +
        "Configure GA4 in one place only.",
    );
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
