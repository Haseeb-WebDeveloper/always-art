// Data-access layer (server-only reads).
//
// The pattern, mirrored from the reference project:
//   - Wrap each read in a `"use cache"` function (cacheComponents is on).
//   - For Sanity, call `sanityFetch` inside that scope: it auto-tags the result
//     with Sanity syncTags and `<SanityLive />` revalidates on content change —
//     no manual `cacheTag` / webhook needed.
//   - Apply the TypeGen result type at this single boundary so every consumer
//     (pages, components) gets fully-typed data.
//
// For NON-Sanity sources (DB, external APIs) add `cacheLife(...)` + `cacheTag(...)`
// from `next/cache` using the tags in `src/lib/cache/tags.ts`, and invalidate
// with `updateTag(...)` from the mutating action.
import { sanityFetch } from "@/sanity/live";
import { SETTINGS_QUERY } from "@/sanity/queries";
import type { SETTINGS_QUERY_RESULT } from "@/sanity.types";

/** Global site settings singleton. `null` until a `settings` type + doc exist. */
export async function getSettings(): Promise<SETTINGS_QUERY_RESULT> {
  "use cache";
  const { data } = await sanityFetch({ query: SETTINGS_QUERY });
  return data;
}
