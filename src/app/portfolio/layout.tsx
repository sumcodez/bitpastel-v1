 
 
 import { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Partnership Program | Bitpastel - Collaborate for E-commerce Success',
  description: 'Join Bitpastel as a partner and unlock new business opportunities in Shopify Plus development, e-commerce solutions, and digital transformation services. Grow together with our technology partnership program.',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },

 keywords: [
    'Shopify Plus portfolio',
    'E-commerce case studies',
    'Web development projects',
    'Digital transformation examples',
    'Bitpastel work samples'
  ]
  };

  export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}