import { useTranslation } from "react-i18next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_URL, trackContact } from "../utils/contact";
import { Reveal } from "./Reveal";

export const ContactSection = () => {
  const { t } = useTranslation();
  const perks = t("contact.perks", { returnObjects: true }) as string[];

  const labelClass = "font-inter text-xs font-semibold uppercase tracking-[0.14em] text-white/45";

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-4 py-24 text-ink-foreground">
      <div className="pointer-events-none absolute -bottom-44 -left-32 h-[520px] w-[520px] bg-[radial-gradient(circle,#17B8C7_0%,transparent_70%)] opacity-30" />

      <div className="container relative mx-auto">
        <div className="border-b border-dark-line pb-10">
          <span className={labelClass}>{t("contact.eyebrow")}</span>
          <Reveal as="h2" className="font-poppins mt-5 text-balance text-3xl font-bold uppercase leading-[1.04] tracking-[-0.04em] sm:text-5xl lg:text-[76px]">
            {t("contact.title")}
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-16 lg:grid-cols-2">
          <div className="grid gap-10">
            <div>
              <p className={labelClass}>{t("contact.whatsappLabel")}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackContact} className="font-poppins mt-3.5 inline-flex items-center gap-3 border-b-2 border-white/25 pb-1 text-3xl font-medium text-ink-foreground transition-colors hover:border-cyan-brand hover:text-cyan-brand sm:text-5xl">
                WhatsApp
                <ArrowUpRight className="h-7 w-7 sm:h-9 sm:w-9" />
              </a>
            </div>

            <div>
              <p className={labelClass}>{t("contact.mailLabel")}</p>
              <a href={`mailto:${CONTACT_EMAIL}`} onClick={trackContact} className="font-poppins mt-3.5 inline-block break-all border-b-2 border-white/25 pb-1 text-xl font-medium text-ink-foreground transition-colors hover:border-cyan-brand hover:text-cyan-brand sm:text-3xl">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="grid max-w-[420px] gap-3 border-t border-dark-line pt-7 lg:ml-auto lg:border-t-0 lg:pt-0">
            {(Array.isArray(perks) ? perks : []).map((perk) => (
              <div key={perk} className="font-inter flex items-center gap-3 text-base text-white/70">
                <CheckCircle2 className="h-[19px] w-[19px] text-cyan-brand" />
                {perk}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
