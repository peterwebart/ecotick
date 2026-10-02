import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { Icon } from "@/components/ui/Icon";
import { images } from "@/content/images";
import { seasons } from "@/content/home";

/**
 * CLAIMS NOTE: the mockup listed "Long-lasting residual protection" and
 * "Effective against ticks & mosquitoes". Both are efficacy claims requiring
 * PMRA label support (ARCHITECTURE.md section 4) and are held back here.
 * The remaining bullets describe what the service is, not what it achieves.
 */
const bullets = [
  "A garlic-based outdoor treatment, not a conventional broad-spectrum product",
  "Applied to targeted zones identified during the property assessment",
  "Applied by trained technicians following the product label",
  "Scheduled across the active season rather than as a single visit",
] as const;

export function GarlicPanel() {
  return (
    <section aria-labelledby="garlic-heading" className="grid lg:grid-cols-2">
      <div className="bg-forest-900 py-16 text-bone-50 sm:py-20">
        <Container className="lg:mr-0 lg:ml-auto lg:max-w-[600px] lg:pr-14">
          <Eyebrow tone="light">Our approach</Eyebrow>
          <div className="mt-3 flex items-start gap-4">
            <Icon name="garlic-solution" size={72} />
            <h2 id="garlic-heading" className="text-h2 font-display text-white">
              A natural approach to outdoor pest protection.
            </h2>
          </div>
          <Photo
            image={images.reachCanopy}
            ratio="16 / 9"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="mt-7"
          />
          <p className="mt-4 text-bone-100/85">
            Garlic has a long history of use as an outdoor pest deterrent. Our
            programmes are built around a garlic-based solution applied to the
            parts of a property where ticks and mosquitoes concentrate.
          </p>
          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm leading-relaxed text-bone-100/90">
                <span aria-hidden="true" className="mt-1 text-moss-500">
                  &#10003;
                </span>
                {b}
              </li>
            ))}
          </ul>
          <Button href="/natural-garlic-spray" variant="ghost" className="mt-9">
            Learn about our solution
          </Button>
        </Container>
      </div>

      <div className="bg-surface-alt py-16 sm:py-20">
        <Container className="lg:ml-0 lg:max-w-[600px] lg:pl-14">
          <Eyebrow>Seasonal protection</Eyebrow>
          <h2 className="mt-3 text-h2 font-display">
            Protection that tracks the season.
          </h2>
          <p className="mt-4 text-ink-700">
            Tick and mosquito activity is not constant from May to October. A
            programme scheduled around that arc beats a single spring visit.
          </p>

          {/* Season spine: the horizontal rule encodes the actual activity arc. */}
          <ol className="relative mt-10 space-y-7 border-l-2 border-clay-300 pl-6">
            {seasons.map((s) => (
              <li key={s.season} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[1.9rem] h-3 w-3 rounded-full border-2 border-clay-600 bg-surface-alt"
                />
                <h3 className="font-display text-h3">{s.season}</h3>
                <p className="text-eyebrow font-semibold text-clay-600 uppercase">
                  {s.label}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-700">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <Button href="/get-a-quote" className="mt-9">
            Build my seasonal plan
          </Button>
        </Container>
      </div>
    </section>
  );
}
