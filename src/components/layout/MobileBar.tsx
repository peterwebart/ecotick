"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";

/**
 * Persistent mobile action bar (brief section 28: Call / Get Quote always
 * reachable). Body carries pb-16 on small screens so it never covers content.
 */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-forest-900/15 bg-surface lg:hidden">
      <a
        href={site.phoneHref}
        onClick={() => track("phone_clicked", { location: "mobile_bar" })}
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-brand"
      >
        Call us
      </a>
      <Link
        href="/get-a-quote"
        onClick={() => track("service_cta_clicked", { location: "mobile_bar" })}
        className="flex items-center justify-center gap-2 bg-cta py-4 text-sm font-semibold text-white"
      >
        Get a free quote
      </Link>
    </div>
  );
}
