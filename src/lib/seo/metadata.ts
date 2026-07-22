import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";

/**
 * Build a Next `Metadata` object from a page's title/description, filled out
 * with sensible Open Graph / Twitter defaults from `siteConfig`. Use in a
 * route's `generateMetadata` or exported `metadata`.
 *
 *   export const metadata = buildMetadata({
 *     title: "About",
 *     description: "Who we are.",
 *   });
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.name;

  return {
    metadataBase: new URL(siteConfig.url),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      url,
      locale: siteConfig.locale,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
