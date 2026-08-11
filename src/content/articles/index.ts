import type { Article } from "@/content/types";
import { tickSeason } from "./tickSeason";
import { tickPrevention } from "./tickPrevention";
import { professionalSpraying } from "./professionalSpraying";
import { tickControlGuide } from "./tickControlGuide";

export { tickSeason, tickPrevention, professionalSpraying, tickControlGuide };

export const allArticles: readonly Article[] = [
  tickControlGuide,
  tickSeason,
  tickPrevention,
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

export const indexableArticlePaths: readonly string[] = allArticles
  .filter((a) => !a.noindex)
  .map((a) => a.path);
