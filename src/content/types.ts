/**
 * Page content model.
 *
 * This discriminated union is deliberately shaped like a Payload `blocks`
 * field. When the CMS lands in phase 2, each variant becomes a block config and
 * the renderer in components/service/Blocks.tsx keeps working unchanged.
 */

export type Faq = { q: string; a: string };

export type Block =
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
   * hand, not taken on trust.
   */
  references?: readonly { label: string; note: string }[];
  noindex?: boolean;
};
