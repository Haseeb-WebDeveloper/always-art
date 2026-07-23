import { PRINCIPLES } from "@/lib/content/landing";
import { SectionLink } from "./section-link";
import { SectionGuides } from "./page-guides";

/** The four structural guarantees behind the foundation. */
export function Principles() {
  return (
    <div className="relative container-wide pb-16 pt-16 lg:pb-[100px] lg:pt-20">
      <SectionGuides lines={["25%", "50%", "75%"]} />
      <ol className="reveal grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-[120px]">
        {PRINCIPLES.map((principle) => (
          <li key={principle.title}>
            <h3 className="lg:min-h-[64px] max-w-[300px] font-display text-[28px] lg:min-h-[96px] lg:text-stat">
              {principle.title}
            </h3>
            <p className="mt-4 text-[16px] text-foreground/60 lg:mt-[52px] lg:text-body">
              {principle.description}
            </p>
          </li>
        ))}
      </ol>

      <div className="reveal mt-16 flex justify-center lg:mt-[76px]">
        <SectionLink href="#" accent="clay">
          Getting started
        </SectionLink>
      </div>
    </div>
  );
}
