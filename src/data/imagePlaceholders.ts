export type PlaceholderName =
  | 'heroBackground'
  | 'aboutSideImage'
  | 'serviceWaterHeater'
  | 'serviceTanklessWaterHeater'
  | 'serviceWaterRecirculation'
  | 'serviceFaucetSink'
  | 'serviceWaterConservation'
  | 'serviceBathroomRenovation'
  | 'serviceWaterSystem'
  | 'serviceSlabLeak'
  | 'serviceSumpPump'
  | 'serviceDrainCleaning'
  | 'serviceSewerLine'
  | 'serviceGasLine'
  | 'serviceLeakDetection'
  | 'serviceToiletRepair'
  | 'splitSectionProfessional'
  | 'footerFleetVan'
  | 'floatingCtaPlumberIcon';

export type ImagePlaceholder = {
  key: PlaceholderName;
  category: string;
  description: string;
  defaultUrl: string;
  alt: string;
};

const IMAGE_PLACEHOLDERS: Record<PlaceholderName, ImagePlaceholder> = {
  heroBackground: {
    key: 'heroBackground',
    category: 'herobackground',
    description: 'Main homepage hero background image',
    defaultUrl: '/hero-bg.jpg',
    alt: 'Plumbing background',
  },
  aboutSideImage: {
    key: 'aboutSideImage',
    category: 'aboutsideimage',
    description: 'About section featured plumber image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Holding%20Wrench%20in%20Kitchen.png?updatedAt=1756066963942',
    alt: 'Professional plumbing services image',
  },
  serviceWaterHeater: {
    key: 'serviceWaterHeater',
    category: 'waterheater',
    description: 'Water heater repair service card image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Plumber%20Fixing%20Leaking%20Sink%20Pipe%20with%20Wrench.png?updatedAt=1756066955385',
    alt: 'Water heater repair and installation',
  },
  serviceTanklessWaterHeater: {
    key: 'serviceTanklessWaterHeater',
    category: 'servicetanklesswaterheater',
    description: 'Tankless water heater service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Worker%20Adjusting%20Water%20Filtration%20System%20Valves?updatedAt=1756066968225',
    alt: 'Tankless water heater system',
  },
  serviceWaterRecirculation: {
    key: 'serviceWaterRecirculation',
    category: 'servicewaterrecirculation',
    description: 'Water recirculation pump service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Maintenance%20Worker%20Adjusting%20Copper%20Plumbing%20Pipes.png?updatedAt=1756066948233',
    alt: 'Water recirculation pump maintenance',
  },
  serviceFaucetSink: {
    key: 'serviceFaucetSink',
    category: 'servicefaucetsink',
    description: 'Faucet and sink service card image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Smiling%20Plumber%20Repairing%20Bathroom%20Sink%20Pipe.png?updatedAt=1756066965094',
    alt: 'Faucet and sink repair',
  },
  serviceWaterConservation: {
    key: 'serviceWaterConservation',
    category: 'servicewaterconservation',
    description: 'Water conservation plumbing service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Plumbers%20Installing%20Wall-Mounted%20Water%20Tap?updatedAt=1756066963229',
    alt: 'Water conservation plumbing',
  },
  serviceBathroomRenovation: {
    key: 'serviceBathroomRenovation',
    category: 'servicebathroomrenovation',
    description: 'Bathroom renovation service card image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/young%20female%20plumber%20fixing%20?updatedAt=1756066968835',
    alt: 'Bathroom renovation services',
  },
  serviceWaterSystem: {
    key: 'serviceWaterSystem',
    category: 'servicewatersystem',
    description: 'Water system installation and repair image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Industrial%20HVAC%20Technician%20Inspection.png?updatedAt=1756066941834',
    alt: 'Water system installation',
  },
  serviceSlabLeak: {
    key: 'serviceSlabLeak',
    category: 'serviceslableak',
    description: 'Slab leak detection service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Old%20Rusty%20Pipe%20Dripping%20Water.png?updatedAt=1756066951741',
    alt: 'Slab leak detection and repair',
  },
  serviceSumpPump: {
    key: 'serviceSumpPump',
    category: 'servicesumppump',
    description: 'Sump pump installation and repair image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Electrician%20Working%20on%20Outdoor%20Wiring%20in%20Lawn.png?updatedAt=1756066952425',
    alt: 'Sump pump maintenance',
  },
  serviceDrainCleaning: {
    key: 'serviceDrainCleaning',
    category: 'servicedraincleaning',
    description: 'Drain cleaning service card image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/plumber%20clearing%20blocked%20sink%20with%20water?updatedAt=1756066954284',
    alt: 'Professional drain cleaning',
  },
  serviceSewerLine: {
    key: 'serviceSewerLine',
    category: 'servicesewerline',
    description: 'Sewer line inspection service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Old%20Rusty%20Underground%20Pipeline.png?updatedAt=1756066953091',
    alt: 'Sewer line inspection and replacement',
  },
  serviceGasLine: {
    key: 'serviceGasLine',
    category: 'servicegasline',
    description: 'Gas line installation and repair image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Industrial%20Green%20and%20Orange%20Water%20Pipelines?updatedAt=1756066950649',
    alt: 'Gas line installation and repair',
  },
  serviceLeakDetection: {
    key: 'serviceLeakDetection',
    category: 'serviceleakdetection',
    description: 'Leak detection service card image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/PVC%20Pipe%20Installation%20in%20Soil.png?updatedAt=1756066962271',
    alt: 'Leak detection and repair',
  },
  serviceToiletRepair: {
    key: 'serviceToiletRepair',
    category: 'servicetoiletrepair',
    description: 'Toilet repair and installation service image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Plumber%20Using%20Plunger%20on%20Toilet%20Bowl%20worker%20in%20orange%20uniform%20unclogging%20toilet?updatedAt=1756066962119',
    alt: 'Toilet repair services',
  },
  splitSectionProfessional: {
    key: 'splitSectionProfessional',
    category: 'aboutsideimage',
    description: 'Split section professional plumber image',
    defaultUrl:
      'https://ik.imagekit.io/nang9yead/Female%20Carpenter%20or%20Technician%20in%20Workshop.png?updatedAt=1756066944879',
    alt: 'Professional plumber at work',
  },
  footerFleetVan: {
    key: 'footerFleetVan',
    category: 'footerfleetvan',
    description: 'Service fleet van illustration',
    defaultUrl: 'https://ik.imagekit.io/nang9yead/f1e8c7db-bce4-439f-aed8-62253ff40f97.png?updatedAt=1762876521171',
    alt: 'Plumbing service van',
  },
  floatingCtaPlumberIcon: {
    key: 'floatingCtaPlumberIcon',
    category: 'floatingctaplumbericon',
    description: 'Plumber illustration used in floating call-to-action',
    defaultUrl: '/plumber-icon.png',
    alt: 'Professional plumber illustration',
  },
};

export function getPlaceholderImage(name: PlaceholderName): ImagePlaceholder {
  const placeholder = IMAGE_PLACEHOLDERS[name];
  if (!placeholder) {
    throw new Error(`Unknown image placeholder: ${name}`);
  }
  return placeholder;
}

export function listPlaceholderImages(): ImagePlaceholder[] {
  return Object.values(IMAGE_PLACEHOLDERS);
}
