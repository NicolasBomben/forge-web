import { Laptop, Smartphone, Code } from "lucide-react";

export const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f9fc] px-4 md:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          My Services
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
            <Laptop className="h-12 w-12 mb-2 text-primary" />
            <h3 className="text-xl text-secondary font-bold">Web Development</h3>
            <p className="text-sm text-foreground dark:text-gray-400 text-center">
              Creating responsive and dynamic websites tailored to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
            <Smartphone className="h-12 w-12 mb-2 text-primary" />
            <h3 className="text-xl text-secondary font-bold">Mobile App Development</h3>
            <p className="text-sm text-foreground dark:text-gray-400 text-center">
              Building intuitive and powerful mobile applications for iOS and
              Android.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
            <Code className="h-12 w-12 mb-2 text-primary" />
            <h3 className="text-xl text-secondary font-bold">Custom Software Solutions</h3>
            <p className="text-sm text-foreground dark:text-gray-400 text-center">
              Developing bespoke software to address your unique business
              challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
