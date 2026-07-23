"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/content/landing";
import { lockScroll, unlockScroll } from "@/lib/scroll";
import { Wordmark } from "./wordmark";
import { CtaButton } from "./cta-button";

/**
 * Full-screen mobile navigation. Stays mounted so it can fade in/out smoothly;
 * the links stagger up as it opens. Locks page scroll (and stops Lenis) while
 * open, closes on Escape, and moves focus to the close button.
 */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      unlockScroll();
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col bg-paper text-ink transition-[opacity,visibility] duration-300 ease-aa lg:hidden",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between pt-3">
          <Wordmark />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center"
          >
            <X className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
        <div className="rule-dashed mt-2.5" />
      </div>

      <nav
        aria-label="Primary mobile"
        className="container-wide flex flex-1 flex-col justify-start pt-8 sm:pt-12"
      >
        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            className={cn(
              "border-b border-dashed border-hairline py-4 font-display text-[20px] leading-tight transition-[opacity,transform] duration-500 ease-aa sm:text-[44px]",
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="container-wide pb-10">
        <CtaButton
          href="#"
          className="w-full"
          tabIndex={open ? 0 : -1}
          onClick={onClose}
        >
          Getting started
        </CtaButton>
      </div>
    </div>
  );
}
