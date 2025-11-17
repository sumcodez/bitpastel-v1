
'use client';
import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, usePathname } from 'next/navigation';

interface HomePageProps {
  forceModalOpen?: boolean;
  onModalClose?: () => void;
}

// Dynamically import components with Suspense fallbacks
const HeroSection = dynamic(() => import('@/components/horizon/HeroSection'), {
  suspense: true
});
const ChooseHorizonSection = dynamic(() => import('@/components/horizon/ChooseHorizonSection'), {
  suspense: true
});
const AiPoweredSection = dynamic(() => import('@/components/horizon/AiPoweredSection'), {
  suspense: true
});
const MigrationSection = dynamic(() => import('@/components/horizon/MigrationSection'), {
  suspense: true
});
const WhyPartnerSection = dynamic(() => import('@/components/horizon/WhyPartnerSection'), {
  suspense: true
})
const FlexibleMigrationSection = dynamic(() => import('@/components/horizon/FlexibleMigrationSection'), {
  suspense: true
})
const FAQSection = dynamic(() => import('@/components/horizon/FAQSection'), {
  suspense: true
})
const TransformSection = dynamic(() => import('@/components/horizon/TransformSection'), {
  suspense: true
})

const Modal = dynamic(() => import('@/components/Modal'), {
  suspense: true,
  ssr: false
});

const HomePage: React.FC<HomePageProps> = ({ forceModalOpen = false, onModalClose }) => {
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(forceModalOpen);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsModalOpen(forceModalOpen);
  }, [forceModalOpen]);

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
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <ChooseHorizonSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <AiPoweredSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <MigrationSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <WhyPartnerSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <FlexibleMigrationSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <FAQSection openModal={openModal} />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
        <TransformSection openModal={openModal} />
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