import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bitpastel Careers - You can accomplish big things at Bitpastel',
  description:
  'Bitpastel Careers, Technology Jobs, Bitpastel IT Career Opportunities,PHP Jobs, Mobile Development Jobs, Design Jobs, Web Development Jobs,software development,mobile app development,startup,php,mysql,ionic framework,react,custom software,iOS,Android,website development,CRM,ERP,Wordpress,SEO, UI design,social,chat,e-commerce',
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico'],
  },
    
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
