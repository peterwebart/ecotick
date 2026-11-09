import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { RichText } from "@/components/ui/RichText";
import { Blocks, blockHeadings } from "@/components/service/Blocks";
import { TableOfContents } from "@/components/article/TableOfContents";
import { ArticleCard } from "@/components/article/ArticleCard";
import { articleImage, categoryOf, relatedArticlesFor } from "@/content/articles";
import { SOCIAL_CARD_SIZE, socialCardPath } from "@/content/blogImages";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { Article } from "@/content/types";

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
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

  const isBlog = article.kind === "article";
  const image = articleImage(article);
  const category = categoryOf(article);
  const relatedArticles = relatedArticlesFor(article);
  const cited = article.references?.some((r) => r.href) ?? false;

  const schema = [
    articleSchema({
      type: isBlog ? "BlogPosting" : "Article",
      headline: article.h1,
      description: article.metaDescription,
      path: article.path,
      publishedAt: article.publishedAt,
      updatedAt: article.updatedAt,
      author: article.author,
      section: category?.name,
      // The 1200 x 630 social card. The article illustrations are too small
      // (about 300px) to meet Google's recommended image size on their own.
      images: isBlog ? [socialCardPath(article.slug)] : [],
      imageSize: SOCIAL_CARD_SIZE,
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
        <Container
          className={`py-12 lg:py-16 ${
            image ? "grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end lg:gap-16" : ""
          }`}
        >
          <div>
            <p className="text-eyebrow font-semibold text-clay-600 uppercase">
              {article.topic ?? (article.kind === "guide" ? "Guide" : "Article")}
            </p>
            <h1 className="mt-3 max-w-3xl text-h1 font-display">{article.h1}</h1>
            <p className="mt-5 max-w-2xl text-lead text-ink-700">{article.excerpt}</p>
            <p className="mt-6 text-sm text-ink-500">
              {isBlog ? (
                <Link href="/about" className="hover:text-brand hover:underline">
                  {article.author}
                </Link>
              ) : (
                article.author
              )}{" "}
              &middot;{" "}
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
          </div>

          {image && (
            <figure className="w-full max-w-[300px]">
              <Image
                src={image.src}
                alt={image.alt}
                priority
                placeholder="blur"
                sizes="300px"
                className="h-auto w-full rounded-card"
              />
              {image.illustration && (
                <figcaption className="mt-2 text-xs text-ink-500">Illustration</figcaption>
              )}
            </figure>
          )}
        </Container>

        <Container className="grid gap-14 pb-16 lg:grid-cols-[1fr_300px] lg:gap-16">
          <div className="space-y-14">
            {article.intro && article.intro.length > 0 && (
              <div className="-mt-4 space-y-4">
                {article.intro.map((para) => (
                  <p key={para.slice(0, 48)} className="max-w-2xl leading-relaxed text-ink-700">
                    <RichText text={para} />
                  </p>
                ))}
              </div>
            )}

            <aside
              aria-label="Key points"
              className="rounded-card border border-sage-500 bg-sage-100 p-6"
            >
              <h2 className="text-eyebrow font-semibold text-forest-800 uppercase">
                {article.takeawaysHeading ?? "The short version"}
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
                <h2 className="text-h3 font-display">{cited ? "Sources" : "Further reading"}</h2>
                <p className="mt-2 text-sm text-ink-500">
                  Public health sources for the guidance on this page.
                </p>
                <ul className="mt-4 space-y-3">
                  {article.references.map((r) => (
                    <li key={r.label} className="text-sm leading-relaxed text-ink-700">
                      {r.href ? (
                        <a
                          href={r.href}
                          className="font-semibold text-ink-900 underline decoration-forest-800/35 underline-offset-2 hover:decoration-forest-800"
                        >
                          {r.label}
                        </a>
                      ) : (
                        <span className="font-semibold text-ink-900">{r.label}</span>
                      )}
                      {" — "}
                      {r.note}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {relatedArticles.length > 0 && (
              <section aria-labelledby="related-articles-heading">
                <h2 id="related-articles-heading" className="text-h3 font-display">
                  Related articles
                </h2>
                <ul className="mt-5 space-y-4">
                  {relatedArticles.map((r) => (
                    <li key={r.slug}>
                      <ArticleCard article={r} />
                    </li>
                  ))}
                </ul>
                {category && (
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className="mt-5 inline-block text-sm font-semibold text-cta hover:underline"
                  >
                    All articles in {category.name} <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
              </section>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {showToc && <TableOfContents items={headings} />}

            {article.service && (
              <div className="rounded-card border border-border bg-white p-6">
                <h2 className="text-eyebrow font-semibold text-clay-600 uppercase">
                  Related service
                </h2>
                <p className="mt-4 font-display text-lg leading-snug text-brand">
                  {article.service.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {article.service.description}
                </p>
                <Link
                  href={article.service.href}
                  className="mt-4 inline-block text-sm font-semibold text-cta hover:underline"
                >
                  Explore {article.service.label.toLowerCase()}{" "}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            )}

            <nav aria-label="Related reading" className="rounded-card border border-border p-6">
              <h2 className="text-eyebrow font-semibold text-clay-600 uppercase">
                {isBlog ? "Further reading" : "Related"}
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
        heading={article.cta?.heading ?? "Want the property looked at properly?"}
        body={
          article.cta?.body ??
          "Get a free, no-obligation quote for your property, sent straight to your inbox."
        }
        label={article.cta?.label}
        source={`article_${article.slug}`}
      />
    </>
  );
}
