import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ChatDemo } from "./ChatDemo";
import { Reveal } from "./Reveal";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-background px-4 pb-20 pt-24 dark:bg-dark-background md:pt-32">
      <div className="pointer-events-none absolute -top-64 left-1/2 h-[620px] w-[1000px] -translate-x-1/2 animate-glowPulse rounded-full bg-[radial-gradient(circle,#2B57F0_0%,#1B3DB8_40%,transparent_70%)] opacity-[0.16] blur-[80px]" />

      <div className="container relative mx-auto">
        <div className="flex flex-wrap items-center gap-10">
          <div className="min-w-0 flex-1 basis-[380px]">
            <Reveal
              as="h1"
              className="font-poppins text-4xl font-bold uppercase leading-[1.02] tracking-[-0.045em] text-foreground dark:text-dark-primary sm:text-6xl lg:text-[96px]"
            >
              {t("heroSection.titleMain")}{" "}
              <span className="text-brand dark:text-dark-accent">{t("heroSection.titleAccent")}</span>
            </Reveal>

            <Reveal as="p" delay={90} className="font-inter mt-7 max-w-[520px] text-lg leading-relaxed text-muted-foreground dark:text-dark-muted">
              {t("heroSection.subtitle")}
            </Reveal>

            <Reveal delay={160} className="mt-7 flex flex-wrap gap-3.5">
              <a href="#contact" className="font-inter inline-flex h-14 items-center gap-2.5 rounded-xl bg-brand px-7 text-base font-semibold text-white transition-colors hover:bg-brand-dark">
                {t("heroSection.primaryCta")}
                <ArrowRight className="h-[18px] w-[18px]" />
              </a>
              <a href="#como" className="font-inter inline-flex h-14 items-center rounded-xl border border-line px-7 text-base font-semibold text-foreground transition-colors hover:bg-brand-soft dark:border-dark-line dark:text-dark-primary dark:hover:bg-dark-card">
                {t("heroSection.secondaryCta")}
              </a>
            </Reveal>
          </div>

          <Reveal delay={220} className="ml-auto flex w-full basis-[300px] justify-end">
            <ChatDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
