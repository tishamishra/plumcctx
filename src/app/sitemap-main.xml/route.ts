import { NextResponse } from 'next/server'
import locationsData from '@/data/locations.json'

// Define proper types for location data
interface LocationData {
  id: string;
  name: string;
  state: string;
}

interface LocationsData {
  locations: LocationData[];
}

export async function GET() {
  const currentDate = new Date().toISOString()
  
  const serviceSlugs = [
    'plumber-water-heater-repair',
    'plumber-tankless-water-heater',
    'plumber-water-recirculation-pump',
    'plumber-faucet-sink-repair',
    'plumber-water-conservation',
    'plumber-bathroom-renovation',
    'plumber-water-system-repair',
    'plumber-slab-leak-repair',
    'plumber-sump-pump-repair',
    'plumber-drain-cleaning',
    'plumber-sewer-line-repair',
    'plumber-gas-line-repair',
    'plumber-leak-detection',
    'plumber-toilet-repair',
    'plumber-emergency-service'
  ]

  // Main domain pages
  const mainPages = [
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/locations</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/states</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`
  ].join('\n')

  // Main domain service pages
  const mainServicePages = serviceSlugs.map(service => 
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join('\n')

  // Get unique states
  const typedLocationsData = locationsData as LocationsData;
  const uniqueStates = [...new Set(typedLocationsData.locations.map(loc => loc.state))];

  // State pages
  const statePages = uniqueStates.map(state => 
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/states/${state.toLowerCase()}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join('\n')

  // State services pages
  const stateServicesPages = uniqueStates.flatMap(state =>
    serviceSlugs.map(service => 
      `  <url>
    <loc>https://www.unitedplumbingcctx.com/states/${state.toLowerCase()}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
  ).join('\n')

  // State services index pages
  const stateServicesIndexPages = uniqueStates.map(state => 
    `  <url>
    <loc>https://www.unitedplumbingcctx.com/states/${state.toLowerCase()}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mainPages}
${mainServicePages}
${statePages}
${stateServicesIndexPages}
${stateServicesPages}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
