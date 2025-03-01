import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { useForm } from "../hooks/useForm";

export const ContactSection = () => {
  const { t } = useTranslation();

  const { name, email, message, service, onInputChange, onResetForm } = useForm(
    {
      name: "",
      email: "",
      message: "",
      service: "",
    }
  );

  const services = [
    { value: "landing-page", label: t("contact.services.landingPage") },
    {
      value: "institutional-website",
      label: t("contact.services.institutionalWebsite"),
    },
    { value: "ecommerce", label: t("contact.services.ecommerce") },
    { value: "custom-website", label: t("contact.services.customWebsite") },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formcarry.com/s/b7jZFaLc_wb", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, service }),
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
    <section id="contact" className="py-24 bg-gray-50 font-poppins">
      <div className="container mx-auto px-4 max-w-md md:max-w-lg lg:max-w-xl">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-12">
          {t("contact.title")}
        </h2>
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
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
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
            <div>
              <select
                name="service"
                value={service}
                onChange={onInputChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="" disabled>
                  {t("contact.selectService")}
                </option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={message}
                onChange={onInputChange}
                placeholder={t("contact.messagePlaceholder")}
                required
                className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-light px-4 py-2 rounded-md transition-colors"
            >
              {t("contact.submitButton")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
