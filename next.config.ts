import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  /**
   * nodemailer must not go through the bundler.
   *
   * It resolves transports dynamically and ships its own compiled internals.
   * When Next bundles it, the minifier mangles those internals and the route
   * throws at runtime with an opaque
   *   TypeError: Cannot read properties of undefined (reading 'b')
   * carrying only a digest. Marking it external leaves it in node_modules and
   * requires it normally.
   */
  serverExternalPackages: ["nodemailer"],

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // Tells browsers never to try http again for this host. Only ever
            // sent over https, which is why the redirect below still matters
            // for the very first visit.
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },

  /**
   * SEO migration. Populate from the Search Console page export BEFORE the
   * first production deploy, and ship redirects in the same commit as any URL
   * change. Host canonicalisation (www and http) is handled in middleware.ts,
   * because it has to inspect the incoming host and protocol.
   */
  async redirects() {
    return [];
  },
};

export default nextConfig;
