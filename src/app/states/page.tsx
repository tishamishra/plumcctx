import type { Metadata } from 'next';
import Link from 'next/link';
import locationsData from '@/data/locations.json';

export const metadata: Metadata = {
  title: 'United Plumbing CCTX Service States | Nationwide Coverage Map',
  description: 'Browse every state served by United Plumbing CCTX and connect with licensed local plumbing teams across the United States.',
  openGraph: {
    title: 'United Plumbing CCTX Service States | Nationwide Coverage Map',
    description: 'Browse every state served by United Plumbing CCTX and connect with licensed local plumbing teams across the United States.',
    url: 'https://unitedplumbingcctx.com/states',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Plumbing CCTX Service States | Nationwide Coverage Map',
    description: 'Browse every state served by United Plumbing CCTX and connect with licensed local plumbing teams across the United States.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/states',
  },
};

export default function StatesPage() {
  const typedLocationsData = locationsData as { locations: Array<{ id: string; name: string; state: string }> };
  
  // Group locations by state
  const stateGroups = typedLocationsData.locations.reduce((acc: Record<string, Array<{ id: string; name: string; state: string }>>, location) => {
    const state = location.state;
    if (!acc[state]) {
      acc[state] = [];
    }
    acc[state].push(location);
    return acc;
  }, {});

  // Convert to array and sort by number of cities
  const statesArray = Object.entries(stateGroups)
    .map(([state, locations]) => ({
      state,
      cityCount: locations.length,
      fullName: getStateFullName(state)
    }))
    .sort((a, b) => b.cityCount - a.cityCount);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Plumbing Services by State
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional plumbing services available across the United States. 
            Click on any state to view all cities we serve in that area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:(833) 609-0936" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Call (833) 609-0936
            </a>
            <a 
              href="#states" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All States
            </a>
          </div>
        </div>
      </section>

      {/* States Grid Section */}
      <section id="states" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              States We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional plumbing services available in {statesArray.length} states across the United States. 
              Click on any state to view all cities we serve in that area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {statesArray.map((stateInfo) => (
              <Link
                key={stateInfo.state}
                href={`/states/${stateInfo.state.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center group"
              >
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {stateInfo.fullName}
                </h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {stateInfo.cityCount}
                </p>
                <p className="text-sm text-gray-600">
                  {stateInfo.cityCount === 1 ? 'City' : 'Cities'} Available
                </p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                  View Cities →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Plumbing Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our licensed and experienced plumbers are available 24/7 for emergency services 
            and scheduled appointments across the United States.
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