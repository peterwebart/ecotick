import type { Faq } from "@/content/types";

/**
 * Native details/summary: works without JavaScript, keyboard-accessible by
 * default, and the answer text is in the DOM for crawlers and AI search.
 */
export function FaqAccordion({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {faqs.map((faq) => (
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
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-700">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
