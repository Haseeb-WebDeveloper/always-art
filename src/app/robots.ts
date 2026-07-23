import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /style-guide is a noindex internal reference page.
      disallow: ["/style-guide"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
