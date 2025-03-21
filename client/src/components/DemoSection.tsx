import { Button } from "@/components/ui/button";

export default function DemoSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See RapidSaaS in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Check out our live demo to experience how your SaaS could look and feel.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-5xl mx-auto">
          <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary bg-opacity-20 text-primary mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">RapidSaaS Demo</h3>
                <p className="text-gray-600 mb-6">Click to see the full product in action</p>
                <Button
                  className="inline-flex items-center justify-center px-6 py-3 h-auto border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                >
                  Launch Live Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
