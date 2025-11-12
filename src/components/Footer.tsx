"use client";

import { getPlaceholderImage } from "@/data/imagePlaceholders";

interface FooterProps {
  location?: {
    name: string;
    state: string;
  };
}

export default function Footer({ location }: FooterProps) {
  const footerVan = getPlaceholderImage('footerFleetVan');
  return (
    <>
      {/* 24/7 CTA Banner with Van */}
      <section className="py-4 px-4 bg-gradient-to-r from-orange-800 to-orange-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                We&apos;re Available 24*7 Hrs At<br />
                Your Service. Reach Us Today!
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-1">CALL TODAY</div>
                  <div className="text-2xl md:text-3xl font-bold">(833) 609-0936</div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Van Image */}
            <div className="flex-1 flex justify-center lg:justify-end items-end">
              <img 
                src={footerVan.defaultUrl} 
                alt={footerVan.alt}
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain scale-100 sm:scale-110 lg:scale-150 -mb-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Service Area Map
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe 
              title="Google Map" 
              height="350" 
              width="100%" 
              src={location 
                ? `https://maps.google.com/maps?q=${encodeURIComponent(location.name + ', ' + location.state)}&t=&z=13&ie=UTF8&iwloc=&output=embed`
                : "https://maps.google.com/maps?q=United+States&t=&z=4&ie=UTF8&iwloc=&output=embed"
              }
              loading="lazy" 
              className="w-full" 
              style={{border:0}}
            />
          </div>
        </div>
      </section>

      {/* Big CTA Banner */}
      <section className="bg-[#ea580c] text-white py-16 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-bounce">Need a Plumber Today? Get a Free Quote Now</h2>
          <div className="mb-8">
            <a 
              href="tel:8336090936"
              className="bg-white text-[#ea580c] font-bold px-12 py-6 rounded-xl text-3xl hover:bg-gray-50 transition shadow-lg inline-block animate-pulse"
            >
              (833) 609-0936
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
