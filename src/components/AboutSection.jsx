import { PopupButton } from "react-calendly";
import { CalendarDays } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nuestra Misión
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl text-center">
            Potenciando a las empresas con soluciones digitales innovadoras
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-600">
            <p className="text-lg leading-relaxed">
              Nos apasiona ayudar a pequeñas y medianas empresas a prosperar en
              la era digital. Con una sólida formación académica y una
              perspectiva fresca, aportamos soluciones innovadoras para
              enfrentar los desafíos únicos que enfrentas.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-semibold">
                Nuestra misión es simple:
              </span>{" "}
              proporcionar soluciones digitales de vanguardia que hagan crecer
              tu negocio. Ya sea que necesites un sitio web impresionante, una
              plataforma de comercio electrónico eficiente o una optimización
              estratégica de SEO, estamos aquí para hacer realidad tu visión
              digital.
            </p>
          </div>
          <div className="mt-12 text-center">
            <a className="inline-flex items-center justify-center gap-2 h-11 rounded-md px-8 bg-primary hover:bg-primary/90 text-white font-medium transition-colors">
              <PopupButton
                url="https://calendly.com/nicolasbomben"
                rootElement={document.getElementById("root")}
                text="Conversemos sobre tu proyecto."
              />
              <CalendarDays className="h-4 w-4 ml-2"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
