import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { homeFaqs } from "@/content/home";

/**
 * Answer-first structure per the GEO brief (section 16): the concise answer is
 * the first sentence, details follow. Native details/summary means it works
 * without JavaScript and is keyboard-accessible by default.
 */
export function FaqSection() {
  return (
    <Section labelledBy="faq-heading">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow>Common questions</Eyebrow>
          <h2 id="faq-heading" className="mt-3 text-h2 font-display">
            Questions we get asked.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {homeFaqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-h3 text-brand marker:content-none">
                {faq.q}
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-clay-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
