import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { images } from "@/content/images";

/**
 * The equipment is the differentiator customers name unprompted, so it gets its
 * own section rather than being a detail buried in a service page. Uneven grid
 * spans keep it from reading as a stock photo wall.
 */
export function Fleet() {
  return (
    <Section tone="inverse" labelledBy="fleet-heading">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow tone="light">Our equipment</Eyebrow>
          <h2 id="fleet-heading" className="mt-3 text-h2 font-display text-white">
            Truck-mounted, not backpack.
          </h2>
          <p className="mt-4 text-bone-100/85">
            A backpack sprayer stops where the operator stops — the lawn, maybe
            the first metre of hedge. That is not where ticks are. Our rig runs a
            tank, pump and hose reel off the truck, so treatment reaches into
            treelines and woodland and covers acreage in one visit.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/*
            Prominent tiles use the three photographs that carry no wrong number:
            the retouched tailgate, and the two where the wrap number is not
            legible. The remaining four still show 613-371-3785 at small sizes —
            see IMAGE-BRIEF.md for what to request as replacements.
          */}
          <Photo
            image={images.truckRig}
            ratio="3 / 2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="sm:col-span-2 lg:col-span-2"
          />
          <Photo
            image={images.truckBedCloseup}
            ratio="3 / 2"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <Photo
            image={images.truckTwoTechs}
            ratio="3 / 2"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <Photo
            image={images.truckFrontGarden}
            ratio="3 / 2"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <Photo
            image={images.truckDriveway}
            ratio="3 / 2"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>

        <Button href="/natural-garlic-spray" variant="ghost" className="mt-10">
          How the treatment works
        </Button>
      </Container>
    </Section>
  );
}
