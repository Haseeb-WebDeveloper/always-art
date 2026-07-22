import { TheSale } from "./the-sale";
import { TensionTable } from "./tension-table";
import { SixConditions } from "./six-conditions";
import { SharedSystem } from "./shared-system";
import { Principles } from "./principles";

/**
 * The Foundation band — a warmer white surface holding the core argument:
 * the problem (the sale), the comparison, the six conditions, the shared
 * system, and the structural principles.
 */
export function Foundation() {
  return (
    <section id="foundation" className="scroll-mt-8 bg-white text-ink">
      <TheSale />
      <TensionTable />
      <div className="container-wide">
        <div className="rule-dashed" />
      </div>
      <SixConditions />
      <SharedSystem />
      <div className="container-wide">
        <div className="rule-dashed" />
      </div>
      <Principles />
    </section>
  );
}
