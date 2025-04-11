import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocation } from 'wouter';

const Privacy = () => {
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-6">Effective Date: March 24, 2024</p>

            <div className="space-y-6 text-gray-600">
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                <p>Welcome to RapidSaaS. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you use our SaaS starterkit product.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
                <p className="mb-2">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Personal Information:</span> When you sign up or make a purchase, we may collect your name, email address, and payment details.</li>
                  <li><span className="font-medium">Usage Data:</span> We collect information about how you use our Service, such as page visits, interactions, and preferences.</li>
                  <li><span className="font-medium">Technical Data:</span> This includes IP addresses, browser type, and device information for analytics and security purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
                <p className="mb-2">We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our Service.</li>
                  <li>Process transactions and manage accounts.</li>
                  <li>Communicate with you regarding updates, promotions, or customer support.</li>
                  <li>Ensure security and prevent fraudulent activities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Sharing Your Information</h2>
                <p className="mb-2">We do not sell or rent your personal data. However, we may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Service Providers:</span> Third-party vendors that assist with payment processing, analytics, or hosting.</li>
                  <li><span className="font-medium">Legal Authorities:</span> If required by law or to protect our rights and users.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information. However, no online service is 100% secure, so we encourage safe browsing practices.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
                <p>Depending on your location, you may have rights to access, correct, or delete your personal data. Contact us at rapidsaas@gmail.com for any requests.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Us</h2>
                <p>If you have any questions, please contact us at rapidsaas@gmail.com.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default Privacy; 