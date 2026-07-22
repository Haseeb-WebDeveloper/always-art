/**
 * Shared, app-wide TypeScript types.
 *
 * Sanity content types are generated — import those from `@/sanity.types`
 * (e.g. `POST_QUERY_RESULT`), not here. This file is for hand-written types
 * used across features.
 */

/** A value that may still be loading / absent. */
export type Nullable<T> = T | null | undefined;

/** Make the listed keys of T required (non-optional, non-null). */
export type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: NonNullable<T[P]>;
};
