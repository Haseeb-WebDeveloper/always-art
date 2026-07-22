"use client";

import { useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { Role } from "@/lib/content/landing";
import { ArrowRight } from "./icons";

/**
 * Roles carousel. On desktop one card shows its image at a time; hovering (or
 * focusing) a card slides its image open and closes the last one — the open card
 * grows by exactly the image column's width, so the text columns never reflow.
 * Below lg the image stacks under the text and it's a plain scroll-snap strip.
 * All sizing lives in CSS (`.roles-strip`); this only moves `data-active`.
 */
export function RolesCarousel({
  roles,
  initialActive = 1,
}: {
  roles: Role[];
  /** Which card opens at rest (index). Home: Galleries is 2nd (1). */
  initialActive?: number;
}) {
  const stripRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(initialActive);

  const perPage = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) return 3;
    if (window.matchMedia("(min-width: 640px)").matches) return 2;
    return 1;
  };

  // Read the current page off the DOM — a touch swipe moves the strip without
  // telling us, so a remembered index would drift.
  const pageNow = (per: number) => {
    const strip = stripRef.current;
    if (!strip) return 0;
    const stripLeft = strip.getBoundingClientRect().left;
    let nearest = 0;
    let best = Infinity;
    Array.from(strip.children).forEach((c, i) => {
      const d = Math.abs(c.getBoundingClientRect().left - stripLeft);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    return Math.floor(nearest / per);
  };

  const go = (dir: 1 | -1) => {
    const strip = stripRef.current;
    if (!strip) return;
    const per = perPage();
    const pages = Math.ceil(roles.length / per);
    const page = (pageNow(per) + dir + pages) % pages;
    const first = page * per;

    // Open the incoming middle card BEFORE scrolling, so widths and scroll
    // settle together and the page arrives already correct.
    setActive(Math.min(first + ((per - 1) >> 1), roles.length - 1));

    const max = strip.scrollWidth - strip.clientWidth;
    let left: number;
    if (page === 0) {
      left = 0;
    } else if (page === pages - 1) {
      left = max;
    } else {
      const gap = parseFloat(getComputedStyle(strip).columnGap) || 0;
      const cardWidth = (strip.firstElementChild as HTMLElement).getBoundingClientRect().width;
      left = Math.min(max, first * (cardWidth + gap));
    }
    strip.scrollTo({ left, behavior: "smooth" });
  };

  return (
    <div className="relative lg:px-16">
      <ul
        ref={stripRef}
        className="roles-strip no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth lg:gap-10"
      >
        {roles.map((role, i) => (
          <li
            key={role.name}
            data-active={active === i ? "true" : "false"}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="role-card shrink-0 snap-start"
          >
            <div className="role-rule" />
            <div className="role-inner">
              <div className="role-text">
                <h3 className="role-title mt-6 font-display text-[22px] leading-[26px] lg:text-lead">
                  {role.name}
                </h3>
                <p className="mt-4 text-[14px] leading-5 text-foreground/60">
                  {role.description}
                </p>
                <div className="mt-auto pt-8">
                  <p className="text-micro font-semibold uppercase tracking-[0.05em] text-foreground/55">
                    {role.tags}
                  </p>
                  {role.href && (
                    <a href={role.href} className="tile-link mt-4">
                      {role.linkLabel}
                      <ArrowRight className="h-2.5 w-4 shrink-0" />
                    </a>
                  )}
                </div>
              </div>
              <div className="role-media">
                {/* Plain <img>: the reveal needs a fixed-width image the column
                    clips as it opens; a fill/responsive image would re-crop
                    every frame. Files are already optimised webp. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={role.image} alt="" width={280} height={240} loading="lazy" />
              </div>
            </div>
            <div className="role-rule" />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center gap-4 lg:mt-0">
        {(
          [
            { dir: -1 as const, label: "Previous roles", flip: true, side: "lg:left-0" },
            { dir: 1 as const, label: "Next roles", flip: false, side: "lg:right-0" },
          ]
        ).map(({ dir, label, flip, side }) => (
          <button
            key={label}
            type="button"
            onClick={() => go(dir)}
            aria-label={label}
            className={cn(
              "flex h-11 w-11 items-center justify-center text-ink transition-opacity hover:opacity-60",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink",
              "lg:absolute lg:top-1/2 lg:z-10 lg:-translate-y-1/2",
              side,
            )}
          >
            <ArrowRight className={cn("h-2.5 w-4", flip && "rotate-180")} />
          </button>
        ))}
      </div>
    </div>
  );
}
