import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Kitchen & Bathroom Faucet Repair Pros | United Plumbing CCTX',
  description: 'Stop drips and upgrade fixtures with United Plumbing CCTX. Our plumbers fix leaks, replace cartridges, and install designer faucets nationwide.',
  keywords: [
    'faucet repair',
    'sink repair',
    'faucet installation',
    'sink installation',
    'faucet repair near me',
    'sink repair near me',
    'professional faucet repair',
    'professional sink repair',
    'kitchen faucet repair',
    'bathroom faucet repair',
    'faucet repair company',
    'sink repair company',
    'faucet repair contractor',
    'sink repair contractor',
    'faucet repair expert',
    'sink repair expert',
    'faucet repair professional',
    'sink repair professional',
    'faucet repair residential',
    'sink repair residential',
    'faucet repair commercial',
    'sink repair commercial',
    'faucet repair 24/7',
    'sink repair 24/7',
    'faucet repair emergency',
    'sink repair emergency',
    'faucet repair cost',
    'sink repair cost',
    'faucet repair price',
    'sink repair price',
    'faucet repair service',
    'sink repair service'
  ],
  openGraph: {
    title: 'Kitchen & Bathroom Faucet Repair Pros | United Plumbing CCTX',
    description: 'Stop drips and upgrade fixtures with United Plumbing CCTX. Our plumbers fix leaks, replace cartridges, and install designer faucets nationwide.',
    url: 'https://unitedplumbingcctx.com/services/plumber-faucet-sink-repair',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen & Bathroom Faucet Repair Pros | United Plumbing CCTX',
    description: 'Stop drips and upgrade fixtures with United Plumbing CCTX. Our plumbers fix leaks, replace cartridges, and install designer faucets nationwide.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services/plumber-faucet-sink-repair',
  },
};

export default function FaucetsSinksRepairReplacementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60">
          <img 
            src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094" 
            alt="Faucet and sink repair and replacement services"
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
              Expert Faucet & Sink Repair & Replacement Services in the US
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Expert installation and repair of kitchen and bathroom faucets and sinks in the US. Leak-free performance and upgraded fixtures!
            </p>
          </div>
        </div>
        <FloatingCTA phone="8336090936" locationName="Your Area" />
      </section>
      
      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Faucet & Sink Repair & Replacement Services in the USA
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable faucet and sink services in the US? Our team of licensed and certified plumbers provides exceptional service at competitive prices. Whether you need repairs, new installation, or upgrades, we're your trusted plumbing experts. Serving residential and commercial properties throughout the USA with 24/7 availability and guaranteed satisfaction.
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
                Are you searching for expert faucet and sink services in the US?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! United Plumbing CCTX is your trusted plumbing expert in the USA. We provide comprehensive faucet and sink solutions for both residential and commercial properties throughout the US, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Residential Services</h3>
                  <p className="text-gray-600 text-sm">
                    Professional faucet and sink services for homes with modern fixtures and efficiency.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">Commercial Services</h3>
                  <p className="text-gray-600 text-sm">
                    Large-scale faucet and sink systems for businesses with minimal downtime.
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
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Faucet & Sink Services We Offer
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            United Plumbing CCTX Helps You with All Your Faucet & Sink Projects including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                alt="Faucet Repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Faucet Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Fast and reliable repair services for all faucet issues—fix leaks, drips, and malfunctions quickly.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                alt="Faucet Installation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Faucet Installation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Professional installation of new faucets with proper fitting and modern designs.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Maintenance%20Worker%20Adjusting%20Copper%20Plumbing%20Pipes.png?updatedAt=1756066948233"
                alt="Sink Repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Sink Repair</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Expert repair services for kitchen and bathroom sinks—fix leaks and restore functionality.
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229"
                alt="Sink Replacement"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Sink Replacement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Complete sink replacement services—upgrade to newer, more efficient models.
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835"
                alt="Kitchen Faucet Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Kitchen Faucet Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Specialized kitchen faucet installation and repair—modern fixtures for your kitchen.
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284"
                alt="Bathroom Faucet Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">» Bathroom Faucet Services</h3>
                <p className="text-gray-600 leading-relaxed">
                  Call United Plumbing CCTX at (833) 609-0936. Professional bathroom faucet services—elegant fixtures for your bathroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose United Plumbing CCTX for Faucet & Sink Services?
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            50+ years of trusted service with licensed professionals and guaranteed workmanship
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Experienced Professionals</h3>
              <p className="text-gray-600">We have decades of experience repairing and installing faucets and sinks with precision and expertise.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Emergency Services</h3>
              <p className="text-gray-600">Available round the clock for emergency faucet and sink issues and urgent repairs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Licensed and Insured</h3>
              <p className="text-gray-600">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable and Trustworthy</h3>
              <p className="text-gray-600">We pride ourselves on honest, dependable service you can rely on every time.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Affordable Pricing</h3>
              <p className="text-gray-600">Our quality faucet and sink solutions are fairly priced to give you the best value.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We're committed to top-notch service and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Residential Faucet & Sink Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From single-family homes to multi-unit properties, our residential faucet and sink services cover all your home plumbing needs. We understand that functional fixtures are essential for daily living, which is why we provide prompt, professional service with clear communication throughout the process.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Kitchen faucet and sink services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Bathroom faucet and sink services
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Modern fixture installations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Emergency repair services
                </li>
              </ul>
              <a 
                href="tel:8336090936"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Call for Residential Service
              </a>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Commercial Faucet & Sink Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Keep your business running smoothly with our comprehensive commercial faucet and sink services. We understand that downtime costs money, so we provide fast, reliable service to minimize disruption to your operations.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Large-scale commercial installations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Industrial fixture systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Preventive maintenance programs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Emergency repair services
                </li>
              </ul>
              <a 
                href="tel:8336090936"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                Call for Commercial Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 