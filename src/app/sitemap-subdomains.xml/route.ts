import { NextResponse } from 'next/server'
import locationsData from '@/data/locations.json'

// Define proper types for location data
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

export async function GET() {
  const currentDate = new Date().toISOString()
  
  // Generate individual city sitemap entries
  const citySitemaps = (locationsData as LocationsData).locations.map((location: LocationData) => 
    `<sitemap>
    <loc>https://${location.id}.unitedplumbingcctx.com/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
  ).join('\n')

  // Generate state subdomain sitemap entries
  const stateCodes = ['ca', 'ny', 'tx', 'fl', 'il', 'pa', 'oh', 'ga', 'nc', 'mi', 'nj', 'va', 'wa', 'az', 'ma', 'tn', 'in', 'mo', 'md', 'co', 'mn', 'wi', 'sc', 'al', 'la', 'ky', 'or', 'ok', 'ct', 'ut', 'ia', 'nv', 'ar', 'ms', 'ks', 'ne', 'id', 'nh', 'me', 'nm', 'ri', 'hi', 'mt', 'de', 'sd', 'nd', 'ak', 'vt', 'wy', 'wv'];
  const stateSitemaps = stateCodes.map((state) => 
    `<sitemap>
    <loc>https://${state}.unitedplumbingcctx.com/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>`
  ).join('\n')

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${citySitemaps}
${stateSitemaps}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
