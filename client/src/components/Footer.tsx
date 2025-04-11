import { Link } from "wouter";

interface FooterProps {
  onNavigate: {
    features: () => void;
    demo: () => void;
    faq: () => void;
  };
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">RapidSaaS</span>
            </div>
            <p className="mt-2 text-sm text-gray-400 text-center md:text-left">
              Launch your SaaS faster with AI-ready code.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">Product</h3>
              <ul className="space-y-2">
                <li><button onClick={onNavigate.features} className="text-gray-400 hover:text-white transition duration-150">Features</button></li>
                <li><button onClick={onNavigate.demo} className="text-gray-400 hover:text-white transition duration-150">Demo</button></li>
                <li><button onClick={onNavigate.faq} className="text-gray-400 hover:text-white transition duration-150">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rapidsaas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    Support
                  </a>
                </li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition duration-150">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition duration-150">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white uppercase mb-4">Connect</h3>
              <ul className="space-y-2">
              <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=rapidsaas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition duration-150"
                  >
                    Contact Us
                  </a>
                </li>
                <li><a href="https://x.com/RapidSaaSxyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150">Twitter</a></li>
                <li><a href="https://www.instagram.com/rapidsaasxyz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-150">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RapidSaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
