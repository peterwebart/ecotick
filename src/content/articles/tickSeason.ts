import type { Article } from "@/content/types";

export const tickSeason: Article = {
  slug: "tick-season",
  path: "/tick-season",
  kind: "guide",
  h1: "When Is Tick Season in Ontario?",
  excerpt:
    "Tick season in Ontario is longer than most people assume. Blacklegged ticks become active whenever the temperature rises above roughly 4°C, which can mean March, and adults stay active well into November.",
  metaTitle: "When Is Tick Season in Ontario?",
  metaDescription:
    "Blacklegged ticks in Ontario are active from early spring to late fall, with two distinct peaks. When each life stage is active, and what it means.",
  publishedAt: "2026-03-02",
  author: "The Eco-Tick team",
  takeaways: [
    "Ticks are active whenever it is above roughly 4°C, not only in summer.",
    "There are two peaks: adults in spring and again in fall, nymphs through late spring and summer.",
    "Nymphs are the stage most likely to go unnoticed, and they peak when people are outdoors most.",
    "Ticks do not die off over winter; they shelter in leaf litter beneath the snow.",
  ],
  related: [
    { label: "How to prevent ticks in your yard", href: "/tick-prevention" },
    { label: "How professional tick spraying works", href: "/blog/how-professional-tick-spraying-works" },
    { label: "Residential tick control", href: "/residential-tick-control" },
    { label: "All resources", href: "/resources" },
  ],
  references: [
    {
      label: "Public Health Ontario",
      note: "Ontario tick surveillance and blacklegged tick risk areas.",
    },
    {
      label: "Government of Canada",
      note: "Lyme disease surveillance and tick risk area guidance.",
    },
    {
      label: "US Centers for Disease Control and Prevention",
      note: "Blacklegged tick life cycle and seasonal activity.",
    },
  ],
  blocks: [
    {
      type: "prose",
      heading: "The short answer",
      body: [
        "In most of southern and eastern Ontario, blacklegged ticks can be active from roughly March through November, and on mild days outside that window too. The commonly held idea that ticks are a July problem is the single most useful thing to correct, because it is wrong in both directions: activity starts far earlier and finishes far later than the peak of summer.",
        "The threshold that matters is temperature, not date. Adult blacklegged ticks will quest whenever the air is above approximately 4°C and the ground is not snow-covered. A warm week in March produces active ticks. So does a mild stretch in November.",
      ],
    },
    {
      type: "figure",
      imageKey: "tickMacro",
      maxWidth: 640,
      caption:
        "An adult blacklegged tick. Adults are the stage most people notice; the nymphs that cause most unnoticed bites are roughly the size of a poppy seed.",
    },
    {
      type: "table",
      heading: "Activity by life stage",
      intro:
        "Blacklegged ticks move through four stages across a life cycle of roughly two years. Each stage has a different activity window and a different practical significance.",
      columns: ["Stage", "Most active", "Why it matters"],
      rows: [
        [
          "Adult",
          "Spring and again in fall",
          "Largest and easiest to spot. Fall adults are frequently missed because people have stopped thinking about ticks by October.",
        ],
        [
          "Nymph",
          "Late spring through summer",
          "About the size of a poppy seed. This is the stage most often responsible for unnoticed bites, and it peaks exactly when outdoor use is highest.",
        ],
        [
          "Larva",
          "Late summer",
          "Very small and generally not carrying pathogens when they hatch, since they acquire them from their first blood meal.",
        ],
        [
          "Overwintering",
          "Winter",
          "Ticks shelter in leaf litter under snow cover rather than dying off. A mild winter does not eliminate the population.",
        ],
      ],
    },
    {
      type: "prose",
      heading: "Why there are two peaks, not one",
      body: [
        "The two-peak pattern confuses people, and it is worth understanding because it drives when treatment and vigilance actually matter.",
        "Adult blacklegged ticks that did not find a host before winter resume questing as soon as spring temperatures allow. That is the first peak. Those adults feed and lay eggs, larvae hatch in late summer, and the nymphs that emerge the following late spring produce the mid-season activity that most people experience.",
        "The second adult peak arrives in fall, when the current year's nymphs have moulted into adults and begin questing before winter. This autumn peak is the one that catches people out. By late September the mental association between ticks and summer has faded, dogs are still running the treeline, and the ticks are as active as they were in May.",
      ],
    },
    {
      type: "prose",
      heading: "What this means for a property",
      body: [
        "If tick pressure were confined to July, a single well-timed treatment would be a reasonable strategy. Because it is not, a one-visit approach leaves the two adult peaks essentially unaddressed.",
        "The practical implication is that timing matters as much as treatment. Starting in early spring targets the first adult peak before it produces the next generation. Continuing into fall covers the peak most households forget about. This is the entire reason our programmes are seasonal rather than sold as single visits.",
      ],
    },
    {
      type: "callout",
      heading: "A note on regional variation",
      body: "Blacklegged tick distribution across Ontario is not uniform and has been expanding. Local risk varies considerably by region and year, so treat the timings above as a general pattern rather than a forecast for a specific address. Public Health Ontario publishes current risk-area information.",
    },
    {
      type: "faq",
      heading: "Common questions",
      faqs: [
        {
          q: "Are ticks active in winter in Ontario?",
          a: "They can be. Blacklegged ticks do not die off in winter; they shelter in leaf litter beneath snow cover. During a thaw where temperatures rise above roughly 4°C and ground is exposed, adults can resume questing.",
        },
        {
          q: "When is tick season at its worst?",
          a: "There is no single worst month. Adults peak in spring and fall, while nymphs peak from late spring through summer. Nymph season is arguably the highest-risk period because nymphs are small enough to be missed.",
        },
        {
          q: "Do ticks live in grass or in trees?",
          a: "In grass and low vegetation. Ticks do not climb trees or drop from above. They climb low vegetation and wait with their front legs extended, a behaviour called questing, until a host brushes past.",
        },
        {
          q: "When should tick treatment start?",
          a: "Generally in early spring, before the first adult peak has run its course. Waiting until you have noticed ticks usually means waiting until after the spring peak.",
        },
      ],
    },
  ],
};
