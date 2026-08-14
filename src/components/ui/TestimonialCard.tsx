import type { Testimonial } from "@/content/testimonials";

export function TestimonialCard({
  t,
  full = false,
}: {
  t: Testimonial;
  full?: boolean;
}) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-card">
      {t.highlight && !full && (
        <p className="font-display text-h3 leading-snug text-brand">
          &ldquo;{t.highlight}&rdquo;
        </p>
      )}
      <blockquote className={full ? "" : "mt-4"}>
        <p className="flex-1 text-sm leading-relaxed text-ink-700">{t.quote}</p>
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4 text-sm">
        <span className="font-semibold text-ink-900">{t.name}</span>
        <span className="block text-ink-500">{t.context}</span>
      </figcaption>
    </figure>
  );
}
