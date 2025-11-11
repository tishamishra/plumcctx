import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
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
      title: 'About Us | United Plumbing CCTX',
      description: 'Learn about our expert plumbing team. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.'
    };
  }

  return {
    title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
    description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`,
    keywords: [
      `about plumber ${location.name}`,
      `plumbing company ${location.name}`,
      `local plumber ${location.name}`,
      `plumbing team ${location.name}`,
      `plumbing services ${location.name}`,
      `emergency plumber ${location.name}`,
      `licensed plumber ${location.name}`,
      `plumbing contractor ${location.name}`,
      `residential plumbing ${location.name}`,
      `commercial plumbing ${location.name}`,
      `plumbing repair ${location.name}`,
      `plumbing installation ${location.name}`,
      `24/7 plumber ${location.name}`,
      `plumbing maintenance ${location.name}`,
      `plumbing emergency ${location.name}`
    ],
    openGraph: {
      title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
      description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'United Plumbing CCTX'
    },
    twitter: {
      card: 'summary_large_image',
      title: `About Our Plumbing Services in ${location.name} | Trusted Local Plumbers`,
      description: `Learn about our expert plumbing team in ${location.name}. We provide reliable, affordable plumbing services, from repairs to installations, with 24/7 emergency support.`
    },
    alternates: {
      canonical: `https://${location.id}.unitedplumbingcctx.com/about`
    }
  };
}

export default async function AboutPage({ params }: LocationPageProps) {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    notFound();
  }

  const teamMembers = [
    {
      name: 'Mike Johnson',
      role: 'Lead Plumber',
      experience: '15+ years',
      specialties: ['Emergency Repairs', 'Water Heater Installation', 'Sewer Line Repair']
    },
    {
      name: 'Sarah Williams',
      role: 'Senior Technician',
      experience: '12+ years',
      specialties: ['Drain Cleaning', 'Leak Detection', 'Bathroom Renovation']
    },
    {
      name: 'David Chen',
      role: 'Commercial Specialist',
      experience: '10+ years',
      specialties: ['Commercial Plumbing', 'Gas Line Installation', 'Preventive Maintenance']
    }
  ];

  const values = [
    {
      title: 'Quality Workmanship',
      description: 'We take pride in delivering high-quality plumbing work that stands the test of time.',
      icon: '🔧'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We go above and beyond to exceed your expectations.',
      icon: '😊'
    },
    {
      title: 'Reliability',
      description: 'Count on us to be there when you need us most, with prompt and dependable service.',
      icon: '⏰'
    },
    {
      title: 'Transparency',
      description: 'We provide honest, upfront pricing with no hidden fees or surprise charges.',
      icon: '💯'
    }
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
              <div className="mb-6">
                <span className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-semibold animate-pulse">
                  Since 1973
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                About Our Plumbing Services in {location.name}, {location.state}
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-4xl mx-auto leading-relaxed mb-8">
                Five decades of trusted service in {location.name}, innovation, and unwavering commitment to excellence
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+18336090936" 
                  className="group relative bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
                >
                  <div className="relative">
                    <svg className="w-6 h-6 animate-bounce text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                    </svg>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold tracking-wide">(833) 609-0936</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1c7bc8] to-[#0f5a9e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-sm md:text-base opacity-90">Years of Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-sm md:text-base opacity-90">Expert Plumbers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">50,000+</div>
                <div className="text-sm md:text-base opacity-90">Happy Customers</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
                <div className="text-sm md:text-base opacity-90">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the journey that made us the most trusted name in plumbing services in {location.name}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">A Legacy of Excellence in {location.name}, {location.state} Since 1973</h3>
                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Founded in 1973 by George Davidson, United Plumbing CCTX began as a small family business with a simple mission: to provide honest, reliable plumbing services in {location.name} and surrounding areas. What started as a one-man operation has grown into one of the most trusted names in professional plumbing services throughout {location.state}.
                    </p>
                    <p>
                      Over the past five decades, we've witnessed the evolution of plumbing technology, from basic pipe systems to sophisticated smart home solutions. Through it all, we've maintained our commitment to quality, integrity, and customer satisfaction while expanding our reach to serve communities throughout {location.name} and the surrounding region.
                    </p>
                    <p>
                      Today, United Plumbing CCTX serves thousands of residential and commercial customers in {location.name} with a team of over 50 licensed professionals, state-of-the-art equipment, and unwavering dedication to excellence in every project we undertake.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                    alt="Plumber working professionally"
                    className="rounded-2xl shadow-xl w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record in {location.name}
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
              <div className="text-gray-600">Years in Business</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">1000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Licensed professionals dedicated to serving {location.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍🔧</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-700 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.experience} Experience</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us to provide exceptional service in {location.name}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Experience the United Plumbing CCTX Difference?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers in {location.name} who trust us with their plumbing needs
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From emergency repairs to new installations, we're here to help
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Contact us today for reliable, professional plumbing services in {location.name}, {location.state}. We're available 24/7 for emergency calls and scheduled appointments.
            </p>
            <a 
              href="tel:+18336090936" 
              className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-blue-800 transition inline-block"
            >
              Call (833) 609-0936
            </a>
          </div>
        </div>
      </section>

      <Footer location={{ name: location.name, state: location.state }} />
      <FloatingCTA />
    </div>
  );
}
