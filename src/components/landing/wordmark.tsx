import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * The "always art" logotype + corporate descriptor. Always lowercase, set in
 * Financier Display (`font-display`), per the brand guidelines. Rendered as text
 * (not an image) so it stays crisp and accessible at every size.
 */
export function Wordmark({
  className,
  descriptor = true,
}: {
  className?: string;
  descriptor?: boolean;
}) {
  return (
    <Link href="/" className={cn("block shrink-0", className)} aria-label="Always Art — home">
      <span className="block font-display text-[26px] font-light leading-none sm:text-[30px]">
        always art
      </span>
      {descriptor && (
        <span className="mt-[7px] block text-[11px] font-semibold uppercase leading-none tracking-[0.05em] opacity-60">
          A Public Benefit Corporation
        </span>
      )}
    </Link>
  );
}
