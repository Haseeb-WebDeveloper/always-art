import Link from "next/link";

import { CtaButton } from "./cta-button";
import { SectionGuides, FIVE_COL } from "./page-guides";

export function Hero() {
  return (
    <section className="relative container-aa pb-16 pt-14 sm:pt-20 lg:pb-[180px] lg:pt-[100px]">
      <SectionGuides lines={FIVE_COL} />
      <h1 className="reveal mx-auto max-w-[1159px] text-center display-heading text-[36px] sm:text-[56px] lg:text-[80px]">
        The art world runs on relationships. <br /> Now its tools do too.
      </h1>

      <p className="reveal mx-auto mt-8 max-w-[760px] text-balance text-center font-display text-[17px] leading-[22px] sm:text-serif-body lg:mt-[52px]">
        Complete free tools for every role — run your program, your inventory,
        your sales, your collection, your career — all built on one permanent
        shared record that stays yours.
      </p>

      <div className="reveal mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:mt-[42px]">
        <CtaButton href="#" className="w-full max-w-[280px] sm:w-[160px]">
          Start free
        </CtaButton>
        <Link
          href="#"
          className="group relative py-2 text-[14px] font-semibold uppercase tracking-[0.04em]"
        >
          Read the whitepaper
          <span className="absolute inset-x-0 bottom-1 h-px bg-ink" />
          <span className="absolute inset-x-0 bottom-1 h-[3px] origin-left scale-x-0 bg-ink transition-transform duration-300 ease-aa group-hover:scale-x-100" />
        </Link>
      </div>
    </section>
  );
}
