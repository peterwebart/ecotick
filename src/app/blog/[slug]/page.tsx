import { notFound } from "next/navigation";
import { ArticleTemplate } from "@/components/article/ArticleTemplate";
import { blogArticles, categoryOf, categoryPath, getBlogArticle } from "@/content/articles";
import { SOCIAL_CARD_SIZE, socialCardPath } from "@/content/blogImages";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

/**
 * `dynamicParams = false` was here and caused NoFallbackError in production:
 * with it set, Next refuses to render anything outside generateStaticParams and
 * has no fallback to fall back to, so a crawler hitting a stale /blog/… URL
 * produced a 500 instead of a 404. Leaving it at the default lets the request
 * reach the component, where an unknown slug calls notFound() and renders the
 * real 404 page.
 */
export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.metaTitle,
    absoluteTitle: article.absoluteTitle,
    description: article.metaDescription,
    path: article.path,
    noindex: article.noindex,
    article: {
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      section: categoryOf(article)?.name,
    },
    image: { url: socialCardPath(article.slug), ...SOCIAL_CARD_SIZE, alt: article.h1 },
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  // Blog -> Category -> Article. Every blog article has a category; the
  // fallback only keeps an uncategorised draft from losing its breadcrumb.
  const category = categoryOf(article);

  return (
    <ArticleTemplate
      article={article}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        ...(category ? [{ name: category.name, path: categoryPath(category.slug) }] : []),
        { name: article.h1, path: article.path },
      ]}
    />
  );
}
