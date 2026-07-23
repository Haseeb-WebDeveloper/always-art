import type Lenis from "lenis";

/**
 * Holds the active Lenis instance so non-Lenis code (e.g. the footer's
 * expand-and-follow) can drive programmatic scroll through it. Set by
 * `SmoothScroll`; `null` when smooth scrolling is off (reduced motion), in which
 * case helpers fall back to native scroll.
 */
let instance: Lenis | null = null;

export function setLenis(next: Lenis | null) {
  instance = next;
}

/** Lock page scrolling (e.g. while a full-screen menu is open) — stops Lenis
 *  and the native scroll. Call `unlockScroll` to restore. */
export function lockScroll() {
  instance?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function unlockScroll() {
  instance?.start();
  document.documentElement.style.overflow = "";
}

/** Scroll the window to the very bottom, through Lenis when it's active. */
export function scrollToBottom(immediate = true) {
  if (instance) {
    // Lenis caches the scrollable height (ResizeObserver, a frame behind), so it
    // would clamp to the pre-growth bottom while the footer panel is expanding.
    // Recompute first so the target is the *current* bottom.
    instance.resize();
  }
  const y = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  if (instance) instance.scrollTo(y, { immediate });
  else window.scrollTo(0, y);
}
