/** App-wide constants. Keep values that are referenced in more than one place. */

/** Canonical route paths — import instead of hardcoding strings in links. */
export const ROUTES = {
  home: "/",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];
