import Image from "next/image";

import { SUSTAIN_FAQS } from "@/lib/content/landing";
import { hexClip } from "./shapes";
import { SectionLink } from "./section-link";
import { SectionGuides } from "./page-guides";

/** "How it sustains." — a centred column of question → answer. */
export function HowItSustains() {
  return (
    <section id="sustains" className="scroll-mt-8">
      <div className="container-wide">
        <div className="rule-dashed" />
      </div>

      <div className="relative container-aa pb-16 pt-12 lg:pb-[100px] lg:pt-10">
        <SectionGuides lines={["50%", "75%"]} />
        <h2 className="reveal text-center display-heading text-[34px] sm:text-[56px] lg:text-[80px]">
          How it sustains.
        </h2>

        <div className="mx-auto mt-12 flex max-w-[760px] flex-col gap-14 text-center lg:mt-20 lg:gap-20">
          <FaqBlock faq={SUSTAIN_FAQS[0]} />

          <div className="reveal flex justify-center">
            <div className="w-[180px] lg:w-[234px]" style={hexClip}>
              <Image
                src="/images/abstract-geometric.webp"
                alt=""
                width={234}
                height={235}
                sizes="234px"
                className="aspect-[234/235] w-full scale-[1.38] object-cover"
              />
            </div>
          </div>

          <FaqBlock faq={SUSTAIN_FAQS[1]} />
          <FaqBlock faq={SUSTAIN_FAQS[2]} />
        </div>

        <div className="reveal mt-16 flex justify-center lg:mt-[100px]">
          <SectionLink href="#" accent="slate">
            More about sustainability
          </SectionLink>
        </div>
      </div>
    </section>
  );
}

function FaqBlock({ faq }: { faq: (typeof SUSTAIN_FAQS)[number] }) {
  return (
    <div className="reveal">
      <h3 className="font-display text-[24px] leading-7 lg:text-[32px] lg:leading-9">
        {faq.question}
      </h3>
      {faq.answer.map((paragraph, i) => (
        <p
          key={i}
          className="mt-4 text-[16px] text-foreground/60 first:mt-5 lg:text-body lg:first:mt-7 text-balance"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
