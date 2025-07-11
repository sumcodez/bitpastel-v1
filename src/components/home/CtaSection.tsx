'use client';

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Modal from '@/components/Modal';
const CtaSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
     <>
    <section className="md:pb-[106px] md:pt-[106px] py-[70px] cta-section">
      <div className="container mx-auto px-4">
        <div className="relative md:rounded-[40px] overflow-hidden flex mx-0 flex-col md:block">
          {/* Background for mobile and desktop */}
          <div 
            className="hidden md:block w-full md:absolute md:inset-0 bg-cover bg-no-repeat md:h-auto 
                       md:bg-[position:50%_65%]"
            style={{
              backgroundImage: "url('/images/CTA.webp')"
            }}
          ></div>

          {/* Background for mobile only */}
          <div 
            className="md:hidden block w-full min-h-[310px] md:absolute md:inset-0 bg-cover bg-no-repeat md:h-auto 
                       bg-[position:73%_10%] rounded-bl-[20px] ml-4 rounded-tl-[20px]"
            style={{
              backgroundImage: "url('/images/mobile cta.webp')"
            }}
          ></div>

          {/* Gradient Overlay only for desktop */}
          {/* <div 
            className="hidden md:block absolute inset-0"
            style={{
              background: "linear-gradient(270deg, rgba(0, 0, 0, 0) 41.14%, rgba(0, 0, 0, 0.65) 72.12%)"
            }}
          ></div> */}

          {/* Content */}
          <div className="relative px-[16px] md:pt-[65px] md:pb-[75px] pt-[40px] pb-[0px] md:text-left text-center lg:px-[60px] md:bg-transparent text-title">
            <div className="lg:max-w-[520px] md:max-w-[480px] max-w-full">
              <h2 className="font-[600] font-source md:text-primary-white title text-title md:mb-4 mb-4 md:leading-[45px] md:p-0 px-[20px] leading-[normal]">
                Discover the digital 
                < span className='md:block inline md:pl-0 pl-[5px]'>possibilities we can help you </span>
                <span className='md:block inline md:pl-0 pl-[5px]'> unlock for your business!</span>
              </h2>
              <p className="md:text-primary-white text-title md:mb-8 mb-4 leading-relaxed max-w-[100%] md:max-w-[92%] mr-auto">
                We understand your unique way of work and provide bespoke technology solutions.
                Our team works in sync with you ensuring seamless delivery and optimum quality. We
                are eager to know about your business.
              </p>
              <button className="btn leading-normal bg-green-btn md:w-auto font-roboto"
              onClick={() => setIsModalOpen(true)}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
   
    </>
  )
}

export default CtaSection
