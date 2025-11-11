import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Full-Service Bathroom Plumbing Remodels | United Plumbing CCTX',
  description: 'Bring your bathroom vision to life—United Plumbing CCTX handles piping, fixture placement, and permits for remodels nationwide.',
  keywords: [
    'custom bathroom renovation',
    'bathroom design services',
    'bathroom remodeling',
    'bathroom renovation contractor',
    'bathroom renovation company',
    'bathroom renovation near me',
    'bathroom renovation cost',
    'bathroom renovation expert',
    'bathroom renovation professional',
    'bathroom renovation licensed',
    'bathroom renovation insured',
    'bathroom renovation 24/7',
    'bathroom renovation emergency',
    'bathroom renovation repair',
    'bathroom renovation maintenance',
    'bathroom renovation replacement',
    'bathroom renovation upgrade',
    'bathroom renovation energy efficient',
    'bathroom renovation modern design',
    'bathroom renovation luxury'
  ],
  openGraph: {
    title: 'Full-Service Bathroom Plumbing Remodels | United Plumbing CCTX',
    description: 'Bring your bathroom vision to life—United Plumbing CCTX handles piping, fixture placement, and permits for remodels nationwide.',
    url: 'https://unitedplumbingcctx.com/services/plumber-bathroom-renovation',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Service Bathroom Plumbing Remodels | United Plumbing CCTX',
    description: 'Bring your bathroom vision to life—United Plumbing CCTX handles piping, fixture placement, and permits for remodels nationwide.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services/plumber-bathroom-renovation',
  },
};

export default function BathroomRenovationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60">
          <img 
            src="https://ik.imagekit.io/nang9yead/Modern%20Bathroom%20Interior%20Design.png?updatedAt=1756066963229" 
            alt="Custom bathroom renovation"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Licensed & Insured
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Custom Bathroom Renovation & Design Services in the US
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Transform your outdated bathroom with modern fixtures, efficient layouts, and timeless appeal!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8336090936" locationName="Your Area" />
      </section>

      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Bathroom Renovation Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable bathroom renovation? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need complete renovation, design consultation, or fixture installation, we're your trusted plumbing experts. Serving residential and commercial properties with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8336090936"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              Call (833) 609-0936 Now
            </a>
          </div>
        </div>
      </section>

      {/* Search Block */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Are you searching for expert bathroom renovation services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! United Plumbing CCTX is your trusted plumbing expert. We provide comprehensive bathroom renovation solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Renovation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional bathroom renovation for homes with modern design and efficient layouts.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Renovation</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale bathroom renovations for businesses with minimal downtime and maximum appeal.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Holding%20Wrench%20in%20Kitchen.png?updatedAt=1756066963942" 
                alt="Professional plumber working"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Licensed & Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Bathroom Renovation Services We Provide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-blue-600 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3">Complete Renovation</h3>
              <p className="text-gray-600">
                Full bathroom transformation with modern fixtures and efficient layouts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-green-600 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-3">Design Consultation</h3>
              <p className="text-gray-600">
                Expert design consultation for optimal space utilization and aesthetics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-orange-600 text-4xl mb-4">🚿</div>
              <h3 className="text-xl font-bold mb-3">Fixture Installation</h3>
              <p className="text-gray-600">
                Professional installation of modern bathroom fixtures and accessories.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-purple-600 text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3">Plumbing Updates</h3>
              <p className="text-gray-600">
                Complete plumbing system updates for modern bathroom requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-red-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Energy Efficiency</h3>
              <p className="text-gray-600">
                Energy-efficient fixtures and systems for cost savings and sustainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <div className="text-indigo-600 text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3">Luxury Upgrades</h3>
              <p className="text-gray-600">
                Premium fixtures and luxury upgrades for sophisticated bathroom designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose United Plumbing CCTX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">
                  All our technicians are fully licensed, bonded, and insured for your protection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                <p className="text-gray-600">
                  Available around the clock for urgent plumbing emergencies and repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
                <p className="text-gray-600">
                  Using the latest tools and technology for precise diagnostics and repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Committed to providing exceptional service and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Bathroom Renovation Services?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for expert renovation, design, and installation services. 
            Transform your bathroom into a modern, efficient, and beautiful space!
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:8336090936"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300"
            >
              Call (833) 609-0936 Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 