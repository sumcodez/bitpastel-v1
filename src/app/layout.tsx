// import React from 'react';
// // import Header from '@/components/Header';
// // import Footer from '@/components/Footer';
// import '../styles/index.css';
// import HeaderOptimized from '@/components/optimizedHeader/OptimizedHeader';
// import FooterOptimized from '@/components/optimizedFooter/OptimizedFooter';
// // import LoadingBar from '@/components/ui/loading_bar';
// export const viewport = {
//   width: 'device-width',
//   initialScale: 1,
// };

// export const metadata = {
//   title: ' Bitpastel - Shopify Plus Development Agency | E-commerce Development',
//   description:
//     'Bitpastel is a software development company that specializes in Shopify Plus Development, E-commerce Development, Mobile Apps, Websites, Web Services, UI Design & Custom Software Systems for startups & enterprises',
//   icons: {
//     icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="robots" content="noindex,nofollow" />
//       </head>
//       <body>
//         {/* <LoadingBar> */}
//         <HeaderOptimized />
//         {children}
//         <FooterOptimized />
//         {/* </LoadingBar> */}
//       </body>
//     </html>
//   );
// }




import React from 'react';
import '../styles/index.css';
import HeaderOptimized from '@/components/optimizedHeader/OptimizedHeader';
import FooterOptimized from '@/components/optimizedFooter/OptimizedFooter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  title: 'Bitpastel - Shopify Plus Development Agency | E-commerce Development',
  description: 'Bitpastel is a software development company that specializes in Shopify Plus Development, E-commerce Development, Mobile Apps, Websites, Web Services, UI Design & Custom Software Systems for startups & enterprises',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <HeaderOptimized />
        <main className="flex-grow">
          {children}
        </main>
        <FooterOptimized />

      </body>
    </html>
  );
}