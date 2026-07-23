// Shared assets for the dynamic social-image route (src/app/og/route.tsx).
// Read once here at module load (Node runtime — cacheComponents forbids an edge
// `runtime` export) so the route doesn't re-read the fonts on every render.
//
// Satori (next/og) accepts OTF/TTF/WOFF (not WOFF2), so the brand's .otf files
// are used directly. Financier Display is the trial ("Test") release; swap for
// the licensed weights before production, keeping the same family name.

import { readFileSync } from "node:fs";
import { join } from "node:path";

const FONT_DIR = join(process.cwd(), "src/style/fonts");

// The actual "always art" wordmark logo, as an SVG data URI for <img> inside
// ImageResponse (satori renders inline SVG data URIs).
const wordmarkSvg = readFileSync(
  join(process.cwd(), "public/logo/logo-wordmark.svg"),
);
export const WORDMARK_DATA_URI = `data:image/svg+xml;base64,${wordmarkSvg.toString("base64")}`;

const financierLight = readFileSync(join(FONT_DIR, "test-financier-display-300.otf"));
const financierRegular = readFileSync(join(FONT_DIR, "test-financier-display-400.otf"));
const ppMoriRegular = readFileSync(join(FONT_DIR, "pp-mori-400.otf"));
const ppMoriSemibold = readFileSync(join(FONT_DIR, "pp-mori-600.otf"));

/** Font set passed straight into ImageResponse's `fonts` option. */
export const ogFonts = [
  { name: "Financier", data: financierLight, weight: 300 as const, style: "normal" as const },
  { name: "Financier", data: financierRegular, weight: 400 as const, style: "normal" as const },
  { name: "PP Mori", data: ppMoriRegular, weight: 400 as const, style: "normal" as const },
  { name: "PP Mori", data: ppMoriSemibold, weight: 600 as const, style: "normal" as const },
];
