import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SanityLive } from "@/sanity/live";
import { financier, ppMori } from "@/style/font";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased font-sans", financier.variable, ppMori.variable)}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <SanityLive />
      </body>
    </html>
  );
}
