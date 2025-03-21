import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onDemoClick: () => void;
  onPricingClick: () => void;
}

export default function CTASection({ onDemoClick, onPricingClick }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-[#4338ca]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Launch Your SaaS Faster?</h2>
          <p className="text-xl text-white text-opacity-80 mb-10 max-w-3xl mx-auto">
            Stop wasting time on boilerplate code. With RapidSaaS, you can focus on what matters—building features that delight your users.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={onPricingClick}
              className="bg-white text-primary px-8 py-4 h-auto rounded-lg font-bold text-lg hover:bg-gray-50 transition duration-150 shadow-xl"
            >
              Get Instant Access
            </Button>
            <Button
              onClick={onDemoClick}
              variant="outline"
              className="bg-primary bg-opacity-20 text-white border border-white border-opacity-30 px-8 py-4 h-auto rounded-lg font-bold text-lg hover:bg-primary transition duration-150 shadow-xl"
            >
              See the Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
