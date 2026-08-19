/**
 * Real, attributable Google reviews supplied by Eco-Tick.
 *
 * Published verbatim. Testimonials are edited only to fix obvious typography,
 * never to strengthen a claim — trimming a customer's words to make them sound
 * better is misrepresentation.
 *
 * NOTE ON CLAIMS: the efficacy statements in these reviews are the customers'
 * own, which is materially different from Eco-Tick asserting them in its
 * marketing copy. Canada's Competition Act still expects published
 * testimonials to be genuine and not to imply results that are unrepresentative,
 * which is why `resultsDisclaimer` below is rendered alongside them.
 *
 * AggregateRating schema is deliberately NOT emitted. That needs the real
 * review count and average from the Google Business Profile, plus the ratings
 * visible on the page. See CLAIMS-REGISTER.md.
 */

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
  audience: "residential" | "commercial";
  /** Pull-quote for cards and the services page. */
  highlight?: string;
};

export const resultsDisclaimer =
  "Reviews are from real Eco-Tick customers and are published as written. Individual results vary with property, season and surrounding land.";

export const testimonials: readonly Testimonial[] = [
  {
    name: "Ivy Lea KOA Holiday",
    context: "Campground operator, Ivy Lea",
    audience: "commercial",
    highlight:
      "They use professional spray equipment mounted on a truck bed to reach deep into the forest where people can't easily go.",
    quote:
      "I've been using ECOTICK Solutions' spraying service at the KOA campground located at IVY LEA, which I operate, since last year. The number of mosquitoes and ticks has decreased dramatically, and I'm very happy to be receiving such positive feedback from guests visiting the campground. Unlike the backpack sprayers used by other companies, they use professional spray equipment mounted on a truck bed to reach deep into the forest where people can't easily go, so we're seeing definite results even at cabins and tent sites located deep in the woods. The technicians providing the spray service are also very friendly and professional, so I'm extremely satisfied with the service. I highly recommend it to anyone who wants a spray service but doesn't want to use toxic chemicals.",
  },
  {
    name: "Wendy Harris",
    context: "Dog owner, rural property",
    audience: "residential",
    highlight:
      "Without the treatment we could easily find more than 10 ticks crawling on the dogs, or us, daily.",
    quote:
      "Eco-tick is a mandatory part of our dog care (and for us too). Without the treatment we could easily find more than 10 ticks crawling on the dogs, or us, daily. After the treatment, we may find a few here and there, but it's incredible how well it works. This will be our 4th season having them I believe. Edward and his team are also just good people. Never had any issues! If they need to re-spray in between their regular schedule — they do. Highly recommend!!! And we love that it's natural!",
  },
  {
    name: "Allie Bean",
    context: "Homeowner backing onto woodland",
    audience: "residential",
    highlight:
      "Living with a forest as our backyard, a significant decrease in tick sightings says a lot.",
    quote:
      "Eco tick has been so great. We have noticed a significant decrease in our tick sightings this year (living with a forest as our backyard this says a lot!). Today we noticed a tick came in from the dogs, called them as we are due for our spray, they were here hours later. The contract says 4-6 weeks, but I definitely see them around the 4 week mark regularly. I would highly recommend this service especially if you have dogs or young children who enjoy the outdoors.",
  },
  {
    name: "Diana",
    context: "Dog owner, South Frontenac",
    audience: "residential",
    highlight:
      "The garlic spray does make a big difference to the amount of ticks we encounter.",
    quote:
      "Just wanted to say thanks for the excellent service. Our most recent spray was very thorough and covered a good amount of our property. We find that the garlic spray does make a big difference to the amount of ticks we encounter. Thanks from us and our dogs!",
  },
  {
    name: "Genevieve Rheault",
    context: "Homeowner",
    audience: "residential",
    highlight:
      "This year we've been able to enjoy our backyard a lot more.",
    quote:
      "We're more than satisfied with Eco-tick solutions! We haven't seen any ticks and we have way less mosquitoes even with all the rain we've been having. Usually we can never go outside without bug spray, at any time of day. This year we've been able to enjoy our backyard a lot more.",
  },
  {
    name: "Joan Williams",
    context: "Long-term customer",
    audience: "residential",
    highlight: "Ed is always available if we have any questions.",
    quote:
      "We have used Eco-Tick services for a few years now and are very pleased. Ed is always available if we have any questions and has provided excellent, personal service! We highly recommend using this natural solution to solve tick and mosquito problems!",
  },
  {
    name: "Danielle Barnes",
    context: "Homeowner",
    audience: "residential",
    highlight: "The person spraying is efficient and courteous.",
    quote:
      "This product really works. Because it's all natural, there's no worry about using harsh pesticides. We get our lawn sprayed every month, and we have very few mosquitoes. And no ticks have been found. The person spraying is efficient and courteous.",
  },
];

export const commercialTestimonials = testimonials.filter(
  (t) => t.audience === "commercial",
);
