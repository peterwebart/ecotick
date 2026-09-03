import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { commercial, largeProperty, residential } from "@/content/services";
import { BadgeRow } from "@/components/home/BadgeRow";
import { Photo } from "@/components/ui/Photo";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { images } from "@/content/images";
import { commercialTestimonials, resultsDisclaimer } from "@/content/testimonials";

export const metadata = buildMetadata({
  title: "Tick & Mosquito Control Services",
  description:
    "Residential, commercial and large-property tick and mosquito control across Ontario. Seasonal programmes built around a natural garlic-based approach.",
  path: "/services",
});

const tiers = [residential, commercial, largeProperty];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="max-w-3xl text-h1 font-display">
          Tick &amp; mosquito control services
        </h1>
        <p className="mt-6 max-w-2xl border-l-2 border-moss-600 pl-5 text-lead text-ink-700">
          Eco-Tick provides seasonal outdoor tick and mosquito control for three
          kinds of property: homes and cottages, commercial sites, and large
          properties measured in acres. Every programme runs off truck-mounted
          spray equipment, which is what lets treatment reach treelines and
          woodland instead of stopping at the lawn edge.
        </p>
        <Photo
          image={images.truckLakeside}
          ratio="21 / 9"
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="mt-10"
        />
      </Container>

      <Container className="pb-16">
        <ul className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <li
              key={tier.slug}
              className="flex flex-col rounded-card border border-border bg-white p-7 shadow-card"
            >
              <Eyebrow>
                {tier.audience === "residential"
                  ? "Homes & cottages"
                  : tier.audience === "commercial"
                    ? "Business"
                    : "Acreage"}
              </Eyebrow>
              <h2 className="mt-2 text-h3 font-display">{tier.h1}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                {tier.answer}
              </p>
              <Link
                href={`/${tier.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:underline"
              >
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-card border border-border p-7">
          <h2 className="text-h3 font-display">Also on the site</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { label: "Our natural garlic-based solution", href: "/natural-garlic-spray" },
              { label: "Safety & environment", href: "/safety-environment" },
              { label: "Mosquito control", href: "/mosquito-control" },
              { label: "Tick & mosquito programmes", href: "/tick-mosquito-control" },
              { label: "How it works", href: "/how-it-works" },
              { label: "The Ontario tick control guide", href: "/tick-control-guide" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-ink-700 hover:text-brand hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <BadgeRow heading="What every programme includes" />

      {commercialTestimonials.length > 0 && (
        <Container className="py-16">
          <Eyebrow>In their words</Eyebrow>
          <h2 className="mt-2 max-w-2xl text-h2 font-display">
            A campground operator on why the equipment matters.
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <TestimonialCard t={commercialTestimonials[0]!} />
            <Photo
              image={images.truckEstateGrounds}
              ratio="4 / 3"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-ink-500">
            {resultsDisclaimer}
          </p>
        </Container>
      )}

      <CtaBand
        heading="Not sure which fits?"
        body="Tell us about the property and we will point you at the right programme."
        source="services_hub"
      />
    </>
  );
}
