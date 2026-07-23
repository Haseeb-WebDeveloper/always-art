import Image from "next/image";

import { buildMetadata } from "@/lib/seo/metadata";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { PageHero } from "@/components/landing/page-hero";
import { CtaBand } from "@/components/landing/cta-band";
import { PageGuides } from "@/components/landing/page-guides";
import { MarketplacesDiagram } from "@/components/landing/diagrams";

export const metadata = buildMetadata({
  title: "How It Works",
  eyebrow: "How It Works",
  path: "/how-it-works",
  description:
    "One record, built once and extended forever. Everything begins with a single record for a single work; every tool, sale and loan sits on top of it.",
});

const RECORD_ROWS = [
  {
    label: "Provenance",
    value: "Studio → Art Basel → Private collection",
    sub: "6 transfers, each documented",
  },
  {
    label: "Exhibition",
    value: "Foundation H, 2024",
    sub: "Wall text · catalogue entry · loan agreement",
  },
  {
    label: "Condition",
    value: "Stable · last surveyed 11 May 2026",
    sub: "Conservator: A. Marotta",
  },
  {
    label: "Authenticity",
    value: "Verified at source",
    sub: "Certificate linked · originating studio",
  },
  {
    label: "Ownership",
    value: "Held, private",
    sub: "Shared only with permission",
  },
];

