export const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Software Development Services
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground md:text-xl dark:text-gray-400">
              Transforming ideas into powerful, efficient, and scalable software
              solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="rounded-md shadow-xl py-2 px-4 border border-transparent text-center text-sm text-foreground hover:text-white   hover:bg-secondary border-accent active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">
              Get Started
            </button>
            <button className="rounded-md shadow-xl border border-secondary py-2 px-4 text-center text-sm  text-foreground hover:text-white hover:bg-accent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
