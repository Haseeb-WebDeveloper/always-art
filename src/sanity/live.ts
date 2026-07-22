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

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ apiVersion }),
  serverToken: process.env.SANITY_API_READ_TOKEN,
  browserToken: process.env.SANITY_API_READ_TOKEN,
});
