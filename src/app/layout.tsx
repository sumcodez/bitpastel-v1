import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000', // Use your brand color
};

export const metadata = {
  metadataBase: new URL('https://www.bitpastel.com'),
  title: 'Bitpastel - Shopify Plus Development Agency | E-commerce Development',
  description: 'Bitpastel is a software development company that specializes in Shopify Plus Development, E-commerce Development, Mobile Apps, Websites, Web Services, UI Design & Custom Software Systems for startups & enterprises',
  keywords: [
    'Shopify Plus',
    'E-commerce Development',
    'Web Development Agency',
    'Mobile App Development',
    'UI/UX Design',
    'Custom Software Solutions',
    'Startup Tech Partner',
    'Enterprise Software'
  ],
  openGraph: {
    title: 'Bitpastel - Shopify Plus Development Agency | E-commerce Development',
    description: 'Bitpastel is a software development company that specializes in Shopify Plus Development, E-commerce Development, Mobile Apps, Websites, Web Services, UI Design & Custom Software Systems for startups & enterprises',
    url: 'https://www.bitpastel.com',
    siteName: 'Bitpastel',
    images: [
      {
        url: '/bitpastel-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bitpastel - Tech Solutions for E-commerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitpastel - Shopify Plus Development Agency | E-commerce Development',
    description: 'Specialists in Shopify Plus, E-commerce, and custom software solutions',
    images: ['/bitpastel-twitter-card.jpg'],
  },
  icons: {
    icon: [
      { url: '/img_bitpastellogo02300dpi_3.png', type: 'image/x-icon' },
      { url: '/img_bitpastellogo02300dpi_3.png', sizes: '32x32', type: 'image/png' },
      { url: '/img_bitpastellogo02300dpi_3.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://www.bitpastel.com'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}