import { notFound } from 'next/navigation';
import Link from 'next/link';
import locationsData from '@/data/locations.json';
import { Metadata } from 'next';

interface StateServicePageProps {
  params: Promise<{ state: string; service: string }>;
}

export async function generateMetadata({ params }: StateServicePageProps): Promise<Metadata> {
  const { state, service } = await params;
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
  const serviceName = getServiceName(service);

  return {
    title: `United Plumbing CCTX ${serviceName} in ${stateFullName} | Statewide Specialists`,
    description: `Connect with United Plumbing CCTX for ${serviceName.toLowerCase()} anywhere in ${stateFullName}. Licensed teams deliver 24/7 service, repairs, and preventive maintenance statewide.`,
    keywords: [
      `${serviceName.toLowerCase()} ${stateFullName}`,
      `plumber ${stateFullName}`,
      `${serviceName.toLowerCase()} services ${stateFullName}`,
      `professional ${serviceName.toLowerCase()} ${stateFullName}`,
      `emergency ${serviceName.toLowerCase()} ${stateFullName}`,
      `plumbing contractor ${stateFullName}`,
      `plumbing company ${stateFullName}`,
      `plumbing repair ${stateFullName}`,
      `plumbing installation ${stateFullName}`
    ],
    openGraph: {
      title: `United Plumbing CCTX ${serviceName} in ${stateFullName} | Statewide Specialists`,
      description: `Connect with United Plumbing CCTX for ${serviceName.toLowerCase()} anywhere in ${stateFullName}. Licensed teams deliver 24/7 service, repairs, and preventive maintenance statewide.`,
      url: `https://www.unitedplumbingcctx.com/states/${state.toLowerCase()}/${service}`,
      siteName: 'United Plumbing CCTX',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `United Plumbing CCTX ${serviceName} in ${stateFullName} | Statewide Specialists`,
      description: `Connect with United Plumbing CCTX for ${serviceName.toLowerCase()} anywhere in ${stateFullName}. Licensed teams deliver 24/7 service, repairs, and preventive maintenance statewide.`,
    },
    alternates: {
      canonical: `https://www.unitedplumbingcctx.com/states/${state.toLowerCase()}/${service}`,
    },
  };
}

export default async function StateServicePage({ params }: StateServicePageProps) {
  const { state, service } = await params;
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
  const serviceName = getServiceName(service);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {serviceName} in {stateFullName}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional {serviceName.toLowerCase()} services available throughout {stateFullName}. 
            Licensed, experienced, and affordable for all your plumbing needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(833) 609-0936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
            <a 
              href="#cities" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Cities
            </a>
          </div>
        </div>
      </section>

      {/* Service Description Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional {serviceName} Services in {stateFullName}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our experienced plumbers provide top-quality {serviceName.toLowerCase()} services throughout {stateFullName}. 
                We use the latest tools and techniques to ensure your plumbing system works perfectly.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Whether you need emergency repairs or scheduled maintenance, our licensed professionals 
                are ready to help with fast, reliable service in {stateLocations.length} cities across {stateFullName}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:(833) 609-0936" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                >
                  Call (833) 609-0936
                </a>
                <a 
                  href={`/states/${state.toLowerCase()}/services`}
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
                >
                  View All Services
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">Licensed and insured professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">24/7 emergency service available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">Latest tools and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">Competitive pricing and upfront quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  <span className="text-gray-700">Satisfaction guarantee on all work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section id="cities" className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {serviceName} Services in {stateFullName} Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional {serviceName.toLowerCase()} services available in {stateLocations.length} cities across {stateFullName}. 
              Click on any city to learn more about our services in that area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {stateLocations.slice(0, 20).map((location) => (
              <Link
                key={location.id}
                href={`https://${location.id.toLowerCase()}.unitedplumbingcctx.com/${service}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 text-center group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {location.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {location.name}, {location.state}
                </p>
              </Link>
            ))}
          </div>
          
          {stateLocations.length > 20 && (
            <div className="text-center mt-8">
              <Link
                href={`/states/${state.toLowerCase()}`}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                View All {stateLocations.length} Cities
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need {serviceName} Services in {stateFullName}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our licensed and experienced plumbers are available 24/7 for emergency services 
            and scheduled appointments throughout {stateFullName}.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:(833) 609-0936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
          </div>
        </div>
      </section>
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

function getServiceName(serviceSlug: string): string {
  const serviceNames: { [key: string]: string } = {
    'plumber-drain-cleaning': 'Drain Cleaning',
    'plumber-water-heater-repair': 'Water Heater Repair',
    'plumber-tankless-water-heater': 'Tankless Water Heater',
    'plumber-water-recirculation-pump': 'Water Recirculation Pump',
    'plumber-faucet-sink-repair': 'Faucet & Sink Repair',
    'plumber-water-conservation': 'Water Conservation',
    'plumber-bathroom-renovation': 'Bathroom Renovation',
    'plumber-water-system-repair': 'Water System Repair',
    'plumber-slab-leak-repair': 'Slab Leak Repair',
    'plumber-sump-pump-repair': 'Sump Pump Repair',
    'plumber-sewer-line-repair': 'Sewer Line Repair',
    'plumber-gas-line-repair': 'Gas Line Repair',
    'plumber-leak-detection': 'Leak Detection',
    'plumber-toilet-repair': 'Toilet Repair',
    'plumber-emergency-service': 'Emergency Service'
  };
  
  return serviceNames[serviceSlug] || serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}
