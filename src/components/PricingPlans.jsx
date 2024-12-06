import { Check } from "lucide-react";

export const PricingPlans = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Pricing Plans</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-[#f7f9fc] rounded-lg shadow-md">
                <h3 className="text-2xl text-primary font-bold mb-8 mt-8">Basic</h3>
                <span className="text-xl text-foreground mb-8 mt-8">The basic for you start</span>
                <p className="text-4xl text-accent font-bold text-center mb-4 mt-8">$999</p>
                <button className="rounded-md shadow-xl py-4 px-8 text-center text-sm text-white hover:text-white bg-primary active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mb-8 mt-8">Choose Plan</button>
                <ul className="mb-8 mt-8 space-y-2 text-foreground text-md">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Basic Website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    5 Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Basic SEO
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 bg-[#f7f9fc] rounded-lg shadow-md">
                <h3 className="text-2xl text-primary font-bold text-center mb-4">Pro</h3>
                <p className="text-4xl text-accent font-bold text-center mb-4">$2,499</p>
                <ul className="mb-6 space-y-2 text-foreground text-md">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Advanced Website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    10 Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Advanced SEO
                  </li>
                </ul>
                <button>Choose Plan</button>
              </div>
              <div className="flex flex-col p-6 bg-[#f7f9fc] rounded-lg shadow-md">
                <h3 className="text-2xl text-primary font-bold text-center mb-4">Enterprise</h3>
                <p className="text-4xl text-accent font-bold text-center mb-4">Custom</p>
                <ul className="mb-6 space-y-2 text-foreground text-md">
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Custom Solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Unlimited Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-6 w-6 mr-2 text-secondary" />
                    Full SEO Package
                  </li>
                </ul>
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </section>
  )
}
