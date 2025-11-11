import { notFound } from 'next/navigation';
import Link from 'next/link';
import locationsData from '@/data/locations.json';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface StateServicesPageProps {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: StateServicesPageProps): Promise<Metadata> {
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
    title: `United Plumbing CCTX Services in ${stateFullName} | Statewide Plumbing Solutions`,
    description: `Explore United Plumbing CCTX services in ${stateFullName}, from water heaters and drains to sewer, gas, and emergency repairs—staffed by licensed plumbers statewide.`,
    keywords: [
      `plumbing services ${stateFullName}`,
      `drain cleaning ${stateFullName}`,
      `water heater repair ${stateFullName}`,
      `leak detection ${stateFullName}`,
      `sewer line repair ${stateFullName}`,
      `toilet repair ${stateFullName}`,
      `faucet repair ${stateFullName}`,
      `emergency plumber ${stateFullName}`,
      `plumbing contractor ${stateFullName}`,
      `residential plumber ${stateFullName}`,
      `commercial plumber ${stateFullName}`,
      `plumbing company ${stateFullName}`,
      `plumbing repair ${stateFullName}`,
      `plumbing installation ${stateFullName}`
    ],
    openGraph: {
      title: `United Plumbing CCTX Services in ${stateFullName} | Statewide Plumbing Solutions`,
      description: `Explore United Plumbing CCTX services in ${stateFullName}, from water heaters and drains to sewer, gas, and emergency repairs—staffed by licensed plumbers statewide.`,
      url: `https://${state.toLowerCase()}.unitedplumbingcctx.com/services`,
      siteName: 'United Plumbing CCTX',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `United Plumbing CCTX Services in ${stateFullName} | Statewide Plumbing Solutions`,
      description: `Explore United Plumbing CCTX services in ${stateFullName}, from water heaters and drains to sewer, gas, and emergency repairs—staffed by licensed plumbers statewide.`,
    },
    alternates: {
      canonical: `https://${state.toLowerCase()}.unitedplumbingcctx.com/services`,
    },
  };
}

export default async function StateServicesPage({ params }: StateServicesPageProps) {
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
      
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60">
          <img 
            src="/images/plumber-hero.jpg" 
            alt="Professional plumber working"
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Professional Plumbing Services in {stateFullName}
            </h1>
            <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8">
              Complete plumbing solutions for homes and businesses across {stateFullName}. Licensed, experienced, and available 24/7.
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

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Complete Plumbing Services in {stateFullName}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">United Plumbing CCTX provides comprehensive plumbing solutions across {stateFullName} including:</p>
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

            {/* Faucets & Sinks */}
            <Link href={`/plumber-faucet-sink-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094"
                  alt="Faucets & Sinks"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Faucet and Sink Repair & Replacement in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Expert installation and repair of kitchen and bathroom faucets and sinks in {stateFullName}—leak-free performance, upgraded fixtures, and improved space functionality.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Water Conservation Plumbing Systems in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Eco-friendly water-saving plumbing solutions for homes and businesses in {stateFullName}—reduce water waste, cut utility bills, and support sustainable living.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Custom Bathroom Renovation in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. From outdated to outstanding—our expert team designs and renovates bathrooms in {stateFullName} with modern fixtures, efficient layouts, and timeless appeal for residential properties.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Water System Installation & Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. We install, repair, and maintain residential and commercial water systems in {stateFullName}—delivering clean, safe, and uninterrupted water flow for your property.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Slab Leak Detection & Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Fast and accurate slab leak detection with expert repairs in {stateFullName}—protect your foundation, prevent costly water damage, and preserve your property's structural integrity.
                  </p>
                </div>
              </div>
            </Link>

            {/* Sump Pump Installation & Repair */}
            <Link href={`/plumber-sump-pump-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Installing%20Water%20Pump%20in%20Basement.png?updatedAt=1756066964034"
                  alt="Sump Pump Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Sump Pump Installation & Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Keep your basement dry and protected with professional sump pump repair, installation, and maintenance in {stateFullName}—flood prevention solutions built for long-term reliability.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Professional Drain Cleaning in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Fast and effective drain cleaning for clogged sinks, tubs, and sewer lines in {stateFullName}—restore smooth drainage, eliminate blockages, and prevent future plumbing issues.
                  </p>
                </div>
              </div>
            </Link>

            {/* Expert Drain Repair */}
            <Link href={`/plumber-drain-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385"
                  alt="Expert Drain Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Expert Drain Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. We fix damaged or leaking drains with precision in {stateFullName}—prevent backups, water damage, and ensure a smooth-flowing, reliable plumbing system in your home or business.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Sewer Line Inspection & Replacement in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Thorough sewer camera inspections, repairs, and full replacements in {stateFullName}—ensure proper waste flow, avoid costly backups, and keep your sewer system running smoothly.
                  </p>
                </div>
              </div>
            </Link>

            {/* Gas Line Installation & Repair */}
            <Link href={`/plumber-gas-line-repair`} className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src="https://ik.imagekit.io/nang9yead/Plumber%20Installing%20Gas%20Line%20in%20Kitchen.png?updatedAt=1756066961834"
                  alt="Gas Line Installation & Repair"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Gas Line Installation & Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Safe and code-compliant gas line installations, repairs, and replacements in {stateFullName}—power your appliances with confidence and protect your property from gas hazards.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Leak Detection & Repair in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. We use advanced leak detection tools to quickly locate and repair hidden water leaks in {stateFullName}—minimize damage, lower water bills, and keep your plumbing system efficient.
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
                  <h3 className="text-xl font-bold text-blue-700 mb-3">» Toilet Repair & Installation in {stateFullName}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Call United Plumbing CCTX at (833) 609-0936. Fast and reliable toilet plumbing services for clogs, leaks, and replacements in {stateFullName}—restore full function, improve efficiency, and prevent costly water waste.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Plumbing Services in {stateFullName}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our licensed and experienced plumbers are available 24/7 for emergency services 
            and scheduled appointments throughout {stateFullName}.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:8336090936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
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