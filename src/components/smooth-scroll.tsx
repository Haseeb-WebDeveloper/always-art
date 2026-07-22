"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    /** The active Lenis instance, so components can drive programmatic scroll
     *  through it (e.g. the footer's expand-and-follow). Undefined when smooth
     *  scrolling is off (reduced motion) — callers fall back to native scroll. */
    lenis?: Lenis;
  }
}

/**
 * Site-wide smooth scrolling via Lenis. Renders nothing — it drives the window
 * scroll from a rAF loop. Fully disabled under `prefers-reduced-motion`, and it
 * re-checks live if the user toggles that setting, so the page stays a plain
 * native scroller for anyone who asks for reduced motion.
 *
 * Only the vertical window scroll is smoothed; the horizontal carousels (roles,
 * timeline) scroll their own containers and are untouched.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let rafId = 0;

    const start = () => {
      if (lenis || reduced.matches) return;
      lenis = new Lenis({
        duration: 1.1,
        // Exponential ease-out — quick to respond, gentle to settle.
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      window.lenis = lenis;
      const loop = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(loop);
      };
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
      window.lenis = undefined;
    };

    start();
    const onChange = () => (reduced.matches ? stop() : start());
    reduced.addEventListener("change", onChange);

    return () => {
      reduced.removeEventListener("change", onChange);
      stop();
    };
  }, []);

  return null;
}
