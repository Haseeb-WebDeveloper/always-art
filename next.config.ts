import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Enables the "use cache" directive used by the Sanity Live Content API
  // (`sanityFetch` inside `"use cache"` functions) + PPR.
  cacheComponents: true,

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
