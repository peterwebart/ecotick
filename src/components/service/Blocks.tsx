import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { SourceNeeded } from "@/components/ui/SourceNeeded";
import Image from "next/image";
import { images } from "@/content/images";
import { slugify } from "@/lib/slug";
import type { Block } from "@/content/types";

/** Headings that can be linked to from a table of contents. */
export function blockHeadings(
  blocks: readonly Block[],
): readonly { id: string; label: string }[] {
  return blocks
    .filter((b) => "heading" in b && typeof b.heading === "string")
    .map((b) => {
      const heading = (b as { heading: string }).heading;
      return { id: slugify(heading), label: heading };
    });
}

/**
 * One renderer for every block variant. Adding a block type to the union in
 * content/types.ts produces a type error here until it is handled, which is
 * the point.
 */
export function Blocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="space-y-14">
      {blocks.map((block, i) => (
        <BlockRenderer key={`${block.type}-${i}`} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "prose":
      return (
        <section>
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {block.body.map((p) => (
              <p key={p.slice(0, 40)} className="max-w-2xl leading-relaxed text-ink-700">
                {p}
              </p>
            ))}
          </div>
        </section>
      );

    case "list":
      return (
        <section>
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          {block.intro && (
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">{block.intro}</p>
          )}
          <ul
            className={`mt-6 grid gap-x-8 gap-y-3 ${
              block.columns === 1 ? "" : "sm:grid-cols-2"
            }`}
          >
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-ink-700">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage-500"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "checklist":
      return (
        <section className="rounded-card bg-surface-alt p-7">
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          {block.intro && (
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">{block.intro}</p>
          )}
          <ul className="mt-6 space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 text-ink-900">
                <span aria-hidden="true" className="mt-0.5 text-moss-600">
                  &#10003;
                </span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      );

    case "steps":
      return (
        <section>
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          {block.intro && (
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">{block.intro}</p>
          )}
          <ol className="mt-8 space-y-7">
            {block.steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <span
                  aria-hidden="true"
                  className="font-display text-xl leading-none text-clay-600 tabular-nums"
                >
                  {s.n}
                </span>
                <div className="border-l border-forest-900/15 pl-5">
                  <h3 className="text-h3 font-display">{s.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-700">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case "nabc":
      return (
        <section className="rounded-card border border-border p-7">
          <h2 className="text-h2 font-display">Is this the right fit?</h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="text-eyebrow font-semibold text-clay-600 uppercase">
                The problem
              </dt>
              <dd className="mt-1.5 max-w-2xl leading-relaxed text-ink-700">
                {block.need}
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold text-clay-600 uppercase">
                Our approach
              </dt>
              <dd className="mt-1.5 max-w-2xl leading-relaxed text-ink-700">
                {block.approach}
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold text-clay-600 uppercase">
                What you get
              </dt>
              <dd className="mt-2">
                <ul className="grid gap-2 sm:grid-cols-2">
                  {block.benefits.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm text-ink-700">
                      <span aria-hidden="true" className="mt-0.5 text-moss-600">
                        &#10003;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-eyebrow font-semibold text-clay-600 uppercase">
                The alternatives
              </dt>
              <dd className="mt-2 space-y-3">
                {block.alternatives.map((a) => (
                  <p key={a.label} className="max-w-2xl text-sm leading-relaxed text-ink-700">
                    <span className="font-semibold text-ink-900">{a.label}.</span>{" "}
                    {a.body}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </section>
      );

    case "faq":
      return (
        <section>
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          <div className="mt-6">
            <FaqAccordion faqs={block.faqs} />
          </div>
        </section>
      );

    case "callout":
      return (
        <aside className="border-l-4 border-clay-600 bg-clay-100 p-6">
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h3 font-display">
            {block.heading}
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">{block.body}</p>
        </aside>
      );

    case "table":
      return (
        <section>
          <h2 id={slugify(block.heading)} className="scroll-mt-24 text-h2 font-display">
            {block.heading}
          </h2>
          {block.intro && (
            <p className="mt-4 max-w-2xl leading-relaxed text-ink-700">{block.intro}</p>
          )}
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-forest-900/20">
                  {block.columns.map((c) => (
                    <th key={c} scope="col" className="py-3 pr-6 font-display text-h3">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("|")} className="border-b border-border align-top">
                    {row.map((cell, i) =>
                      i === 0 ? (
                        <th
                          key={cell}
                          scope="row"
                          className="py-4 pr-6 font-semibold text-ink-900"
                        >
                          {cell}
                        </th>
                      ) : (
                        <td key={cell} className="py-4 pr-6 leading-relaxed text-ink-700">
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );

    case "takeaways":
      return (
        <aside
          aria-label="Key points"
          className="rounded-card border border-sage-500 bg-sage-100 p-6"
        >
          <h2 className="text-eyebrow font-semibold text-forest-800 uppercase">
            The short version
          </h2>
          <ul className="mt-4 space-y-2.5">
            {block.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-ink-900">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-800" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      );

    case "figure": {
      const image = images[block.imageKey as keyof typeof images];
      if (!image) return null;
      const cap = block.maxWidth ?? 640;
      return (
        <figure className="max-w-full" style={{ width: cap }}>
          <Image
            src={image.src}
            alt={image.alt}
            placeholder="blur"
            sizes={`(max-width: ${cap}px) 100vw, ${cap}px`}
            className="h-auto w-full rounded-card"
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">
            {block.caption}
          </figcaption>
        </figure>
      );
    }

    case "sourceNeeded":
      return <SourceNeeded heading={block.heading} needs={block.needs} />;
  }
}
