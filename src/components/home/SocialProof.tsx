import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { testimonials } from "@/content/home";

/**
 * Renders nothing while `testimonials` is empty, which is the intended state.
 *
 * The mockup showed a five-star review from "Sarah J., Cottage Owner". Brief
 * section 30 forbids fabricated testimonials, so rather than ship invented
 * social proof this section stays absent until Eco-Tick supplies real,
 * attributable reviews (see ARCHITECTURE.md section 5, item 5).
 *
 * When real reviews land, add AggregateRating schema only if the ratings are
 * genuine AND visible on the page.
 */
export function SocialProof() {
  if (testimonials.length === 0) return null;

  return (
    <Section labelledBy="proof-heading">
      <Container>
        <Eyebrow>Client feedback</Eyebrow>
        <h2 id="proof-heading" className="mt-3 text-h2 font-display">
          What our clients say.
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-card border border-border bg-white p-6 shadow-card"
            >
              <blockquote className="text-ink-900">
                <p className="leading-relaxed">{t.quote}</p>
              </blockquote>
              <footer className="mt-4 text-sm text-ink-500">
                <cite className="not-italic font-semibold text-ink-700">
                  {t.name}
                </cite>
                , {t.context} &middot; {t.source}
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
