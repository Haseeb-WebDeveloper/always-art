/**
 * Centralized cache-tag registry.
 *
 * One place to define every tag used with Next's `cacheTag()` / `updateTag()`
 * (from `next/cache`), so a read and the mutation that invalidates it never
 * drift apart on a stringly-typed tag.
 *
 * IMPORTANT — this is for NON-Sanity data (databases, external APIs, server
 * actions). Sanity reads via `sanityFetch` (see `src/lib/data/*`) auto-tag
 * themselves with Sanity syncTags and are revalidated by `<SanityLive />`, so
 * you do NOT add manual tags for those.
 *
 * Usage:
 *   // in a "use cache" read
 *   import { cacheLife, cacheTag } from "next/cache";
 *   cacheLife("standard");
 *   cacheTag(TAGS.posts, TAGS.post(slug));
 *
 *   // in the server action / route that mutates it
 *   import { updateTag } from "next/cache";
 *   updateTag(TAGS.post(slug));
 */
export const TAGS = {
  /** Everything. Nuclear option — use sparingly. */
  all: "all",
  /** Collection of posts (index, lists). */
  posts: "posts",
  /** A single post by slug. */
  post: (slug: string) => `post:${slug}`,
  /** Global site settings singleton. */
  settings: "settings",
} as const;

/**
 * Named `cacheLife` profiles declared in `next.config.ts`. Use the union for
 * type-safe profile references instead of bare strings.
 */
export type CacheProfile = "static" | "standard" | "live";
