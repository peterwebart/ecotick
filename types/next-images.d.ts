// Static image imports (src/content/images.ts) are typed by
// `next/image-types/global`, which Next normally wires up through the generated
// `next-env.d.ts`. That file is gitignored and only appears after `next build`
// or `next dev`, so on a fresh clone `pnpm typecheck` fails with TS2307 for
// every `.webp` import until someone happens to run a build first.
//
// Referencing the types here — in a committed file — makes `pnpm typecheck`
// self-sufficient and order-independent, which matters for CI.
/// <reference types="next/image-types/global" />
