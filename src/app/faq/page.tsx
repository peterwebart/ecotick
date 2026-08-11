import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { allServicePages } from "@/content/services";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import type { Faq } from "@/content/types";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about tick and mosquito treatment: timing, frequency, treated areas, pets and children, commercial sites and large properties.",
  path: "/faq",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

/**
 * Aggregated from the service pages so answers cannot drift out of sync with
 * the pages they came from. Questions whose answer is still a PLACEHOLDER are
 * filtered out rather than published: FAQPage schema on a placeholder answer
 * would be structured data that does not match useful visible content.
 */
type Group = { source: string; href: string; faqs: readonly Faq[] };

const groups: readonly Group[] = allServicePages
  .filter((p) => !p.noindex)
  .map((page) => {
    const block = page.blocks.find((b) => b.type === "faq");
    const faqs =
      block?.type === "faq"
        ? block.faqs.filter((f) => !f.a.startsWith("PLACEHOLDER"))
        : [];
    return { source: page.h1, href: `/${page.slug}`, faqs };
  })
  .filter((g) => g.faqs.length > 0);

const allFaqs: readonly Faq[] = groups.flatMap((g) => g.faqs);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(crumbs), faqSchema(allFaqs)]),
        }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="text-h1 font-display">Frequently asked questions</h1>
        <p className="mt-6 max-w-2xl border-l-2 border-moss-600 pl-5 text-lead text-ink-700">
          Answers pulled from across the site. If yours is not here, call us or
          send it through the quote form and we will answer it directly.
        </p>
      </Container>

      <Container className="space-y-14 pb-16">
        {groups.map((group) => (
          <section key={group.href}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-h2 font-display">{group.source}</h2>
              <Link
                href={group.href}
                className="text-sm font-semibold text-cta hover:underline"
              >
                Read the full page <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <div className="mt-6">
              <FaqAccordion faqs={group.faqs} />
            </div>
          </section>
        ))}
      </Container>

      <CtaBand
        heading="Still have a question?"
        body="Ask it on the quote form, or call and speak to someone."
        source="faq"
      />
    </>
  );
}
