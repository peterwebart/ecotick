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
