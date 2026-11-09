import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { indexableServicePaths } from "@/content/services";
import { indexableArticles, indexableCategoryPaths } from "@/content/articles";

/**
 * Only routes that exist AND are indexable are listed. Anything flagged
 * noindex in content is filtered out automatically rather than by hand, and a
 * blog category only appears once it holds enough articles to be indexed.
 */
const core = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/get-a-quote", priority: 0.9 },
  { path: "/resources", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/testimonials", priority: 0.7 },
  { path: "/service-areas", priority: 0.8 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
] as const;

type Entry = { url: string; priority: number; lastModified?: string };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: Entry[] = [
    ...core.map((r) => ({ url: r.path, priority: r.priority })),
    ...indexableServicePaths.map((p) => ({ url: p, priority: 0.8 })),
    // Articles carry their real publication or update date, so a crawler can
    // tell which ones actually changed.
    ...indexableArticles.map((a) => ({
      url: a.path,
      priority: 0.7,
      lastModified: a.updatedAt ?? a.publishedAt,
    })),
    ...indexableCategoryPaths.map((p) => ({ url: p, priority: 0.6 })),
  ];

  return entries.map((e) => ({
    url: new URL(e.url, site.url).toString(),
    lastModified: e.lastModified ? new Date(e.lastModified) : now,
    priority: e.priority,
  }));
}
