import { Monitor, Plug, PhoneCall, Wrench, type LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type ServiceKey = "sites" | "integrations" | "custom";

const icons: Record<ServiceKey, LucideIcon> = { sites: Monitor, integrations: Plug, custom: Wrench };

export const ServicesSection = () => {
  const { t } = useTranslation();
  const items: ServiceKey[] = ["sites", "integrations", "custom"];

  return (
    <section id="servicios" className="border-t border-line px-4 py-24 dark:border-dark-line">
      <div className="container mx-auto">
        <SectionHeading eyebrow={t("servicesBlock.eyebrow")} title={t("servicesBlock.title")} subtitle={t("servicesBlock.subtitle")} />

        <Reveal delay={120} className="mb-14 mt-7">
          <a href="#contact" className="font-inter inline-flex items-center gap-2.5 rounded-full border border-brand px-6 py-3.5 text-[15.5px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white">
            {t("servicesBlock.cta")}
            <PhoneCall className="h-[17px] w-[17px]" />
          </a>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((key, i) => {
            const Icon = icons[key];
            return (
              <Reveal
                key={key}
                delay={i * 90}
                className="rounded-[22px] border border-line bg-white p-8 transition-colors hover:border-brand/50 dark:border-dark-line dark:bg-dark-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-brand/10 text-brand">
                  <Icon className="h-[21px] w-[21px]" />
                </div>
                <h3 className="font-poppins mt-5 text-xl font-bold uppercase leading-[1.08] tracking-[-0.02em] text-foreground dark:text-dark-primary sm:text-2xl">
                  {t(`servicesBlock.${key}.title`)}
                </h3>
                <p className="font-inter mt-3 text-base leading-relaxed text-muted-foreground dark:text-dark-muted">
                  {t(`servicesBlock.${key}.body`)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
