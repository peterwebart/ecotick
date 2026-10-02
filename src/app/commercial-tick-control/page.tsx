import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { commercial as page } from "@/content/services";
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
      hero={images.commercialTruck}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Commercial", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Commercial assessment"
          body="Send us the site details and we will design a programme around your operating calendar."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
