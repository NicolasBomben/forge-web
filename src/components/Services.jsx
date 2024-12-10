import { Laptop, Smartphone, Code, Palette } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark px-4 md:px-6 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E3A8A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
            <Laptop className="h-12 w-12 mb-4 text-secondary" />
            <h3 className="text-xl font-bold text-primary">Web Development</h3>
            <p className="text-sm text-text-light dark:text-text-dark text-center">
              Creating responsive and dynamic websites tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
            <Smartphone className="h-12 w-12 mb-4 text-secondary" />
            <h3 className="text-xl font-bold text-primary">Mobile App Development</h3>
            <p className="text-sm text-text-light dark:text-text-dark text-center">
              Building intuitive and powerful mobile applications for iOS and Android.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
            <Code className="h-12 w-12 mb-4 text-secondary" />
            <h3 className="text-xl font-bold text-primary">Custom Software Solutions</h3>
            <p className="text-sm text-text-light dark:text-text-dark text-center">
              Developing bespoke software to address your unique business challenges.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-transform hover:scale-105">
            <Palette className="h-12 w-12 mb-4 text-secondary" />
            <h3 className="text-xl font-bold text-primary">Web Design</h3>
            <p className="text-sm text-text-light dark:text-text-dark text-center">
              Crafting visually stunning and user-friendly interfaces for your digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
