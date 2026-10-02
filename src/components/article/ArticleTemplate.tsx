import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Blocks, blockHeadings } from "@/components/service/Blocks";
import { TableOfContents } from "@/components/article/TableOfContents";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { Article } from "@/content/types";

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function ArticleTemplate({
  article,
  crumbs,
}: {
  article: Article;
  crumbs: readonly Crumb[];
}) {
  // A contents list earns its place on long guides, not on short articles.
  const headings = blockHeadings(article.blocks);
  const showToc = article.kind === "guide" && headings.length >= 5;

  const schema = [
    articleSchema({
      headline: article.h1,
      description: article.metaDescription,
      path: article.path,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      author: article.author,
    }),
    breadcrumbSchema(crumbs),
  ];

  return (
    <>
      {!article.noindex && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <Breadcrumbs crumbs={crumbs} />

      <article>
        <Container className="py-12 lg:py-16">
          <p className="text-eyebrow font-semibold text-clay-600 uppercase">
            {article.kind === "guide" ? "Guide" : "Article"}
          </p>
          <h1 className="mt-3 max-w-3xl text-h1 font-display">{article.h1}</h1>
          <p className="mt-5 max-w-2xl text-lead text-ink-700">{article.excerpt}</p>
          <p className="mt-6 text-sm text-ink-500">
            {article.author} &middot;{" "}
            <time dateTime={article.publishedAt}>
              {dateFmt.format(new Date(article.publishedAt))}
            </time>
            {article.updatedAt && (
              <>
                {" "}
                &middot; Updated{" "}
                <time dateTime={article.updatedAt}>
                  {dateFmt.format(new Date(article.updatedAt))}
                </time>
              </>
            )}
          </p>
        </Container>

        <Container className="grid gap-14 pb-16 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-14">
            <aside
              aria-label="Key points"
              className="rounded-card border border-sage-500 bg-sage-100 p-6"
            >
              <h2 className="text-eyebrow font-semibold text-forest-800 uppercase">
                The short version
              </h2>
              <ul className="mt-4 space-y-2.5">
                {article.takeaways.map((t) => (
                  <li key={t} className="flex gap-3 leading-relaxed text-ink-900">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-800"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </aside>

            <Blocks blocks={article.blocks} />

            {article.references && (
              <section className="border-t border-border pt-8">
                <h2 className="text-h3 font-display">Further reading</h2>
                <p className="mt-2 text-sm text-ink-500">
                  Public health sources for the guidance on this page.
                </p>
                <ul className="mt-4 space-y-2">
                  {article.references.map((r) => (
                    <li key={r.label} className="text-sm text-ink-700">
                      <span className="font-semibold text-ink-900">{r.label}</span>
                      {" — "}
                      {r.note}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {showToc && <TableOfContents items={headings} />}
            <nav aria-label="Related reading" className="rounded-card border border-border p-6">
              <h2 className="text-eyebrow font-semibold text-clay-600 uppercase">
                Related
              </h2>
              <ul className="mt-4 space-y-3">
                {article.related.map((r) => (
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
      </article>

      <CtaBand
        heading="Want the property looked at properly?"
        body="Get a free, no-obligation quote for your property, sent straight to your inbox."
        source={`article_${article.slug}`}
      />
    </>
  );
}
