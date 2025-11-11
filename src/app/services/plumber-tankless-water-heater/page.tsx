import type { Metadata } from 'next';
import TanklessWaterHeaterPageContent from '@/components/TanklessWaterHeaterPageContent';

export const metadata: Metadata = {
  title: 'Tankless Water Heater Installers & Maintenance Experts | United Plumbing CCTX',
  description: 'Upgrade to endless hot water with United Plumbing CCTX. We size, install, and service tankless systems coast to coast with rebate guidance and annual maintenance plans.',
  keywords: [
    'tankless water heater installation',
    'tankless water heater services',
    'tankless water heater installation near me',
    'tankless water heater installation cost',
    'tankless water heater installation company',
    'tankless water heater installation contractor',
    'tankless water heater installation expert',
    'tankless water heater installation professional',
    'tankless water heater installation residential',
    'tankless water heater installation commercial',
    'tankless water heater installation licensed',
    'tankless water heater installation insured',
    'tankless water heater installation 24/7',
    'tankless water heater installation emergency',
    'tankless water heater installation repair',
    'tankless water heater installation maintenance',
    'tankless water heater installation replacement',
    'tankless water heater installation upgrade',
    'tankless water heater installation energy efficient',
    'tankless water heater installation endless hot water'
  ],
  openGraph: {
    title: 'Tankless Water Heater Installers & Maintenance Experts | United Plumbing CCTX',
    description: 'Upgrade to endless hot water with United Plumbing CCTX. We size, install, and service tankless systems coast to coast with rebate guidance and annual maintenance plans.',
    url: 'https://unitedplumbingcctx.com/services/plumber-tankless-water-heater',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tankless Water Heater Installers & Maintenance Experts | United Plumbing CCTX',
    description: 'Upgrade to endless hot water with United Plumbing CCTX. We size, install, and service tankless systems coast to coast with rebate guidance and annual maintenance plans.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services/plumber-tankless-water-heater',
  },
};

export default function TanklessWaterHeaterInstallationPage() {
  return <TanklessWaterHeaterPageContent />;
} 