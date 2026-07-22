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

/** Scroll the window to the very bottom, through Lenis when it's active. */
export function scrollToBottom(immediate = true) {
  const y = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  if (instance) instance.scrollTo(y, { immediate });
  else window.scrollTo(0, y);
}
