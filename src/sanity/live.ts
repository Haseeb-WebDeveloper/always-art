// Live Content API - real-time content via Next.js Cache Components.
// Requires <SanityLive /> in the root layout and `cacheComponents: true` in
// next.config. `sanityFetch` must be called inside a `"use cache"` function:
// there it auto-tags results with Sanity syncTags, and <SanityLive /> revalidates
// them on content change (no webhook needed).
//
// A public production dataset means published reads are tokenless (served from
// the CDN, fastest). The token below is only needed for draft preview
// (Presentation / Visual Editing) when that is enabled later.
import { defineLive } from "next-sanity/live";

import { apiVersion } from "./env";
import { client } from "./client";

// `?? false` silences next-sanity's "no token" warnings while the token is
// unset (published content still fetches + responds to live events). Add a
// Viewer-rights token to SANITY_API_READ_TOKEN and draft preview lights up
// automatically. The browser token is shared with the client, so it must never
// exceed Viewer rights.
const readToken = process.env.SANITY_API_READ_TOKEN ?? false;

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion }),
  serverToken: readToken,
  browserToken: readToken,
});
