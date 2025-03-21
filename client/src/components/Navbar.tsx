import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate: {
    features: () => void;
    demo: () => void;
    pricing: () => void;
    faq: () => void;
  };
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (handler: () => void) => {
    setMobileMenuOpen(false);
    handler();
  };

  return (
    <header className="sticky top-0 bg-white bg-opacity-95 shadow-sm z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">RapidSaaS</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={onNavigate.features}
              className="text-gray-600 hover:text-primary font-medium transition duration-150"
            >
              Features
            </button>
            <button 
              onClick={onNavigate.demo}
              className="text-gray-600 hover:text-primary font-medium transition duration-150"
            >
              Demo
            </button>
            <button 
              onClick={onNavigate.pricing}
              className="text-gray-600 hover:text-primary font-medium transition duration-150"
            >
              Pricing
            </button>
            <button 
              onClick={onNavigate.faq}
              className="text-gray-600 hover:text-primary font-medium transition duration-150"
            >
              FAQ
            </button>
          </nav>

          <div className="hidden md:flex">
            <Button
              className="bg-gradient-to-r from-primary to-[#7c3aed] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition duration-150 shadow-lg"
              onClick={onNavigate.pricing}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {!mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavClick(onNavigate.features)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.demo)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Demo
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.pricing)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.faq)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 w-full text-left"
            >
              FAQ
            </button>
            <div className="px-3 py-2">
              <Button
                className="bg-gradient-to-r from-primary to-[#7c3aed] w-full text-center inline-block text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition duration-150 shadow-md"
                onClick={() => handleNavClick(onNavigate.pricing)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
