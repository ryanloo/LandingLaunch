import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocation } from 'wouter';

const Terms = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigate = {
    features: () => setLocation('/#features'),
    demo: () => setLocation('/#demo'),
    pricing: () => setLocation('/#pricing'),
    faq: () => setLocation('/#faq'),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onNavigate={handleNavigate} />
      
      <main className="flex-grow bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
            <p className="text-sm text-gray-500 mb-6">Last updated: March 24, 2024</p>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                <p>By using RapidSaaS, you confirm your acceptance of and agree to be bound by these terms and conditions.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Agreement to Terms and Conditions</h2>
                <p>This Agreement takes effect on the date you first access or use the RapidSaaS starterkit.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Software License with Termination Rights</h2>
                <p>The RapidSaaS Software License allows users to acquire the RapidSaaS starterkit through a one-time purchase, granting full access to its features. Designed for developers, entrepreneurs, and businesses, RapidSaaS provides a streamlined foundation for building AI-powered SaaS applications.</p>
                <p className="mt-2">This license does not require ongoing subscriptions or recurring fees. However, the licensor retains the right to terminate the license at any time, ensuring control over software distribution and compliance with usage terms.</p>
                <p className="mt-2">By purchasing RapidSaaS, you acknowledge the licensor's right to revoke access under certain conditions while benefiting from a robust, AI-optimized development framework.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Refund Policy</h2>
                <p>Due to the digital nature of the RapidSaaS starterkit, refunds or exchanges are not provided once access is granted.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Disclaimer</h2>
                <p>RapidSaaS is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free operation. To the fullest extent permitted by law, we disclaim all express and implied warranties, including those related to fitness for a particular purpose, accuracy, and non-infringement.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
                <p>We are not liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use RapidSaaS. Our total liability, if any, shall not exceed the amount paid for the software.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. User Responsibilities</h2>
                <p>You are responsible for how you use RapidSaaS and any content you create using it. We are not liable for any legal issues arising from your projects.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Price Adjustments</h2>
                <p>As RapidSaaS evolves, the price may change. Early adopters can secure access at the current rate before future price increases.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
                <p>These Terms and Conditions are governed by the laws of Malaysia. No partnership, employment, or agency relationship is established between you and RapidSaaS through the use of this product.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Terms; 