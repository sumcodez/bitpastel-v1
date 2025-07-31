// app/services/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitpastel Culture - The people who make it happen',
  description: 'Explore IT career opportunities at Bitpastel and advance your career in the field of mobile application development, web development, UI design',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}