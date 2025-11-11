import type { Metadata } from 'next';
import WaterHeaterRepairPageContent from '@/components/WaterHeaterRepairPageContent';

export const metadata: Metadata = {
  title: 'Nationwide Water Heater Repair & Replacement | United Plumbing CCTX',
  description: 'Restore hot water fast with United Plumbing CCTX—licensed techs repair and replace tank and tankless heaters, tune thermostats, and flush systems anywhere in the United States.',
  keywords: [
    'water heater repair',
    'water heater installation',
    'water heater repair near me',
    'water heater installation near me',
    'water heater repair cost',
    'water heater installation cost',
    'water heater repair company',
    'water heater installation company',
    'water heater repair contractor',
    'water heater installation contractor',
    'water heater repair expert',
    'water heater installation expert',
    'water heater repair professional',
    'water heater installation professional',
    'water heater repair residential',
    'water heater installation residential',
    'water heater repair commercial',
    'water heater installation commercial',
    'water heater repair 24/7',
    'water heater installation emergency'
  ],
  openGraph: {
    title: 'Nationwide Water Heater Repair & Replacement | United Plumbing CCTX',
    description: 'Restore hot water fast with United Plumbing CCTX—licensed techs repair and replace tank and tankless heaters, tune thermostats, and flush systems anywhere in the United States.',
    url: 'https://unitedplumbingcctx.com/services/plumber-water-heater-repair',
    siteName: 'United Plumbing CCTX',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nationwide Water Heater Repair & Replacement | United Plumbing CCTX',
    description: 'Restore hot water fast with United Plumbing CCTX—licensed techs repair and replace tank and tankless heaters, tune thermostats, and flush systems anywhere in the United States.',
  },
  alternates: {
    canonical: 'https://unitedplumbingcctx.com/services/plumber-water-heater-repair',
  },
};

export default function WaterHeatersRepairAndInstallationPage() {
  return <WaterHeaterRepairPageContent />;
} 