"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";

export function CtaBand({
  heading,
  body,
  label = "Get your free quote",
  href = "/get-a-quote",
  source,
}: {
  heading: string;
  body: string;
  label?: string;
  href?: string;
  source: string;
}) {
  return (
    <section aria-labelledby="cta-band-heading" className="bg-forest-900 py-16 text-center">
      <Container>
        <h2 id="cta-band-heading" className="text-h2 font-display text-white">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-bone-100/85">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href={href}
            size="lg"
            onClick={() => track("service_cta_clicked", { location: source })}
          >
            {label}
          </Button>
          <a
            href={site.phoneHref}
            onClick={() => track("phone_clicked", { location: source })}
            className="inline-flex items-center justify-center rounded-card border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
