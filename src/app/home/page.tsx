// 'use client';
// import React, { useState, useEffect } from 'react';
// import TestimonialsSection from '@/components/home/TestiminialSection';
// import ServicesSection from '@/components/home/ServicesSection';
// import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
// import HeroSection from '@/components/home/HeroSection';
// import CtaSection from '@/components/home/CtaSection';
// import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
// import CultureSection from '@/components/home/CultureSection';
// import TechPartnerSection from '@/components/home/TechPartnerSection';
// import Modal from '@/components/Modal';
// import { useRouter, usePathname } from 'next/navigation';

// interface HomePageProps {
//   forceModalOpen?: boolean;
//   onModalClose?: () => void;
// }

// const HomePage: React.FC<HomePageProps> = ({forceModalOpen=false, onModalClose}) => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(forceModalOpen);


//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     setIsModalOpen(forceModalOpen);
//   }, [forceModalOpen]);


//   const openModal = () => {
//     if (pathname !== '/free-quote') {
//       router.push('/free-quote', { scroll: false });
//     }
//     setIsModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//     onModalClose?.(); // Trigger router.push('/') in /free-quote/page
//   };

//   return (
//     <>
//       <HeroSection openModal={openModal}/>
//       <ServicesSection />      
//       <TechPartnerSection />
//       <SatisfiedClientSection />
//       <ShopifyStoreSection />
//       <CultureSection />
//       <TestimonialsSection />
//       <CtaSection openModal={openModal}/>

//       <Modal open={isModalOpen} onClose={handleModalClose} />
//     </>
//   );
// };

// export default HomePage;

import React from 'react'

import HomeOptimized from '@/components/home/optimized/HomeOptimized'

export default function page() {
  return (
    <HomeOptimized />
  )
}

