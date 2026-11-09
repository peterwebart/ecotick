import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { ArticleCard } from "@/components/article/ArticleCard";
import { BlogCategoryNav } from "@/components/article/BlogCategoryNav";
import { articlesInCategory, blogArticles, blogCategories, categoryPath } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Articles on tick and mosquito control for Ontario properties: seasonal timing, habitat, prevention and professional treatment, from the Eco-Tick team.",
  path: "/blog",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

export default function BlogIndex() {
  // Every blog article belongs to a category; anything that does not still
  // gets listed rather than silently disappearing from the index.
  const uncategorised = blogArticles.filter((a) => !a.category);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="text-h1 font-display">Blog</h1>
        <p className="mt-5 max-w-2xl text-lead text-ink-700">
          Practical articles on ticks, mosquitoes and Ontario properties. Visit our{" "}
          <Link href="/resources" className="underline underline-offset-2">
            knowledge centre
          </Link>{" "}
          for in-depth guides.
        </p>
        <BlogCategoryNav className="mt-8" />
      </Container>

      <Container className="space-y-16 pb-16">
        {blogCategories.map((c) => {
          const articles = articlesInCategory(c.slug);
          if (articles.length === 0) return null;
          return (
            <section key={c.slug} aria-labelledby={`blog-${c.slug}`}>
              <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-4">
                <div>
                  <h2 id={`blog-${c.slug}`} className="text-h2 font-display">
                    {c.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-ink-700">{c.intro}</p>
                </div>
                <Link
                  href={categoryPath(c.slug)}
                  className="text-sm font-semibold text-cta hover:underline"
                >
                  All articles in {c.name} <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
              <ul className="mt-6 grid gap-5 md:grid-cols-2">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <ArticleCard article={a} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        {uncategorised.length > 0 && (
          <section aria-labelledby="blog-more">
            <h2 id="blog-more" className="border-b border-border pb-4 text-h2 font-display">
              More articles
            </h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {uncategorised.map((a) => (
                <li key={a.slug}>
                  <ArticleCard article={a} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>

      <CtaBand
        heading="Ready to take back the outdoors?"
        body="A free quote is the fastest way to find out what treatment would cost for your property."
        source="blog_index"
      />
    </>
  );
}
