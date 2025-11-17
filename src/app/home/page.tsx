

// import React from 'react'

// import HomeOptimized from '@/components/home/optimized/HomeOptimized'

// export default function page() {
//   return (
//     <HomeOptimized />
//   )
// }




'use client';
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';
interface HomePageProps {
  forceModalOpen?: boolean;
  onModalClose?: () => void;
}

// Dynamically import components with Suspense fallbacks
const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  suspense: true
});
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'), {
  suspense: true
});
const TechPartnerSection = dynamic(() => import('@/components/home/TechPartnerSection'), {
  suspense: true
});
const SatisfiedClientSection = dynamic(() => import('@/components/home/SatisfiedClientSection'), {
  suspense: true
});
const ShopifyStoreSection = dynamic(() => import('@/components/home/ShopifyStoreSection'), {
  suspense: true
});
const CultureSection = dynamic(() => import('@/components/home/CultureSection'), {
  suspense: true
});
const TestimonialsSection = dynamic(() => import('@/components/home/TestiminialSection'), {
  suspense: true
});
const CtaSection = dynamic(() => import('@/components/home/CtaSection'), {
  suspense: true
});
const Modal = dynamic(() => import('@/components/Modal'), {
  suspense: true,
  ssr: false
});

const HomePage: React.FC<HomePageProps> = ({ forceModalOpen = false, onModalClose }) => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(forceModalOpen);
  const router = useRouter();
  const pathname = usePathname();

  // useEffect(() => {
  //   setIsModalOpen(forceModalOpen);
  // }, [forceModalOpen]);

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    onModalClose?.();
  };

  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <HeroSection openModal={openModal} />
      </Suspense>


      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <ShopifyStoreSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <SatisfiedClientSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <TechPartnerSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <CultureSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <CtaSection openModal={openModal} />
      </Suspense>

      {isModalOpen && (
        <Suspense fallback={null}>
          <Modal open={isModalOpen} onClose={handleModalClose} />
        </Suspense>
      )}
    </>
  );
};

export default HomePage;