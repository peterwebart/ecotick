import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { knowledgeArticles } from "@/content/home";

export function KnowledgeHub() {
  return (
    <Section tone="alt" labelledBy="knowledge-heading">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <Eyebrow>Knowledge centre</Eyebrow>
            <h2 id="knowledge-heading" className="mt-3 text-h2 font-display">
              Tick &amp; mosquito knowledge centre.
            </h2>
            <p className="mt-4 text-ink-700">
              Guides and articles on identifying ticks, understanding the
              Ontario season, and reducing pressure on your own property.
            </p>
          </div>
          <Button href="/resources" variant="secondary">
            Explore resources
          </Button>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {knowledgeArticles.map((a) => (
            <li key={a.href}>
              <Link
                href={a.href}
                className="flex h-full flex-col rounded-card border border-border bg-white p-6 transition-shadow hover:shadow-card"
              >
                <h3 className="text-h3 font-display">{a.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-700">
                  {a.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta">
                  Read more <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
