import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="text-eyebrow font-semibold text-clay-600 uppercase">404</p>
      <h1 className="mt-3 text-h1 font-display">That page is not here.</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-700">
        The page may have moved. Start from our services, or request a quote and
        we will point you in the right direction.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/services">View services</Button>
        <Button href="/get-a-quote" variant="secondary">
          Get a quote
        </Button>
      </div>
    </Container>
  );
}
