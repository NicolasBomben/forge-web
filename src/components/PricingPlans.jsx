import { Check } from "lucide-react";

export const PricingPlans = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Pricing Plans</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <p className="text-4xl font-bold text-center mb-4">$999</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Basic Website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    5 Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Basic SEO
                  </li>
                </ul>
                <button>Choose Plan</button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-4xl font-bold text-center mb-4">$2,499</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Advanced Website
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    10 Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Advanced SEO
                  </li>
                </ul>
                <button>Choose Plan</button>
              </div>
              <div className="flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Enterprise</h3>
                <p className="text-4xl font-bold text-center mb-4">Custom</p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Custom Solutions
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
                    Unlimited Pages
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-500" />
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
