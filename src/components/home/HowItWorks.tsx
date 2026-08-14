import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Icon, type IconName } from "@/components/ui/Icon";
import { images } from "@/content/images";
import { processSteps } from "@/content/home";

const stepIcons: readonly IconName[] = ["assessment", "treatment", "maintenance"];

export function HowItWorks() {
  return (
    <Section tone="alt" labelledBy="how-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Eyebrow>How it works</Eyebrow>
          <h2 id="how-heading" className="mt-3 text-h2 font-display">
            Assess. Treat. Maintain.
          </h2>
          <p className="mt-4 max-w-md text-ink-700">
            Tick and mosquito pressure is specific to a property. The programme
            starts by finding where yours actually is.
          </p>

          {/* Numbered because this genuinely is a sequence, not decoration. */}
          <ol className="mt-10 space-y-8">
            {processSteps.map((step, i) => (
              <li key={step.n} className="flex gap-5">
                <span className="flex flex-col items-center gap-2">
                  <Icon name={stepIcons[i] ?? "shield-protection"} size={72} />
                  <span
                    aria-hidden="true"
                    className="font-display text-lg leading-none text-clay-600 tabular-nums"
                  >
                    {step.n}
                  </span>
                </span>
                <div className="border-l border-forest-900/15 pl-5">
                  <h3 className="text-h3 font-display">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-700">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <Button href="/how-it-works" variant="secondary" className="mt-10">
            More about our process
          </Button>
        </div>

        <Photo
          image={images.truckSprayingBorder}
          ratio="4 / 5"
          sizes="(max-width: 1024px) 100vw, 45vw"
          position="60% center"
        />
      </Container>
    </Section>
  );
}
