import Image from "next/image";

import { ringMask } from "./shapes";
import { SectionLink } from "./section-link";
import { SectionGuides } from "./page-guides";

/** "The art tools." — the dark, declarative band. Ink surface, paper type. */
export function ArtTools() {
  return (
    <section className="bg-ink text-paper">
      <div className="relative container-aa pb-16 pt-16 lg:pb-[174px] lg:pt-[130px]">
        <SectionGuides lines={["8.3333%", "50%", "91.6667%"]} dim />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-[440px_1fr] xl:gap-[160px]">
          <div
            className="reveal relative aspect-square w-full max-w-[440px]"
            style={ringMask}
          >
            <Image
              src="/images/design-chairs.webp"
              alt=""
              fill
              sizes="440px"
              className="object-cover"
            />
          </div>

          <div className="reveal xl:pt-[81px]">
            <h2 className="display-heading text-[40px] sm:text-[64px] xl:text-[100px]">
              The art tools.
            </h2>
            <p className="mt-6 max-w-[553px] font-display text-[19px] lg:mt-10 lg:text-lead">
              Free and complete for every role. Run operations, inventory, and
              ownership. Reach audiences beyond physical walls. Connect artists,
              galleries, collectors, and institutions through shared records.
              Every tool a role needs is included. Nothing essential requires a
              paid tier.
            </p>

            <Image
              src="/images/art-skeleton-portrait.webp"
              alt=""
              width={200}
              height={200}
              sizes="200px"
              className="mt-10 h-[160px] w-[160px] object-cover lg:mt-[110px] lg:h-[200px] lg:w-[200px]"
            />

            <p className="mt-10 max-w-[436px] text-[16px]  text-paper/60 lg:mt-[63px] lg:text-body">
              Every role stays itself. Galleries run programs, artists build
              careers, collectors steward collections, institutions connect and
              extend interactions. Not dependent. Connected.
            </p>

            <div className="mt-10 lg:mt-[63px]">
              <SectionLink href="#" accent="mist" wipe="paper" className="text-paper">
                More about tools
              </SectionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
