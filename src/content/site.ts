/**
 * Business identity. All values below are supplied by Eco-Tick and are real.
 *
 * Contact details confirmed by Eco-Tick. The published line is the toll-free
 * 1-888 number. Operating base is Kingston; service area is across Ontario.
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
    { label: "Monday to Friday", value: "7:00am – 6:00pm" },
    { label: "Saturday", value: "8:00am – 6:00pm" },
    { label: "Sunday", value: "8:00am – 1:00pm" },
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
