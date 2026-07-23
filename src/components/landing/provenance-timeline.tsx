"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { TIMELINE } from "@/lib/content/landing";
import { ArrowRight, Asterisk } from "./icons";

export function ProvenanceTimeline() {
  const trackRef = useRef<HTMLOListElement>(null);
  // Whether each edge has hidden content (drives the arrows + the right fade).
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    const t = trackRef.current;
    if (!t) return;
    setEdges({
      start: t.scrollLeft <= 1,
      end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 1,
    });
  };

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, []);

  // Advance by exactly one card so the left edge always lands on a full card.
  function page(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector<HTMLElement>("li");
    if (!item) return;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * (item.offsetWidth + gap), behavior: "smooth" });
  }

  return (
    <div className="reveal mt-16 lg:mt-[100px]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[14px] font-semibold uppercase leading-[14px] text-foreground/60">
          Art origin and history
        </p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => page(-1)}
              disabled={edges.start}
              aria-label="Earlier events"
              className="flex h-11 w-6 items-center justify-center transition-opacity hover:opacity-60 disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowRight className="h-2.5 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => page(1)}
              disabled={edges.end}
              aria-label="Later events"
              className="flex h-11 w-6 items-center justify-center transition-opacity hover:opacity-60 disabled:pointer-events-none disabled:opacity-25"
            >
              <ArrowRight className="h-2.5 w-4" />
            </button>
          </div>
          <p className="whitespace-nowrap text-[14px] font-semibold uppercase leading-[14px] text-foreground/60">
            2018&nbsp;&nbsp;-&nbsp;&nbsp;2026
          </p>
        </div>
      </div>

      <div className="relative mt-10">
        <div className="rule-dashed pointer-events-none absolute inset-x-0 top-1 z-0" />
        <ol
          ref={trackRef}
          onScroll={updateEdges}
          className="no-scrollbar relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth lg:gap-5"
        >
          {TIMELINE.map((event) => (
            <li key={event.year} className="timeline-card snap-start">
              <div className="flex w-fit items-center gap-2 bg-background pr-4">
                <Asterisk className="shrink-0 text-foreground/40" />
                <span className="text-[14px] font-semibold uppercase leading-[14px] text-foreground/60">
                  {event.year}
                </span>
              </div>
              <h3 className="mt-6 font-display text-[26px] leading-[30px] lg:text-[32px] lg:leading-9">
                {event.title}
              </h3>
              <p className="mt-2 text-[16px] leading-6 text-foreground/60">
                {event.place}
              </p>
            </li>
          ))}
        </ol>

        {/* Soft fade on the right only — hints at the peeking next card. */}
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background to-transparent transition-opacity duration-300",
            edges.end ? "opacity-0" : "opacity-100",
          )}
        />
      </div>
    </div>
  );
}
