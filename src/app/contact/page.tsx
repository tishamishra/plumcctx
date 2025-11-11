import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact United Plumbing CCTX | Nationwide 24/7 Plumbing Dispatch',
  description: 'Call (833) 609-0936 or message United Plumbing CCTX to schedule emergency or planned plumbing repairs, installations, and maintenance anywhere in the United States.',
  keywords: [
    'contact plumber',
    'emergency plumber contact',
    'plumbing service contact',
    'plumber phone number',
    '24/7 plumbing service',
    'emergency plumbing contact',
    'plumbing company contact',
    'plumber near me contact',
    'water heater repair contact',
    'drain cleaning contact',
    'leak detection contact',
    'sewer line repair contact',
    'toilet repair contact',
    'faucet repair contact',
    'plumbing emergency contact',
    'licensed plumber contact',
    'professional plumber contact',
    'plumbing contractor contact',
    'residential plumbing contact',
    'commercial plumbing contact'
  ],
  openGraph: {
    title: 'Contact United Plumbing CCTX | Nationwide 24/7 Plumbing Dispatch',
    description: 'Call (833) 609-0936 or message United Plumbing CCTX to schedule emergency or planned plumbing repairs, installations, and maintenance anywhere in the United States.',
    url: 'https://unitedplumbingcctx.com/contact',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact United Plumbing CCTX | Nationwide 24/7 Plumbing Dispatch',
    description: 'Call (833) 609-0936 or message United Plumbing CCTX to schedule emergency or planned plumbing repairs, installations, and maintenance anywhere in the United States.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/contact',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
} 