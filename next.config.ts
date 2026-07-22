import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Enables the "use cache" directive used by the Sanity Live Content API
  // (`sanityFetch` inside `"use cache"` functions) + PPR.
  cacheComponents: true,

  // Named cache profiles - reference by name in `cacheLife("standard")`.
  // Sanity Live reads self-tag and revalidate, so these are for NON-Sanity
  // data (databases, external APIs) tagged via `src/lib/cache/tags.ts`.
  cacheLife: {
    // Rarely changes: marketing copy, config, static content.
    static: {
      stale: 60 * 60 * 24 * 7, // 7 days client-side
      revalidate: 60 * 60 * 24, // recheck once/day
      expire: 60 * 60 * 24 * 30, // max 30 days
    },
    // Updates occasionally.
    standard: {
      stale: 60, // 1 min client
      revalidate: 300, // recheck every 5 min
      expire: 3600, // max 1 hour
    },
    // Updates frequently.
    live: {
      stale: 10,
      revalidate: 30,
      expire: 60,
    },
  },

  // Pin the workspace root. studio-alwaysart/ ships its own package.json, which
  // can make Next/Turbopack mis-infer the monorepo root. Anchoring it here keeps
  // dev stable.
  turbopack: {
    root: path.resolve("."),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
