import Image from "next/image";

import { RECORD_SPECS } from "@/lib/content/landing";
import { ProvenanceTimeline } from "./provenance-timeline";
import { SectionLink } from "./section-link";
import { SectionGuides } from "./page-guides";

export function ArtRecord() {
  return (
    <section className="relative container-aa pb-20 pt-16 lg:pb-[100px] lg:pt-[140px]">
      <SectionGuides lines={["8.3333%", "83.3333%"]} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="reveal relative aspect-[560/697] w-full overflow-hidden bg-hairline/40">
          <Image
            src="/images/art-mural-face.webp"
            alt="A painted portrait, detail."
            fill
            // sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="reveal">
          <h2 className="display-heading text-[34px] sm:text-[56px] lg:text-[80px]">
            Art is built to last. Its records should be too.
          </h2>
          <p className="mt-6 max-w-[440px] font-display text-[19px] lg:mt-[60px] lg:text-lead">
            A permanent, portable record for every artwork, part of a shared
            record that spans the art world. One record per artwork. Built over
            time. Portable across owners, institutions, and borders. Provenance
            accumulates. Trust carries forward.
          </p>
          <p className="mt-6 max-w-[438px] text-[16px] text-foreground/60 lg:mt-[60px] lg:text-body">
            Anyone can begin the record. The record grows from wherever it
            starts. The art record is what makes this infrastructure, not
            software.
          </p>

          <dl className="mt-10 max-w-[440px] lg:mt-[60px]">
            {RECORD_SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-hairline py-2"
              >
                <dt className="shrink-0 text-[14px] font-semibold uppercase text-foreground/60">
                  {spec.label}
                </dt>
                <dd className="text-right text-[16px] leading-6 lg:w-[200px] lg:text-left">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <ProvenanceTimeline />

      <div className="reveal mt-16 flex justify-center lg:mt-[100px]">
        <SectionLink href="#" accent="slate">
          More about art record
        </SectionLink>
      </div>
    </section>
  );
}
