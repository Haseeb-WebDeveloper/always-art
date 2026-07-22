/**
 * Static, import-anywhere site config. No DB / no env-at-module-load beyond the
 * public base URL, so it's safe in pages, the data layer, metadata and sitemaps.
 */
export const siteConfig = {
  name: "AlwaysArt",
  description: "AlwaysArt — powered by Figmenta.",
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://alwaysart.com).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og.png",
  locale: "en_US",
  links: {
    instagram: "",
    x: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
