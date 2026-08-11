import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { site } from "@/content/site";

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Residential tick control", href: "/residential-tick-control" },
      { label: "Commercial tick control", href: "/commercial-tick-control" },
      { label: "Large-property control", href: "/large-property-tick-control" },
      { label: "Mosquito control", href: "/mosquito-control" },
      { label: "Tick & mosquito programs", href: "/tick-mosquito-control" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Knowledge centre", href: "/resources" },
      { label: "Tick prevention", href: "/tick-prevention" },
      { label: "Tick season", href: "/tick-season" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Who we serve", href: "/who-we-serve" },
      { label: "Safety & environment", href: "/safety-environment" },
      { label: "Service areas", href: "/service-areas" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 text-bone-100">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-sage-300">
            Professional tick and mosquito protection using a natural
            garlic-based approach. Serving homes, businesses and large
            properties across {site.serviceArea}.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={site.phoneHref} className="block font-semibold hover:underline">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block hover:underline">
              {site.email}
            </a>
            <address className="pt-2 leading-relaxed text-sage-300 not-italic">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.regionName} {site.address.postalCode}
            </address>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="text-eyebrow font-semibold tracking-[0.12em] text-sage-300 uppercase">
              {col.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone-100/85 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-sage-300 sm:flex-row sm:items-center sm:justify-between">
          {/* Dynamic year - the mockup was hardcoded to 2024. */}
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
