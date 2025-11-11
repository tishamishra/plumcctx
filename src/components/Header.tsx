"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if we're on a sub-domain (not main domain)
  const isSubDomain = typeof window !== 'undefined' && 
    window.location.hostname !== 'unitedplumbingcctx.com' && 
    window.location.hostname !== 'www.unitedplumbingcctx.com' &&
    window.location.hostname.includes('.unitedplumbingcctx.com');

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="https://ik.imagekit.io/nang9yead/0846cbdb-42a9-43e7-b7e4-4ca1f2d9a450%20(1).png?updatedAt=1758309225236" 
                alt="United Plumbing CCTX" 
                className="h-10 md:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Menu - Desktop Only */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-[#ea580c] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/10 to-[#ea580c]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            {!isSubDomain && (
              <Link href="/locations" className="text-gray-700 hover:text-[#ea580c] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
                <span className="relative z-10">Locations</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/10 to-[#ea580c]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            )}
            <Link href="/services" className="text-gray-700 hover:text-[#ea580c] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/10 to-[#ea580c]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#ea580c] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/10 to-[#ea580c]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#ea580c] px-4 py-2 text-base font-semibold transition-all duration-300 hover:bg-gray-50 rounded-lg relative group">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/10 to-[#ea580c]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </nav>

          {/* Phone Number - Desktop Only */}
          <div className="hidden md:flex items-center">
            <a href="tel:8336090936" className="bg-[#ea580c] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0f4c75] transition flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <span>(833) 609-0936</span>
            </a>
          </div>

          {/* Mobile Menu Button - Mobile Only */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#ea580c] p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Mobile Only */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link 
                href="/" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea580c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              {!isSubDomain && (
                <Link 
                  href="/locations" 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea580c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Locations
                </Link>
              )}
              <Link 
                href="/services" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea580c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea580c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ea580c] hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200">
                             <a
                               href="tel:8336090936"
                               className="block px-3 py-2 text-base font-medium bg-[#ea580c] text-white rounded-md hover:bg-[#0f4c75] transition-colors duration-200 text-center"
                               onClick={() => setIsMobileMenuOpen(false)}
                             >
                               <svg className="w-4 h-4 mr-2 inline" fill="currentColor" viewBox="0 0 20 20">
                                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                               </svg>
                               (833) 609-0936
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 