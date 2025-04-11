import { Button } from "@/components/ui/button";

export default function DemoSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span style={{ background: 'linear-gradient(90deg, #6c5ce7 0%, #8b5cf6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              See RapidSaaS in Action
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the fully-functional preview of what you'll be getting with RapidSaaS:
          </p>
          
          {/* Feature bullets */}
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}></div>
              <span className="font-medium">Authentication Dashboard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' }}></div>
              <span className="font-medium">Payment Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)' }}></div>
              <span className="font-medium">User Management</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto transform hover:scale-[1.02] transition-all duration-500">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6c5ce7] via-[#7c3aed] to-[#8b5cf6] rounded-2xl opacity-50 blur-md"></div>

          {/* Main content */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Decorative pattern */}
            <div className="absolute top-0 left-0 w-full h-24 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '15px 15px'
              }}></div>
            </div>

            <div className="relative aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
              <div className="w-full max-w-2xl text-center">
                {/* Video play button with animation */}
                <div className="inline-flex relative mb-8">
                  <div className="absolute -inset-4 rounded-full opacity-30 animate-ping" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}></div>
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}>
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#6c5ce7] to-[#8b5cf6]">RapidSaaS Demo</h3>
                
                <p className="text-gray-600 mb-8 text-lg">
                  Take control of your SaaS business with our complete solution. Deploy in minutes, not months.
                </p>
                
                <Button
                  onClick={() => window.open("https://saas-template-ebon.vercel.app/", "_blank", "noopener,noreferrer")}
                  className="px-8 py-4 h-auto text-base md:text-lg font-bold rounded-lg shadow-lg bg-gradient-to-r from-[#6c5ce7] to-[#8b5cf6] text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Launch Live Demo
                </Button>
              </div>
            </div>
            
            {/* Demo highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-4 bg-gray-50">
              <div className="flex items-center p-3 hover:bg-white rounded-lg transition-colors duration-200">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #6c5ce7 0%, #8b5cf6 100%)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Secure Authentication</span>
              </div>
              <div className="flex items-center p-3 hover:bg-white rounded-lg transition-colors duration-200">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Billing Management</span>
              </div>
              <div className="flex items-center p-3 hover:bg-white rounded-lg transition-colors duration-200">
                <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3" style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #c4b5fd 100%)' }}>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">User Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
