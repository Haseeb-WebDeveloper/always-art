import Image from "next/image";

import { CONDITIONS } from "@/lib/content/landing";
import { SectionLink } from "./section-link";

/** The six conditions for infrastructure — heading + list, flanked by imagery. */
export function SixConditions() {
  return (
    <div className="container-wide pb-16 pt-12 lg:pb-[100px] lg:pt-9">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:gap-x-10 lg:gap-y-[80px]">
        <div className="reveal aspect-square w-[160px] overflow-hidden bg-hairline/40 sm:w-[220px] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:w-full lg:self-start">
          <Image
            src="/images/art-print-held.webp"
            alt=""
            width={220}
            height={220}
            sizes="220px"
            className="h-full w-full scale-[1.4] object-cover"
          />
        </div>

        <div className="reveal lg:col-start-2 lg:row-start-1">
          <h2 className="display-heading text-[34px] sm:text-[56px] design:text-[80px]">
            Six conditions, all at once
          </h2>
          <p className="mt-6 font-display text-[19px] leading-[24px] lg:mt-[30px] lg:text-[22px]">
            Miss one and it isn&rsquo;t infrastructure, it&rsquo;s another tool
          </p>
        </div>

        <ol className="reveal border-t border-dashed border-hairline lg:col-start-2 lg:row-start-2">
          {CONDITIONS.map((condition) => (
            <li
              key={condition.title}
              className="grid grid-cols-1 gap-2 border-b border-dashed border-hairline py-6 sm:grid-cols-2 sm:gap-10"
            >
              <h3 className="font-display text-[20px] leading-[24px] lg:text-lead">
                {condition.title}
              </h3>
              <p className="text-[15px] leading-[22px] text-foreground/60 lg:text-[16px] lg:leading-6">
                {condition.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="reveal hidden aspect-[220/260] w-full overflow-hidden bg-hairline/40 lg:col-start-3 lg:row-start-2 lg:block">
          <Image
            src="/images/art-sculpture-bust.webp"
            alt=""
            width={220}
            height={260}
            sizes="220px"
            className="h-full w-full scale-[1.25] object-cover"
          />
        </div>
      </div>

      <div className="reveal mt-12 flex justify-center lg:mt-[60px]">
        <SectionLink href="/how-it-works" accent="slate">
          How it works
        </SectionLink>
      </div>
    </div>
  );
}
