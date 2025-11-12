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
    'plumber-bathroom-installation',
    'plumber-water-system-repair',
    'plumber-slab-leak-repair',
    'plumber-sump-pump-repair',
    'plumber-drain-cleaning',
    'plumber-drain-repair',
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

  // State subdomain landing pages
  const stateSubdomainPages = uniqueStates.map((state) => {
    const stateSlug = state.toLowerCase()
    return `  <url>
    <loc>https://${stateSlug}.unitedplumbingcctx.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  }).join('\n')

  // State subdomain support pages (services index, about, contact)
  const stateSubdomainSupportPages = uniqueStates.flatMap((state) => {
    const stateSlug = state.toLowerCase()
    const paths = ['services', 'about', 'contact']
    return paths.map((path) => `  <url>
    <loc>https://${stateSlug}.unitedplumbingcctx.com/${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`)
  }).join('\n')

  // State subdomain service detail pages
  const stateSubdomainServicePages = uniqueStates.flatMap((state) => {
    const stateSlug = state.toLowerCase()
    return serviceSlugs.map((service) => `  <url>
    <loc>https://${stateSlug}.unitedplumbingcctx.com/services/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
  }).join('\n')

  // Location subdomain landing pages
  const locationSubdomainPages = typedLocationsData.locations.map((location) => `  <url>
    <loc>https://${location.id}.unitedplumbingcctx.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')

  // Location subdomain services index pages
  const locationSubdomainServicesPages = typedLocationsData.locations.map((location) => `  <url>
    <loc>https://${location.id}.unitedplumbingcctx.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')

  // Location subdomain service detail pages
  const locationSubdomainServicePages = typedLocationsData.locations.flatMap((location) =>
    serviceSlugs.map((service) => `  <url>
    <loc>https://${location.id}.unitedplumbingcctx.com/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`)
  ).join('\n')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${mainPages}
${mainServicePages}
${stateSubdomainPages}
${stateSubdomainSupportPages}
${stateSubdomainServicePages}
${locationSubdomainPages}
${locationSubdomainServicesPages}
${locationSubdomainServicePages}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
