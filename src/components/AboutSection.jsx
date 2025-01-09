export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Mision</h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl text-center">
            Empowering businesses whit innovate digital solutions
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-600">
            <p className="text-lg leading-relaxed">
              We&apos;re passionate about helping small and medium-sized businesses
              thrive in the digital age. Backed by strong academic foundations
              and a fresh perspective, we bring innovative solutions to meet the
              unique challenges you face.
            </p>
            <p className="text-lg leading-relaxed">
              <span className="text-primary font-semibold">Our mission is simple:</span> to provide cutting-edge digital solutions
              that help your business grow. Whether you need a stunning website,
              an efficient e-commerce platform, or strategic SEO optimization,
              we&apos;re here to turn your digital vision into reality.
            </p>
          </div>
          <div className="mt-12 text-center">
            <a href="#contact">
              <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
              Let&apos;s Discuss Your Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
