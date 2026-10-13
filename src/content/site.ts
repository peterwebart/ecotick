/**
 * Business identity. All values below are supplied by Eco-Tick and are real.
 *
 * Contact details confirmed by Eco-Tick. The published line is the toll-free
 * 1-888 number. Service area is across Ontario. The postal address below is
 * the only place the head office city appears, and must match the Google
 * Business Profile exactly for local search.
 */
export const site = {
  name: "Eco-Tick Solutions",
  legalName: "Eco-Tick Solutions Inc.",
  tagline: "Take Back the Outdoors.",
  description:
    "Professional tick and mosquito protection for homes, cottages, businesses and large outdoor properties across Ontario.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://eco-ticksolutions.ca",

  phone: "1-888-912-5152",
  phoneHref: "tel:+18889125152",
  email: "info@eco-ticksolutions.ca",

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
    { label: "Monday to Friday", value: "7:00 a.m. – 6:00 p.m." },
    { label: "Saturday", value: "8:00 a.m. – 6:00 p.m." },
    { label: "Sunday", value: "8:00 a.m. – 1:00 p.m." },
  ],

  serviceArea: "Ontario",

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
