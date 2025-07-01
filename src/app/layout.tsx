import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: ' Bitpastel - Shopify Plus Development Agency | E-commerce Development',
  description: 'Bitpastel is a software development company that specializes in Shopify Plus Development, E-commerce Development, Mobile Apps, Websites, Web Services, UI Design & Custom Software Systems for startups & enterprises',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }
    ],
  },
}

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
