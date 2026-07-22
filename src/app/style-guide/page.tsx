import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { buildMetadata } from "@/lib/seo/metadata";
import { COLORS } from "@/style/tokens";

export const metadata = buildMetadata({
  title: "Style Guide",
  description: "The Always Art design system — palette, type and components.",
  noIndex: true,
});

const SWATCHES: { name: string; hex: string; role: string; onDark?: boolean }[] = [
  { name: "Paper", hex: COLORS.paper, role: "Default surface" },
  { name: "Ink", hex: COLORS.ink, role: "Primary text / dark", onDark: true },
  { name: "Slate", hex: COLORS.slate, role: "Cool secondary", onDark: true },
  { name: "Sage", hex: COLORS.sage, role: "Quiet accent", onDark: true },
  { name: "Clay", hex: COLORS.clay, role: "Warm secondary", onDark: true },
  { name: "Mist", hex: COLORS.mist, role: "Soft accent" },
  { name: "Hairline", hex: COLORS.hairline, role: "Rules / borders" },
];

const TYPE_SPECIMEN: { step: string; className: string; sample: string }[] = [
  { step: "display · 200", className: "text-h1 md:text-display", sample: "always art" },
  { step: "h1 · 100", className: "text-h2 md:text-h1", sample: "Built differently." },
  { step: "h2 · 80", className: "text-h2-sm md:text-h2", sample: "A permanent record." },
  { step: "lead · 26", className: "text-lead", sample: "Documented once. Accessible forever." },
  { step: "body · 18", className: "text-body font-sans", sample: "The art world runs on relationships. On records. On trust." },
  { step: "label · 13", className: "text-label font-sans uppercase tracking-[0.12em]", sample: "System label" },
];

export default function StyleGuidePage() {
  return (
    <main className="mx-auto w-full max-w-canvas px-5 py-16 sm:px-10 lg:px-20">
      <header className="mb-16">
        <p className="text-label font-sans uppercase tracking-[0.12em] text-muted-foreground">
          Always Art — Edition 2026
        </p>
        <h1 className="mt-4 text-h2-sm font-light md:text-h2">Design system.</h1>
        <p className="mt-4 max-w-xl text-body font-sans text-muted-foreground">
          Five tones, two typefaces, one quiet register. Every shadcn component
          below is driven by these brand tokens.
        </p>
      </header>

      {/* Color -------------------------------------------------------------- */}
      <section className="mb-20">
        <h2 className="mb-6 text-lead font-light">Color</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SWATCHES.map((s) => (
            <div key={s.name} className="overflow-hidden border border-hairline">
              <div className="h-28" style={{ backgroundColor: s.hex }} />
              <div className="bg-card p-4">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-sm font-semibold">{s.name}</span>
                  <span className="font-mono text-micro uppercase text-muted-foreground">
                    {s.hex}
                  </span>
                </div>
                <p className="mt-1 font-sans text-micro text-muted-foreground">{s.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography --------------------------------------------------------- */}
      <section className="mb-20">
        <h2 className="mb-6 text-lead font-light">Typography</h2>
        <div className="flex flex-col divide-y divide-hairline">
          {TYPE_SPECIMEN.map((t) => (
            <div
              key={t.step}
              className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
            >
              <span className="w-40 shrink-0 font-sans text-label uppercase tracking-[0.08em] text-muted-foreground">
                {t.step}
              </span>
              <span className={`${t.className} font-light leading-tight`}>{t.sample}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-sans text-body text-muted-foreground">
          <span className="font-display">Financier Display</span> for the
          editorial serif; <span className="font-sans font-semibold">PP Mori</span>{" "}
          for body &amp; UI.
        </p>
      </section>

      {/* Components --------------------------------------------------------- */}
      <section className="mb-20">
        <h2 className="mb-6 text-lead font-light">Components</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Badge>Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="font-display font-light">The art record.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-body font-sans text-muted-foreground">
                Provenance, exhibition history, ownership — documented once.
              </p>
              <Input placeholder="hello@always.art" />
              <Button className="w-full">Request access</Button>
            </CardContent>
          </Card>

          <Card className="bg-ink text-paper">
            <CardHeader>
              <CardTitle className="font-display font-light text-paper">
                Quiet authority.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body font-sans text-paper/70">
                Ink surface — for declarative sections and dark cards.
              </p>
            </CardContent>
          </Card>

          <Card style={{ backgroundColor: COLORS.mist }}>
            <CardHeader>
              <CardTitle className="font-display font-light text-ink">One breath.</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body font-sans text-ink/70">
                The single soft accent. Reserved for emphasis.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
