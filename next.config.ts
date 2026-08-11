import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // SEO migration (ARCHITECTURE.md §1). Populate from the Search Console
  // page export BEFORE the first production deploy, and ship redirects in the
  // same commit as any URL change.
  async redirects() {
    return [];
  },
};

export default nextConfig;
