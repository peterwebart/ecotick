import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArticleCard } from "@/components/article/ArticleCard";
import { BlogCategoryNav } from "@/components/article/BlogCategoryNav";
import {
  articlesInCategory,
  blogCategories,
  categoryPath,
  getBlogCategory,
  isCategoryIndexable,
} from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

/** Unknown categories reach the component and get a real 404, as on /blog/[slug]. */
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getBlogCategory(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.title,
    description: category.metaDescription,
    path: categoryPath(category.slug),
    noindex: !isCategoryIndexable(category.slug),
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getBlogCategory(slug);
  if (!category) notFound();

  const articles = articlesInCategory(category.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.name, path: categoryPath(category.slug) },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <Eyebrow>Blog</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-h1 font-display">{category.title}</h1>
        <p className="mt-5 max-w-2xl text-lead text-ink-700">{category.intro}</p>
        <BlogCategoryNav current={category.slug} className="mt-8" />
      </Container>

      <Container className="pb-16">
        <ul className="grid gap-5 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <ArticleCard article={a} as="h2" />
            </li>
          ))}
        </ul>

        <aside className="mt-12 rounded-card border border-border bg-white p-7">
          <p className="text-eyebrow font-semibold text-clay-600 uppercase">Related service</p>
          <p className="mt-3 font-display text-h3 text-brand">{category.service.label}</p>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">
            {category.service.description}
          </p>
          <Link
            href={category.service.href}
            className="mt-4 inline-block text-sm font-semibold text-cta hover:underline"
          >
            Explore {category.service.label.toLowerCase()} <span aria-hidden="true">&rarr;</span>
          </Link>
        </aside>
      </Container>

      <CtaBand
        heading="Ready to take back the outdoors?"
        body="A free quote is the fastest way to find out what treatment would cost for your property."
        source={`blog_category_${category.slug}`}
      />
    </>
  );
}
