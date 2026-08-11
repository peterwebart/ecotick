import { ArticleTemplate } from "@/components/article/ArticleTemplate";
import { tickControlGuide as article } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: article.metaTitle,
  description: article.metaDescription,
  path: article.path,
  noindex: article.noindex,
});

export default function Page() {
  return (
    <ArticleTemplate
      article={article}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Tick Control Guide", path: article.path },
      ]}
    />
  );
}
