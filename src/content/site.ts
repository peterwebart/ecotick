/**
 * Business identity. All values below are supplied by Eco-Tick and are real.
 *
 * Resolved 2026-08: the 705 area code seen in the original mockup was a
 * placeholder. Eco-Tick operates from Kingston (613), Eastern Ontario.
 */
export const site = {
  name: "Eco-Tick Solutions",
  legalName: "Eco-Tick Solutions Inc.",
  tagline: "Take Back the Outdoors.",
  description:
    "Professional tick and mosquito protection for homes, cottages, businesses and large outdoor properties in Kingston and Eastern Ontario.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eco-ticksolutions.ca",

  phone: "(613) 539-1472",
  phoneHref: "tel:+16135391472",
  email: "ecoticksolutions@gmail.com",

  address: {
    street: "3192 Creekford Road",
    city: "Kingston",
    region: "ON",
    regionName: "Ontario",
    postalCode: "K7P 2Z6",
    country: "CA",
  },

  /** Schema.org openingHours format. */
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
    { days: ["Saturday"], opens: "08:00", closes: "18:00" },
    { days: ["Sunday"], opens: "08:00", closes: "13:00" },
  ],
  hoursDisplay: [
    { label: "Monday to Friday", value: "7:00am – 6:00pm" },
    { label: "Saturday", value: "8:00am – 6:00pm" },
    { label: "Sunday", value: "8:00am – 1:00pm" },
  ],

  serviceArea: "Kingston & Eastern Ontario",

  founder: {
    name: "Edward Chodowski",
    role: "CEO & Founder",
  },

  social: {
    facebook: "", // TODO: still outstanding
    instagram: "", // TODO
    google: "", // TODO - Google Business Profile URL, needed before any review schema
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;
