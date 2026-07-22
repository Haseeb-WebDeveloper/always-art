"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/content/landing";
import { Wordmark } from "./wordmark";
import { CtaButton } from "./cta-button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="container-wide">
        <div className="flex items-start justify-between gap-6 pt-3">
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

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent side="right" className="bg-paper text-ink">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav
                  aria-label="Primary mobile"
                  className="flex flex-col px-5 pt-6"
                >
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-dashed border-hairline py-4 text-label font-semibold uppercase tracking-[0.04em]"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <CtaButton
                    href="#"
                    className="mt-6 w-full"
                    onClick={() => setOpen(false)}
                  >
                    Getting started
                  </CtaButton>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="rule-dashed mt-2.5" />
      </div>
    </header>
  );
}
