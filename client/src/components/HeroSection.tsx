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
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="inline-block" style={{ background: 'linear-gradient(90deg, #6c5ce7 0%, #a29bfe 50%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 2px 10px rgba(108, 92, 231, 0.1)' }}>
              Launch Your SaaS in Just Hours
            </span>
            <br />
            <span className="inline-block text-gray-900">
              Optimized for AI-Powered Development! 🚀
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Built for AI-assisted coding! With Next.js, Supabase, and Stripe, RapidSaaS gives you pre-built payments, subscriptions, and authentication—so you can move fast and let AI handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={onPricingClick}
              className="bg-gradient-to-r from-[#6c5ce7] via-[#7c3aed] to-[#8b5cf6] text-white px-8 py-4 h-auto rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-200 shadow-xl hover:shadow-[0_10px_25px_-5px_rgba(124,58,237,0.5)] transform hover:-translate-y-1"
            >
              Get Instant Access
            </Button>
            <Button
              onClick={onFeatureClick}
              variant="outline"
              className="bg-white border-2 border-[#6c5ce7] text-[#6c5ce7] px-8 py-4 h-auto rounded-lg font-bold text-lg hover:bg-[#6c5ce7] hover:text-white transition-all duration-200 shadow-md"
            >
              Learn More
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8075f7 100%)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Fast Setup</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #3498db 0%, #45aaf2 100%)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Next.js + Supabase</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #2ecc71 0%, #4cd137 100%)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Authentication</h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 rounded-full mb-4" style={{ background: 'linear-gradient(135deg, #e74c3c 0%, #ff6b6b 100%)' }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
