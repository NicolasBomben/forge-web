import { Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-background-light dark:bg-background-dark px-4 md:px-6"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-primary">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <form className="flex-1 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-text-dark dark:focus:ring-secondary dark:focus:border-secondary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-text-dark dark:focus:ring-secondary dark:focus:border-secondary"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-light dark:text-text-dark mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-text-dark dark:focus:ring-secondary dark:focus:border-secondary"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-primary py-2 px-4 rounded-md hover:bg-accent/90 transition-colors duration-200 font-semibold"
            >
              Send Message
            </button>
          </form>
          <div className="flex-1 space-y-4">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Connect with us
            </h3>
            <a
              href="mailto:contact@example.com"
              className="flex items-center text-secondary hover:text-secondary/80"
            >
              <Mail className="mr-2 h-5 w-5" /> contact@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center text-secondary hover:text-secondary/80"
            >
              <Phone className="mr-2 h-5 w-5" /> +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
