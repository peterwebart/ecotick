"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { track } from "@/lib/analytics";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-ink-700 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            onClick={() => track("phone_clicked", { location: "header" })}
            className="text-sm font-semibold text-brand hover:underline"
          >
            {site.phone}
          </a>
          <Button href="/get-a-quote">Get a free quote</Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="rounded-card border border-border px-3 py-2 text-sm font-semibold text-brand lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-border py-3 text-base font-medium text-ink-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
