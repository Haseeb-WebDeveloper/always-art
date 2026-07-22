import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";
import { ArrowRight } from "./icons";

type CtaButtonProps = ComponentProps<typeof Link> & {
  /** Show the trailing arrow (pushed to the right edge). */
  withArrow?: boolean;
};

/**
 * Primary call to action — the brand gradient (slate → sage → clay) that slides
 * across on hover. Renders as a Next `Link`; pass `href`.
 */
export function CtaButton({
  className,
  children,
  withArrow = false,
  ...props
}: CtaButtonProps) {
  return (
    <Link
      className={cn(
        "btn-gradient h-[50px] gap-3 px-5 text-label font-semibold uppercase tracking-[0.04em]",
        withArrow ? "justify-start" : "justify-center",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        className,
      )}
      {...props}
    >
      <span className="whitespace-nowrap">{children}</span>
      {withArrow && <ArrowRight className="ml-auto shrink-0" />}
    </Link>
  );
}
