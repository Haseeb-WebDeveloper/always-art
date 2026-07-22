import { Geist, Geist_Mono, Inter } from "next/font/google";

/**
 * Platform fonts. Centralized here so the layout stays clean and other entry
 * points (e.g. OG image routes) can reuse the same instances.
 *
 * The CSS variables are attached to <html> in `src/app/layout.tsx` and wired
 * into the Tailwind theme in `src/app/globals.css`:
 *   --font-sans (Inter)  -> `font-sans`
 *   --font-geist-mono    -> `font-mono`
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
