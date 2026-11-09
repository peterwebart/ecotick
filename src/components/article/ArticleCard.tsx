import Image from "next/image";
import Link from "next/link";
import { articleImage } from "@/content/articles";
import type { Article } from "@/content/types";

/**
 * Compact article teaser: small image, topic, headline, standfirst.
 *
 * The blog images are about 300px wide, so they are shown as a thumbnail at or
 * below their natural size rather than stretched across a wide card. The image
 * is decorative here; the headline beside it names the article.
 */
export function ArticleCard({
  article,
  as: Heading = "h3",
  showExcerpt = true,
}: {
  article: Article;
  as?: "h2" | "h3";
  showExcerpt?: boolean;
}) {
  const image = articleImage(article);

  return (
    <Link
      href={article.path}
      className="group flex h-full gap-5 rounded-card border border-border bg-white p-5 transition-shadow hover:shadow-card"
    >
      {image && (
        <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-card bg-bone-100 sm:h-32 sm:w-28">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="112px"
            placeholder="blur"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        {article.topic && (
          <p className="text-eyebrow font-semibold text-clay-600 uppercase">{article.topic}</p>
        )}
        <Heading className="mt-2 text-lg leading-snug font-display group-hover:underline">
          {article.h1}
        </Heading>
        {showExcerpt && (
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{article.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
