import type { Metadata } from 'next';
import { getLocationBySubdomain } from '@/utils/subdomain';
import LocationPageContent from '@/components/LocationPageContent';
import Header from '@/components/Header';
import locationsData from '@/data/locations.json';

export const metadata: Metadata = {
  title: 'United Plumbing CCTX Near You | Nationwide Plumbing Locations',
  description: 'Discover the United Plumbing CCTX network of licensed plumbers across the United States for emergency repairs, preventive maintenance, and new installations.',
  keywords: [
    'plumbing services by location',
    'local plumber',
    'plumber near me',
    'plumbing services by city',
    'plumbing services by state',
    'find plumber',
    'local plumbing company',
    'plumbing contractor near me',
    'emergency plumber near me',
    'residential plumber near me',
    'commercial plumber near me',
    'water heater repair near me',
    'drain cleaning near me',
    'leak detection near me',
    'sewer line repair near me',
    'toilet repair near me',
    'faucet repair near me',
    'plumbing services United States',
    'plumbing company locations',
    'plumbing service areas'
  ],
  openGraph: {
    title: 'United Plumbing CCTX Near You | Nationwide Plumbing Locations',
    description: 'Discover the United Plumbing CCTX network of licensed plumbers across the United States for emergency repairs, preventive maintenance, and new installations.',
    url: 'https://unitedplumbingcctx.com/locations',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Plumbing CCTX Near You | Nationwide Plumbing Locations',
    description: 'Discover the United Plumbing CCTX network of licensed plumbers across the United States for emergency repairs, preventive maintenance, and new installations.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/locations',
  },
};

export const dynamic = 'force-dynamic';

type BasicLocation = { id: string; name: string; state: string };

export default async function Page({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const params = await searchParams;
  const city = params?.city?.toLowerCase();
  
  // If no city parameter, show locations listing
  if (!city) {
    const typedLocations = (locationsData as { locations: BasicLocation[] }).locations;
    
    // Group locations by state
    const locationsByState = typedLocations.reduce(
      (acc: Record<string, BasicLocation[]>, location: BasicLocation) => {
        if (!acc[location.state]) {
          acc[location.state] = [];
        }
        acc[location.state].push(location);
        return acc;
      },
      {} as Record<string, BasicLocation[]>
    );

    // Deduplicate by id within each state and sort by name for stable render
    const dedupedLocationsByState: Record<string, BasicLocation[]> = Object.fromEntries(
      Object.entries(locationsByState).map(([state, list]) => {
        const seenIds = new Set<string>();
        const unique = (list as BasicLocation[])
          .filter((loc: BasicLocation) => {
            if (seenIds.has(loc.id)) return false;
            seenIds.add(loc.id);
            return true;
          })
          .sort((a: BasicLocation, b: BasicLocation) => a.name.localeCompare(b.name));
        return [state, unique];
      })
    ) as Record<string, BasicLocation[]>;

    const states = Object.keys(dedupedLocationsByState).sort();

    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/hero-bg.jpg" 
              alt="Plumbing background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-orange-700/60"></div>
          </div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Plumbing Services by Location
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl opacity-95 max-w-3xl mx-auto leading-relaxed mb-8">
                Find professional plumbers in your area. We serve multiple cities with fast, reliable service.
              </p>
              <div className="flex justify-center">
                <a 
                  href="tel:+18336090936" 
                  className="group relative bg-white text-[#ea580c] font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 animate-pulse"
                >
                  <div className="relative">
                    <svg className="w-6 h-6 animate-bounce text-[#ea580c]" fill="currentColor" viewBox="0 0 24 24">
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
        {/* States and Locations */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Plumbing Services by Location</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Find professional plumbers in your area. We serve multiple cities with fast, reliable service.
          </p>
          
          <div className="space-y-8">
            {states.map((state) => (
              <div key={state} className="bg-white rounded-lg shadow-md p-6">
                <a 
                  href={`/states/${state.toLowerCase()}`}
                  className="text-2xl font-bold mb-4 text-gray-800 hover:text-[#ea580c] transition-colors block"
                >
                  {state} →
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {dedupedLocationsByState[state].map((location: BasicLocation) => (
                    <a
                      key={`${location.id}-${location.state}`}
                      href={`https://${location.id.toLowerCase()}.unitedplumbingcctx.com`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition text-center"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.state}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ea580c]">{typedLocations.length}</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ea580c]">{states.length}</div>
              <div className="text-gray-600">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ea580c]">24/7</div>
              <div className="text-gray-600">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-[#ea580c] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Plumbing Services?</h2>
            <p className="text-xl mb-8">Call us today for fast, reliable service in your area.</p>
            <a 
              href="tel:+18336090936" 
              className="bg-white text-[#ea580c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition inline-block"
            >
              Call (833) 609-0936
            </a>
          </div>
        </section>
      </div>
    );
  }

  const location = getLocationBySubdomain(city);

  if (!location) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">City not found</h1>
          <p className="text-gray-600">The requested city &ldquo;{city}&rdquo; is not available.</p>
        </div>
      </div>
    );
  }

  return <LocationPageContent location={location} />;
} 