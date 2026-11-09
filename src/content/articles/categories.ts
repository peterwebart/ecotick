import type { BlogCategorySlug, ServiceLink } from "@/content/types";
import { services } from "./library";

export type BlogCategory = {
  slug: BlogCategorySlug;
  /** Short name for breadcrumbs, chips and schema. */
  name: string;
  /** Page H1 and <title>; the layout template appends the brand. */
  title: string;
  metaDescription: string;
  /** Visible introduction on the category page. */
  intro: string;
  /** The service page the category feeds. */
  service: ServiceLink;
};

/**
 * Blog libraries, in the order they appear on /blog. Each is a page at
 * /blog/category/[slug] and the middle step of every article's breadcrumb.
 */
export const blogCategories: readonly BlogCategory[] = [
  {
    slug: "ticks",
    name: "Ticks",
    title: "Tick Articles for Ontario Properties",
    metaDescription:
      "When ticks become active in Ontario, where they live around a property, how to reduce tick habitat and when to plan professional tick control.",
    intro:
      "Tick season, tick habitat and practical yard maintenance for Ontario homes, cottages and rural properties.",
    service: services.residentialTick,
  },
  {
    slug: "mosquitoes",
    name: "Mosquitoes",
    title: "Mosquito Articles for Ontario Properties",
    metaDescription:
      "When mosquito season starts and how long it lasts in Ontario, where mosquitoes breed, and how to prepare your yard by removing standing water.",
    intro:
      "Mosquito season, breeding sites and spring yard preparation for Ontario homes and cottages.",
    service: services.mosquito,
  },
  {
    slug: "commercial",
    name: "Commercial properties",
    title: "Commercial Tick & Mosquito Articles",
    metaDescription:
      "For business owners and property managers: assessing tick habitat, reducing mosquito breeding sites and planning service around how a site operates.",
    intro:
      "For business owners, property managers and operators responsible for outdoor spaces used by employees, customers and visitors.",
    service: services.commercial,
  },
  {
    slug: "large-properties",
    name: "Large properties",
    title: "Large Property Tick Control Articles",
    metaDescription:
      "For owners of rural estates, cottage lots and large wooded properties: assessing tick habitat and planning tick control across varied outdoor spaces.",
    intro:
      "For rural estates, cottage lots and larger residential properties where lawns, woodland edges, trails and gardens meet.",
    service: services.largeProperty,
  },
];

/**
 * A category page with a single article is thin. It stays reachable (the
 * breadcrumb links to it) but is kept out of the index and the sitemap until
 * it holds at least this many articles.
 */
export const MIN_ARTICLES_TO_INDEX_CATEGORY = 2;

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function categoryPath(slug: BlogCategorySlug): string {
  return `/blog/category/${slug}`;
}
