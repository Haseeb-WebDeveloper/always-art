/**
 * Brand design tokens as TypeScript constants.
 *
 * The CSS in `src/app/globals.css` is the source of truth for styling; this
 * mirrors the same values for places that need them in JS — OG image routes,
 * chart configs, canvas rendering, emails — where CSS variables aren't available.
 * Keep the two in sync.
 */

/** Core palette (resolved from the Always Art brand guidelines + prototype). */
export const COLORS = {
  paper: "#F0EFEA", // Default surface. ~80% of the system.
  ink: "#2D2D2D", // Primary text / dark surface.
  slate: "#5E6B80", // Cool secondary. Long-form surfaces.
  sage: "#627B70", // Quiet accent. Used sparingly.
  clay: "#867165", // Warm secondary. Editorial accent.
  mist: "#ABBFB6", // The single soft accent (light sage).
  hairline: "#CCC6C4", // Rules, borders.
} as const;

export type ColorName = keyof typeof COLORS;

/** Type scale from the 1440px artboard: [fontSize, lineHeight] in px. */
export const TYPE_SCALE = {
  micro: [11, 17],
  label: [13, 13],
  body: [18, 22],
  "serif-body": [22, 28],
  lead: [26, 30],
  stat: [40, 48],
  "h2-sm": [56, 60],
  h2: [80, 88],
  h1: [100, 104],
  display: [200, 200],
} as const satisfies Record<string, readonly [number, number]>;

export type TypeStep = keyof typeof TYPE_SCALE;

/** The single brand easing curve (matches `--ease-aa`). */
export const EASE_AA = "cubic-bezier(0.2, 0.8, 0.2, 1)";

/** Artboard width — the design canvas cap (matches `--container-canvas`). */
export const CANVAS_WIDTH = 1440;
