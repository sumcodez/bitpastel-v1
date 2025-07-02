import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Modal from '@/components/Modal';
const HeroSection = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
      {/* Desktop background image */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
            url('/images/img_rectangle_48.png')
          `,
        }}
      ></div>

      {/* Mobile background image on top */}
      <div
        className="block md:hidden w-full h-[450px] bg-cover bg-[position:76%_10%] bg-no-repeat"
        style={{
          backgroundImage: `
            url('/images/img_rectangle_48.png')
          `
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] text-left ">
        <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[300px]">
          <h1 className="md:text-primary-white text-title title md:leading-[35px] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
            <span>Crafting </span>
            <span className="font-bold lg:inline md:block inline">Digital Solutions</span>
            <span className="block"> for your business</span>
          </h1>

          <div className="md:text-primary-white text-title md:text-left text-center">
            {[
              'Shopify Plus & eCom Development',
              'Web & Mobile App Development',
              'Marketing Solutions',
            ].map((text, idx) => (
              <div key={idx} className="flex md:gap-4 gap-0 mb-[15px] items-center">
                <Image
                  src="/images/img_materialsymbolscheckrounded.svg"
                  alt="Check"
                  width={24}
                  height={24}
                  className="w-auto invert md:invert-0"
                />
                <p className=" md:text-[18px] text-[16px] font-[400] font-roboto">{text}</p>
              </div>
            ))}
          </div>

          <button className="btn leading-normal bg-green-btn md:w-auto w-[100%] mt-[15px] font-roboto"
          onClick={() => setIsModalOpen(true)}
          >
            Let’s Work Together
          </button>
        </div>
      </div>
    </section>
     <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
     </>
  )
}

export default HeroSection
