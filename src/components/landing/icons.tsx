import type { SVGProps } from "react";

/** Thin horizontal arrow — used in CTAs, section links and carousel controls. */
export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 5h13.5M9.5 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Eight-point asterisk — the brand system mark. Used as timeline markers. */
export function Asterisk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" aria-hidden="true" {...props}>
      <path
        d="M5.4 2.326 7.045.682 8.318 1.954 6.672 3.6H9v1.8H6.674l1.644 1.645-1.272 1.273L5.4 6.672V9H3.6V6.672L1.954 8.318.682 7.045 2.326 5.4H0V3.6h2.328L.682 1.954 1.955.682 3.6 2.326V0h1.8z"
        fill="currentColor"
      />
    </svg>
  );
}
