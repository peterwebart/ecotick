"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="bg-forest-900 py-20 text-center">
      <Container>
        <h2 id="cta-heading" className="text-h1 font-display text-white">
          Ready to take back your outdoors?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lead text-bone-100/85">
          Professional tick and mosquito protection for residential, commercial
          and large outdoor properties.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button
            href="/get-a-quote"
            size="lg"
            onClick={() => track("service_cta_clicked", { location: "final_cta" })}
          >
            Get your free quote
          </Button>
          <a
            href={site.phoneHref}
            onClick={() => track("phone_clicked", { location: "final_cta" })}
            className="inline-flex items-center justify-center rounded-card border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
