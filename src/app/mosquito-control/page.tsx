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
      hero={images.reachCanopy}
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Mosquito Control", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="Free, no-obligation quote"
          body="Tell us about the property and we will email a free, no-obligation quote."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
