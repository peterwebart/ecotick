import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  /** Utility pages (quote success, thank-you) should not be indexed. */
  noindex?: boolean;
  /**
   * Use the title exactly as given, skipping the "%s | Eco-Tick Solutions"
   * template. For titles supplied complete; never pass one that already ends
   * in the brand suffix without this, or it renders twice.
   */
  absoluteTitle?: boolean;
  /** Article pages: emits og:type=article and the article:* properties. */
  article?: { publishedTime: string; modifiedTime?: string; section?: string };
  /** Social preview image, root-relative. Resolved against metadataBase. */
  image?: { url: string; width: number; height: number; alt: string };
};

/**
 * Every page builds metadata through this helper so titles, canonicals and
 * OpenGraph stay consistent. Title template per brief section 40.
 */
export function buildMetadata({
  title,
  description,
  path,
  noindex,
  absoluteTitle,
  article,
  image,
}: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();
  const images = image
    ? [{ url: image.url, width: image.width, height: image.height, alt: image.alt }]
    : undefined;

  const shared = {
    siteName: site.name,
    title,
    description,
    url,
    locale: "en_CA",
    images,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    // noindex but follow: gated pages stay out of the index while still
    // passing internal link equity through to the money pages they link to.
    // Indexable articles opt in to large image previews in Search and Discover.
    robots: noindex
      ? { index: false, follow: true }
      : article
        ? { index: true, follow: true, "max-image-preview": "large" }
        : undefined,
    openGraph: article
      ? {
          ...shared,
          type: "article",
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime ?? article.publishedTime,
          section: article.section,
        }
      : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image.url] : undefined,
    },
  };
}
