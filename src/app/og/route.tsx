import { ImageResponse } from "next/og";

import { ogFonts, WORDMARK_DATA_URI } from "@/lib/og-assets";

// Dynamic Open Graph image (1200×630) — the brand's paper surface with the
// centered "always art" wordmark and a single-line title. Built from query
// params by src/lib/og.ts (?t=<title>), which buildMetadata calls for every
// page. Node runtime (cacheComponents forbids a `runtime` export); output is
// immutable per-URL and cached hard at the CDN.

const PAPER = "#F0EFEA";
const MUTED = "rgba(45,45,45,0.6)";

export async function GET(request: Request): Promise<Response> {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("t") || "Infrastructure for the art world.").slice(0, 90);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          padding: 80,
          backgroundColor: PAPER,
          textAlign: "center",
        }}
      >
        {/* Actual "always art" wordmark logo (SVG). */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={WORDMARK_DATA_URI} alt="always art" width={392} height={128} />
        <div
          style={{
            display: "flex",
            marginTop: 32,
            maxWidth: 900,
            fontFamily: "PP Mori",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.3,
            color: MUTED,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: ogFonts,
      headers: {
        "Cache-Control": "public, immutable, no-transform, max-age=31536000",
      },
    },
  );
}
