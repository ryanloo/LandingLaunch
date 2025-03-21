import { useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar 
        onNavigate={{
          features: () => scrollToSection(featuresRef),
          demo: () => scrollToSection(demoRef),
          pricing: () => scrollToSection(pricingRef),
          faq: () => scrollToSection(faqRef),
        }}
      />
      
      <main>
        <HeroSection 
          onFeatureClick={() => scrollToSection(featuresRef)}
          onPricingClick={() => scrollToSection(pricingRef)}
        />
        <div ref={featuresRef}>
          <FeaturesSection />
        </div>
        <div ref={demoRef}>
          <DemoSection />
        </div>
        <div ref={pricingRef}>
          <PricingSection />
        </div>
        <div ref={faqRef}>
          <FAQSection />
        </div>
        <CTASection 
          onDemoClick={() => scrollToSection(demoRef)}
          onPricingClick={() => scrollToSection(pricingRef)}
        />
      </main>
      
      <Footer 
        onNavigate={{
          features: () => scrollToSection(featuresRef),
          demo: () => scrollToSection(demoRef),
          faq: () => scrollToSection(faqRef),
        }}
      />
    </div>
  );
}
