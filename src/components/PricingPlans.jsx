import { Check } from "lucide-react";

export const PricingPlans = () => {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 px-4 md:px-6 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-primary">Choose Your Plan</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Select the perfect plan for your needs. Upgrade, downgrade, or cancel anytime.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-secondary/10 p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Basic</h3>
              <p className="text-gray-600 dark:text-gray-400">For small projects</p>
              <p className="text-4xl font-bold text-primary mt-4">$9.99<span className="text-lg font-normal">/mo</span></p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 flex-grow">
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>1 Website</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>30 GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>100 GB Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>1 Email Account</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 font-semibold">
                Select Plan
              </button>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="flex flex-col border-2 border-accent rounded-lg overflow-hidden transition-transform hover:scale-105 shadow-lg">
            <div className="bg-accent text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p>For growing businesses</p>
              <p className="text-4xl font-bold mt-4">$19.99<span className="text-lg font-normal">/mo</span></p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 flex-grow">
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>10 Websites</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>100 GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>10 Email Accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Free Domain</span>
                </li>
              </ul>
              <button className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent/90 transition-colors duration-200 font-semibold">
                Select Plan
              </button>
            </div>
          </div>

          {/* Business Plan */}
          <div className="flex flex-col border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-transform hover:scale-105">
            <div className="bg-secondary/10 p-6">
              <h3 className="text-2xl font-bold text-primary mb-2">Business</h3>
              <p className="text-gray-600 dark:text-gray-400">For large scale projects</p>
              <p className="text-4xl font-bold text-primary mt-4">$39.99<span className="text-lg font-normal">/mo</span></p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 flex-grow">
              <ul className="space-y-4 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>100 Websites</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>200 GB SSD Storage</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>100 Email Accounts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-secondary mr-2" />
                  <span>Free Domain & SSL</span>
                </li>
              </ul>
              <button className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200 font-semibold">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
