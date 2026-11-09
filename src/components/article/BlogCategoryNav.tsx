import Link from "next/link";
import { articlesInCategory, blogCategories, categoryPath } from "@/content/articles";
import type { BlogCategorySlug } from "@/content/types";

const chip =
  "inline-flex items-center gap-2 rounded-pill border px-4 py-2 text-sm font-medium transition-colors";
const idle = "border-border bg-white text-ink-700 hover:border-forest-900/30 hover:text-brand";
const active = "border-forest-900 bg-forest-900 text-white";

/** Links to every blog category, with article counts. */
export function BlogCategoryNav({
  current,
  className = "",
}: {
  /** The category being viewed; omit on /blog itself. */
  current?: BlogCategorySlug;
  className?: string;
}) {
  return (
    <nav aria-label="Blog categories" className={className}>
      <ul className="flex flex-wrap gap-2.5">
        <li>
          <Link
            href="/blog"
            aria-current={current ? undefined : "page"}
            className={`${chip} ${current ? idle : active}`}
          >
            All articles
          </Link>
        </li>
        {blogCategories.map((c) => {
          const isCurrent = c.slug === current;
          return (
            <li key={c.slug}>
              <Link
                href={categoryPath(c.slug)}
                aria-current={isCurrent ? "page" : undefined}
                className={`${chip} ${isCurrent ? active : idle}`}
              >
                {c.name}
                <span className={isCurrent ? "text-white/70" : "text-ink-500"}>
                  {articlesInCategory(c.slug).length}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
