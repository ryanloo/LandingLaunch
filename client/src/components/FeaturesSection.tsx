export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to launch your SaaS fast, with AI-friendly code that's easy to customize and extend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-built Pages</h3>
            <p className="text-gray-600">
              Essential pages to kickstart your SaaS, including onboarding, settings, and billing.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stripe Payments</h3>
            <p className="text-gray-600">
              Seamless integration with Stripe for payments, so you can start accepting money right away.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Subscription</h3>
            <p className="text-gray-600">
              Manage user plans with automatic billing and upgrades for recurring revenue.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Authentication</h3>
            <p className="text-gray-600">
              <span className="text-primary">🔹</span> Email & Google Authentication via Supabase<br />
              <span className="text-primary">🔹</span> Easy password management<br />
              <span className="text-primary">🔹</span> Subscription-based access control
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Ready Code</h3>
            <p className="text-gray-600">
              Clean code structure that works seamlessly with AI tools like Cursor or Copilot for faster development.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-primary bg-opacity-10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
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
