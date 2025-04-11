import { Code, LayoutTemplate, CreditCard, BellRing, ShieldCheck, Rocket } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-purple-400">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch your SaaS fast, with AI-friendly code that's easy to customize and extend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}>
              <LayoutTemplate className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-built Pages</h3>
            <p className="text-gray-600">
              Essential pages to kickstart your SaaS, including onboarding, settings, and billing.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' }}>
              <CreditCard className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stripe Payments</h3>
            <p className="text-gray-600">
              Seamless integration with Stripe for transactions, so you can start accepting payments right away.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)' }}>
              <BellRing className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Subscription</h3>
            <p className="text-gray-600">
              Manage user plans with automatic billing and upgrades for recurring revenue.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #c4b5fd 100%)' }}>
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Authentication</h3>
            <p className="text-gray-600">
              <span style={{ color: '#6c5ce7', fontWeight: 'bold' }}>⚡</span> Email & Google Authentication via Supabase<br />
              <span style={{ color: '#7c3aed', fontWeight: 'bold' }}>⚡</span> Easy password management<br />
              <span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>⚡</span> Subscription-based access control
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}>
              <Code className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Ready Code</h3>
            <p className="text-gray-600">
              Clean code structure that works seamlessly with AI tools like Cursor or Copilot for faster development.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-200 transition-all duration-300 hover:transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)' }}>
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Optimized for Scalability</h3>
            <p className="text-gray-600">
              Next.js + Supabase for high performance, security, and effortless scaling as your user base grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}