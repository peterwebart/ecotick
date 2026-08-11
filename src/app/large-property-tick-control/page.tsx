import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { Container } from "@/components/ui/Container";
import { largeProperty as page } from "@/content/services";
import { images } from "@/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
});

export default function Page() {
  return (
    <>
      <ServicePageTemplate
        page={page}
        hero={images.largePropertyAerial}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Large Properties", path: `/${page.slug}` },
        ]}
      />

      {/*
        Brief section 10 asks for a dedicated B2B lead form here. Rather than
        maintain a second form, the shared wizard opens pre-branched: property
        type is already set, so it starts on step 2 with the acreage, buildings
        and headcount questions active.
      */}
      <section aria-labelledby="lp-form-heading" className="bg-surface-alt py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 id="lp-form-heading" className="text-h2 font-display">
              Large-property assessment request
            </h2>
            <p className="mt-4 max-w-md text-ink-700">
              Acreage, how the land is used, and what you are seeing at the
              moment. That is usually enough for us to come back with a zoned
              plan and a number.
            </p>
          </div>
          <QuoteWizard initialPropertyType="Large property" />
        </Container>
      </section>
    </>
  );
}
