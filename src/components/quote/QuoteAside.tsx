"use client";

import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";

export function QuoteAside({
  heading,
  body,
  label,
  source,
}: {
  heading: string;
  body: string;
  label: string;
  source: string;
}) {
  return (
    <div className="rounded-card bg-forest-900 p-6 text-bone-50">
      <h2 className="font-display text-h3 text-white">{heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-bone-100/85">{body}</p>
      <Button
        href="/get-a-quote"
        className="mt-5 w-full"
        onClick={() => track("service_cta_clicked", { location: `${source}_aside` })}
      >
        {label}
      </Button>
      <a
        href={site.phoneHref}
        onClick={() => track("phone_clicked", { location: `${source}_aside` })}
        className="mt-3 block text-center text-sm font-semibold text-sage-300 hover:text-white"
      >
        or call {site.phone}
      </a>
    </div>
  );
}
