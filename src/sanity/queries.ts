import { defineQuery } from "next-sanity";

/**
 * GROQ queries. Wrap every query in `defineQuery` so TypeGen can emit a typed
 * result (run `pnpm sanity:typegen` after adding queries or changing the schema).
 *
 * Plumbing-only setup: no document types exist yet, so there are no real queries.
 * `SETTINGS_QUERY` below is a harmless placeholder that keeps this file (and the
 * TypeGen pipeline) exercised. Replace it with your own queries as the schema
 * grows, e.g.:
 *
 *   export const PAGE_QUERY = defineQuery(`
 *     *[_type == "page" && slug.current == $slug][0]{ _id, title, body }
 *   `);
 */
export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0]`);
