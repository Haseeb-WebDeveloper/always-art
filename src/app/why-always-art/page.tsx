import Image from "next/image";

import { buildMetadata } from "@/lib/seo/metadata";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { PageHero } from "@/components/landing/page-hero";
import { CtaBand } from "@/components/landing/cta-band";
import { TrustDiagram } from "@/components/landing/diagrams";

export const metadata = buildMetadata({
  title: "Why Always Art",
  description:
    "A foundation is only as good as what keeps it one. Not what we promise — what we built to make the promise binding.",
});

// The three structural guarantees, each with a small line icon.
const BINDING = [
  {
    title: "Public benefit corporation",
    body: "Stewardship is a legal duty owed by leadership, one that doesn't leave when they do. Incorporated 2024.",
    icon: (
      <>
        <path d="M17 3 L29 8 V17 C29 24 24 29 17 31 C10 29 5 24 5 17 V8 Z" stroke="#627B70" strokeWidth="1.3" />
        <path d="M12 17 l4 4 l7 -8" stroke="#627B70" strokeWidth="1.3" />
      </>
    ),
  },
  {
    title: "Code in escrow",
    body: "Independent trustees hold the code. If the foundation is ever gated or the company winds down, it releases. The record outlives us.",
    icon: (
      <>
        <rect x="7" y="15" width="20" height="15" rx="2" stroke="#627B70" strokeWidth="1.3" />
        <path d="M11 15 V11 a6 6 0 0 1 12 0 V15" stroke="#627B70" strokeWidth="1.3" />
        <circle cx="17" cy="22" r="2" fill="#627B70" />
      </>
    ),
  },
  {
    title: "Participant-owned data",
    body: "Your records and relationships are yours in the structure itself, never convertible into our leverage. Leave, and they go with you.",
    icon: (
      <>
        <rect x="8" y="6" width="18" height="13" rx="2" stroke="#627B70" strokeWidth="1.3" />
        <path d="M6 30 c2 -6 7 -8 11 -8 c4 0 9 2 11 8" stroke="#627B70" strokeWidth="1.3" />
        <circle cx="17" cy="12" r="2.2" fill="#627B70" />
      </>
    ),
  },
];

