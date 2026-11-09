import { site } from "@/content/site";

/**
 * Structured data. Brief section 41: never invent phone, address, hours,
 * coordinates, reviews or aggregate ratings.
 *
 * Address, phone and hours are now real and supplied by Eco-Tick, so
 * LocalBusiness is emitted with full NAP.
 *
 * Still deliberately omitted:
 *   - geo coordinates  (derive from the real address, do not guess)
 *   - aggregateRating  (needs genuine reviews that are visible on the page)
 */

type Json = Record<string, unknown>;

/** Public alias so components can type arrays of schema nodes. */
export type JsonLd = Json;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    // Publisher logo for Article/BlogPosting results. The real brand mark.
    logo: {
      "@type": "ImageObject",
      url: new URL(site.logo.path, site.url).toString(),
      width: site.logo.width,
      height: site.logo.height,
    },
    description: site.description,
    telephone: site.phone,
    email: site.email,
    founder: { "@type": "Person", name: site.founder.name },
    areaServed: { "@type": "AdministrativeArea", name: site.serviceArea },
  };
}

/**
 * LocalBusiness with real NAP. Name, address and phone here must match the
 * Google Business Profile character for character, or the citation does not
 * count toward local ranking.
 */
export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    founder: { "@type": "Person", name: site.founder.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "AdministrativeArea", name: site.serviceArea },
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-CA",
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: "Tick and mosquito control",
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "AdministrativeArea", name: site.serviceArea },
    url: new URL(input.path, site.url).toString(),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(
  crumbs: readonly { name: string; path: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: new URL(c.path, site.url).toString(),
    })),
  };
}

/**
 * Article or BlogPosting. The author is the company byline shown on the page
 * ("The Eco-Tick team"), linked to the About page; the publisher is the
 * sitewide Organization node. Images are listed only when they exist on disk.
 */
export function articleSchema(input: {
  type?: "Article" | "BlogPosting";
  headline: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  /** Blog category name, emitted as articleSection. */
  section?: string;
  /** Root-relative paths of images that share `imageSize`. */
  images?: readonly string[];
  imageSize?: { width: number; height: number };
}): Json {
  const url = new URL(input.path, site.url).toString();
  const images = (input.images ?? []).map((p) => ({
    "@type": "ImageObject",
    url: new URL(p, site.url).toString(),
    ...(input.imageSize ?? {}),
  }));

  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    datePublished: input.publishedAt,
    dateModified: input.updatedAt ?? input.publishedAt,
    author: { "@type": "Organization", name: input.author, url: `${site.url}/about` },
    publisher: { "@id": `${site.url}/#organization` },
    ...(images.length > 0 ? { image: images } : {}),
    ...(input.section ? { articleSection: input.section } : {}),
    inLanguage: "en-CA",
  };
}

/**
 * Person schema for the founder. Named and confirmed by Eco-Tick, so this is
 * safe to publish - and a real, named person behind the business is exactly
 * what E-E-A-T asks for on an About page.
 *
 * The image is only 330px. It is included because it is genuine, but a
 * higher-resolution original would serve this better.
 */
export function founderSchema(imagePath?: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}/about#founder`,
    name: site.founder.name,
    jobTitle: site.founder.role,
    worksFor: { "@id": `${site.url}/#organization` },
    ...(imagePath ? { image: new URL(imagePath, site.url).toString() } : {}),
  };
}
