import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  /** Utility pages (quote success, thank-you) should not be indexed. */
  noindex?: boolean;
};

/**
 * Every page builds metadata through this helper so titles, canonicals and
 * OpenGraph stay consistent. Title template per brief section 40.
 */
export function buildMetadata({ title, description, path, noindex }: SeoInput): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    // noindex but follow: gated pages stay out of the index while still
    // passing internal link equity through to the money pages they link to.
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: site.name,
      title,
      description,
      url,
      locale: "en_CA",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
