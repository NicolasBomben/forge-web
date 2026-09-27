import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";

export const ManifestoSection = () => {
  const { t } = useTranslation();
  const beliefs = ["tools", "team", "after"];

  return (
    <section className="bg-ink px-4 py-24 text-ink-foreground">
      <div className="container mx-auto">
        <span className="font-inter text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
          {t("manifesto.eyebrow")}
        </span>
        <Reveal as="h2" className="font-poppins mt-5 max-w-[18ch] text-3xl font-bold uppercase leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[80px]">
          {t("manifesto.title")}
        </Reveal>
        <Reveal as="p" delay={80} className="font-inter mt-6 max-w-[700px] text-lg leading-relaxed text-white/70 sm:text-xl">
          {t("manifesto.subtitle")}
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((key, i) => (
            <Reveal key={key} delay={i * 90} className="border-t border-dark-line pt-6">
              <h3 className="font-poppins text-lg font-semibold uppercase tracking-[-0.01em]">{t(`manifesto.${key}.title`)}</h3>
              <p className="font-inter mt-3 text-[15.5px] leading-relaxed text-white/70">{t(`manifesto.${key}.body`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
