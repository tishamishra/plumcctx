import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'United Plumbing CCTX Services | Nationwide Repairs & Maintenance',
  description: 'Explore water heater, drain, sewer, leak, and remodel solutions delivered across the United States by the licensed pros at United Plumbing CCTX.',
  keywords: [
    'plumbing services',
    'water heater repair',
    'drain cleaning',
    'leak detection',
    'sewer line repair',
    'emergency plumbing',
    'residential plumbing',
    'commercial plumbing',
    'plumber services',
    'plumbing repair',
    'plumbing installation',
    'gas line repair',
    'toilet repair',
    'faucet repair',
    'sink repair',
    'pipe repair',
    'plumbing maintenance',
    'professional plumber',
    'licensed plumber',
    'plumbing contractor'
  ],
  openGraph: {
    title: 'United Plumbing CCTX Services | Nationwide Repairs & Maintenance',
    description: 'Explore water heater, drain, sewer, leak, and remodel solutions delivered across the United States by the licensed pros at United Plumbing CCTX.',
    url: 'https://unitedplumbingcctx.com/services',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Plumbing CCTX Services | Nationwide Repairs & Maintenance',
    description: 'Explore water heater, drain, sewer, leak, and remodel solutions delivered across the United States by the licensed pros at United Plumbing CCTX.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
} 