import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const LayersSection = () => {
  const { t } = useTranslation();
  const chips = t("layers.attention.chips", { returnObjects: true }) as string[];
  const cards = ["sales", "presence", "operations"];

  return (
    <section id="asistente" className="border-t border-line px-4 py-24 dark:border-dark-line">
      <div className="container mx-auto">
        <SectionHeading eyebrow={t("layers.eyebrow")} title={t("layers.title")} subtitle={t("layers.subtitle")} />

        <div className="mt-14 flex flex-col gap-5">
          <Reveal className="relative overflow-hidden rounded-[26px] border border-dark-line bg-ink p-8 text-ink-foreground md:p-10">
            <div className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] bg-[radial-gradient(circle,#17B8C7_0%,transparent_70%)] opacity-30" />
            <div className="relative max-w-[780px]">
              <span className="font-inter text-xs font-semibold uppercase tracking-[0.16em] text-cyan-brand">
                {t("layers.attention.eyebrow")}
              </span>
              <h3 className="font-poppins mt-3.5 text-2xl font-bold uppercase leading-[1.06] tracking-[-0.03em] sm:text-4xl">
                {t("layers.attention.title")}
              </h3>
              <p className="font-inter mt-4 text-[17.5px] leading-relaxed text-white/80">{t("layers.attention.body1")}</p>
              <p className="font-inter mt-3.5 text-[17.5px] leading-relaxed text-white/80">{t("layers.attention.body2")}</p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {(Array.isArray(chips) ? chips : []).map((chip) => (
                  <span key={chip} className="font-inter rounded-full bg-white/10 px-4 py-2 text-[13px]">
                    {chip}
                  </span>
                ))}
              </div>

              <a href="#contact" className="font-inter mt-7 inline-flex items-center gap-2.5 rounded-full bg-ink-foreground px-6 py-3.5 text-[15.5px] font-semibold text-ink transition-colors hover:bg-white">
                {t("layers.attention.cta")}
                <ArrowRight className="h-[17px] w-[17px]" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((key, i) => (
              <Reveal
                key={key}
                delay={i * 90}
                className="rounded-[22px] border border-line bg-white p-8 transition-colors hover:border-brand/50 dark:border-dark-line dark:bg-dark-card"
              >
                <span className="font-inter text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground dark:text-dark-muted">
                  {t(`layers.${key}.eyebrow`)}
                </span>
                <h3 className="font-poppins mt-3 text-xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-foreground dark:text-dark-primary sm:text-2xl">
                  {t(`layers.${key}.title`)}
                </h3>
                <p className="font-inter mt-3.5 text-base leading-relaxed text-muted-foreground dark:text-dark-muted">
                  {t(`layers.${key}.body`)}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
