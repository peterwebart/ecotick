import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact Eco-Tick Solutions in Kingston",
  description:
    "Call 1-888-912-5152 or email Eco-Tick Solutions about tick and mosquito control for a home, cottage, commercial site or large property in Eastern Ontario.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema(crumbs), localBusinessSchema()]),
        }}
      />

      <Container className="grid gap-12 py-12 lg:grid-cols-2 lg:py-16">
        <div>
          <h1 className="text-h1 font-display">Contact us</h1>
          <p className="mt-6 max-w-md text-lead text-ink-700">
            We offer free, no-obligation quotes for tick and mosquito control.
            Call, email, or send the property details through the quote form and
            we will come back to you.
          </p>

          <dl className="mt-10 space-y-7">
            <div className="flex gap-4">
              <Icon name="professional-application" size={64} />
              <div>
                <dt className="text-eyebrow font-semibold text-clay-600 uppercase">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={site.phoneHref}
                    className="text-lead font-semibold text-brand hover:underline"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Icon name="assessment" size={64} />
              <div>
                <dt className="text-eyebrow font-semibold text-clay-600 uppercase">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="text-brand hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-4">
              <Icon name="service-area" size={64} />
              <div>
                <dt className="text-eyebrow font-semibold text-clay-600 uppercase">Address</dt>
                <dd className="mt-1 text-ink-700">
                  <address className="not-italic">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.regionName} {site.address.postalCode}
                  </address>
                  <Link
                    href="/service-areas"
                    className="mt-2 inline-block text-sm underline underline-offset-2"
                  >
                    See our service area
                  </Link>
                </dd>
              </div>
            </div>
          </dl>

          <Button href="/get-a-quote" size="lg" className="mt-10">
            Get your free quote
          </Button>
        </div>

        <div className="rounded-card border border-border bg-white p-7 shadow-card lg:mt-0">
          <div className="flex items-center gap-3">
            <Icon name="seasonal-protection" size={64} />
            <h2 className="text-h2 font-display">Hours</h2>
          </div>
          <dl className="mt-6 divide-y divide-border">
            {site.hoursDisplay.map((h) => (
              <div key={h.label} className="flex justify-between gap-4 py-3.5">
                <dt className="font-medium text-ink-900">{h.label}</dt>
                <dd className="text-ink-700 tabular-nums">{h.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-ink-700">
            Tick and mosquito work is seasonal, so spring and early summer are
            our busiest stretch. If you are planning treatment for the coming
            season, booking earlier gives you more choice of dates.
          </p>
          <MapEmbed className="mt-7" />
        </div>
      </Container>
    </>
  );
}
