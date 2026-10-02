"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/**
 * Pushes a `route_change` event on client-side navigation.
 *
 * GTM's Page View trigger fires once, on container load. Every subsequent
 * navigation in an App Router site is a History API change with no document
 * load, so without this the container sees exactly one pageview per session.
 *
 * Four things this has to get right:
 *
 * 1. SKIP THE FIRST RUN. GTM already sent a pageview when the container loaded.
 *    Firing on mount as well double-counts every entry page.
 *
 * 2. WAIT FOR THE TITLE. Next applies the new route's metadata after the
 *    navigation commits, so reading `document.title` synchronously returns the
 *    page the visitor just left and every pageview is mislabelled by one. A
 *    MutationObserver on the <title> element waits for the real value.
 *
 * 3. DO NOT FORCE DYNAMIC RENDERING. `useSearchParams()` would need a Suspense
 *    boundary and can push pages out of static rendering, so query strings are
 *    read from `window.location` at push time instead. `usePathname()` is safe
 *    and carries no such cost.
 *
 * 4. PUSH EXPLICIT FIELDS. The GA4 tag reads Data Layer Variables rather than
 *    GTM's built-in Page variables, because the built-in Page Title reads the
 *    DOM at fire time and has the same staleness problem this component exists
 *    to solve.
 */

/**
 * Ceiling for the title wait. Long enough for metadata to resolve on a slow
 * device, short enough that a visitor cannot navigate twice inside it. Raise it
 * if you see stale titles in Preview; lower it if two pageviews ever collapse.
 */
const TITLE_SETTLE_TIMEOUT_MS = 1500;

export function RouteChangeTracker() {
  const pathname = usePathname();
  const isFirstRun = useRef(true);
  const previousHref = useRef<string>("");
  const previousTitle = useRef<string>("");

  useEffect(() => {
    // First run is the container-load pageview. Record state, send nothing.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      previousHref.current = window.location.href;
      previousTitle.current = document.title;
      return;
    }

    const titleBefore = previousTitle.current;
    const referrer = previousHref.current;
    let sent = false;

    const send = () => {
      if (sent) return;
      sent = true;
      observer.disconnect();
      clearTimeout(timer);

      const { pathname: path, search, href } = window.location;
      track("route_change", {
        page_path: path + search,
        page_location: href,
        page_title: document.title,
        page_referrer: referrer,
      });

      previousHref.current = href;
      previousTitle.current = document.title;
    };

    // Fires the moment Next swaps the title in.
    const observer = new MutationObserver(() => {
      if (document.title !== titleBefore) send();
    });
    const titleEl = document.querySelector("title");
    if (titleEl) {
      observer.observe(titleEl, { childList: true, characterData: true, subtree: true });
    }

    // Two routes can legitimately share a title, in which case the observer
    // never fires. Send anyway rather than lose the pageview.
    // Declared after `send` deliberately: send() only ever runs once this line
    // has executed, so the closure reference is safe and it can stay const.
    const timer = setTimeout(send, TITLE_SETTLE_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
