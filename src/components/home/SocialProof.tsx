import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { resultsDisclaimer, testimonials } from "@/content/testimonials";

/**
 * Real, attributable reviews supplied by Eco-Tick — this section was rendering
 * nothing until they arrived, rather than shipping an invented quote.
 *
 * Still no AggregateRating schema: that needs the genuine review count and
 * average from the Google Business Profile, with the ratings visible on the page.
 */
export function SocialProof() {
  if (testimonials.length === 0) return null;
  const featured = testimonials.slice(0, 3);

  return (
    <Section labelledBy="proof-heading">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Client feedback</Eyebrow>
          <h2 id="proof-heading" className="mt-3 text-h2 font-display">
            What our customers say.
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((t) => (
            <li key={t.name}>
              <TestimonialCard t={t} />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-xs leading-relaxed text-ink-500">
            {resultsDisclaimer}
          </p>
          <Link
            href="/testimonials"
            className="text-sm font-semibold text-cta hover:underline"
          >
            Read all reviews <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
