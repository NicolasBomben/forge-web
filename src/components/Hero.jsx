export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-violet-100 to-white overflow-hidden relative">
      <div className="container mx-auto relative z-10 pt-16">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
            Transforma Tu Negocio
            <span className="text-primary block">Con Desarrollo Web Profesional</span>
          </h1>
          <p className="mt-6 max-w-[600px] text-lg sm:text-xl md:text-2xl text-gray-600">
            Transformamos ideas en soluciones de software potentes, eficientes y
            escalables.
          </p>
          <div className="mt-10">
            <button
              className="px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Descubre Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
