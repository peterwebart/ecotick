import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { images } from "@/content/images";
import { serviceTiers } from "@/content/home";

const tierPhotos = {
  residential: images.residentialSpraying,
  commercial: images.commercialTruck,
  "large-property": images.largeProperty,
} as const;

export function ServiceTiers() {
  return (
    <Section labelledBy="tiers-heading">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 id="tiers-heading" className="mt-3 text-h2 font-display">
            Three property types. Tailored seasonal programs.
          </h2>
          <p className="mt-4 text-ink-700">
            From a quarter-acre backyard to a hundred-acre campus, we tailor each program to the property and how it is used.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {serviceTiers.map((tier) => (
            <li
              key={tier.slug}
              className="flex flex-col overflow-hidden rounded-card border border-border bg-white shadow-card transition-shadow hover:shadow-lift"
            >
              <Photo
                image={tierPhotos[tier.slug as keyof typeof tierPhotos]}
                ratio="16 / 10"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="rounded-none"
              />
              <div className="flex flex-1 flex-col p-6">
                <Eyebrow>{tier.eyebrow}</Eyebrow>
                <h3 className="mt-2 text-h3 font-display">{tier.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{tier.promise}</p>
                <ul className="mt-5 flex-1 space-y-2">
                  {tier.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm text-ink-700"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:underline"
                >
                  {tier.linkLabel}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
