import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "What information Eco-Tick Solutions collects through this website, why we collect it, how long we keep it, and how to ask us to delete it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-14 lg:py-20">
      <h1 className="text-h1 font-display">Privacy policy</h1>
      <p className="mt-6 text-lead text-ink-700">
        Short version: we collect what we need to quote and schedule your
        treatment, we use it for that, and we do not sell it to anyone.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-h2 font-display">What we collect</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            When you use our quote form we ask for your name, email address,
            phone number, the town or city your property is in, the property
            type and size, when you would like service to start, and anything
            you choose to tell us in the notes field. Commercial and
            large-property enquiries also ask for approximate acreage, number of
            buildings and typical number of people on site.
          </p>
          <p className="mt-4 leading-relaxed text-ink-700">
            That is the whole list. We do not ask for payment details through
            this website.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Why we collect it</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            To work out whether your property is inside our service area, to
            price the work, and to contact you about it. If you become a
            customer, we use the same details to schedule visits and to reach
            you if something changes.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Who sees it</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Eco-Tick staff who need it to do the work. We do not sell, rent or
            trade your information, and we do not pass it to other companies for
            their marketing.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Analytics and cookies</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            This site can use Google Analytics to understand which pages people
            find useful. That involves cookies set by Google and collects
            aggregate information such as pages viewed, approximate location and
            device type. It is not tied to the details you submit through the
            quote form. Your browser settings let you block or clear cookies.
          </p>
          <p className="mt-4 leading-relaxed text-ink-700">
            Our contact and service-area pages embed a Google Map. Loading that
            map involves a request to Google, which is subject to Google&apos;s
            own privacy terms.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">How long we keep it</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Quote enquiries are kept while they are useful — a property we
            quoted last spring often comes back the following one. Customer
            records are kept for as long as you are a customer and for a
            reasonable period afterwards for business and tax purposes.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Your rights</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            Under Canadian privacy law you can ask what information we hold
            about you, ask us to correct it, and ask us to delete it. Email{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-2">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="underline underline-offset-2">
              {site.phone}
            </a>{" "}
            and we will deal with it.
          </p>
        </section>

        <section>
          <h2 className="text-h2 font-display">Contact</h2>
          <p className="mt-4 leading-relaxed text-ink-700">
            {site.legalName}
            <br />
            {site.address.street}, {site.address.city},{" "}
            {site.address.regionName} {site.address.postalCode}
            <br />
            {site.phone} &middot;{" "}
            <a href={`mailto:${site.email}`} className="underline underline-offset-2">
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-sm text-ink-500">
            Questions about a specific treatment rather than privacy? The{" "}
            <Link href="/contact" className="underline underline-offset-2">
              contact page
            </Link>{" "}
            is the faster route.
          </p>
        </section>
      </div>
    </Container>
  );
}
