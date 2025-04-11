import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Success() {
  const [, setLocation] = useLocation();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    setIsAnimated(true);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Navbar 
        onNavigate={{
          features: () => {},
          demo: () => {},
          pricing: () => {},
          faq: () => {},
        }}
      />
      
      <main className="min-h-screen py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Payment Successful!
            </h1>
            
            <div className="mt-8 space-y-6">
              <p className="text-xl text-gray-600">
                Thank you for purchasing RapidSaaS Starter Kit!
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Next Steps
                </h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Check your email inbox for the download link and instructions.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      The email will contain your secure, one-time download link.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-600">
                      Download should arrive within the next few minutes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Note:</strong> If you don't receive the email within 15 minutes, please check your spam folder or contact our support.
                </p>
              </div>
            </div>

            {/* Return Home Button */}
            <div className="mt-10">
              <Button
                onClick={() => setLocation('/')}
                className="bg-gradient-to-r from-[#6c5ce7] to-[#4338ca] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer 
        onNavigate={{
          features: () => {},
          demo: () => {},
          faq: () => {},
        }}
      />
    </div>
  );
} 