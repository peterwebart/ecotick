import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { images } from "@/content/images";

/**
 * Two different treatments, because the constraint is different at each size.
 *
 * Desktop: text sits in the left column over the photograph. The scrim holds
 * ~80% opacity out to 42%, which is where the headline and lead actually end,
 * then falls away fast so the family (roughly 45-80% across the frame) reads
 * warm and clear rather than washed green.
 *
 * Mobile: there is no horizontal room to put text beside anything. Rather than
 * darken the whole photograph until the family disappears, the image gets its
 * own unscrimmed band below the copy. The photo is the reason someone believes
 * the pitch, so it should be legible rather than atmospheric.
 */
export function Hero() {
  return (
    <section
      className="relative bg-forest-950 lg:overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Container className="relative z-10 py-14 sm:py-20 lg:py-36">
        <div className="max-w-xl">
          <h1 id="hero-heading" className="font-display text-hero text-white">
            Take Back
            <br />
            the Outdoors<span className="text-moss-500">.</span>
          </h1>

          <p className="mt-6 max-w-md text-lead text-bone-100/90 lg:mt-7">
            Truck-mounted, garlic-based tick and mosquito control for homes,
            cottages, businesses and large properties across Ontario.
          </p>

          <p className="mt-5 inline-flex items-center gap-3 rounded-pill border border-white/20 bg-white/10 px-4 py-2 text-sm text-sage-100">
            <span aria-hidden="true" className="text-base">
              &#127813;
            </span>
            Garlic-based &middot; Health Canada registered
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-9">
            <Button href="/get-a-quote" size="lg">
              Get your free quote
            </Button>
            <Button href="/services" size="lg" variant="ghost">
              Explore our services
            </Button>
          </div>
        </div>
      </Container>

      {/*
        Decorative: the H1 already carries the meaning, so alt="".
        On mobile this is a normal block below the copy. On desktop it becomes
        the absolutely-positioned backdrop.
      */}
      <div className="relative aspect-[4/3] w-full sm:aspect-[2/1] lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
        <Image
          src={images.heroProperty.src}
          alt=""
          priority
          fill
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[62%_center] lg:object-center"
        />
        {/*
          Desktop-only scrim. Strong under the copy, gone by 72% so the family
          is not tinted. Mobile needs none, because nothing sits on top of it.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden lg:block lg:bg-[linear-gradient(90deg,rgba(10,35,20,0.92)_0%,rgba(10,35,20,0.80)_42%,rgba(10,35,20,0.26)_58%,rgba(10,35,20,0)_72%)]"
        />
      </div>
    </section>
  );
}
