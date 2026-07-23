import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

/** Public, indexable routes. Set NEXT_PUBLIC_SITE_URL in production so the URLs
 *  are absolute and correct (defaults to localhost otherwise). */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/for-every-role", "/how-it-works", "/why-always-art"];
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
