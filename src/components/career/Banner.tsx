'use client';
import React from 'react'
import Image from 'next/image'
const Banner = () => {
     const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
        setTimeout(() => {
          window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
        }, 100);
      }
  };
  return (
    <div>
          <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(286.17deg, rgba(0, 0, 0, 0) 43.84%, rgba(0, 0, 0, 0.6) 65.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                  url('/images/career.png')
                `,
              }}
            ></div>
      
            {/* Mobile background image on top */}
            <div
              className="block md:hidden w-full h-[450px]  bg-cover bg-[position:70%_10%] bg-no-repeat"
              style={{
                backgroundImage: `
                  url('/images/career.png')
                `
              }}
            ></div>
      
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:h-full pt-[20px] md:pt-[60px] text-left">
              <div className="md:h-full content-center mx-auto max-w-[100%]">
                <h1 className="md:text-white text-[#2A2A2A] md:leading-[40px] leading-[25px] md:mb-5 mb-4">
                  <span>Work</span>
                  <span className="font-bold lg:inline md:block inline pl-2">@ Bitpastel</span>
                  <br/>
                   on Awesome Projects
                </h1>
      
                <div className="md:text-white text-[#212529]">
                  {[
                    'Dynamic Teams working on new ideas',
                    'Enjoy a Happy work enviroment',
                    'Fast-track career progress',
                  ].map((text, idx) => (
                    <div key={idx} className="flex md:gap-4 gap-2 mb-[15px] items-center">
                      <Image
                        src="/images/img_materialsymbolscheckrounded.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        className="w-auto invert md:invert-0"
                      />
                      <p className="font-roboto text-[18px] font-[400]">{text}</p>
                    </div>
                  ))}
                </div>
      
                <button className="btn leading-normal bg-green-btn md:w-auto w-[100%] text-white mt-[15px]  font-inter"
                onClick={() => scrollToSection('#jobCards')}
                >
                 Explore Opportunities
                </button>
              </div>
            </div>
          </section>
        
    </div>
  )
}

export default Banner
