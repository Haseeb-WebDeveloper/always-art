import localFont from "next/font/local";

/**
 * Brand fonts (self-hosted, from the Always Art brand guidelines).
 *
 * - `financier` — Financier Display (Klim Type Foundry). The DISPLAY / editorial
 *   serif: headlines, the "always art" wordmark, pull quotes. Exposed as
 *   `--font-display` → Tailwind `font-display` / `font-serif`.
 * - `ppMori` — PP Mori (Pangram Pangram). The BODY / UI sans. Exposed as
 *   `--font-sans` → Tailwind `font-sans` (the document default).
 *
 * Documented substitutes (per the guidelines) are EB Garamond (for Financier)
 * and Manrope (for PP Mori); the CSS fallback stacks below approximate them.
 *
 * NOTE: the Financier files are the foundry's trial ("Test") release — swap for
 * the licensed weights before production, keeping the same family variable.
 */
export const financier = localFont({
  variable: "--font-display",
  display: "swap",
  fallback: ["EB Garamond", "Georgia", "serif"],
  src: [
    { path: "./fonts/test-financier-display-300.otf", weight: "300", style: "normal" },
    { path: "./fonts/test-financier-display-300-italic.otf", weight: "300", style: "italic" },
    { path: "./fonts/test-financier-display-400.otf", weight: "400", style: "normal" },
    { path: "./fonts/test-financier-display-500.otf", weight: "500", style: "normal" },
    { path: "./fonts/test-financier-display-600.otf", weight: "600", style: "normal" },
    { path: "./fonts/test-financier-display-700.otf", weight: "700", style: "normal" },
  ],
});

export const ppMori = localFont({
  variable: "--font-sans",
  display: "swap",
  fallback: ["Manrope", "-apple-system", "Segoe UI", "sans-serif"],
  src: [
    { path: "./fonts/pp-mori-200.otf", weight: "200", style: "normal" },
    { path: "./fonts/pp-mori-200-italic.otf", weight: "200", style: "italic" },
    { path: "./fonts/pp-mori-400.otf", weight: "400", style: "normal" },
    { path: "./fonts/pp-mori-400-italic.otf", weight: "400", style: "italic" },
    { path: "./fonts/pp-mori-600.otf", weight: "600", style: "normal" },
    { path: "./fonts/pp-mori-600-italic.otf", weight: "600", style: "italic" },
  ],
});
