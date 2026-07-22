"use client";

import { useRef, useState } from "react";
import Link from "next/link";

import { FOOTER_NAV, FOOTER_LEGAL } from "@/lib/content/landing";

export function SiteFooter() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const followGen = useRef(0);

  /* Expanding below the fold is pointless if you then have to scroll to it, so
     the page rides down with the panel. The panel's final height only arrives
     over the 600ms transition, so we chase the document bottom every frame until
     the grid-template-rows transition ends (plus a backstop). */
  const followBottom = () => {
    const panel = panelRef.current;
    if (!panel) return;
    const gen = ++followGen.current;
    let stopped = false;

    const toBottom = () => {
      const y = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      // Route through Lenis when it's driving the scroll, else native.
      if (window.lenis) window.lenis.scrollTo(y, { immediate: true });
      else window.scrollTo(0, y);
    };

    const stop = () => {
      if (stopped) return;
      stopped = true;
      panel.removeEventListener("transitionend", onEnd);
      requestAnimationFrame(() => {
        if (gen === followGen.current) toBottom();
      });
    };

    const onEnd = (e: TransitionEvent) => {
      if (e.target === panel && e.propertyName === "grid-template-rows") stop();
    };

    panel.addEventListener("transitionend", onEnd);
    window.setTimeout(stop, 900); // backstop if transitionend never lands

    (function follow() {
      if (stopped || gen !== followGen.current) return;
      toBottom();
      requestAnimationFrame(follow);
    })();
  };

  const toggle = () => {
    const next = !open;
    followGen.current++; // cancel any chase still running from a previous click
    setOpen(next);
    if (next) followBottom();
  };

  return (
    <footer className="bg-sage text-paper">
      <div className="container-wide">
        <div className="h-px bg-paper/20" />
      </div>

      <div
        ref={panelRef}
        className="footer-panel"
        data-open={open ? "true" : "false"}
        inert={!open}
      >
        <div>
          <div className="container-wide pt-12 lg:pt-[70px]">
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-[60px]">
              <div className="col-span-2 lg:col-span-1">
                <span className="block font-display text-[30px] font-light leading-none">
                  always art
                </span>
                <span className="mt-2.5 block text-[11px] font-semibold uppercase tracking-[0.05em] opacity-55">
                  A Public Benefit Corporation
                </span>
                <p className="mt-8 max-w-[300px] font-display text-serif-body leading-[26px] opacity-85">
                  Art is built to last.
                  <br />
                  Its records should be too.
                </p>
              </div>

              {FOOTER_NAV.map((group) => (
                <nav key={group.title} aria-label={group.title} className="flex flex-col gap-3.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.05em] opacity-50">
                    {group.title}
                  </p>
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[14px] leading-4 opacity-85 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              ))}
            </div>

            <div className="rule-dashed mt-12 opacity-20 lg:mt-[70px]" />
          </div>
        </div>
      </div>

      <div className="container-wide">
        <div className="flex flex-col items-center gap-4 py-8 text-[12px] sm:flex-row sm:justify-between lg:py-[16px]">
          <p className="opacity-50">© 2026 Always Art PBC</p>
          <div className="flex items-center gap-[30px]">
            {FOOTER_LEGAL.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="opacity-60 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggle}
              aria-expanded={open}
              className="footer-toggle -mr-2 flex h-11 w-11 shrink-0 items-center justify-center opacity-60 transition-opacity hover:opacity-100"
            >
              <span className="sr-only">{open ? "Hide footer links" : "Show footer links"}</span>
              <svg width="11" height="7" viewBox="0 0 11 7" aria-hidden="true">
                <path d="M5.5 7 0 0h11z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
