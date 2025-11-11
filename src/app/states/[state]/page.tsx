import { notFound } from 'next/navigation';
import Link from 'next/link';
import locationsData from '@/data/locations.json';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state } = await params;
  const typedLocationsData = locationsData as { locations: Array<{ id: string; name: string; state: string }> };
  
  const stateLocations = typedLocationsData.locations.filter(
    (loc) => loc.state.toLowerCase() === state.toLowerCase()
  );

  if (stateLocations.length === 0) {
    return {
      title: 'State Not Found',
      description: 'The requested state was not found.',
    };
  }

  const stateName = stateLocations[0].state;
  const stateFullName = getStateFullName(stateName);

  return {
    title: `United Plumbing CCTX in ${stateFullName} | Licensed Statewide Plumbing Experts`,
    description: `Find United Plumbing CCTX plumbers across ${stateFullName} for 24/7 emergency response, water heater service, drain cleaning, and full-system repairs.`,
    keywords: [
      `plumber ${stateFullName}`,
      `plumbing services ${stateFullName}`,
      `emergency plumber ${stateFullName}`,
      `drain cleaning ${stateFullName}`,
      `water heater repair ${stateFullName}`,
      `leak detection ${stateFullName}`,
      `sewer line repair ${stateFullName}`,
      `toilet repair ${stateFullName}`,
      `faucet repair ${stateFullName}`,
      `plumbing contractor ${stateFullName}`,
      `residential plumber ${stateFullName}`,
      `commercial plumber ${stateFullName}`,
      `plumbing company ${stateFullName}`,
      `plumbing repair ${stateFullName}`,
      `plumbing installation ${stateFullName}`
    ],
    openGraph: {
      title: `United Plumbing CCTX in ${stateFullName} | Licensed Statewide Plumbing Experts`,
      description: `Find United Plumbing CCTX plumbers across ${stateFullName} for 24/7 emergency response, water heater service, drain cleaning, and full-system repairs.`,
      url: `https://${state.toLowerCase()}.unitedplumbingcctx.com`,
      siteName: 'United Plumbing CCTX',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `United Plumbing CCTX in ${stateFullName} | Licensed Statewide Plumbing Experts`,
      description: `Find United Plumbing CCTX plumbers across ${stateFullName} for 24/7 emergency response, water heater service, drain cleaning, and full-system repairs.`,
    },
    alternates: {
      canonical: `https://${state.toLowerCase()}.unitedplumbingcctx.com`,
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state } = await params;
  const typedLocationsData = locationsData as { locations: Array<{ id: string; name: string; state: string }> };
  
  // Get all locations for this state
  const stateLocations = typedLocationsData.locations.filter(
    (loc) => loc.state.toLowerCase() === state.toLowerCase()
  );

  if (stateLocations.length === 0) {
    notFound();
  }

  // Get state name from first location
  const stateName = stateLocations[0].state;
  const stateFullName = getStateFullName(stateName);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60">
          <img 
            src="/images/plumber-hero.jpg" 
            alt="Professional plumber working"
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
              Best Licensed & Certified Plumbers in {stateFullName}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl opacity-95 max-w-5xl mx-auto leading-relaxed mb-8">
              Trusted plumbing experts in {stateFullName}. Licensed, experienced, and affordable for repairs, installs, or maintenance!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:8336090936"
                className="inline-flex items-center bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
                </svg>
                <span>(833) 609-0936</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEO Intro Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Find the Best Cost-effective & Top-Rated Plumber in {stateFullName}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looking for reliable plumbing services in {stateFullName}? Our team of licensed and certified plumbers in {stateFullName} provides exceptional service at competitive prices. Whether you need emergency repairs, installations, or maintenance in {stateFullName}, we're your trusted local plumbing experts. Serving {stateFullName} and surrounding areas with 24/7 availability and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8336090936"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"/>
              </svg>
              <span>Call (833) 609-0936</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Using same service cards as city pages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Plumbing Services We Offer in {stateFullName}</h2>
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Water Heater Repair and Installation in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Affordable water heater repair and professional installation for homes and commercial buildings in {stateFullName}—fast service, licensed plumbers, and energy-efficient systems.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Tankless Water Heater Installation in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Expert installation of energy-efficient tankless water heaters for homes and businesses in {stateFullName}—endless hot water, lower utility bills, and space-saving design.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Water Recirculation Pump Repair & Installation in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Professional repair and installation of hot water recirculation pumps for homes and businesses in {stateFullName}—get instant hot water, save water, and boost plumbing efficiency.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer location={{ name: stateFullName, state: stateName }} />
    </div>
  );
}

function getStateFullName(stateCode: string): string {
  const stateNames: { [key: string]: string } = {
    'CA': 'California',
    'NY': 'New York',
    'TX': 'Texas',
    'FL': 'Florida',
    'IL': 'Illinois',
    'PA': 'Pennsylvania',
    'OH': 'Ohio',
    'GA': 'Georgia',
    'NC': 'North Carolina',
    'MI': 'Michigan',
    'NJ': 'New Jersey',
    'VA': 'Virginia',
    'WA': 'Washington',
    'AZ': 'Arizona',
    'MA': 'Massachusetts',
    'TN': 'Tennessee',
    'IN': 'Indiana',
    'MO': 'Missouri',
    'MD': 'Maryland',
    'CO': 'Colorado',
    'MN': 'Minnesota',
    'WI': 'Wisconsin',
    'SC': 'South Carolina',
    'AL': 'Alabama',
    'LA': 'Louisiana',
    'KY': 'Kentucky',
    'OR': 'Oregon',
    'OK': 'Oklahoma',
    'CT': 'Connecticut',
    'UT': 'Utah',
    'IA': 'Iowa',
    'NV': 'Nevada',
    'AR': 'Arkansas',
    'MS': 'Mississippi',
    'KS': 'Kansas',
    'NE': 'Nebraska',
    'ID': 'Idaho',
    'NH': 'New Hampshire',
    'ME': 'Maine',
    'NM': 'New Mexico',
    'RI': 'Rhode Island',
    'HI': 'Hawaii',
    'MT': 'Montana',
    'DE': 'Delaware',
    'SD': 'South Dakota',
    'ND': 'North Dakota',
    'AK': 'Alaska',
    'VT': 'Vermont',
    'WY': 'Wyoming',
    'WV': 'West Virginia'
  };
  
  return stateNames[stateCode] || stateCode;
}