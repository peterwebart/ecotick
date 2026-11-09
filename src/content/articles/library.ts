import type { Block, SectionNode, ServiceLink } from "@/content/types";

/**
 * Shared pieces for the blog article library: section builders, the service
 * pages each article supports, further-reading links and verified sources.
 */

/* ---- Section builders ------------------------------------------------------
   Keep article files readable: a section is a heading plus its content, in
   order. Text may carry inline links written as [label](/path). */

export const p = (text: string): SectionNode => ({ kind: "p", text });
export const h3 = (text: string): SectionNode => ({ kind: "h3", text });
export const ul = (...items: string[]): SectionNode => ({ kind: "ul", items });
export const ol = (...items: string[]): SectionNode => ({ kind: "ol", items });
export const checklist = (...items: string[]): SectionNode => ({ kind: "checklist", items });
export const section = (heading: string, ...content: SectionNode[]): Block => ({
  type: "section",
  heading,
  content,
});

/* ---- Publishing ------------------------------------------------------------ */

/** Go-live date of the November 2026 library. Change it if the release slips. */
export const LIBRARY_PUBLISHED_AT = "2026-11-09";

/** Company byline, matching the existing articles. Not an invented person. */
export const LIBRARY_AUTHOR = "The Eco-Tick team";

/* ---- Calls to action -------------------------------------------------------
   Body copy reused from the matching service pages, so the promise made at the
   end of an article is the same one the service page makes. */

export const ctaCopy = {
  residential: "Get a free, no-obligation quote for your property, sent straight to your inbox.",
  commercial:
    "Tell us about the site and how it operates. We will come back with a program and a quote.",
  largeProperty:
    "Acreage, usage and current conditions. We will design a zoned program and quote it.",
} as const;

/* ---- Service pages ---------------------------------------------------------
   Every article links to the service page it supports. There is no dedicated
   page yet for "tick control", "commercial services" or "commercial mosquito
   control", so those articles point at the closest page that exists today:
     tick control                -> /residential-tick-control
     commercial services         -> /commercial-tick-control
     commercial mosquito control -> /commercial-tick-control (covers both pests)
   If a dedicated page is built later, change the href here and every article
   that uses it follows. Descriptions are the taglines already on the site. */

export const services = {
  residentialTick: {
    label: "Residential tick control",
    href: "/residential-tick-control",
    description: "Protect your backyard, your family and your pets.",
  },
  mosquito: {
    label: "Mosquito control",
    href: "/mosquito-control",
    description:
      "Professional mosquito control for Ontario yards, cottages and commercial properties.",
  },
  commercial: {
    label: "Commercial tick & mosquito control",
    href: "/commercial-tick-control",
    description: "Keep guests, customers and staff comfortable outdoors.",
  },
  largeProperty: {
    label: "Large-property tick & mosquito control",
    href: "/large-property-tick-control",
    description: "Outdoor pest protection built for expansive grounds.",
  },
} as const satisfies Record<string, ServiceLink>;

/* ---- Further reading: existing guides and pages ------------------------------
   Cross-links to the evergreen guides keep the articles and the guides that
   share a topic pointing at each other instead of competing. */

export const further = {
  tickSeason: { label: "When is tick season in Ontario?", href: "/tick-season" },
  tickPrevention: { label: "How to prevent ticks in your yard", href: "/tick-prevention" },
  tickGuide: { label: "The Ontario tick control guide", href: "/tick-control-guide" },
  garlic: { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
  howItWorks: { label: "How it works", href: "/how-it-works" },
  safety: { label: "Safety & environment", href: "/safety-environment" },
  programs: { label: "Tick & mosquito programs", href: "/tick-mosquito-control" },
  professionalSpraying: {
    label: "How professional tick spraying works",
    href: "/blog/how-professional-tick-spraying-works",
  },
  largeProperty: { label: "Large-property control", href: "/large-property-tick-control" },
  mosquito: { label: "Mosquito control", href: "/mosquito-control" },
} as const satisfies Record<string, { label: string; href: string }>;

/* ---- Sources ---------------------------------------------------------------
   Each page below was opened and read on 9 November 2026, and the note says
   which guidance it supports. Re-check the links once a year; public health
   sites reorganise. */

export const sources = {
  kflaTicks: {
    label: "KFL&A Public Health: Lyme and other tick-borne diseases",
    note: "Kingston-area guidance: ticks can be active any time the weather is above freezing, the region is an established risk area for blacklegged ticks, and how to identify and remove a tick.",
    href: "https://www.kflaph.ca/en/health-topics/lyme-and-tickborne-diseases.aspx",
  },
  phoLyme: {
    label: "Public Health Ontario: Lyme disease",
    note: "Provincial overview, including prevention through repellent, clothing, prompt tick removal and removing tick habitat around the home.",
    href: "https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vector-Borne-Zoonotic-Diseases/Lyme-disease",
  },
  phoRiskAreas: {
    label: "Public Health Ontario: Ontario Vector-Borne Disease Tool",
    note: "Current map of blacklegged tick established risk areas in Ontario.",
    href: "https://www.publichealthontario.ca/en/Data-and-Analysis/Infectious-Disease/VBD-Tool",
  },
  phacReduceTicks: {
    label: "Public Health Agency of Canada: How to reduce ticks around your home",
    note: "Mowing, clearing leaf litter and weeds, and a wood-chip, mulch or gravel border at least 1 metre wide between lawn and woods.",
    href: "https://www.canada.ca/en/public-health/services/video/lyme-disease-reduce-ticks-around-your-home.html",
  },
  phacRemoveTick: {
    label: "Public Health Agency of Canada: How to properly remove a tick",
    note: "Step-by-step removal with clean, fine-point tweezers.",
    href: "https://www.canada.ca/en/public-health/services/video/lyme-disease-properly-remove-tick.html",
  },
  hcRepellents: {
    label: "Health Canada: Personal insect repellents",
    note: "Choosing a registered repellent and following its label directions.",
    href: "https://www.canada.ca/en/health-canada/services/about-pesticides/insect-repellents.html",
  },
  phacStandingWater: {
    label: "Public Health Agency of Canada: Prevention of West Nile virus",
    note: "Mosquitoes lay eggs in standing water; empty containers, clean eavestroughs and change bird bath water regularly.",
    href: "https://www.canada.ca/en/public-health/services/diseases/west-nile-virus/prevention-west-nile-virus.html",
  },
} as const satisfies Record<string, { label: string; note: string; href: string }>;
