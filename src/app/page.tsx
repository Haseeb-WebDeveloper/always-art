import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { RolesSection } from "@/components/landing/roles-section";
import { InfrastructureStats } from "@/components/landing/infrastructure-stats";
import { ArtRecord } from "@/components/landing/art-record";
import { Foundation } from "@/components/landing/foundation";
import { HowItSustains } from "@/components/landing/how-it-sustains";
import { ArtTools } from "@/components/landing/art-tools";
import { SiteFooter } from "@/components/landing/site-footer";

export const metadata = buildMetadata({
  description:
    "Infrastructure for the art world. Complete free tools for every role, built on one permanent shared record that stays yours.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.name,
      legalName: "Always Art PBC",
      url: siteConfig.url,
      description: siteConfig.description,
      slogan: "Documented once. Accessible forever.",
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <RolesSection />
        <InfrastructureStats />
        <ArtRecord />
        <Foundation />
        <HowItSustains />
        <ArtTools />
      </main>
      <SiteFooter />
    </>
  );
}
