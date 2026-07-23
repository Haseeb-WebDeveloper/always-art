import type { Metadata } from "next";

import { siteConfig } from "@/lib/config/site";
import { ogImageUrl } from "@/lib/og";

/**
 * Build a Next `Metadata` object from a page's title/description, filled out
 * with sensible Open Graph / Twitter defaults + a dynamic OG image (rendered by
 * `src/app/og/route.tsx` from the title/eyebrow). Use in a route's
 * `generateMetadata` or exported `metadata`.
 *
 *   export const metadata = buildMetadata({
 *     title: "How It Works",
 *     eyebrow: "How It Works",
 *     description: "…",
 *   });
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  eyebrow,
  image,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  /** Uppercase eyebrow shown above the title on the OG image. */
  eyebrow?: string;
  /** Override the OG image URL (defaults to the dynamic /og card). */
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.name;

  const ogImage =
    image ??
    ogImageUrl({
      title: title ?? "Infrastructure for the art world.",
      eyebrow,
    });

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
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
