import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { indexableServicePaths } from "@/content/services";
import { indexableArticlePaths } from "@/content/articles";

/**
 * Only routes that exist AND are indexable are listed. Pages still carrying
 * sourceNeeded blocks are excluded automatically, so an unfinished page can
 * never be advertised to Google by accident.
 */
const core = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/get-a-quote", priority: 0.9 },
  { path: "/resources", priority: 0.7 },
  { path: "/blog", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries = [
    ...core.map((r) => ({ url: r.path, priority: r.priority })),
    ...indexableServicePaths.map((p) => ({ url: p, priority: 0.8 })),
    ...indexableArticlePaths.map((p) => ({ url: p, priority: 0.7 })),
  ];

  return entries.map((e) => ({
    url: new URL(e.url, site.url).toString(),
    lastModified: now,
    priority: e.priority,
  }));
}
