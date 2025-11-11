import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "United Plumbing CCTX | Nationwide Emergency & Routine Plumbing Experts",
  description: "United Plumbing CCTX delivers 24/7 licensed plumbers across the United States for water heaters, drain cleaning, leak detection, sewer repairs, and full-service maintenance.",
  keywords: [
    "24/7 emergency plumbing",
    "emergency plumber",
    "plumbing services",
    "water heater repair",
    "drain cleaning",
    "leak detection",
    "plumber near me",
    "24/7 plumbing",
    "licensed plumber",
    "residential plumbing",
    "commercial plumbing",
    "plumbing repair",
    "plumbing installation",
    "sewer line repair",
    "gas line repair",
    "toilet repair",
    "faucet repair",
    "sink repair",
    "pipe repair",
    "plumbing maintenance"
  ],
  icons: {
    icon: [
      {
        url: "https://ik.imagekit.io/nang9yead/2dd331f2-e7c3-4d7c-bcec-2770629fd002.png?updatedAt=1762876958283",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://ik.imagekit.io/nang9yead/2dd331f2-e7c3-4d7c-bcec-2770629fd002.png?updatedAt=1762876958283",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://ik.imagekit.io/nang9yead/2dd331f2-e7c3-4d7c-bcec-2770629fd002.png?updatedAt=1762876958283",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "United Plumbing CCTX | Nationwide Emergency & Routine Plumbing Experts",
    description: "United Plumbing CCTX delivers 24/7 licensed plumbers across the United States for water heaters, drain cleaning, leak detection, sewer repairs, and full-service maintenance.",
    url: "https://unitedplumbingcctx.com",
    siteName: "United Plumbing CCTX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "United Plumbing CCTX | Nationwide Emergency & Routine Plumbing Experts",
    description: "United Plumbing CCTX delivers 24/7 licensed plumbers across the United States for water heaters, drain cleaning, leak detection, sewer repairs, and full-service maintenance.",
  },
  alternates: {
    canonical: "https://unitedplumbingcctx.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CTZ6N4SPQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CTZ6N4SPQP');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
