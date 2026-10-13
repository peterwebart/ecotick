import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { LeafDivider } from "@/components/ui/LeafDivider";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { images, type SiteImage } from "@/content/images";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Tick & Mosquito Control Across Ontario",
  description:
    "Eco-Tick Solutions treats homes, cottages, businesses and large properties across Ontario with a natural garlic-based spray service. Send your address for a quote.",
  path: "/service-areas",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: "/service-areas" },
];

/**
 * Every card image is a real Eco-Tick photograph. Three categories —
 * campgrounds, commercial properties and parks — have no matching footage yet,
 * so those cards show real Eco-Tick work in a comparable setting, and their alt
 * text describes the photo honestly rather than claiming it shows that category.
 * Footage from the Ivy Lea KOA, a commercial site and a park would replace them.
 */
const spaces: { label: string; href: string; image: SiteImage }[] = [
  { label: "Homes & Backyards", href: "/residential-tick-control", image: images.residentialSpraying },
  { label: "Cottages & Waterfront Properties", href: "/residential-tick-control", image: images.sprayingWaterfront },
  { label: "Rural Properties & Estates", href: "/large-property-tick-control", image: images.aerialTreating },
  { label: "Campgrounds & RV Parks", href: "/commercial-tick-control", image: images.commercialTruck },
  { label: "Commercial Properties", href: "/commercial-tick-control", image: images.aerialTruck },
  { label: "Parks & Recreational Grounds", href: "/large-property-tick-control", image: images.sprayingPath },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />

      {/* Hero. Same two-treatment pattern as the homepage: copy over the image
          on desktop with a left-weighted scrim, image in its own band on mobile. */}
      <section aria-labelledby="areas-heading" className="relative bg-forest-950 lg:overflow-hidden">
        <Container className="relative z-10 py-14 sm:py-20 lg:py-28">
          <div className="max-w-xl">
            <h1 id="areas-heading" className="font-display text-h1 text-white">
              Tick &amp; Mosquito Control Across Ontario
            </h1>
            <p className="mt-6 max-w-md text-lead text-bone-100/90">
              Serving homes, cottages, businesses and large properties across
              Ontario with our natural garlic-based spray service.
            </p>
            <Button href="/get-a-quote" size="lg" className="mt-8">
              Get a free quote
            </Button>
          </div>
        </Container>
        <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
          <Image
            src={images.largeProperty.src}
            alt=""
            priority
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,rgba(10,35,20,0.92)_0%,rgba(10,35,20,0.80)_42%,rgba(10,35,20,0.26)_58%,rgba(10,35,20,0)_72%)]"
          />
        </div>
      </section>

      <Breadcrumbs crumbs={crumbs} />

      <section aria-labelledby="serving-heading" className="bg-surface py-14 sm:py-20">
        <Container className="text-center">
          <LeafDivider />
          <h2 id="serving-heading" className="mt-5 text-h2 font-display">
            Serving Properties Across Ontario
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lead text-ink-700">
            From city yards and suburban homes to cottage country and large
            commercial properties, Eco-Tick Solutions welcomes service inquiries
            from across Ontario.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-500">
            Send us your property address to confirm local availability and
            receive a personalized quote.
          </p>
        </Container>
      </section>

      <section aria-labelledby="spaces-heading" className="bg-surface pb-16 sm:pb-20">
        <Container>
          <LeafDivider />
          <h2 id="spaces-heading" className="mt-5 text-center text-h2 font-display">
            Outdoor Spaces We Serve
          </h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {spaces.map((space) => (
              <li key={space.label}>
                <Link
                  href={space.href}
                  className="group block overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={space.image.src}
                      alt={space.image.alt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <span className="block bg-bone-100 px-4 py-4 text-center font-display text-lg text-brand">
                    {space.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="find-heading" className="bg-surface pb-16 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-card border border-sage-300 bg-sage-100 px-6 py-12 text-center sm:px-12">
            {/* Decorative leaves, as in the design. */}
            <svg aria-hidden="true" viewBox="0 0 120 200" className="pointer-events-none absolute -bottom-6 -left-6 h-48 w-auto text-sage-300 opacity-70">
              <path d="M20 190C10 120 40 60 100 10 90 80 70 140 20 190Z" fill="currentColor" />
              <path d="M10 160C0 120 15 90 50 70 45 110 35 140 10 160Z" fill="currentColor" />
            </svg>
            <svg aria-hidden="true" viewBox="0 0 120 200" className="pointer-events-none absolute -top-6 -right-6 h-48 w-auto rotate-180 text-sage-300 opacity-70">
              <path d="M20 190C10 120 40 60 100 10 90 80 70 140 20 190Z" fill="currentColor" />
            </svg>

            <h2 id="find-heading" className="relative text-h2 font-display">
              Find Service for Your Property
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-ink-700">
              Tell us where your property is located. Our team will confirm
              service availability, scheduling and a quote for your area.
            </p>
            <Button href="/get-a-quote" size="lg" className="relative mt-8">
              Check availability &amp; get a quote
            </Button>
            <p className="relative mt-6">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 font-display text-h3 text-brand hover:underline"
              >
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-clay-600">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" />
                </svg>
                {site.phone}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
