import Image from "next/image";

import { asteriskClip } from "./shapes";

/** "Built for one moment: the sale." — the problem, then the turn to the fix. */
export function TheSale() {
  return (
    <>
      <div className="container-aa pb-16 pt-16 lg:pb-[100px] lg:pt-[87px]">
        <h2 className="reveal max-w-[920px] display-heading text-[34px] sm:text-[56px] lg:text-[80px]">
          Built for one moment: the sale.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-[60px] lg:grid-cols-[320px_1fr] lg:gap-[100px]">
          <div className="reveal mx-auto w-full max-w-[320px] lg:mx-0">
            <div
              className="relative aspect-square w-full overflow-hidden"
              style={asteriskClip}
            >
              <Image
                src="/images/art-reaching-hands.webp"
                alt=""
                fill
                sizes="320px"
                className="scale-[1.49] object-cover"
              />
            </div>
          </div>

          <div className="reveal max-w-[440px]">
            <p className="font-display text-[19px] lg:text-lead">
              Every existing tool is built for one role and one moment: the sale.
              Inventory software for the gallery. A tracker for the collector. A
              marketplace for the buyer. And each is built to keep the connection
              inside its own walls.
            </p>
            <p className="mt-8 text-[16px] text-foreground/60 lg:mt-[60px] lg:text-body">
              So the moment a sale closes, a gallery shuts, or a subscription
              lapses, the record fragments and the relationship goes with it. Not
              by accident. The systems were designed to sit in the middle and own
              what passes through. An artwork, and the trust built around it,
              outlives all of them.
            </p>
          </div>
        </div>
      </div>

      <div className="container-aa pb-4 lg:pb-8">
        <p className="reveal mx-auto max-w-[760px] text-center font-display text-[19px] sm:text-serif-body lg:text-lead">
          The fix isn&rsquo;t a better version of these tools. It&rsquo;s
          inverting what they were built on. They ignored the relationship,
          served one role, siloed the data, trapped it, and charged for access.
          Infrastructure built for the relationship does the opposite. The sale
          is one moment inside it, included, handled, never the point. One record
          underneath. Every role on top. Every connection yours.
        </p>
      </div>
    </>
  );
}
