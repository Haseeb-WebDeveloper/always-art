import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";
import { SectionLink } from "./section-link";
import { PageGuides } from "./page-guides";

/** The dark closing band shared by the subpages — headline + primary CTA +
 *  whitepaper link on an ink surface. */
export function CtaBand({
  eyebrow,
  title,
  subtitle,
  primaryLabel = "Register an artwork",
  large = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  /** Use the largest display size (for a short headline like "Register an artwork."). */
  large?: boolean;
}) {
  return (
    <section className="relative bg-ink text-paper">
      <PageGuides dim />
      <div className="container-aa pb-20 pt-16 text-center lg:pb-[120px] lg:pt-[110px]">
        {eyebrow && (
          <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-paper/60">
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "reveal mx-auto max-w-[760px] display-heading",
            eyebrow && "mt-6",
            large
              ? "text-[40px] sm:text-[64px] lg:text-[80px]"
              : "text-[34px] sm:text-[52px] lg:text-[56px]",
          )}
        >
          {title}
        </h2>
        <p className="reveal mx-auto mt-8 max-w-[560px] text-[16px] leading-6 text-paper/70 lg:mt-9 lg:text-body">
          {subtitle}
        </p>

        <div className="reveal mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:mt-12">
          <CtaButton href="#" className="w-full max-w-[280px] sm:w-auto sm:px-8">
            {primaryLabel}
          </CtaButton>
          <SectionLink href="#" accent="mist" wipe="paper" className="text-paper">
            Read the whitepaper
          </SectionLink>
        </div>
      </div>
    </section>
  );
}
