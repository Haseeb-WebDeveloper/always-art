/** Centred page hero — eyebrow, display headline, standfirst. Shared by the
 *  For Every Role / How It Works / Why Always Art pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="container-aa pb-16 pt-14 text-center sm:pt-20 lg:pb-[110px] lg:pt-20">
      <p className="reveal text-label font-semibold uppercase tracking-[0.12em] text-foreground/50">
        {eyebrow}
      </p>
      <h1 className="reveal mx-auto mt-6 max-w-[1000px] display-heading text-[36px] sm:text-[56px] lg:mt-[34px] lg:text-[72px] design:text-[80px]">
        {title}
      </h1>
      <p className="reveal mx-auto mt-8 max-w-[720px] font-display text-[17px] leading-[24px] text-foreground/70 sm:text-serif-body lg:mt-10">
        {subtitle}
      </p>
    </section>
  );
}
