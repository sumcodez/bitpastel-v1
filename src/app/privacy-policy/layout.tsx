 import { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Privacy Policy - Bitpastel',
  description: "Bitpastel Solution Private Limited is firmly committed to your privacy. You should understand what we do with any personal information that you provide to us while using our site. That's why we've created this Privacy Statement, which discloses our information gathering and dissemination practices.",
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