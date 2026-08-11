import { ServicePageTemplate } from "@/components/service/ServicePageTemplate";
import { QuoteAside } from "@/components/quote/QuoteAside";
import { tickMosquito as page } from "@/content/services";
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
      crumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Tick & Mosquito", path: `/${page.slug}` },
      ]}
      aside={
        <QuoteAside
          heading="One combined programme"
          body="Both pests, one assessment, one seasonal schedule."
          label={page.ctaLabel}
          source={page.slug}
        />
      }
    />
  );
}
