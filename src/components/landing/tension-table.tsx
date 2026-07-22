import { cn } from "@/lib/utils";
import { TENSION } from "@/lib/content/landing";

/** Existing platforms vs a foundation — a comparison that reads like a table. */
export function TensionTable() {
  const columns = [
    {
      data: TENSION.existing,
      col: "bg-ink/5 text-ink",
      head: "text-ink/50",
      cell: "shadow-[inset_0_1px_0_#2d2d2d1f]", // ink ~12%
    },
    {
      data: TENSION.foundation,
      col: "bg-sage text-paper",
      head: "text-paper/60",
      cell: "shadow-[inset_0_1px_0_#f0efea33]", // paper ~20%
    },
  ] as const;

  return (
    <div className="container-aa pb-16 pt-8 lg:pb-[100px] lg:pt-20">
      <p className="reveal text-label font-semibold uppercase tracking-[0.12em]">
        What&rsquo;s missing isn&rsquo;t software
      </p>

      <div className="reveal mt-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:gap-8">
          {columns.map(({ data, col, head, cell }) => (
            <div key={data.title} className={col}>
              <p
                className={cn(
                  "px-5 pb-2 pt-5 text-label font-semibold uppercase tracking-[0.12em] sm:px-8 sm:pt-6",
                  head,
                )}
              >
                {data.title}
              </p>
              {data.rows.map((row, i) => (
                <div
                  key={row}
                  className={cn(
                    "box-border px-5 py-5 font-display text-[17px] leading-[22px] sm:px-8 sm:py-6 sm:text-serif-body",
                    // First cell of each column has no top hairline.
                    i > 0 && cell,
                  )}
                >
                  {row}
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[16px] leading-5 text-foreground/60 lg:mt-16 lg:text-body">
          They can copy what we built. They can&rsquo;t copy what we refuse to
          do.
        </p>
      </div>
    </div>
  );
}
