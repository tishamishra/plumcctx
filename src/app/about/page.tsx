import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'United Plumbing CCTX Story | National Team of Licensed Plumbers',
  description: 'Discover how United Plumbing CCTX combines licensed professionals, advanced diagnostic tech, and transparent pricing to serve homes and businesses across the United States.',
  keywords: [
    'about United Plumbing CCTX',
    'plumbing company history',
    'trusted plumber',
    'licensed plumber',
    'insured plumber',
    'professional plumbing service',
    'plumbing company United States',
    'residential plumbing',
    'commercial plumbing',
    'plumbing contractor',
    'plumbing business',
    'plumbing experience',
    'plumbing expertise',
    'plumbing team',
    'plumbing professionals',
    'plumbing service provider',
    'reliable plumber',
    'experienced plumber',
    'plumbing company about',
    'plumbing service history'
  ],
  openGraph: {
    title: 'United Plumbing CCTX Story | National Team of Licensed Plumbers',
    description: 'Discover how United Plumbing CCTX combines licensed professionals, advanced diagnostic tech, and transparent pricing to serve homes and businesses across the United States.',
    url: 'https://unitedplumbingcctx.com/about',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'United Plumbing CCTX Story | National Team of Licensed Plumbers',
    description: 'Discover how United Plumbing CCTX combines licensed professionals, advanced diagnostic tech, and transparent pricing to serve homes and businesses across the United States.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/about',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
} 