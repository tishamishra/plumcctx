import type { Metadata } from 'next';
import Header from '@/components/Header';
import FloatingCTA from '@/components/FloatingCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '24/7 Emergency Plumbing Response Nationwide | United Plumbing CCTX',
  description: 'Call United Plumbing CCTX any time for burst pipes, leaks, gas issues, and sewer backups—our licensed plumbers respond within minutes nationwide.',
  keywords: [
    'emergency plumbing services',
    '24/7 plumbing',
    'emergency plumber',
    'urgent plumbing repair',
    'emergency plumbing near me',
    'emergency plumbing 24/7',
    'emergency plumbing service',
    'urgent plumbing help',
    'emergency plumbing repair',
    'emergency plumbing cost',
    'emergency plumbing company',
    'emergency plumbing contractor',
    'emergency plumbing experts',
    'emergency plumbing response',
    'emergency plumbing availability',
    'residential emergency plumbing',
    'commercial emergency plumbing',
    'plumbing services USA',
    'licensed plumber'
  ],
  openGraph: {
    title: '24/7 Emergency Plumbing Response Nationwide | United Plumbing CCTX',
    description: 'Call United Plumbing CCTX any time for burst pipes, leaks, gas issues, and sewer backups—our licensed plumbers respond within minutes nationwide.',
    url: 'https://unitedplumbingcctx.com/services/plumber-emergency-service',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '24/7 Emergency Plumbing Response Nationwide | United Plumbing CCTX',
    description: 'Call United Plumbing CCTX any time for burst pipes, leaks, gas issues, and sewer backups—our licensed plumbers respond within minutes nationwide.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services/plumber-emergency-service',
  },
};

export default function EmergencyServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
          alt="Emergency Plumbing Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-700/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Emergency Plumbing Services 24/7 in the US
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
              Available 24/7 for urgent plumbing emergencies throughout the USA. Fast response times, expert repairs, and peace of mind when you need it most!
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:+18336090936" 
                className="group relative bg-white text-red-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
              >
                <div className="relative">
                  <svg className="w-6 h-6 animate-bounce text-red-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <span className="font-bold tracking-wide">(833) 609-0936</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">24/7 Emergency Plumbing Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When plumbing emergencies strike, you need immediate help from experienced professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Response</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 availability</li>
                <li>• Fast response times</li>
                <li>• Expert emergency repairs</li>
                <li>• Immediate assistance</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Burst pipe repair</li>
                <li>• Overflowing toilet</li>
                <li>• Water heater emergencies</li>
                <li>• Critical plumbing issues</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't Wait for Plumbing Emergencies</h3>
            <p className="text-lg text-gray-600 mb-6">
              Call us immediately for fast, reliable emergency plumbing services across the USA
            </p>
            <a 
              href="tel:+18336090936"
              className="bg-red-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-red-700 transition inline-block"
            >
              Call Now: (833) 609-0936
            </a>
          </div>
        </div>
      </section>

      <FloatingCTA />
      <Footer />
    </div>
  );
}
