"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { NAV_LINKS } from "@/lib/content/landing";
import { Wordmark } from "./wordmark";
import { CtaButton } from "./cta-button";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-40">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-6 pt-3">
            <Wordmark />

            <div className="flex items-center gap-10">
              <nav
                aria-label="Primary"
                className="hidden items-baseline gap-10 text-label font-semibold uppercase tracking-[0.04em] lg:flex"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="whitespace-nowrap transition-[box-shadow] hover:shadow-[0_16px_0_-15px_currentColor]"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <CtaButton
                href="#"
                withArrow
                className="hidden w-[201px] shrink-0 lg:inline-flex"
              >
                Getting started
              </CtaButton>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="rule-dashed mt-2.5" />
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
