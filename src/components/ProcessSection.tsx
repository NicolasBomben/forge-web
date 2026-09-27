import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = ["step1", "step2", "step3"];
  const answers = t("process.answers.items", { returnObjects: true }) as string[];
  const sells = t("process.sells.items", { returnObjects: true }) as string[];

  return (
    <section id="como" className="border-t border-line bg-muted px-4 py-24 dark:border-dark-line dark:bg-dark-card/40">
      <div className="container mx-auto">
        <SectionHeading eyebrow={t("process.eyebrow")} title={t("process.title")} subtitle={t("process.subtitle")} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((key, i) => (
            <Reveal
              key={key}
              delay={i * 90}
              className="flex flex-col gap-3.5 rounded-[22px] border border-line bg-white p-8 dark:border-dark-line dark:bg-dark-card"
            >
              <span className="font-poppins text-[46px] font-bold leading-none tracking-[-0.04em] text-brand/35">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-poppins text-xl font-bold uppercase tracking-[-0.02em] text-foreground dark:text-dark-primary">
                {t(`process.${key}.title`)}
              </h3>
              <p className="font-inter text-base leading-relaxed text-muted-foreground dark:text-dark-muted">
                {t(`process.${key}.body`)}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid items-stretch gap-5 lg:grid-cols-2">
          <Reveal className="flex flex-col overflow-hidden rounded-[22px] border border-line bg-white dark:border-dark-line dark:bg-dark-card">
            <div className="border-b border-line bg-muted px-7 py-6 dark:border-dark-line dark:bg-dark-background">
              <h3 className="font-poppins text-[23px] font-bold uppercase tracking-[-0.02em] text-foreground dark:text-dark-primary">
                {t("process.answers.title")}
              </h3>
              <p className="font-inter mt-2 text-[15px] text-muted-foreground dark:text-dark-muted">
                {t("process.answers.subtitle")}
              </p>
            </div>
            <ul className="flex flex-1 flex-col gap-3.5 px-7 py-6">
              {(Array.isArray(answers) ? answers : []).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-[19px] w-[19px] shrink-0 text-brand" />
                  <span className="font-inter text-[15.5px] leading-snug text-muted-foreground dark:text-dark-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90} className="flex flex-col overflow-hidden rounded-[22px] border-2 border-brand bg-white dark:bg-dark-card">
            <div className="bg-brand px-7 py-6">
              <h3 className="font-poppins text-[23px] font-bold uppercase tracking-[-0.02em] text-white">
                {t("process.sells.title")}
              </h3>
              <p className="font-inter mt-2 text-[15px] text-white/80">{t("process.sells.subtitle")}</p>
            </div>
            <ul className="flex flex-1 flex-col gap-3.5 px-7 py-6">
              {(Array.isArray(sells) ? sells : []).map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-[19px] w-[19px] shrink-0 text-brand" />
                  <span className="font-inter text-[15.5px] leading-snug text-muted-foreground dark:text-dark-muted">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="font-inter mt-7 max-w-[760px] text-[15px] text-muted-foreground dark:text-dark-muted">
          {t("process.note")}
        </p>
      </div>
    </section>
  );
};
