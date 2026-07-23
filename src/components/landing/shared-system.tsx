import Image from "next/image";

import { SectionGuides } from "./page-guides";

/** "A shared system for the art world." — PBC positioning + the infinity mark. */
export function SharedSystem() {
  return (
    <div className="relative container-aa pb-16 pt-12 lg:pb-[100px] lg:pt-[100px]">
      <SectionGuides lines={["25%", "75.0694%"]} />
      <h2 className="reveal mx-auto max-w-[679px] text-center display-heading text-[34px] sm:text-[56px] lg:text-[80px]">
        A shared system for the art world.
      </h2>
      <p className="reveal mx-auto mt-8 max-w-[679px] text-center font-display text-[19px] lg:mt-[60px] lg:text-lead">
        Built as a public benefit corporation. Designed to connect every role
        without sitting between them. The infrastructure stays invisible so the
        participants remain in the foreground.
      </p>

      <div className="reveal mt-12 flex flex-col items-center gap-8 lg:mt-[90px] lg:flex-row lg:items-start lg:justify-center lg:gap-[95px]">
        <Image
          src="/images/infinity-loop.webp"
          alt=""
          width={170}
          height={102}
          className="h-[102px] w-[170px] object-contain"
        />
        <p className="max-w-[320px] text-center text-[16px]  text-foreground/60 lg:text-left lg:text-body">
          Galleries, artists, collectors, and institutions operate
          independently, connected through a shared system of records. Structural
          protections. The foundation protects itself so you never have to.
        </p>
      </div>
    </div>
  );
}
