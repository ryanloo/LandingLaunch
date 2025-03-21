import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One price. Lifetime access. No subscriptions or hidden fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-primary to-[#4338ca] rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">RapidSaaS Boilerplate</h3>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-white">$40</span>
                    <span className="ml-2 text-xl text-primary-100 text-opacity-70">one-time</span>
                  </div>
                </div>
                <div className="bg-primary bg-opacity-30 rounded-full px-4 py-1">
                  <span className="text-sm font-medium text-white">Lifetime Access</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Complete Next.js + Supabase codebase</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Authentication & user management</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Stripe payments integration</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Subscription management system</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Detailed documentation</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white text-opacity-70 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-white">Use for multiple projects</span>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  className="block w-full bg-white text-primary rounded-lg py-4 h-auto text-center font-bold text-lg hover:bg-gray-50 transition duration-150 shadow-lg"
                >
                  Get Instant Access
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
