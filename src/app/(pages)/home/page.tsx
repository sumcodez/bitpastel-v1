'use client';
import React, { useState } from 'react';
import TestimonialsSection from '@/components/home/TestiminialSection';
import ServicesSection from '@/components/home/ServicesSection';
import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
import HeroSection from '@/components/home/HeroSection';
import CtaSection from '@/components/home/CtaSection';
import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
import CultureSection from '@/components/home/CultureSection';
import TechPartnerSection from '@/components/home/TechPartnerSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />      
      <TechPartnerSection />
      <SatisfiedClientSection />
      <ShopifyStoreSection />
      <CultureSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
