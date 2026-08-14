import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { resultsDisclaimer, testimonials } from "@/content/testimonials";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description:
    "What Eco-Tick customers across Kingston and Eastern Ontario say about our garlic-based tick and mosquito control, including a campground operator in Ivy Lea.",
  path: "/testimonials",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/testimonials" },
];

export default function TestimonialsPage() {
  const commercial = testimonials.filter((t) => t.audience === "commercial");
  const residential = testimonials.filter((t) => t.audience === "residential");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="max-w-3xl text-h1 font-display">
          What our customers say
        </h1>
        <p className="mt-6 max-w-2xl border-l-2 border-moss-600 pl-5 text-lead text-ink-700">
          Reviews from Eco-Tick customers across Kingston and Eastern Ontario —
          dog owners, homeowners backing onto woodland, and a campground
          operator running cabins deep in the trees. Published as written.
        </p>
      </Container>

      <Container className="space-y-16 pb-16">
        {commercial.length > 0 && (
          <section aria-labelledby="commercial-reviews">
            <Eyebrow>Commercial</Eyebrow>
            <h2 id="commercial-reviews" className="mt-2 text-h2 font-display">
              From a campground operator
            </h2>
            <ul className="mt-8 grid gap-6">
              {commercial.map((t) => (
                <li key={t.name}>
                  <TestimonialCard t={t} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="residential-reviews">
          <Eyebrow>Residential</Eyebrow>
          <h2 id="residential-reviews" className="mt-2 text-h2 font-display">
            From homeowners and cottage owners
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {residential.map((t) => (
              <li key={t.name}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </section>

        <p className="max-w-2xl text-xs leading-relaxed text-ink-500">
          {resultsDisclaimer}
        </p>
      </Container>

      <CtaBand
        heading="Want the same for your property?"
        body="A free assessment tells you what you are actually dealing with."
        source="testimonials"
      />
    </>
  );
}
