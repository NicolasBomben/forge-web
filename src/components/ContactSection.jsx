import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useForm } from "../hooks/useForm";

export const ContactSection = () => {
  const { t } = useTranslation();

  const { name, email, message, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formcarry.com/s/b7jZFaLc_wb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (result.code === 200) {
        toast.success(t("contact.alertMessage"), {
          progressClassName: "bg-primary",
        });
        onResetForm();
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-inter text-primary text-3xl sm:text-4xl md:text-6xl tracking-tighter text-balance font-medium mb-12 dark:text-dark-accent2">
            {t("contact.title")}
          </h2>
          <h3 className="font-inter font-light tracking-normal text-gray-600 dark:text-dark-primary mx-auto text-lg sm:text-xl md:text-4xl">
            {t("contact.subtitle")}
          </h3>
        </div>
        <div className=" mx-auto px-4 max-w-md md:max-w-lg lg:max-w-xl">
          <div className="flex flex-col gap-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  placeholder={t("contact.namePlaceholder")}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-dark-background px-3 py-2 text-base dark:placeholder-dark-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-dark-background px-3 py-2 text-base dark:placeholder-dark-accent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={message}
                  onChange={onInputChange}
                  placeholder={t("contact.messagePlaceholder")}
                  required
                  className="flex min-h-[150px] w-full rounded-md border border-input bg-background dark:bg-dark-background text-foreground dark:text-dark-accent px-3 py-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent dark:bg-dark-accent text-white font-light px-4 py-4 rounded-md transition-colors "
              >
                {t("contact.submitButton")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
