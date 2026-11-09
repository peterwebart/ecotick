import { site } from "@/content/site";

/**
 * Google Tag Manager.
 *
 * Rendered as the raw snippet in <head> rather than through next/script,
 * because that is where GTM asks for it and the loader it injects already sets
 * `async = true` — so it does not block rendering. Routing it through
 * next/script with afterInteractive would delay it past hydration for no gain,
 * and would break anything you later add to the container that needs to run
 * before paint, such as a consent banner or an A/B test.
 *
 * The container ID falls back to the live one, so a deploy works without extra
 * configuration. Set NEXT_PUBLIC_GTM_ID to an empty string on a staging
 * environment to keep test traffic out of the real container.
 *
 * NOTE: it is a build-time variable. Prefixed NEXT_PUBLIC_, it is inlined at
 * build, so it must be marked as a build variable in Coolify, not runtime-only.
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-5G97FBRL";

export function GtmHead() {
  if (!GTM_ID) return null;
  return (
    /**
     * eslint-disable-next-line rationale: the rule prefers next/script, which
     * would load GTM with strategy="afterInteractive" — i.e. after hydration.
     * The snippet below already sets async on the script it injects, so it does
     * not block rendering, and head placement is what keeps anything added to
     * the container later that must run before paint (a consent banner, an A/B
     * test) from flickering. Deliberate, not an oversight.
     */
    // eslint-disable-next-line @next/next/next-script-for-ga
    <script
      id="gtm-init"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
      }}
    />
  );
}

/** Must be the first thing inside <body>. Only reached with JavaScript off. */
export function GtmBody() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title={`${site.name} tag manager`}
      />
    </noscript>
  );
}
