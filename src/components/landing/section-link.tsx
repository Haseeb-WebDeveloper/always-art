import Link from "next/link";

import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

type Accent = "slate" | "clay" | "mist" | "ink";

const ACCENT_BAR: Record<Accent, string> = {
  slate: "bg-slate",
  clay: "bg-clay",
  mist: "bg-mist",
  ink: "bg-ink",
};

/**
 * Editorial text link — an uppercase label over a thick accent underline that
 * wipes to ink (or paper) on hover, with a trailing arrow. The two bars share
 * the same box: the accent is the static base, the wipe scales in over it.
 */
export function SectionLink({
  href,
  children,
  accent = "slate",
  wipe = "ink",
  className,
}: {
  href: string;
  children: React.ReactNode;
  accent?: Accent;
  /** Colour the underline wipes to on hover — ink on light, paper on dark. */
  wipe?: "ink" | "paper";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-end gap-3 text-[14px] font-semibold uppercase tracking-[0.04em]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
        className,
      )}
    >
      <span className="relative whitespace-nowrap pb-[19px]">
        {children}
        <span
          className={cn("absolute inset-x-0 bottom-0 h-[5px]", ACCENT_BAR[accent])}
        />
        <span
          className={cn(
            "absolute inset-x-0 bottom-0 h-[5px] origin-left scale-x-0 transition-transform duration-300 ease-aa",
            "group-hover:scale-x-100 group-focus-visible:scale-x-100",
            wipe === "paper" ? "bg-paper" : "bg-ink",
          )}
        />
      </span>
      <ArrowRight className="mb-[19px] shrink-0" />
    </Link>
  );
}
