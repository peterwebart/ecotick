import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { mosquitoControl as page } from "@/content/services";
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
      hero={images.familyBackyard}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Mosquito Control", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Free property assessment"
          body="Mosquito pressure is site-specific. A walk-through finds the source."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
