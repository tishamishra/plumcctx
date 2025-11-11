# United Plumbing CCTX Website

This repository contains the United Plumbing CCTX marketing site built with Next.js. It supports multi-region subdomains, automated ImageKit asset management, and dynamic SEO metadata tailored for each location, state, and service page.

## Prerequisites

- Node.js 18+
- npm 9+
- ImageKit account (for dynamic imagery)

## Getting Started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file with your ImageKit credentials and site URL:

```env
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_path
IMAGEKIT_PATH_PREFIX=/
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Key Features

- Dynamic routing for state and city subdomains
- Automated image placeholders synced from ImageKit folders
- Middleware redirects to enforce clean URLs and canonical structure
- Orange-themed UI with reusable CTA components
- Comprehensive SEO metadata for main, service, and location pages

## Building for Production

```bash
npm run build
npm run start
```

## License

This project is licensed under the MIT License.
