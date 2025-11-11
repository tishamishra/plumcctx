import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import locationsData from '@/data/locations.json';

interface LocationData {
  id: string;
  name: string;
  state: string;
  fullName: string;
  description: string;
  phone: string;
  heroTitle: string;
  heroSubtitle: string;
  services: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  areas: string[];
  zipCodes: string[];
  image: string;
  meta: {
    title: string;
    description: string;
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    name: string;
    text: string;
    location: string;
  }>;
}

interface LocationsData {
  locations: LocationData[];
}

interface LocationPageProps {
  params: Promise<{ location: string }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    return {
      title: 'Contact Us | United Plumbing CCTX',
      description: 'Need plumbing help? Contact our team today for fast, affordable plumbing services, including water heater repair, drain cleaning & emergency plumbing.'
    };
  }

  return {
    title: `Contact Plumbers in ${location.name} | 24/7 Plumbing Service Near You`,
    description: `Need plumbing help in ${location.name}? Contact our team today for fast, affordable plumbing services, including water heater repair, drain cleaning & emergency plumbing.`,
    keywords: [
      `contact plumber ${location.name}`,
      `plumber near me ${location.name}`,
      `emergency plumber ${location.name}`,
      `plumbing service ${location.name}`,
      `local plumber ${location.name}`,
      `plumbing contractor ${location.name}`,
      `water heater repair ${location.name}`,
      `drain cleaning ${location.name}`,
      `emergency plumbing ${location.name}`,
      `24/7 plumber ${location.name}`,
      `plumbing repair ${location.name}`,
      `plumbing installation ${location.name}`,
      `licensed plumber ${location.name}`,
      `plumbing maintenance ${location.name}`,
      `plumbing emergency ${location.name}`
    ],
    openGraph: {
      title: `Contact Plumbers in ${location.name} | 24/7 Plumbing Service Near You`,
      description: `Need plumbing help in ${location.name}? Contact our team today for fast, affordable plumbing services, including water heater repair, drain cleaning & emergency plumbing.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'United Plumbing CCTX'
    },
    twitter: {
      card: 'summary_large_image',
      title: `Contact Plumbers in ${location.name} | 24/7 Plumbing Service Near You`,
      description: `Need plumbing help in ${location.name}? Contact our team today for fast, affordable plumbing services, including water heater repair, drain cleaning & emergency plumbing.`
    },
    alternates: {
      canonical: `https://${location.id}.unitedplumbingcctx.com/contact`
    }
  };
}

export default async function ContactPage({ params }: LocationPageProps) {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    notFound();
  }

  const contactMethods = [
    {
      title: 'Call Us Now',
      description: 'Speak directly with our plumbing experts',
      contact: '(833) 609-0936',
      action: 'tel:+18336090936',
      icon: '📞',
      highlight: true
    },
    {
      title: 'Emergency Service',
      description: '24/7 emergency plumbing available',
      contact: 'Available 24/7',
      action: 'tel:+18336090936',
      icon: '🚨',
      highlight: true
    },
    {
      title: 'Service Area',
      description: 'Serving the greater area',
      contact: `${location.name}, ${location.state}`,
      action: '#',
      icon: '📍',
      highlight: false
    }
  ];

  const services = [
    'Water Heater Repair & Installation',
    'Drain Cleaning & Unclogging',
    'Leak Detection & Repair',
    'Sewer Line Services',
    'Toilet Repair & Installation',
    'Faucet & Sink Repair',
    'Gas Line Installation',
    'Emergency Plumbing',
    'Bathroom Renovation',
    'Commercial Plumbing'
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Holding%20Wrench%20in%20Kitchen.png?updatedAt=1756066963942"
            alt="Professional plumber working"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="transition-all duration-1000 opacity-100 translate-y-0">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Contact Plumbers in {location.name}, {location.state}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed">
                Get in touch for fast, reliable plumbing services and expert solutions
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Methods Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch with Our {location.name} Team
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach us for all your plumbing needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className={`text-center p-8 rounded-lg ${method.highlight ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'}`}>
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                {method.action === 'tel:+18336090936' ? (
                  <a 
                    href={method.action}
                    className={`font-bold text-lg ${method.highlight ? 'text-blue-700 hover:text-blue-800' : 'text-gray-700 hover:text-gray-800'} transition`}
                  >
                    {method.contact}
                  </a>
                ) : (
                  <span className={`font-bold text-lg ${method.highlight ? 'text-blue-700' : 'text-gray-700'}`}>
                    {method.contact}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Plumbing Services We Offer in {location.name}
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive plumbing solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-700 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose United Plumbing CCTX in {location.name}?
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of customers in {location.name} and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Emergency Service</h3>
              <p className="text-gray-600">Available around the clock for urgent plumbing emergencies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed professionals with comprehensive insurance coverage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fair Pricing</h3>
              <p className="text-gray-600">Transparent, upfront pricing with no hidden fees or surprises</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties</p>
            </div>
          </div>
        </div>
      </section>



      {/* Regular CTA Section */}
      <section className="py-16 px-4 bg-[#1c7bc8] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Your Plumbing Service?
          </h2>
          <p className="text-xl mb-8">
            Contact our {location.name} team today for reliable, professional plumbing services. We're here to help with all your plumbing needs.
          </p>
          <a 
            href="tel:+18336090936" 
            className="bg-white text-[#1c7bc8] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
          >
            Call (833) 609-0936
          </a>
        </div>
      </section>

      <Footer location={{ name: location.name, state: location.state }} />
    </div>
  );
}
