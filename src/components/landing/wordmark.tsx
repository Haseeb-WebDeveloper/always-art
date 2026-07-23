import Link from "next/link";

import { cn } from "@/lib/utils";
import { SVGIcon } from "@/components/ui/svg-icon";

/**
 * The Always Art wordmark logo. Rendered via SVGIcon in mask mode, so a single
 * SVG takes the current text colour — ink on light surfaces (default), paper on
 * dark (pass `className="text-paper"`). No separate on-light/on-dark files.
 */
export function Wordmark({
  className,
  size = "h-8 lg:h-11",
}: {
  /** Applied to the link — use for colour (e.g. `text-paper`) and positioning. */
  className?: string;
  /** Height utility classes for the logo (aspect ratio is fixed). */
  size?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Always Art — home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <SVGIcon
        src="/logo/logo-wordmark.svg"
        className={cn("aspect-[166/54]", size)}
      />
    </Link>
  );
}
