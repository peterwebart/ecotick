/**
 * Page content model.
 *
 * This discriminated union is deliberately shaped like a Payload `blocks`
 * field. When the CMS lands in phase 2, each variant becomes a block config and
 * the renderer in components/service/Blocks.tsx keeps working unchanged.
 */

export type Faq = { q: string; a: string };

/**
 * One piece of a free-form section, rendered in order. Text may carry inline
 * links written as [label](/path); see components/ui/RichText.tsx.
 */
export type SectionNode =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: readonly string[] }
  | { kind: "ol"; items: readonly string[] }
  | { kind: "checklist"; items: readonly string[] };

export type Block =
  | {
      /**
       * A heading followed by any mix of paragraphs, sub-headings and lists.
       * Used for long-form articles whose sections do not fit one fixed shape.
       */
      type: "section";
      heading: string;
      content: readonly SectionNode[];
    }
  | { type: "prose"; heading: string; body: readonly string[] }
  | {
      type: "list";
      heading: string;
      intro?: string;
      items: readonly string[];
      columns?: 1 | 2;
    }
  | { type: "checklist"; heading: string; intro?: string; items: readonly string[] }
  | {
      type: "steps";
      heading: string;
      intro?: string;
      steps: readonly { n: string; title: string; body: string }[];
    }
  | {
      type: "nabc";
      need: string;
      approach: string;
      benefits: readonly string[];
      alternatives: readonly { label: string; body: string }[];
    }
  | { type: "faq"; heading: string; faqs: readonly Faq[] }
  | { type: "callout"; heading: string; body: string }
  | {
      type: "table";
      heading: string;
      intro?: string;
      columns: readonly string[];
      rows: readonly (readonly string[])[];
    }
  | { type: "takeaways"; items: readonly string[] }
  | { type: "map"; heading: string; intro?: string }
  | {
      type: "figure";
      /** Key into the images manifest, not the import - keeps blocks serialisable. */
      imageKey: string;
      caption: string;
      /** Cap the rendered width so low-resolution sources are never upscaled. */
      maxWidth?: number;
    }


export type ServicePage = {
  slug: string;
  h1: string;
  /** Answer-first paragraph. GEO brief section 16: lead with the answer. */
  answer: string;
  metaTitle: string;
  metaDescription: string;
  audience: "residential" | "commercial" | "large-property" | "general";
  blocks: readonly Block[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
  related: readonly { label: string; href: string }[];
  /** Reserved for utility pages that should stay out of the index. */
  noindex?: boolean;
};

/**
 * Articles and evergreen guides share one model and one renderer. `path` is
 * explicit rather than derived, because the high-intent evergreen guides live
 * at top-level keyword URLs (/tick-season) while the article stream lives under
 * /blog. Keeping both in one collection avoids two content systems.
 */
export type Article = {
  slug: string;
  path: string;
  kind: "guide" | "article";
  h1: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  /** ISO date. Used for Article schema and the visible byline. */
  publishedAt: string;
  updatedAt?: string;
  /**
   * A company byline, not an invented person. Brief section 34 forbids
   * fabricating employees; swap for a real named author when Eco-Tick supplies
   * one, which is also better for E-E-A-T.
   */
  author: string;
  takeaways: readonly string[];
  blocks: readonly Block[];
  related: readonly { label: string; href: string }[];
  /**
   * Source organisations for the factual claims in this article.
   * VERIFY EVERY ONE before publishing - exact page URLs must be checked by
   * hand, not taken on trust. `href` is only set once the page has been read.
   */
  references?: readonly { label: string; note: string; href?: string }[];
  noindex?: boolean;

  /* ---- Blog library fields. Optional so the evergreen guides are unaffected. */

  /** Blog category. Drives the Blog -> Category -> Article breadcrumb. */
  category?: BlogCategorySlug;
  /** Topic label shown above the headline, e.g. "Tick prevention". */
  topic?: string;
  /** Opening paragraphs between the standfirst and the key points. */
  intro?: readonly string[];
  /** Heading for the key-points box. Defaults to "The short version". */
  takeawaysHeading?: string;
  /**
   * The service page this article supports. Must be a route that exists today;
   * when the ideal page does not exist yet, point at the closest one.
   */
  service?: ServiceLink;
  /** Slugs of 2-3 related blog articles, shown as cards after the body. */
  relatedArticles?: readonly string[];
  /** Key into the blog image manifest, or into the real-photo manifest. */
  imageKey?: string;
  /** Closing call to action. Falls back to the site-wide wording. */
  cta?: { heading: string; body: string; label: string };
  /**
   * Render metaTitle exactly as written instead of passing it through the
   * "%s | Eco-Tick Solutions" template. Used where the SEO title was supplied
   * complete, some with a short brand suffix and some deliberately without.
   */
  absoluteTitle?: boolean;
};

export type BlogCategorySlug = "ticks" | "mosquitoes" | "commercial" | "large-properties";

export type ServiceLink = {
  label: string;
  href: string;
  description: string;
};
