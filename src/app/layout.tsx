import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";



import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Self-hosted at build time by next/font: no render-blocking request to
 * Google, no layout shift, and no third-party connection at runtime.
 */
const display = { variable: "--font-display-loaded" };

const body = { variable: "--font-sans-loaded" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tick & Mosquito Control in Ontario | Eco-Tick Solutions",
    template: "%s | Eco-Tick Solutions",
  },
  description: site.description,
  openGraph: { siteName: site.name, locale: "en_CA", type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#12331e",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), localBusinessSchema(), websiteSchema()]),
          }}
        />
      </head>
      <body className="pb-14 lg:pb-0">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-card focus:bg-cta focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
