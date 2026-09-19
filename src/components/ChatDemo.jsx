import { useEffect, useRef, useState } from "react";
import { Bot, Send } from "lucide-react";
import { useTranslation } from "react-i18next";

/** Demo animada del ChatBot SaaS: panel con scroll propio y autoscroll. */
export const ChatDemo = () => {
  const { t } = useTranslation();
  const script = t("chatDemo.script", { returnObjects: true });
  const [step, setStep] = useState(2);
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [step, typing]);

  useEffect(() => {
    if (!Array.isArray(script) || script.length === 0) return;
    let typingTimer;
    const next = step + 1;

    if (next > script.length) {
      const restart = setTimeout(() => setStep(0), 1400);
      return () => clearTimeout(restart);
    }

    const isBot = script[next - 1].from === "bot";
    const advance = setTimeout(
      () => {
        if (isBot) {
          setTyping(true);
          typingTimer = setTimeout(() => {
            setTyping(false);
            setStep(next);
          }, 1100);
        } else {
          setStep(next);
        }
      },
      step === 0 ? 600 : 1500
    );

    return () => {
      clearTimeout(advance);
      clearTimeout(typingTimer);
    };
  }, [step, script]);

  return (
    <div className="w-full max-w-[320px] overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(11,20,36,0.35)] dark:border-dark-line dark:bg-dark-card">
      <div className="flex items-center gap-3 bg-brand px-4 py-4 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20">
          <Bot className="h-5 w-5" />
        </div>
        <div>
          <p className="font-poppins text-[15px] font-semibold leading-tight">{t("chatDemo.title")}</p>
          <p className="font-inter text-xs text-white/80">{t("chatDemo.status")}</p>
        </div>
      </div>

      <div ref={bodyRef} className="flex h-60 flex-col gap-2.5 overflow-y-auto bg-muted px-3 py-3.5 dark:bg-dark-background">
        {(Array.isArray(script) ? script : []).slice(0, step).map((msg, i) => (
          <div key={i} className={`flex animate-bubbleIn ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`font-inter max-w-[86%] rounded-[13px] border px-3 py-2 text-[12.5px] leading-snug ${
                msg.from === "user"
                  ? "border-brand bg-brand text-white"
                  : "border-line bg-white text-foreground dark:border-dark-line dark:bg-dark-card dark:text-dark-primary"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {typing && (
          <div className="flex w-fit items-center gap-1.5 rounded-[13px] border border-line bg-white px-3 py-2.5 dark:border-dark-line dark:bg-dark-card">
            <span className="h-1.5 w-1.5 animate-typingDot rounded-full bg-muted-foreground dark:bg-dark-muted" />
            <span className="h-1.5 w-1.5 animate-typingDot rounded-full bg-muted-foreground [animation-delay:200ms] dark:bg-dark-muted" />
            <span className="h-1.5 w-1.5 animate-typingDot rounded-full bg-muted-foreground [animation-delay:400ms] dark:bg-dark-muted" />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2.5 border-t border-line bg-white px-4 py-3.5 dark:border-dark-line dark:bg-dark-card">
        <span className="font-inter flex-1 text-sm text-muted-foreground dark:text-dark-muted">{t("chatDemo.inputHint")}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand text-white">
          <Send className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
};
