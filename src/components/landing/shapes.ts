import type { CSSProperties } from "react";

/**
 * Brand shape masks — the asterisk and hexframe from the iconography system,
 * used to crop imagery. Defined once here so the section components stay clean.
 */

/** Eight-point asterisk star (clip-path polygon). */
export const asteriskClip: CSSProperties = {
  clipPath:
    "polygon(60% 25.858%, 78.284% 7.573%, 92.427% 21.716%, 74.142% 40%, 100% 40%, 100% 60%, 74.142% 60%, 92.426% 78.284%, 78.284% 92.426%, 60% 74.142%, 60% 100%, 40% 100%, 40% 74.142%, 21.716% 92.427%, 7.573% 78.284%, 25.858% 60%, 0% 60%, 0% 40%, 25.857% 40%, 7.573% 21.715%, 21.715% 7.573%, 40% 25.858%, 40% 0%, 60% 0%)",
};

/** Regular hexagon, point up (clip-path polygon). */
export const hexClip: CSSProperties = {
  clipPath: "polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)",
};

/** Square with a circular hole punched through the centre (radial mask). */
export const ringMask: CSSProperties = {
  WebkitMaskImage:
    "radial-gradient(circle closest-side at 50% 50%, transparent 62%, #000 62%)",
  maskImage:
    "radial-gradient(circle closest-side at 50% 50%, transparent 62%, #000 62%)",
};
