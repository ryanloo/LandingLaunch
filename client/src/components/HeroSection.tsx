import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onFeatureClick: () => void;
  onPricingClick: () => void;
}

export default function HeroSection({ onFeatureClick, onPricingClick }: HeroSectionProps) {
  return (
    <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Launch Your SaaS in Just Hours—Optimized for AI-Powered Development! 🚀
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Built for AI-assisted coding! With Next.js, Supabase, and Stripe, RapidSaaS gives you pre-built payments, subscriptions, and authentication—so you can move fast and let AI handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={onPricingClick}
              className="bg-gradient-to-r from-primary to-[#7c3aed] text-white px-8 py-4 h-auto rounded-lg font-bold text-lg hover:opacity-90 transition duration-150 shadow-xl transform hover:-translate-y-1"
            >
              Get Instant Access
            </Button>
            <Button
              onClick={onFeatureClick}
              variant="outline"
              className="bg-white border border-gray-300 text-gray-700 px-8 py-4 h-auto rounded-lg font-bold text-lg hover:bg-gray-50 transition duration-150 shadow-md"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Fast Setup</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Next.js + Supabase</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Authentication</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Stripe Payments</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
