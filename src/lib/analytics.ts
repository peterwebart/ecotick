"use client";

/**
 * dataLayer helpers. No IDs are hardcoded — GTM owns the container, this just
 * pushes events it can trigger on.
 */
type EventName =
  | "quote_started"
  | "quote_submitted"
  | "phone_clicked"
  | "email_clicked"
  | "service_cta_clicked"
  | "route_change";

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

function dataLayer(): Record<string, unknown>[] | null {
  if (typeof window === "undefined") return null;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  return w.dataLayer;
}

export function track(event: EventName, params: Record<string, unknown> = {}): void {
  dataLayer()?.push({ event, ...params });
}

/**
 * Push an event, then navigate once GTM says its tags for that event have
 * fired.
 *
 * A bare push followed immediately by navigation is a race: the browser can
 * tear down the document before the measurement request leaves. GTM solves this
 * with `eventCallback`, which it invokes after the tags bound to that event
 * complete, and `eventTimeout`, which caps the wait.
 *
 * The local timer is a second safety net. `eventCallback` only fires if GTM is
 * actually present — with the container blocked by an extension or a network
 * failure it never runs, and without this the visitor would sit on a dead
 * button. Navigation happens exactly once, whichever path gets there first.
 */
export function trackThenNavigate(
  event: EventName,
  params: Record<string, unknown>,
  url: string,
  timeoutMs = 1200,
): void {
  const dl = dataLayer();
  let navigated = false;
  const go = () => {
    if (navigated) return;
    navigated = true;
    // A real document load, so GTM fires a Page View for the destination and
    // there is a Page URL to key the conversion on. router.push() would be a
    // History API change, which the Page View trigger never sees.
    window.location.assign(url);
  };

  const fallback = setTimeout(go, timeoutMs);

  if (!dl) {
    clearTimeout(fallback);
    go();
    return;
  }

  dl.push({
    event,
    ...params,
    eventTimeout: timeoutMs,
    eventCallback: () => {
      clearTimeout(fallback);
      go();
    },
  });
}
