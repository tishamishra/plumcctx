import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';
import FloatingCTA from '@/components/FloatingCTA';
import { getPlaceholderImage } from '@/data/imagePlaceholders';
import type { Metadata } from 'next';

import LocationTestimonials from '@/components/LocationTestimonials';
import LocationFAQ from '@/components/LocationFAQ';

// Type definitions for location data
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
  params: Promise<{
    location: string;
  }>;
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    return {
      title: 'United Plumbing CCTX | Trusted Plumbing Experts Nationwide',
      description: 'United Plumbing CCTX provides nationwide licensed plumbers for repairs, installs, and maintenance no matter where you are located.'
    };
  }

  return {
    title: `United Plumbing CCTX in ${location.name}, ${location.state} | 24/7 Licensed Plumbers`,
    description: `Book United Plumbing CCTX for water heater repair, drain cleaning, leak detection, and emergency plumbing in ${location.name}, ${location.state}—available 24/7.`,
    keywords: [
      `plumber ${location.name}`,
      `plumbing services ${location.name}`,
      `emergency plumber ${location.name}`,
      `local plumber ${location.name}`,
      `plumber near me ${location.name}`,
      `plumbing repair ${location.name}`,
      `water heater repair ${location.name}`,
      `drain cleaning ${location.name}`,
      `toilet repair ${location.name}`,
      `leak detection ${location.name}`,
      `sewer line repair ${location.name}`,
      `gas line repair ${location.name}`,
      `plumbing installation ${location.name}`,
      `24/7 plumber ${location.name}`,
      `licensed plumber ${location.name}`,
      `plumbing contractor ${location.name}`,
      `residential plumbing ${location.name}`,
      `commercial plumbing ${location.name}`,
      `plumbing maintenance ${location.name}`,
      `plumbing emergency ${location.name}`
    ],
    openGraph: {
      title: `United Plumbing CCTX in ${location.name}, ${location.state} | 24/7 Licensed Plumbers`,
      description: `Book United Plumbing CCTX for water heater repair, drain cleaning, leak detection, and emergency plumbing in ${location.name}, ${location.state}—available 24/7.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'United Plumbing CCTX'
    },
    twitter: {
      card: 'summary_large_image',
      title: `United Plumbing CCTX in ${location.name}, ${location.state} | 24/7 Licensed Plumbers`,
      description: `Book United Plumbing CCTX for water heater repair, drain cleaning, leak detection, and emergency plumbing in ${location.name}, ${location.state}—available 24/7.`
    },
    alternates: {
      canonical: `https://${location.id}.unitedplumbingcctx.com/`
    }
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const heroPlaceholder = getPlaceholderImage('heroBackground');
  const footerVan = getPlaceholderImage('footerFleetVan');
  const { location: locationId } = await params;
  const location = (locationsData as LocationsData).locations.find((loc: LocationData) => loc.id === locationId);
  
  if (!location) {
    notFound();
  }

  // Ensure all required fields exist with fallbacks
  const safeLocation = {
    ...location,
    areas: location.areas || [],
    zipCodes: location.zipCodes || [],
    services: location.services || [],
    testimonials: location.testimonials || [],
    faqs: location.faqs || []
  };

  // Get nearby locations with comprehensive interlinking strategy
  const allLocations = (locationsData as LocationsData).locations;
  const currentLocationIndex = allLocations.findIndex((loc: LocationData) => loc.id === safeLocation.id);
  
  // Create a comprehensive interlinking strategy
  const getNearbyLocations = () => {
    const nearbyLocations: LocationData[] = [];
    
    // 1. Same state locations (prioritized for local SEO) - up to 8 locations
    const sameStateLocations = allLocations
      .filter((loc: LocationData) => loc.state === safeLocation.state && loc.id !== safeLocation.id)
      .slice(0, 8);
    nearbyLocations.push(...sameStateLocations);
    
    // 2. If we need more locations, add from neighboring states - up to 6 locations
    if (nearbyLocations.length < 15) {
      const neighboringStates = getNeighboringStates(safeLocation.state);
      const neighboringLocations = allLocations
        .filter((loc: LocationData) => 
          neighboringStates.includes(loc.state) && 
          loc.id !== safeLocation.id &&
          !nearbyLocations.some(nearby => nearby.id === loc.id)
        )
        .slice(0, 6);
      nearbyLocations.push(...neighboringLocations);
    }
    
    // 3. Fill remaining slots with distributed locations from across the country
    if (nearbyLocations.length < 20) {
      const remainingSlots = 20 - nearbyLocations.length;
      const distributedLocations = getDistributedLocations(
        allLocations, 
        currentLocationIndex, 
        nearbyLocations, 
        remainingSlots
      );
      nearbyLocations.push(...distributedLocations);
    }
    
    return nearbyLocations.slice(0, 20);
  };

  // Helper function to get neighboring states (simplified mapping)
  const getNeighboringStates = (state: string): string[] => {
    const neighboringMap: { [key: string]: string[] } = {
      'TX': ['OK', 'AR', 'LA', 'NM'],
      'CA': ['OR', 'NV', 'AZ'],
      'FL': ['GA', 'AL'],
      'NY': ['NJ', 'CT', 'PA', 'VT', 'MA'],
      'IL': ['WI', 'IN', 'KY', 'MO', 'IA'],
      'PA': ['NY', 'NJ', 'DE', 'MD', 'WV', 'OH'],
      'OH': ['PA', 'WV', 'KY', 'IN', 'MI'],
      'GA': ['FL', 'AL', 'TN', 'NC', 'SC'],
      'NC': ['VA', 'TN', 'GA', 'SC'],
      'MI': ['OH', 'IN', 'WI'],
      'NJ': ['NY', 'PA', 'DE'],
      'VA': ['MD', 'DC', 'WV', 'KY', 'TN', 'NC'],
      'WA': ['OR', 'ID'],
      'AZ': ['CA', 'NV', 'UT', 'CO', 'NM'],
      'MA': ['NH', 'VT', 'NY', 'CT', 'RI'],
      'TN': ['KY', 'VA', 'NC', 'GA', 'AL', 'MS', 'AR', 'MO'],
      'IN': ['MI', 'OH', 'KY', 'IL', 'WI'],
      'MO': ['IA', 'IL', 'KY', 'TN', 'AR', 'OK', 'KS', 'NE'],
      'MD': ['PA', 'DE', 'VA', 'WV', 'DC'],
      'WI': ['MI', 'MN', 'IA', 'IL'],
      'CO': ['WY', 'NE', 'KS', 'OK', 'NM', 'UT', 'AZ'],
      'MN': ['WI', 'IA', 'SD', 'ND'],
      'SC': ['NC', 'GA'],
      'AL': ['TN', 'GA', 'FL', 'MS'],
      'LA': ['TX', 'AR', 'MS'],
      'KY': ['IL', 'IN', 'OH', 'WV', 'VA', 'TN', 'MO'],
      'OR': ['WA', 'CA', 'NV', 'ID'],
      'OK': ['TX', 'NM', 'CO', 'KS', 'MO', 'AR'],
      'CT': ['NY', 'MA', 'RI'],
      'UT': ['ID', 'WY', 'CO', 'AZ', 'NV'],
      'IA': ['MN', 'WI', 'IL', 'MO', 'NE', 'SD'],
      'NV': ['CA', 'OR', 'ID', 'UT', 'AZ'],
      'AR': ['MO', 'TN', 'MS', 'LA', 'TX', 'OK'],
      'MS': ['TN', 'AL', 'LA', 'AR'],
      'KS': ['NE', 'MO', 'OK', 'CO'],
      'NM': ['CO', 'OK', 'TX', 'AZ'],
      'NE': ['SD', 'IA', 'MO', 'KS', 'CO', 'WY'],
      'WV': ['PA', 'MD', 'VA', 'KY', 'OH'],
      'ID': ['WA', 'OR', 'NV', 'UT', 'WY', 'MT'],
      'NH': ['ME', 'VT', 'MA'],
      'ME': ['NH'],
      'RI': ['CT', 'MA'],
      'HI': [],
      'AK': [],
      'DE': ['PA', 'NJ', 'MD'],
      'SD': ['ND', 'MN', 'IA', 'NE', 'WY', 'MT'],
      'ND': ['MN', 'SD', 'MT'],
      'MT': ['ND', 'SD', 'WY', 'ID'],
      'WY': ['MT', 'SD', 'NE', 'CO', 'UT', 'ID'],
      'VT': ['NY', 'NH', 'MA'],
      'DC': ['MD', 'VA']
    };
    
    return neighboringMap[state] || [];
  };

  // Helper function to get distributed locations across the country
  const getDistributedLocations = (
    allLocations: LocationData[], 
    currentIndex: number, 
    existingLocations: LocationData[], 
    count: number
  ): LocationData[] => {
    const distributed: LocationData[] = [];
    const step = Math.max(1, Math.floor(allLocations.length / count));
    
    for (let i = 0; i < count && distributed.length < count; i++) {
      const index = (currentIndex + (i + 1) * step) % allLocations.length;
      const location = allLocations[index];
      
      if (location && 
          location.id !== safeLocation.id && 
          !existingLocations.some(existing => existing.id === location.id) &&
          !distributed.some(dist => dist.id === location.id)) {
        distributed.push(location);
      }
    }
    
    return distributed;
  };

  const nearbyLocations = getNearbyLocations();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroPlaceholder.defaultUrl} 
            alt={heroPlaceholder.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Licensed & Insured
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Best Licensed & Certified Plumbers in {safeLocation.name}{safeLocation.zipCodes?.[0] && safeLocation.zipCodes[0] !== '00000' ? `, ${safeLocation.zipCodes[0]}` : `, ${safeLocation.state}`}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Trusted plumbing experts in {safeLocation.name}, {safeLocation.state}. Licensed, experienced, and affordable for repairs, installs, or maintenance!
            </p>


          </div>
        </div>
        <FloatingCTA phone={safeLocation.phone.replace(/\D/g, '')} locationName={safeLocation.name} />
      </section>
      
      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Cost-effective & Top-Rated Plumber in {safeLocation.name}, {safeLocation.state}
        </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable plumbing services in {safeLocation.name}, {safeLocation.state}? Our team of licensed and certified plumbers in {safeLocation.name} provides exceptional service at competitive prices. Whether you need emergency repairs, installations, or maintenance in {safeLocation.name}, {safeLocation.state}, we're your trusted local plumbing experts. Serving {safeLocation.name} and surrounding areas with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              Call {safeLocation.phone} Now
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
                Are you searching for expert plumbing services in {safeLocation.name}?
          </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Look no further! United Plumbing CCTX is your trusted local plumber in {safeLocation.name}, {safeLocation.state}. We provide comprehensive plumbing solutions for both residential and commercial properties, with 24/7 emergency service availability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">Residential Expert Plumbers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Professional Residential Plumbing Services in {safeLocation.name}, {safeLocation.state}.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-2 text-lg">Commercial Expert Plumbers</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Commercial Plumbing Services in {safeLocation.name}, {safeLocation.state}.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                alt="Professional plumber working"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-[#ea580c] mb-2">15+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ea580c] mb-2">1000+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ea580c] mb-2">24/7</div>
              <div className="text-gray-600 text-sm">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ea580c] mb-2">100%</div>
              <div className="text-gray-600 text-sm">Satisfaction Guaranteed</div>
            </div>
          </div>
          
          {/* Additional Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              24/7 Emergency Service
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Free Estimates
            </div>
          </div>
        </div>
      </section>

      {/* Our Professional Services */}
      <section id="services" className="pt-2 pb-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Plumbing Services We Offer in {safeLocation.name}, {safeLocation.state}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">United Plumbing CCTX Helps You with All Your Plumbing Projects including:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Water Heater Repair and Installation */}
            <Link href={`/plumber-water-heater-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                  alt="Water Heater Repair and Installation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Water Heater Repair and Installation in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Affordable water heater repair and professional installation for homes and commercial buildings in {safeLocation.name}—fast service, licensed plumbers, and energy-efficient systems.
                  </p>
                </div>
              </div>
            </Link>

            {/* Tankless Water Heater Installation */}
            <Link href={`/plumber-tankless-water-heater`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Worker%20Adjusting%20Water%20Filtration%20System%20Valves?updatedAt=1756066968225"
                  alt="Tankless Water Heater Installation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Tankless Water Heater Installation in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Expert installation of energy-efficient tankless water heaters for homes and businesses in {safeLocation.name}—endless hot water, lower utility bills, and space-saving design.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water Recirculation Pump */}
            <Link href={`/plumber-water-recirculation-pump`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Maintenance%20Worker%20Adjusting%20Copper%20Plumbing%20Pipes.png?updatedAt=1756066948233"
                  alt="Water Recirculation Pump"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Water Recirculation Pump Repair & Installation in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Professional repair and installation of hot water recirculation pumps for homes and businesses in {safeLocation.name}—get instant hot water, save water, and boost plumbing efficiency.
                  </p>
                </div>
              </div>
            </Link>

            {/* Faucets & Sinks */}
            <Link href={`/plumber-faucet-sink-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                  alt="Faucets & Sinks"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Faucet and Sink Repair & Replacement in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Expert installation and repair of kitchen and bathroom faucets and sinks in {safeLocation.name}—leak-free performance, upgraded fixtures, and improved space functionality.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water Conservation Plumbing */}
            <Link href={`/plumber-water-conservation`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229"
                  alt="Water Conservation Plumbing"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Water Conservation Plumbing Systems in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Eco-friendly water-saving plumbing solutions for homes and businesses in {safeLocation.name}—reduce water waste, cut utility bills, and support sustainable living.
                  </p>
                </div>
              </div>
            </Link>

            {/* Custom Bathroom Renovation */}
            <Link href={`/plumber-bathroom-renovation`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835"
                  alt="Custom Bathroom Renovation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Custom Bathroom Renovation in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. From outdated to outstanding—our expert team designs and renovates bathrooms in {safeLocation.name} with modern fixtures, efficient layouts, and timeless appeal for residential properties.
                  </p>
                </div>
              </div>
            </Link>

            {/* Water System Installation & Repair */}
            <Link href={`/plumber-water-system-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Industrial%20HVAC%20Technician%20Inspection.png?updatedAt=1756066941834"
                  alt="Water System Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Water System Installation & Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. We install, repair, and maintain residential and commercial water systems in {safeLocation.name}—delivering clean, safe, and uninterrupted water flow for your property.
                  </p>
                </div>
              </div>
            </Link>

            {/* Slab Leak Detection & Repair */}
            <Link href={`/plumber-slab-leak-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Pipe%20Dripping%20Water.png?updatedAt=1756066951741"
                  alt="Slab Leak Detection & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Slab Leak Detection & Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Fast and accurate slab leak detection with expert repairs in {safeLocation.name}—protect your foundation, prevent costly water damage, and preserve your property's structural integrity.
                  </p>
                </div>
              </div>
            </Link>

            {/* Sump Pump Installation & Repair */}
            <Link href={`/plumber-sump-pump-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Electrician%20Working%20on%20Outdoor%20Wiring%20in%20Lawn.png?updatedAt=1756066952425"
                  alt="Sump Pump Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Sump Pump Installation & Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Keep your basement dry and protected with professional sump pump repair, installation, and maintenance in {safeLocation.name}—flood prevention solutions built for long-term reliability.
                  </p>
                </div>
              </div>
            </Link>

            {/* Professional Drain Cleaning */}
            <Link href={`/plumber-drain-cleaning`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284"
                  alt="Professional Drain Cleaning"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Professional Drain Cleaning in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Fast and effective drain cleaning for clogged sinks, tubs, and sewer lines in {safeLocation.name}—restore smooth drainage, eliminate blockages, and prevent future plumbing issues.
                  </p>
                </div>
              </div>
            </Link>

            {/* Expert Drain Repair */}
            <Link href={`/plumber-drain-cleaning`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Repairing%20Kitchen%20Sink%20Drainage%20Pipes?updatedAt=1756066959177"
                  alt="Expert Drain Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Expert Drain Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. We fix damaged or leaking drains with precision in {safeLocation.name}—prevent backups, water damage, and ensure a smooth-flowing, reliable plumbing system in your home or business.
                  </p>
                </div>
              </div>
            </Link>

            {/* Sewer Line Inspection & Replacement */}
            <Link href={`/plumber-sewer-line-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091"
                  alt="Sewer Line Inspection & Replacement"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Sewer Line Inspection & Replacement in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Thorough sewer camera inspections, repairs, and full replacements in {safeLocation.name}—ensure proper waste flow, avoid costly backups, and keep your sewer system running smoothly.
                  </p>
                </div>
              </div>
            </Link>

            {/* Gas Line Installation & Repair */}
            <Link href={`/plumber-gas-line-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Industrial%20Green%20and%20Orange%20Water%20Pipelines?updatedAt=1756066950649"
                  alt="Gas Line Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Gas Line Installation & Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Safe and code-compliant gas line installations, repairs, and replacements in {safeLocation.name}—power your appliances with confidence and protect your property from gas hazards.
                  </p>
                </div>
              </div>
            </Link>

            {/* Leak Detection & Repair */}
            <Link href={`/plumber-leak-detection`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271"
                  alt="Leak Detection & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Leak Detection & Repair in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. We use advanced leak detection tools to quickly locate and repair hidden water leaks in {safeLocation.name}—minimize damage, lower water bills, and keep your plumbing system efficient.
                  </p>
                </div>
              </div>
            </Link>

            {/* Toilet Repair & Installation */}
            <Link href={`/plumber-toilet-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119"
                  alt="Toilet Repair & Installation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#ea580c] mb-3">» Toilet Repair & Installation in {safeLocation.name}, {safeLocation.state}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Call United Plumbing CCTX at {safeLocation.phone}. Fast and reliable toilet plumbing services for clogs, leaks, and replacements in {safeLocation.name}—restore full function, improve efficiency, and prevent costly water waste.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Need a Plumber Today CTA */}
      <section className="bg-[#ea580c] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Plumber Today? Get a Free Quote Now</h2>
          <div className="mb-6">
            <a
              href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
              className="bg-white text-[#ea580c] font-bold px-8 py-4 rounded-xl text-2xl hover:bg-gray-50 transition shadow-lg inline-block"
            >
              {safeLocation.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose United Plumbing CCTX in {safeLocation.name}?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">50+ years of trusted service with licensed professionals and guaranteed workmanship</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experienced Professionals */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Experienced Professionals</h3>
              <p className="text-gray-600 text-center">We have decades of experience solving all plumbing challenges, big or small.</p>
            </div>

            {/* 24/7 Emergency Services */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">24/7 Emergency Services</h3>
              <p className="text-gray-600 text-center">No hidden fees or surprise charges. Our pricing is transparent and budget-friendly.</p>
          </div>

            {/* Licensed and Insured */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Licensed and Insured</h3>
              <p className="text-gray-600 text-center">Our dedicated team of plumbers are fully licensed and insured for your peace of mind.</p>
            </div>

            {/* Reliable and Trustworthy */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Reliable and Trustworthy</h3>
              <p className="text-gray-600 text-center">We pride ourselves on honest, dependable service you can rely on every time.</p>
            </div>

            {/* Affordable Pricing */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Affordable Pricing</h3>
              <p className="text-gray-600 text-center">Our quality plumbing solutions are fairly priced to give you the best value.</p>
            </div>

            {/* Customer Satisfaction Guaranteed */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-black font-semibold text-lg mb-3 text-center">Customer Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-center">We&apos;re committed to top-notch service and complete customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Plumbing Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Residential Plumbing Services in {safeLocation.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From minor repairs to major installations, our residential plumbing services in {safeLocation.name} cover all your home plumbing needs. We understand that plumbing issues can be stressful, which is why we provide prompt, professional service with clear communication throughout the process.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency plumbing repairs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Water heater installation & repair
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Drain cleaning & unclogging
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
                  Fixture installation & repair
                </li>
              </ul>
              <a 
                href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg mt-6 transition-colors duration-300"
              >
                Call for Residential Service
              </a>
            </div>
            <div>
              <img 
                src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                alt="Residential plumbing services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Plumbing Services */}
        <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://ik.imagekit.io/nang9yead/Industrial%20HVAC%20Technician%20Inspection.png?updatedAt=1756066941834"
                alt="Commercial plumbing services"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Commercial Plumbing Services in {safeLocation.name}
            </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Keep your business running smoothly with our comprehensive commercial plumbing services in {safeLocation.name}. We understand that downtime costs money, so we provide fast, reliable service to minimize disruption to your operations.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Emergency commercial plumbing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Industrial plumbing systems
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preventive maintenance programs
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Backflow prevention & testing
                </li>
              </ul>
              <a 
                href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg mt-6 transition-colors duration-300"
              >
                Call for Commercial Service
              </a>
                    </div>
                    </div>
                  </div>
      </section>

      {/* 24/7 CTA Banner */}
      <section className="py-4 px-4 bg-[#ea580c] text-white">
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
                  <div className="text-2xl md:text-3xl font-bold">{safeLocation.phone}</div>
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





      {/* Dynamic Testimonials */}
      <LocationTestimonials 
        cityName={safeLocation.name}
        stateName={safeLocation.state}
      />

      {/* Comprehensive FAQ Section */}
      <LocationFAQ 
        cityName={safeLocation.name}
        stateName={safeLocation.state}
        phoneNumber={safeLocation.phone}
      />

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
              src={`https://maps.google.com/maps?q=${encodeURIComponent(safeLocation.name + ', ' + safeLocation.state)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              loading="lazy" 
              className="w-full" 
              style={{border:0}}
            />
          </div>
          </div>
        </section>

      {/* Nearby Locations Section */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              Areas We Serve Nationwide
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {nearbyLocations.map((nearbyLocation: LocationData) => (
                <Link
                  key={nearbyLocation.id}
                  href={`https://${nearbyLocation.id}.unitedplumbingcctx.com/`}
                  className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 hover:text-[#ea580c]"
                >
                  <span className="text-sm font-medium text-gray-700 hover:text-[#ea580c] transition-colors duration-200">
                    {nearbyLocation.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Big CTA Banner */}
      <section className="bg-[#ea580c] text-white py-16 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-bounce">Need a Plumber Today? Get a Free Quote Now</h2>
          <div className="mb-8">
            <a 
              href={`tel:${safeLocation.phone.replace(/\D/g, '')}`}
              className="bg-white text-[#ea580c] font-bold px-12 py-6 rounded-xl text-3xl hover:bg-gray-50 transition shadow-lg inline-block animate-pulse"
            >
              {safeLocation.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 