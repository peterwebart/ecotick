import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { buildMetadata } from "@/lib/seo";
import { isReference } from "@/lib/reference";
import { site } from "@/content/site";

export const metadata = buildMetadata({
  title: "Thank You",
  description: "Your quote request has been received by Eco-Tick Solutions.",
  path: "/thank-you",
  // A confirmation page has no search value and should never appear in results
  // stripped of the context that got someone here.
  noindex: true,
});

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  // Only render a reference that matches the real format, so the page cannot be
  // used to display arbitrary text from a crafted URL.
  const reference = ref && isReference(ref) ? ref.toUpperCase() : null;

  return (
    <Container className="max-w-2xl py-16 text-center lg:py-24">
      <Icon name="shield-protection" size={88} className="mx-auto" />
      <h1 className="mt-6 text-h1 font-display">Request received.</h1>
      <p className="mt-5 text-lead text-ink-700">
        Thank you for contacting Eco-Tick Solutions. Our team will review your
        details and send a customized quote directly to your inbox.
      </p>

      {reference && (
        <div className="mt-10 rounded-card border border-border bg-white p-7 shadow-card">
          <p className="text-eyebrow font-semibold text-clay-600 uppercase">
            Your reference
          </p>
          <p className="mt-2 font-display text-h1 tracking-tight text-brand tabular-nums">
            {reference}
          </p>
          <p className="mt-3 text-sm text-ink-700">
            Worth keeping. Quote it if you call and we can pull your details up
            straight away.
          </p>
        </div>
      )}

      <div className="mt-10 rounded-card bg-surface-alt p-7 text-left">
        <h2 className="text-h3 font-display">What happens next</h2>
        <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink-700">
          <li className="flex gap-3">
            <span aria-hidden="true" className="font-display text-clay-600 tabular-nums">
              01
            </span>
            <span>
              <strong className="font-semibold text-ink-900">Quote preparation.</strong>{" "}
              We prepare your estimate from the property details you sent — no
              in-person visit needed.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="font-display text-clay-600 tabular-nums">
              02
            </span>
            <span>
              <strong className="font-semibold text-ink-900">Email delivery.</strong>{" "}
              Your custom quote and proposed seasonal schedule arrive directly in
              your inbox. A confirmation with your reference is on its way now.
            </span>
          </li>
        </ol>
      </div>

      <p className="mt-10 text-sm text-ink-700">
        Need us sooner? Call{" "}
        <a href={site.phoneHref} className="font-semibold text-brand underline">
          {site.phone}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${site.email}`} className="font-semibold text-brand underline">
          {site.email}
        </a>
        .
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button href="/tick-control-guide">Read the tick control guide</Button>
        <Button href="/" variant="secondary">
          Back to the homepage
        </Button>
      </div>

      <p className="mt-8 text-sm text-ink-500">
        While you wait,{" "}
        <Link href="/tick-prevention" className="underline underline-offset-2">
          a few things you can do in the yard today
        </Link>{" "}
        that cost nothing.
      </p>
    </Container>
  );
}
