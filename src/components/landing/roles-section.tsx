import { ROLES } from "@/lib/content/landing";
import { RolesCarousel } from "./roles-carousel";
import { SectionLink } from "./section-link";

export function RolesSection() {
  return (
    <section id="roles" className="container-wide scroll-mt-8 pb-16 lg:pb-[67px]">
      <div className="lg:pl-16">
        <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
          Complete tools for every role
        </p>
        <h2 className="reveal mt-6 display-heading text-[30px] sm:text-[44px] lg:mt-7 lg:text-[56px]">
          Works alone. Worth more connected.
        </h2>
        <p className="reveal mt-5 max-w-[700px] font-display text-[17px] leading-[22px] text-foreground/70 sm:text-serif-body">
          When the middle disappears, the relationship shouldn&rsquo;t disappear
          with it.
        </p>
      </div>

      <div className="reveal mt-10 lg:pt-8">
        <RolesCarousel roles={ROLES} />
      </div>

      <p className="reveal mt-12 text-center text-[16px] leading-5 text-foreground/60 lg:mt-[60px] lg:text-body">
        Every tool a role needs is included. Nothing essential sits behind a paid
        tier.
      </p>

      <div className="reveal mt-8 flex justify-center lg:mt-7">
        <SectionLink href="/for-every-role" accent="slate">
          Find your role
        </SectionLink>
      </div>
    </section>
  );
}
