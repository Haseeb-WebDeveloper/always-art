import Link from "next/link";

import { buildMetadata } from "@/lib/seo/metadata";
import { ROLE_TILES } from "@/lib/content/landing";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { PageHero } from "@/components/landing/page-hero";
import { CtaBand } from "@/components/landing/cta-band";
import { RolesCarousel } from "@/components/landing/roles-carousel";

export const metadata = buildMetadata({
  title: "For Every Role",
  eyebrow: "For Every Role",
  path: "/for-every-role",
  description:
    "Galleries, artists, collectors, fairs, estates and institutions — each its own discipline, each served without flattening any into the same thing.",
});

export default function ForEveryRolePage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          eyebrow="For Every Role"
          title="The art world has always been built on distinct roles."
          subtitle="Galleries represent and steward. Artists create and build careers. Collectors acquire and preserve. Each role is its own discipline, and each depends on the others. A foundation for the art world has to serve them all without flattening any of them into the same thing."
        />

        {/* Find your role — the roles carousel */}
        <section id="roles" className="container-wide scroll-mt-8 pb-16 pt-4 lg:pb-[100px]">
          <div className="text-center">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
              Find your role
            </p>
          </div>
          <div className="reveal mt-6 lg:mt-8">
            <RolesCarousel roles={ROLE_TILES} initialActive={0} />
          </div>
        </section>

        {/* Real tools for every role */}
        <section className="bg-white text-ink">
          <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[90px]">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-ink/50">
              Real tools for every role
            </p>
            <h2 className="reveal mt-6 max-w-[820px] display-heading text-[30px] sm:text-[40px] lg:mt-6 lg:text-[52px]">
              Built for each role. Not one tool wearing six labels.
            </h2>

            <div className="reveal mt-12 grid grid-cols-1 gap-6 lg:mt-[60px] lg:grid-cols-2 lg:gap-8">
              <div className="border border-ink/15 bg-ink/[0.03] p-8 lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/50">
                  Most art software
                </p>
                <p className="mt-6 font-display text-[17px] leading-[24px] sm:text-serif-body">
                  Built for a single role and everything else is that same product
                  with the labels changed, a collector view that&rsquo;s really a
                  sales pipeline, an artist account built to feed someone
                  else&rsquo;s inventory. The role is on the box; the tool
                  underneath belongs to another.
                </p>
              </div>
              <div className="bg-sage p-8 text-paper lg:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] opacity-70">
                  Always Art
                </p>
                <p className="mt-6 font-display text-[17px] leading-[24px] sm:text-serif-body">
                  Built the other way. Each role has its own portal and its own
                  tools, shaped around the work that role actually does, all reading
                  from and writing to one shared record.
                </p>
              </div>
            </div>

            <div className="reveal mt-6 border border-ink/15 p-8 lg:mt-8 lg:p-10">
              <h3 className="font-display text-[22px] leading-7 lg:text-lead">
                One person, more than one role
              </h3>
              <p className="mt-4 max-w-[820px] text-[16px] leading-6 text-ink/60 lg:text-body">
                A gallerist who also collects. An artist who runs a space. Hold
                both, and move between full, separate portals with a single toggle,
                no second account, no second login. It&rsquo;s a capability you can
                only offer if the portals were genuinely built apart to begin with.
              </p>
            </div>
          </div>
        </section>

        {/* Independent by default */}
        <section className="bg-ink text-paper">
          <div className="container-aa pb-16 pt-16 lg:pb-[110px] lg:pt-[110px]">
            <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-paper/60">
              Independent by default. Connected by choice.
            </p>
            <h2 className="reveal mt-6 max-w-[860px] display-heading text-[30px] sm:text-[44px] lg:mt-6 lg:text-[56px]">
              The art world runs on relationships. You decide when to form them.
            </h2>

            <div className="reveal mt-10 grid grid-cols-1 gap-8 lg:mt-[60px] lg:grid-cols-2 lg:gap-[100px]">
              <p className="max-w-[440px] text-[16px] leading-6 text-paper/70 lg:text-body">
                Each role stands on its own. A gallery can run its entire program
                before a single artist or collector joins. An artist can document a
                whole career with no gallery attached. Nothing requires connection
                to be useful from day one.
              </p>
              <p className="max-w-[440px] text-[16px] leading-6 text-paper/70 lg:text-body">
                But when roles connect, the value compounds, an artist&rsquo;s
                audience extends a gallery&rsquo;s reach, a collector&rsquo;s
                provenance strengthens the next sale, an estate&rsquo;s records
                deepen an institution&rsquo;s scholarship. The tools are built to do
                both expertly: complete alone, stronger together. Which you choose
                isn&rsquo;t ours to decide. It&rsquo;s yours.
              </p>
            </div>

            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5 lg:mt-[60px]">
              <Link
                href="#"
                className="inline-flex h-[50px] items-center justify-center border border-paper/40 px-7 text-label font-semibold uppercase tracking-[0.04em] text-paper transition-colors duration-300 hover:bg-paper/10"
              >
                Complete alone
              </Link>
              <Link
                href="#"
                className="inline-flex h-[50px] items-center justify-center bg-sage px-7 text-label font-semibold uppercase tracking-[0.04em] text-paper transition-opacity duration-300 hover:opacity-90"
              >
                Stronger together
              </Link>
            </div>
          </div>
        </section>

        {/* Infrastructure elevates */}
        <section className="container-aa pb-16 pt-16 text-center lg:pb-[120px] lg:pt-[110px]">
          <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
            Infrastructure elevates. It doesn&rsquo;t replace.
          </p>
          <h2 className="reveal mx-auto mt-6 max-w-[720px] display-heading text-[34px] sm:text-[52px] lg:mt-7 lg:text-[56px]">
            Nothing changes. Everything lasts.
          </h2>
          <p className="reveal mx-auto mt-8 max-w-[620px] text-[16px] leading-6 text-foreground/60 lg:mt-12 lg:text-body">
            No role changes. No workflow changes. There&rsquo;s nothing new to
            learn. The foundation sits beneath what each participant already does,
            the same record, the same tools, the same protections for everyone, and
            simply makes it permanent. It memorializes the work already happening,
            supports it, and carries it forward. The only difference is that now it
            endures.
          </p>
        </section>

        <CtaBand
          eyebrow="Built to work alongside what you already do"
          title="Register an artwork."
          subtitle="No approval. No migration. No waiting on anyone else to join. Your first record is the beginning of something permanent."
          large
        />
      </main>
      <SiteFooter />
    </>
  );
}
