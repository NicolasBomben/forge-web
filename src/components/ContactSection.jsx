import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useForm } from "../hooks/useForm";
import { Reveal } from "./Reveal";

const WHATSAPP = "5491100000000"; // TODO: reemplazar por el numero real

export const ContactSection = () => {
  const { t } = useTranslation();
  const interests = t("contact.interests", { returnObjects: true });
  const perks = t("contact.perks", { returnObjects: true });
  const [interest, setInterest] = useState(Array.isArray(interests) ? interests[0] : "");

  const { name, email, message, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    /* global fbq */
    e.preventDefault();

    try {
      const response = await fetch("https://formcarry.com/s/b7jZFaLc_wb", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, interest }),
      });

      const result = await response.json();

      if (result.code === 200) {
        toast.success(t("contact.alertMessage"), {
          position: "top-center",
          progressClassName: "bg-brand",
        });
        if (typeof fbq === "function") fbq("track", "Lead");
        onResetForm();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const fieldClass =
    "font-inter w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-xl text-ink-foreground outline-none transition-colors placeholder:text-white/40 focus:border-cyan-brand";
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
          <form onSubmit={handleSubmit} className="grid gap-8">
            <div className="grid gap-3.5">
              <span className={labelClass}>{t("contact.stepInterest")}</span>
              <div className="flex flex-wrap gap-2.5">
                {(Array.isArray(interests) ? interests : []).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setInterest(opt)}
                    className={`font-inter rounded-full border px-4 py-2.5 text-[14.5px] font-medium transition-colors ${
                      interest === opt
                        ? "border-ink-foreground bg-ink-foreground text-ink"
                        : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-2.5">
              <label htmlFor="contact-name" className={labelClass}>{t("contact.stepName")}</label>
              <input id="contact-name" type="text" name="name" value={name} onChange={onInputChange} placeholder={t("contact.namePlaceholder")} required className={fieldClass} />
            </div>

            <div className="grid gap-2.5">
              <label htmlFor="contact-email" className={labelClass}>{t("contact.stepEmail")}</label>
              <input id="contact-email" type="email" name="email" value={email} onChange={onInputChange} placeholder={t("contact.emailPlaceholder")} required className={fieldClass} />
            </div>

            <div className="grid gap-2.5">
              <label htmlFor="contact-message" className={labelClass}>{t("contact.stepMessage")}</label>
              <textarea id="contact-message" name="message" value={message} onChange={onInputChange} placeholder={t("contact.messagePlaceholder")} required className={`${fieldClass} min-h-[110px] resize-y text-lg leading-relaxed`} />
            </div>

            <button type="submit" className="font-inter inline-flex h-14 w-fit items-center gap-3 rounded-full bg-ink-foreground px-8 text-base font-semibold text-ink transition-colors hover:bg-white">
              {t("contact.submitButton")}
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
          </form>

          <div className="grid max-w-[420px] gap-8 lg:ml-auto">
            <div>
              <p className={labelClass}>{t("contact.whatsappLabel")}</p>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="font-poppins mt-3.5 inline-flex items-center gap-3 border-b-2 border-white/25 pb-1 text-2xl font-medium text-ink-foreground transition-colors hover:border-cyan-brand hover:text-cyan-brand sm:text-3xl">
                WhatsApp
                <ArrowUpRight className="h-[22px] w-[22px]" />
              </a>
            </div>

            <div>
              <p className={labelClass}>{t("contact.mailLabel")}</p>
              <a href="mailto:contacto@forgetech.dev" className="font-poppins mt-3.5 inline-block border-b-2 border-white/25 pb-1 text-xl font-medium text-ink-foreground transition-colors hover:border-cyan-brand hover:text-cyan-brand sm:text-2xl">
                contacto@forgetech.dev
              </a>
            </div>

            <div className="grid gap-3 border-t border-dark-line pt-7">
              {(Array.isArray(perks) ? perks : []).map((perk) => (
                <div key={perk} className="font-inter flex items-center gap-3 text-base text-white/70">
                  <CheckCircle2 className="h-[19px] w-[19px] text-cyan-brand" />
                  {perk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
