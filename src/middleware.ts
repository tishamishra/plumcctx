import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;
  const pathSegmentsInitial = url.pathname.split('/').filter(Boolean);

  // Redirect to www version for main domain (SEO best practice)
  if (hostname === 'unitedplumbingcctx.com') {
    url.hostname = 'www.unitedplumbingcctx.com';
    return NextResponse.redirect(url, 301); // Permanent redirect
  }

  // Handle different domain patterns
  let subdomain = '';
  
  // Handle unitedplumbingcctx.com domain
  if (hostname.includes('.unitedplumbingcctx.com')) {
    subdomain = hostname.replace('.unitedplumbingcctx.com', '');
  } else if (hostname.includes('localhost')) {
    // For local development, extract subdomain from localhost
    const parts = hostname.split('.');
    if (parts.length > 1) {
      subdomain = parts[0];
    }
  }

  // Check if this is a state subdomain (2-letter state codes)
  const stateCodes = ['ca', 'ny', 'tx', 'fl', 'il', 'pa', 'oh', 'ga', 'nc', 'mi', 'nj', 'va', 'wa', 'az', 'ma', 'tn', 'in', 'mo', 'md', 'co', 'mn', 'wi', 'sc', 'al', 'la', 'ky', 'or', 'ok', 'ct', 'ut', 'ia', 'nv', 'ar', 'ms', 'ks', 'ne', 'id', 'nh', 'me', 'nm', 'ri', 'hi', 'mt', 'de', 'sd', 'nd', 'ak', 'vt', 'wy', 'wv'];
  const isStateSubdomain = stateCodes.includes(subdomain.toLowerCase());

  const isStatesPath = pathSegmentsInitial[0] === 'states' && pathSegmentsInitial.length >= 2;
  const stateParamFromPath = isStatesPath ? pathSegmentsInitial[1].toLowerCase() : null;

  if ((subdomain === '' || subdomain === 'www' || subdomain === 'unitedplumbingcctx') && isStatesPath && stateParamFromPath) {
    const redirectUrl = new URL(request.url);
    redirectUrl.hostname = `${stateParamFromPath}.unitedplumbingcctx.com`;
    redirectUrl.pathname = '/';
    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl, 301);
  }

  // If it's www or the root domain, let it go normally
  if (subdomain === 'www' || subdomain === 'unitedplumbingcctx' || subdomain === 'localhost') {
    return NextResponse.next();
  }

  // If no subdomain found, continue normally
  if (!subdomain) {
    return NextResponse.next();
  }

  // Handle homepage (/) - rewrite to appropriate page
  if (url.pathname === '/') {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}`;
    } else {
      url.pathname = `/locations/${subdomain}`;
    }
    return NextResponse.rewrite(url);
  }

  // Handle services page (/services) - rewrite to appropriate services page
  if (url.pathname === '/services') {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}/services`;
    } else {
      url.pathname = `/locations/${subdomain}/services`;
    }
    return NextResponse.rewrite(url);
  }

  // Handle about page (/about) - rewrite to appropriate about page
  if (url.pathname === '/about') {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}/about`;
    } else {
      url.pathname = `/locations/${subdomain}/about`;
    }
    return NextResponse.rewrite(url);
  }

  // Handle contact page (/contact) - rewrite to appropriate contact page
  if (url.pathname === '/contact') {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}/contact`;
    } else {
      url.pathname = `/locations/${subdomain}/contact`;
    }
    return NextResponse.rewrite(url);
  }

  // Block access to main domain service pages on sub-domains to prevent duplicate content
  let pathSegments = url.pathname.split('/').filter(Boolean);

  if (pathSegments.length) {
    const cleanedSegments = [...pathSegments];
    let modified = false;
    while (cleanedSegments.length && (cleanedSegments[cleanedSegments.length - 1] === '$' || cleanedSegments[cleanedSegments.length - 1] === '&')) {
      cleanedSegments.pop();
      modified = true;
    }

    if (modified) {
      const cleanPath = cleanedSegments.length ? `/${cleanedSegments.join('/')}` : '/';
      const redirectUrl = new URL(request.url);
      redirectUrl.pathname = cleanPath;
      return NextResponse.redirect(redirectUrl, 301);
    }

    pathSegments = cleanedSegments;
  }

  if (pathSegments[0] === 'states') {
    const stateParam = pathSegments.length >= 2 ? pathSegments[1].toLowerCase() : null;
    const redirectUrl = new URL(request.url);

    if (stateParam) {
      if (subdomain.toLowerCase() === stateParam) {
        redirectUrl.pathname = '/';
      } else {
        redirectUrl.hostname = `${stateParam}.unitedplumbingcctx.com`;
        redirectUrl.pathname = '/';
      }
    } else {
      redirectUrl.pathname = '/';
    }

    redirectUrl.search = '';
    return NextResponse.redirect(redirectUrl, 301);
  }

  // If trying to access /services/* on sub-domain, redirect to appropriate services page
  if (pathSegments[0] === 'services' && pathSegments.length === 1) {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}/services`;
    } else {
      url.pathname = `/locations/${subdomain}/services`;
    }
    return NextResponse.rewrite(url);
  }

  // Block access to /services/plumber-* on sub-domains to prevent duplicate content
  if (pathSegments[0] === 'services' && pathSegments.length === 2 && pathSegments[1].startsWith('plumber-')) {
    // Return 404 for /services/plumber-* URLs on subdomains
    return new NextResponse('Not Found', { status: 404 });
  }
  
  // Block direct access to main domain service pages on sub-domains
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
  ];

  // If trying to access main domain service page directly on sub-domain, redirect to appropriate version
  if (pathSegments.length === 1 && serviceSlugs.includes(pathSegments[0])) {
    if (isStateSubdomain) {
      url.pathname = `/states/${subdomain}/${pathSegments[0]}`;
    } else {
      url.pathname = `/locations/${subdomain}/${pathSegments[0]}`;
    }
    return NextResponse.rewrite(url);
  }

  // Block access to other main domain pages on sub-domains to prevent duplicate content
  const blockedPaths = [
    'api',
    'robots.txt'
  ];
  
  if (pathSegments.length > 0 && blockedPaths.includes(pathSegments[0])) {
    // Return 404 for blocked paths on sub-domains
    return new NextResponse('Not Found', { status: 404 });
  }

  // For all other routes, let them go through normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 