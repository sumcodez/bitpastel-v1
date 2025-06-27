'use client';
import React, { useState } from 'react';
import Header from '@/components/Header';
import TestimonialsSection from '@/components/home/TestiminialSection';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/home/ServicesSection';
import ShopifyStoreSection from '@/components/home/ShopifyStoreSection';
import HeroSection from '@/components/home/HeroSection';
import CtaSection from '@/components/home/CtaSection';
import SatisfiedClientSection from '@/components/home/SatisfiedClientSection';
import CultureSection from '@/components/home/CultureSection';
import TechPartnerSection from '@/components/home/TechPartnerSection';
import FloatingFooter from '@/components/FloatingFooter';

import Home from '@/app/(pages)/home/page';
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
     <Home />
    </div>
  );
};

export default HomePage;