const OS_STEPS = [
  {
    n: "01",
    title: "Run",
    lead: "Operate your practice.",
    body: "Operations, inventory, pipeline, linked accounts, ownership transfer, on records you own.",
  },
  {
    n: "02",
    title: "Reach",
    lead: "Extend beyond your walls.",
    body: "Viewing rooms, showcases, subscriber networks. Audiences built on your terms, not an algorithm's.",
  },
  {
    n: "03",
    title: "Connect",
    lead: "Build relationships that persist.",
    body: "Artist, gallery, collector, fair, and institution portals, linked by the record and compounding over time.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <PageGuides />
        <PageHero
          eyebrow="How It Works"
          title="One record. Built once, extended forever."
          subtitle="Everything begins with a single record for a single work. It takes minutes to create and lasts indefinitely. The tools each role uses sit on top of it. So does every relationship, every sale, every loan. Here is what that actually looks like."
        />

        {/* The Art Record */}
        <section className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
          <div className="text-center">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
              The Art Record
            </p>
            <h2 className="reveal mx-auto mt-6 max-w-[720px] display-heading text-[30px] sm:text-[44px] lg:mt-6 lg:text-[56px]">
              Everything known about a work, in one place.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-[60px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[70px]">
            <div className="reveal">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-hairline/40">
                <Image
                  src="/images/art-oil-portrait.webp"
                  alt="A painted portrait."
                  fill
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-micro font-semibold uppercase tracking-[0.08em] text-foreground/45">
                After a portrait · AA·00041 · recto
              </p>
            </div>

            <dl className="reveal border-t border-hairline">
              {RECORD_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-1 py-5 sm:grid-cols-[150px_1fr] sm:items-baseline sm:gap-8 sm:py-6 ${
                    i < RECORD_ROWS.length - 1 ? "border-b border-dashed border-hairline" : ""
                  }`}
                >
                  <dt className="text-micro font-semibold uppercase tracking-[0.08em] text-foreground/50">
                    {row.label}
                  </dt>
                  <dd>
                    <p className="font-display text-[18px] leading-6 lg:text-lead">{row.value}</p>
                    <p className="mt-1 text-[14px]  text-foreground/55">{row.sub}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="reveal mx-auto mt-10 max-w-[680px] text-center text-[16px] leading-6 text-foreground/60 lg:mt-12 lg:text-body">
            Every role contributes to the same record. The gallery adds exhibition
            context, the collector documents acquisition, the conservator logs
            condition, the institution records a loan.
          </p>
        </section>

        {/* How the record earns its authority */}
        <section className="relative bg-white text-ink">
          <PageGuides />
          <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-[70px]">
              <div className="reveal relative min-h-[320px] overflow-hidden bg-hairline/40 lg:min-h-[520px]">
                <Image
                  src="/images/art-print-held.webp"
                  alt="White-gloved hands holding a framed work."
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="reveal flex flex-col justify-center">
                <p className="text-label font-semibold uppercase tracking-[0.12em] text-ink/50">
                  How the record earns its authority
                </p>
                <h2 className="mt-6 display-heading text-[34px] sm:text-[48px]">
                  Cumulative, not corrective.
                </h2>
                <p className="mt-6 text-[16px] leading-6 text-ink/70 lg:text-body">
                  A record here isn&rsquo;t declared true at creation and defended
                  by one authority. It accumulates. Every documented hand a work
                  passes through adds weight, and a history built that way becomes
                  hard to contradict, not because someone guards it, but because
                  many independent sources corroborate it.
                </p>
                <p className="mt-5 text-[16px] leading-6 text-ink/70 lg:text-body">
                  Records can merge, link, and strengthen over time. Conflicting
                  claims stay visible instead of being overwritten. Gaps stay
                  legible instead of hidden. Nothing is quietly revised away, which
                  is precisely what makes misrepresentation hard to sustain. The
                  record becomes the evidence.
                </p>
                <div className="mt-8 border-t border-dashed border-hairline pt-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-ink/55">
                    Studio → Art Basel → Private collection → Conservation →
                    Foundation H
                  </p>
                  <p className="mt-1.5 text-[13px] text-ink/45">6 transfers, each documented</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Operating System */}
        <section className="relative bg-ink text-paper">
          <PageGuides dim />
          <div className="container-aa pb-16 pt-16 lg:pb-[110px] lg:pt-[110px]">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-paper/60">
              The Operating System
            </p>
            <h2 className="reveal mt-6 max-w-[900px] display-heading text-[34px] sm:text-[48px] lg:mt-8 lg:text-[56px]">
              Run. Reach. Connect. <br /> One source beneath all three.
            </h2>

            <ol className="reveal mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:mt-[70px] lg:gap-10">
              {OS_STEPS.map((step) => (
                <li key={step.n}>
                  <div className="h-px bg-paper/20" />
                  <p className="mt-6 font-display text-[40px] leading-none text-mist lg:mt-8">
                    {step.n}
                  </p>
                  <h3 className="mt-6 font-display text-[24px] leading-7 lg:text-lead">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-semibold leading-6">{step.lead}</p>
                  <p className="mt-3 text-[15px] leading-[22px] text-paper/55">{step.body}</p>
                </li>
              ))}
            </ol>

            <p className="reveal mt-12 max-w-[680px] text-[16px] leading-6 text-paper/55 lg:mt-16 lg:text-body">
              Free and complete for every role. Not a trial, not a reduced tier. If
              a capability is essential to doing the work, it&rsquo;s included.
            </p>
          </div>
        </section>

        {/* Marketplaces */}
        <section className="relative bg-white text-ink">
          <PageGuides />
          <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[80px]">
              <div className="reveal">
                <p className="text-label font-semibold uppercase tracking-[0.12em] text-ink/50">
                  Marketplaces
                </p>
                <h2 className="mt-6 display-heading text-[34px] sm:text-[48px]">
                  Belong to the people who form them.
                </h2>
                <p className="mt-6 text-[16px] leading-6 text-ink/70 lg:text-body">
                  A marketplace here isn&rsquo;t a platform we own. It&rsquo;s a
                  space created and owned by its participants, a gallery offering
                  work to its collectors, a fair building a discovery experience, a
                  group of artists organizing around a region. A marketplace of one
                  is as valid as a marketplace of thousands. Each is a presentation
                  layer; the records and relationships stay in each
                  participant&rsquo;s own portal.
                </p>
                <p className="mt-5 text-[16px] leading-6 text-ink/70 lg:text-body">
                  You can join several at once, or leave, without duplicating
                  records or fragmenting relationships. Because the record is shared
                  and neutral, no marketplace owns provenance or history. They
                  compete on trust, care, and relevance, and they succeed because
                  participants choose them, not because leaving is costly.
                </p>
              </div>
              <div className="reveal flex justify-center">
                <MarketplacesDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* How we sustain it */}
        <section className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[60px]">
            <div className="reveal flex flex-col justify-center bg-sage p-8 text-paper lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-70">
                Below the line
              </p>
              <p className="mt-4 display-heading text-[40px] lg:text-[56px]">Free. Permanently.</p>
              <p className="mt-6 text-[15px] leading-6 opacity-85">
                The record and the essential tools — documenting, running,
                connecting. Access is never charged.
              </p>
            </div>
            <div className="reveal flex flex-col justify-center">
              <p className="text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
                How we sustain it · The sixth condition
              </p>
              <h2 className="mt-6 display-heading text-[32px] sm:text-[44px]">
                Revenue lives above the foundation. Never inside it.
              </h2>
              <p className="mt-6 text-[16px] leading-6 text-foreground/70 lg:text-body">
                Real infrastructure has to meet a hard condition: revenue can never
                come from restricting access. So here it doesn&rsquo;t. The record
                and the essential tools stay free, permanently. What sustains the
                foundation sits above it, chosen by participants who want efficiency
                and scale, never charged for entry.
              </p>
              <p className="mt-5 text-[16px] leading-6 text-foreground/70 lg:text-body">
                A gallery automates a show, catalogs, collector outreach, interest
                lists, follow-ups, and wins back the hours a show usually eats. An
                estate coordinates print at rates no single estate could negotiate
                alone. Anyone growing reaches for analytics and planning that turn
                scattered records into clear decisions. A small fee applies only to
                sales completed through the infrastructure, never to the daily work
                of documenting, running, or connecting.
              </p>
            </div>
          </div>

          <p className="reveal mx-auto mt-12 max-w-[620px] text-center font-display text-[22px] leading-[30px] lg:mt-14 lg:text-[26px] lg:leading-[34px]">
            Those who need more pay for more. Everyone else keeps everything they
            need, for nothing. The foundation stays free. Always.
          </p>
        </section>

        <CtaBand
          title="It starts with a single record."
          subtitle="Minutes to create. No approval, no migration, no waiting on anyone else to join. Everything else builds from there."
        />
      </main>
      <SiteFooter />
    </>
  );
}
