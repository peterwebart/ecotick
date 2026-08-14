import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaBand } from "@/components/ui/CtaBand";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { blogArticles, guides } from "@/content/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Tick & Mosquito Knowledge Centre",
  description:
    "Guides and articles on tick identification, tick season in Ontario, prevention, mosquito control and protecting residential and commercial properties.",
  path: "/resources",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Resources", path: "/resources" },
];


export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <Breadcrumbs crumbs={crumbs} />

      <Container className="py-12 lg:py-16">
        <h1 className="max-w-3xl text-h1 font-display">
          Tick &amp; Mosquito Knowledge Centre
        </h1>
        <p className="mt-6 max-w-2xl border-l-2 border-moss-600 pl-5 text-lead text-ink-700">
          Practical, Ontario-specific writing on ticks and mosquitoes: when they
          are active, where they live on a property, and what actually reduces
          pressure.
        </p>
      </Container>

      <Container className="pb-16">
        <section aria-labelledby="guides-heading">
          <Eyebrow>Guides</Eyebrow>
          <h2 id="guides-heading" className="mt-2 text-h2 font-display">
            Start here
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={g.path}
                  className="flex h-full flex-col rounded-card border border-border bg-white p-7 transition-shadow hover:shadow-card"
                >
                  <h3 className="text-h3 font-display">{g.h1}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {g.excerpt}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-cta">
                    Read the guide <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="articles-heading" className="mt-16">
          <Eyebrow>Articles</Eyebrow>
          <h2 id="articles-heading" className="mt-2 text-h2 font-display">
            From the blog
          </h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {blogArticles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={a.path}
                  className="flex h-full flex-col rounded-card border border-border bg-white p-7 transition-shadow hover:shadow-card"
                >
                  <h3 className="text-h3 font-display">{a.h1}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-cta">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/blog"
            className="mt-8 inline-block text-sm font-semibold text-cta hover:underline"
          >
            All articles <span aria-hidden="true">&rarr;</span>
          </Link>
        </section>

      </Container>

      <CtaBand
        heading="Reading is useful. A site walk is better."
        body="A free assessment tells you where the pressure is on your own property."
        source="resources"
      />
    </>
  );
}
