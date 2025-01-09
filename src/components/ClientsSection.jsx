import { Globe } from "lucide-react";

const testiomonials = [
  {
    quote:
      "Thanks to the work done, we successfully established our presence in the digital world, connecting with more clients and effectively expanding our online reach.",
    author: "Dataholics",
    website: "https://dataholics.site",
  },
  {
    quote:
      "I wanted something simple yet professional to showcase my business and the services I offer. The result exceeded my expectations and provided a solid foundation for growth.",
    author: "Boschetti Bordoni",
    website: "https://boschettibordoni.com.ar",
  },
  {
    quote:
      "We wanted to give our website a fresh look: more minimalist, clean, and modern. Not only did we achieve that goal, but we also gained a powerful tool for clients to leave their contact information. It has been incredibly useful for us.",
    author: "Telmec",
    website: "https://telmec.com.ar",
  },
];

export const ClientsSection = () => {
  return (
    <section id="clients" className="py-24 relative">
      
      {/* Small circles background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `radial-gradient(#60A5FA 2px, transparent 2px)`,
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testiomonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-none"
            >
              <div className="mb-4">
                <div className="text-primary text-4xl">&quot;</div>
              </div>
              <div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="text-sm flex gap-2">
                  <p className="font-semibold">{testimonial.author}</p>
                  <a
                    href={testimonial.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex gap-2"
                    aria-label={`Visit ${testimonial.author}'s website`}
                  >
                    Visit Website
                    <Globe size={20}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
