import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Blocks } from "@/components/service/Blocks";
import { Photo } from "@/components/ui/Photo";
import type { SiteImage } from "@/content/images";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import type { JsonLd } from "@/lib/schema";
import type { ServicePage } from "@/content/types";

/**
 * Shared shell for every service page. Schema is emitted here so structured
 * data and visible content can never drift apart: FAQPage markup is only
 * written when the page actually renders an FAQ block.
 */
export function ServicePageTemplate({
  page,
  crumbs,
  aside,
  hero,
  emitServiceSchema = true,
  extraSchema = [],
}: {
  page: ServicePage;
  crumbs: readonly Crumb[];
  aside?: ReactNode;
  hero?: SiteImage;
  /** /about and /service-areas are not Services - do not describe them as one. */
  emitServiceSchema?: boolean;
  extraSchema?: readonly JsonLd[];
}) {
  const faqBlock = page.blocks.find((b) => b.type === "faq");

  const schema: JsonLd[] = [breadcrumbSchema(crumbs), ...extraSchema];
  if (emitServiceSchema) {
    schema.push(
      serviceSchema({
        name: page.h1,
        description: page.metaDescription,
        path: `/${page.slug}`,
      }),
    );
  }
  if (faqBlock?.type === "faq") schema.push(faqSchema(faqBlock.faqs));

  return (
    <>
      {!page.noindex && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="max-w-3xl text-h1 font-display">{page.h1}</h1>
        {/* Answer-first: the direct answer sits above everything else. */}
        <p className="mt-6 max-w-2xl border-l-2 border-moss-600 pl-5 text-lead text-ink-700">
          {page.answer}
        </p>
        {hero && (
          <Photo
            image={hero}
            ratio="21 / 9"
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="mt-10"
          />
        )}
      </Container>

      <Container className="grid gap-14 pb-16 lg:grid-cols-[1fr_320px] lg:gap-16">
        <div>
          <Blocks blocks={page.blocks} />
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {aside}
          <nav aria-label="Related pages" className="rounded-card border border-border p-6">
            <h2 className="text-eyebrow font-semibold text-clay-600 uppercase">
              Related
            </h2>
            <ul className="mt-4 space-y-3">
              {page.related.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm font-medium text-ink-700 hover:text-brand hover:underline"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </Container>

      <CtaBand
        heading={page.ctaHeading}
        body={page.ctaBody}
        label={page.ctaLabel}
        source={page.slug}
      />
    </>
  );
}
