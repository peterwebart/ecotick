import type { Article, BlogCategorySlug } from "@/content/types";
import { blogImages } from "@/content/blogImages";
import { images } from "@/content/images";
import { tickSeason } from "./tickSeason";
import { tickPrevention } from "./tickPrevention";
import { professionalSpraying } from "./professionalSpraying";
import { tickControlGuide } from "./tickControlGuide";
import { whenTickSeasonStarts } from "./whenTickSeasonStarts";
import { whenToStartTickProtection } from "./whenToStartTickProtection";
import { whereTicksLive } from "./whereTicksLive";
import { reduceTickHabitat } from "./reduceTickHabitat";
import { checkYardForTicks } from "./checkYardForTicks";
import { ticksInOntario } from "./ticksInOntario";
import { whenMosquitoSeasonStarts } from "./whenMosquitoSeasonStarts";
import { reduceMosquitoes } from "./reduceMosquitoes";
import { whereMosquitoesBreed } from "./whereMosquitoesBreed";
import { mosquitoSeasonLength } from "./mosquitoSeasonLength";
import { prepareYardForMosquitoSeason } from "./prepareYardForMosquitoSeason";
import { commercialTickMosquitoControl } from "./commercialTickMosquitoControl";
import { commercialTickProtection } from "./commercialTickProtection";
import { commercialMosquitoControl } from "./commercialMosquitoControl";
import { largePropertyTickControl } from "./largePropertyTickControl";
import {
  MIN_ARTICLES_TO_INDEX_CATEGORY,
  blogCategories,
  categoryPath,
  type BlogCategory,
} from "./categories";

export { tickSeason, tickPrevention, professionalSpraying, tickControlGuide };
export { blogCategories, categoryPath, getBlogCategory, type BlogCategory } from "./categories";

/**
 * Registration order is reading order: within a category, articles are listed
 * in the order they appear here (the sort below is stable, and the November
 * 2026 library shares one publication date).
 */
export const allArticles: readonly Article[] = [
  tickControlGuide,
  tickSeason,
  tickPrevention,
  // Tick library
  whenTickSeasonStarts,
  whenToStartTickProtection,
  whereTicksLive,
  reduceTickHabitat,
  checkYardForTicks,
  ticksInOntario,
  // Mosquito library
  whenMosquitoSeasonStarts,
  reduceMosquitoes,
  whereMosquitoesBreed,
  mosquitoSeasonLength,
  prepareYardForMosquitoSeason,
  // Commercial library
  commercialTickMosquitoControl,
  commercialTickProtection,
  commercialMosquitoControl,
  // Large-property library
  largePropertyTickControl,
  professionalSpraying,
].toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));

/** The /blog stream. Evergreen guides live at top-level keyword URLs instead. */
export const blogArticles: readonly Article[] = allArticles.filter(
  (a) => a.kind === "article",
);

export const guides: readonly Article[] = allArticles.filter((a) => a.kind === "guide");

export function getBlogArticle(slug: string): Article | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function articlesInCategory(slug: BlogCategorySlug): readonly Article[] {
  return blogArticles.filter((a) => a.category === slug);
}

/** Category of an article, if it has one. */
export function categoryOf(article: Article): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === article.category);
}

/** The 2-3 related articles chosen for this article, in the chosen order. */
export function relatedArticlesFor(article: Article): readonly Article[] {
  return (article.relatedArticles ?? [])
    .map((slug) => getBlogArticle(slug))
    .filter((a): a is Article => a !== undefined && !a.noindex);
}

/** Thin category pages stay out of the index until they fill up. */
export function isCategoryIndexable(slug: BlogCategorySlug): boolean {
  return (
    articlesInCategory(slug).filter((a) => !a.noindex).length >= MIN_ARTICLES_TO_INDEX_CATEGORY
  );
}

/** Illustration or photo for an article, from either image manifest. */
export function articleImage(article: Article) {
  const key = article.imageKey;
  if (!key) return undefined;
  if (key in blogImages) {
    return { ...blogImages[key as keyof typeof blogImages], illustration: true as const };
  }
  if (key in images) {
    return { ...images[key as keyof typeof images], illustration: false as const };
  }
  return undefined;
}

export const indexableArticles: readonly Article[] = allArticles.filter((a) => !a.noindex);

export const indexableArticlePaths: readonly string[] = indexableArticles.map((a) => a.path);

export const indexableCategoryPaths: readonly string[] = blogCategories
  .filter((c) => isCategoryIndexable(c.slug))
  .map((c) => categoryPath(c.slug));

/* ---- Build-time checks -------------------------------------------------------
   Content mistakes here would ship as broken structure rather than as an error,
   so they fail the build instead. Each blog article must belong to a category,
   name 2-3 related articles that exist, carry an image and link its service
   page from the body copy, and no two pages may share a slug. */

function assertBlogStructure(): void {
  const problems: string[] = [];
  const slugs = new Set<string>();

  for (const a of allArticles) {
    if (slugs.has(a.slug)) problems.push(`duplicate slug "${a.slug}"`);
    slugs.add(a.slug);
  }

  for (const a of blogArticles) {
    const where = `blog article "${a.slug}"`;
    if (a.path !== `/blog/${a.slug}`) problems.push(`${where}: path must be /blog/${a.slug}`);
    if (!a.category) problems.push(`${where}: no category`);
    if (a.imageKey && !articleImage(a)) problems.push(`${where}: unknown imageKey "${a.imageKey}"`);
    if (!a.imageKey) problems.push(`${where}: no imageKey`);

    const related = a.relatedArticles ?? [];
    if (related.length < 2 || related.length > 3)
      problems.push(`${where}: needs 2-3 related articles, has ${related.length}`);
    for (const r of related) {
      if (r === a.slug) problems.push(`${where}: lists itself as related`);
      else if (!blogArticles.some((b) => b.slug === r))
        problems.push(`${where}: related article "${r}" does not exist`);
    }

    if (a.service) {
      const body = JSON.stringify(a.blocks);
      if (!body.includes(`](${a.service.href})`))
        problems.push(`${where}: body copy never links to its service page ${a.service.href}`);
    }
  }

  if (problems.length > 0) {
    throw new Error(`Blog content problems:\n  - ${problems.join("\n  - ")}`);
  }
}

assertBlogStructure();
