import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Bitpastel',
  description: 'This is a Bitpastel website Create By Palash',
  icons: {
    icon: [
      { url: '/img_bitpastellogo02300dpi_3.png', type: 'image/x-icon' }
    ],
  },
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
