export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden relative">
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="container mx-auto relative z-10 pt-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Innovative Software Solutions
            </h1>
            <p className="max-w-[600px] text-lg sm:text-xl md:text-2xl text-gray-200">
              Transforming ideas into powerful, efficient, and scalable software solutions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
              <button className="px-8 py-3 bg-accent text-primary font-semibold rounded-md hover:bg-accent/90 transition-colors duration-200">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent text-white border-2 border-white font-semibold rounded-md hover:bg-white/10 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};
