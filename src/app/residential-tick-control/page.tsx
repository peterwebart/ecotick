import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { residential as page } from "@/content/services";
import { images } from "@/content/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: `/${page.slug}`,
  noindex: page.noindex,
});

export default function Page() {
  return (
    <ServicePageTemplate
      page={page}
      hero={images.residentialSpraying}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Residential", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Free, no-obligation quote"
          body="Tell us about your yard and we will put a seasonal plan together."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
