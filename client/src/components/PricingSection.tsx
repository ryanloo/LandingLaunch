import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { createCheckoutSession } from "@/api/stripe";

export default function PricingSection() {
  const [, setLocation] = useLocation();

  const handleCheckout = async () => {
    try {
      await createCheckoutSession();
    } catch (error) {
      console.error('Error during checkout:', error);
      // You might want to show an error message to the user here
    }
  };

  const isStripeConfigured = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY && 
                            import.meta.env.VITE_STRIPE_PRODUCT_ID;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ background: 'linear-gradient(90deg, #6c5ce7 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One price. Lifetime access. No subscriptions or hidden fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto transform hover:scale-105 transition-all duration-300">
          <div className="relative">
            {/* Highlight glow effect behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#6c5ce7] via-[#a29bfe] to-[#4338ca] rounded-2xl blur-md opacity-70"></div>
            
            {/* Main pricing card */}
            <div className="relative bg-gradient-to-br from-[#6c5ce7] to-[#4338ca] rounded-2xl shadow-xl overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full h-full opacity-10"
                style={{ 
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                  backgroundSize: '15px 15px'
                }}
              ></div>
              
              <div className="p-8 md:p-10 relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">RapidSaaS Boilerplate</h3>
                    <div className="flex items-baseline">
                      <span className="text-6xl font-extrabold text-white" style={{ textShadow: '0 2px 10px rgba(255,255,255,0.3)' }}>$40</span>
                      <span className="ml-2 text-xl text-white text-opacity-80">one-time</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-full px-4 py-1 backdrop-blur-sm">
                    <span className="text-sm font-medium text-white">Lifetime Access</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {/* Feature 1 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Complete Next.js + Supabase codebase</span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Authentication & user management</span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Stripe payments integration</span>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Subscription management system</span>
                  </div>

                  {/* Feature 5 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Detailed documentation</span>
                  </div>

                  {/* Feature 6 */}
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 mr-3 rounded-full bg-white bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition duration-200">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <span className="text-white group-hover:translate-x-1 transition-transform duration-200">Use for multiple projects</span>
                  </div>
                </div>

                <div className="mt-10">
                  <Button
                    onClick={handleCheckout}
                    disabled={!isStripeConfigured}
                    className={`relative block w-full bg-white text-[#6c5ce7] rounded-lg py-4 h-auto text-center font-bold text-lg transition-all duration-300 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.3)] group ${
                      !isStripeConfigured ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <span className="relative z-10">
                      {isStripeConfigured ? 'Get Instant Access' : 'Payment System Not Configured'}
                    </span>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#a29bfe] to-[#6c5ce7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    <span className="absolute top-0 left-0 w-full h-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center font-bold">
                      {isStripeConfigured ? 'Get Instant Access' : 'Payment System Not Configured'}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
