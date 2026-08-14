import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "The terms that apply to using the Eco-Tick Solutions website, submitting a quote request, and the general information published in our guides.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-14 lg:py-20">
      <h1 className="text-h1 font-display">Terms of use</h1>
      <p className="mt-6 text-lead text-ink-700">
        These terms cover the website. The work itself is covered by the service
        agreement you sign before treatment begins.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-h2 font-display">Quotes are estimates</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Submitting the quote form starts a conversation; it does not create a
            contract. Pricing depends on what we find when we walk the property,
            and nothing is binding until we have both agreed a scope in writing.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Information on this site</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Our guides and articles are general education about ticks and
            mosquitoes in Ontario. They are not medical advice. If you have been
            bitten, develop symptoms, or are worried about a tick-borne illness,
            contact a health care provider or your local public health unit.
          </p>
          <p className="mt-4 leading-relaxed text-ink-700">
            Treatment reduces tick and mosquito pressure on the areas of a
            property we treat. It does not eliminate a population permanently,
            because both arrive from surrounding land, and it does not replace
            checking yourself, your children and your pets after time outdoors.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Customer reviews</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Reviews on this site are from real customers and are published as
            written. They describe those customers&apos; own experiences.
            Individual results vary with property, season and surrounding land.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Our content</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            The text, photographs and branding on this site belong to{" "}
            {site.legalName}. You are welcome to link to any page. Please ask
            before republishing content elsewhere.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Links out</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Where we link to public health sources or embed a Google Map, those
            services have their own terms and we do not control their content.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Questions</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Call {site.phone}, email{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-2">
              {site.email}
            </a>
            , or use the{" "}
            <Link href="/contact" className="underline underline-offset-2">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
