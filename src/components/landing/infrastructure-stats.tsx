import Image from "next/image";

import { STATS } from "@/lib/content/landing";
import { SectionGuides, FIVE_COL } from "./page-guides";

// The brand asterisk used as a mask over a painterly portrait — warmth showing
// through the system mark. Mask shape lives in /images/asterisks.svg.
const ASTERISK_MASK = {
  WebkitMask: "url(/images/asterisks.svg) center / contain no-repeat",
  mask: "url(/images/asterisks.svg) center / contain no-repeat",
} as const;

export function InfrastructureStats() {
  return (
    <section className="relative container-wide pb-10 pt-14 lg:pb-10 lg:pt-24">
      {/* Capped at the closing dashed rule so the lines don't run through the
          empty space below the stat cards (matches the reference). */}
      <SectionGuides lines={FIVE_COL} bottom={40} />
      <div
        className="reveal relative mx-auto h-[45px] w-[151px] lg:h-[60px] lg:w-[201px]"
        style={ASTERISK_MASK}
      >
        <Image
          src="/images/art-woman-gold-earring.webp"
          alt=""
          fill
          sizes="201px"
          className="scale-[1.7] object-cover"
        />
      </div>

      <h2 className="reveal mx-auto mt-10 max-w-[560px] text-center display-heading text-[34px] sm:text-[56px] lg:text-[80px]">
        The infrastructure is running
      </h2>
      <p className="reveal mx-auto mt-8 max-w-[440px] text-center text-[16px] text-foreground/60 lg:mt-[60px] lg:text-body">
        Already in use across galleries, estates, collectors, and institutions —
        quietly, in the background, where infrastructure belongs.
      </p>

      <div className="rule-dashed mt-12 lg:mt-[70px]" />

      <dl className="reveal grid grid-cols-1 gap-x-10 gap-y-12 pb-6 pt-16 sm:grid-cols-2 lg:grid-cols-4 lg:pb-10 lg:pt-[100px]">
        {STATS.map((stat) => (
          <div key={stat.value}>
            <dt className="font-display text-[32px] leading-none lg:text-stat">
              {stat.value}
            </dt>
            <dd className="mt-6 text-[16px] text-foreground/60 lg:mt-[60px] lg:text-body">
              {stat.description}
            </dd>
          </div>
        ))}
      </dl>

      <div className="rule-dashed" />
    </section>
  );
}