export default function WhyAlwaysArtPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="Why Always Art"
          title="A foundation is only as good as what keeps it one."
          subtitle="Anything can be free on the day it launches. What matters is whether it stays that way once it holds something worth enclosing. So the question isn't what we promise. It's what we built to make the promise binding."
        />

        {/* We provide the ground, not the outcome */}
        <section className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-[70px]">
            <div className="reveal relative min-h-[320px] overflow-hidden bg-hairline/40">
              <Image
                src="/images/archive-table.webp"
                alt="A framed work at the centre of a table, archival folios each tied to it by an equal ribbon."
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="reveal flex flex-col justify-center">
              <p className="text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
                We provide the ground, not the outcome
              </p>
              <h2 className="mt-6 display-heading text-[32px] sm:text-[44px]">
                We don&rsquo;t preference a role. We don&rsquo;t force a hand.
              </h2>
              <p className="mt-6 text-[16px] leading-6 text-foreground/70 lg:text-body">
                The foundation doesn&rsquo;t favor the gallery over the artist, or
                the institution over the collector. But neutrality here means more
                than refusing to pick sides. It means refusing to steer at all.
                Nothing requires a particular workflow. No connection is forced. No
                outcome is nudged. We provide the record and the tools each role
                needs to operate and to strengthen the relationships that carry
                their work forward, then we step back.
              </p>
              <p className="mt-5 text-[16px] leading-6 text-foreground/70 lg:text-body">
                What happens next isn&rsquo;t ours to determine. Success in the art
                world has never come from software, and it doesn&rsquo;t here
                either. It comes from judgment, care, and the relationships people
                build, on ground durable enough to hold them. We keep the ground.
                You do the rest.
              </p>
            </div>
          </div>
        </section>

        {/* We are not one of the roles */}
        <section className="bg-white text-ink">
          <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
            <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-2 lg:gap-[70px]">
              <div className="order-2 reveal flex flex-col justify-center lg:order-1">
                <p className="text-label font-semibold uppercase tracking-[0.12em] text-ink/50">
                  We are not one of the roles
                </p>
                <h2 className="mt-6 display-heading text-[32px] sm:text-[44px]">
                  Not a gallery. Not a dealer. Not a marketplace.
                </h2>
                <p className="mt-6 text-[16px] leading-6 text-ink/70 lg:text-body">
                  Always Art is not an artist, a collector, a dealer, or a
                  marketplace. We don&rsquo;t buy, sell, represent, advise, or take a
                  position in any work. That isn&rsquo;t a pledge about how
                  we&rsquo;ll behave, it&rsquo;s what we are. The infrastructure has
                  no role of its own to protect, which is precisely why it can serve
                  every role at once. The moment a platform also competes, for the
                  sale, for the attention, for ownership of the relationship, its
                  neutrality is already gone, whatever it claims.
                </p>
              </div>
              <div className="order-1 reveal relative min-h-[320px] overflow-hidden bg-hairline/40 lg:order-2">
                <Image
                  src="/images/gallery-viewing.webp"
                  alt="A work on a gallery pedestal with participants gathered around it."
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust is earned, not declared */}
        <section className="bg-ink text-paper">
          <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[70px]">
              <div className="reveal">
                <p className="text-label font-semibold uppercase tracking-[0.12em] text-paper/50">
                  Trust is earned, not declared
                </p>
                <h2 className="mt-6 display-heading text-[32px] sm:text-[44px]">
                  A record no single authority can quietly rewrite.
                </h2>
                <p className="mt-6 text-[16px] leading-6 text-paper/70 lg:text-body">
                  Provenance isn&rsquo;t assigned at creation. It accumulates across
                  every hand a work passes through, corroborated by many independent
                  sources rather than one authority. Conflicting claims stay
                  visible. Gaps stay legible. The record becomes the evidence, and
                  evidence gathered over years is far harder to fake than a
                  certificate issued in a moment.
                </p>
              </div>
              <div className="reveal flex justify-center">
                <TrustDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* What makes the promise binding */}
        <section className="bg-white text-ink">
          <div className="container-aa pb-16 pt-16 text-center lg:pb-[100px] lg:pt-[100px]">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-ink/50">
              What makes the promise binding
            </p>
            <h2 className="reveal mx-auto mt-6 max-w-[760px] display-heading text-[30px] sm:text-[44px] lg:mt-6 lg:text-[56px]">
              Intentions can be revised. These can&rsquo;t.
            </h2>

            <ol className="reveal mx-auto mt-12 grid max-w-[1000px] grid-cols-1 gap-6 text-left md:grid-cols-3 lg:mt-[60px] lg:gap-8">
              {BINDING.map((card) => (
                <li key={card.title} className="border border-hairline p-8 lg:p-9">
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                    {card.icon}
                  </svg>
                  <h3 className="mt-5 font-display text-[22px] leading-7 lg:text-lead">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[22px] text-ink/60">{card.body}</p>
                </li>
              ))}
            </ol>

            <p className="reveal mx-auto mt-10 max-w-[680px] text-[16px] leading-6 text-ink/60 lg:mt-12 lg:text-body">
              Most platforms ask you to trust their intentions. We designed away the
              need to.
            </p>
          </div>
        </section>

        {/* Where the money comes from */}
        <section className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[60px]">
            <div className="reveal flex flex-col justify-center bg-sage p-8 text-paper lg:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-70">
                The foundation
              </p>
              <p className="mt-4 display-heading text-[40px] lg:text-[56px]">Free. Permanently.</p>
              <p className="mt-6 text-[15px] leading-6 opacity-85">
                Never a charge for access. Never data sold. Never a position between
                you and your people.
              </p>
            </div>
            <div className="reveal flex flex-col justify-center">
              <p className="text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
                Where the money comes from
              </p>
              <h2 className="mt-6 display-heading text-[30px] sm:text-[44px]">
                Free foundation. Paid ambition. Nothing in between.
              </h2>
              <p className="mt-6 text-[16px] leading-6 text-foreground/70 lg:text-body">
                The fair question about anything free is how it survives. The record
                and the tools every role needs stay free, permanently, because
                charging for the essentials would rebuild the very fragmentation the
                foundation exists to end.
              </p>
              <p className="mt-5 text-[16px] leading-6 text-foreground/70 lg:text-body">
                What sustains it sits above that line: optional services for
                participants whose scale or ambition makes them worth choosing.
                Never a charge for access. Never data sold. Never a position between
                you and the people you work with. If the foundation and the revenue
                ever came into conflict, the structure above already decided which
                one wins.
              </p>
            </div>
          </div>
        </section>

        <CtaBand
          title="Built so it can never be worth more to us broken than kept."
          subtitle="That is the difference between a promise and a foundation. Begin with a single record, and hold us to it."
        />
      </main>
      <SiteFooter />
    </>
  );
}
