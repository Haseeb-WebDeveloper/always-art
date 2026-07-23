import { cn } from "@/lib/utils";

/** The five artboard columns used by most landing blocks and every subpage. */
export const FIVE_COL = [
  "16.6667%",
  "33.3333%",
  "50%",
  "66.6667%",
  "83.3333%",
];

/**
 * Landing per-block guides — desktop-only vertical dashed columns at the exact
 * positions the reference uses for that block (the landing's positions vary
 * block to block, and several blocks show none at all). Render as a direct
 * child of a `relative` block; the global `:has(> .guides)` rule isolates the
 * host so the lines sit behind its content but above its background. Pass `dim`
 * on dark bands, and `bottom` (px) to cap the lines short of the block's end.
 * Purely decorative: aria-hidden, pointer-events:none. Hidden below lg.
 */
export function SectionGuides({
  lines,
  dim = false,
  bottom,
}: {
  lines: string[];
  dim?: boolean;
  bottom?: number;
}) {
  return (
    <div
      className={cn("guides", dim && "guides-dim")}
      aria-hidden="true"
      style={bottom !== undefined ? { bottom } : undefined}
    >
      {lines.map((left, i) => (
        <span key={i} style={{ left }} />
      ))}
    </div>
  );
}

/**
 * Figma layout guides — the faint vertical dashed columns that run down each
 * band on the reference site. Render as a direct child of a `relative` element
 * (a `<main>` or a coloured `<section>`); a global `:has(> .page-guides)` rule
 * isolates that host so the guides sit behind its content but above its own
 * background. Two responsive variants are emitted — 4 lines on phones, the 5
 * artboard columns from sm up — and CSS shows the right one per breakpoint.
 *
 * Pass `dim` on dark (ink) bands so the lines drop back to 15% like the
 * reference. Purely decorative: aria-hidden and pointer-events:none.
 */
export function PageGuides({ dim = false }: { dim?: boolean }) {
  return (
    <>
      <div
        className={cn("page-guides pg-mobile", dim && "guides-dim")}
        aria-hidden="true"
      >
        <span style={{ left: 0 }} />
        <span style={{ left: "33.3333%" }} />
        <span style={{ left: "66.6667%" }} />
        <span style={{ left: "calc(100% - 1px)" }} />
      </div>
      <div
        className={cn("page-guides pg-desktop", dim && "guides-dim")}
        aria-hidden="true"
      >
        <span style={{ left: "16.6667%" }} />
        <span style={{ left: "33.3333%" }} />
        <span style={{ left: "50%" }} />
        <span style={{ left: "66.6667%" }} />
        <span style={{ left: "83.3333%" }} />
      </div>
    </>
  );
}
