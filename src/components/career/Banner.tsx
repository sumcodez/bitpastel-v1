import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div>
          <section className="relative lg:h-lvh md:h-[686px] h-auto overflow-hidden">
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(286.17deg, rgba(0, 0, 0, 0) 43.84%, rgba(0, 0, 0, 0.6) 65.15%),
                  linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                  url('/images/discover.png')
                `,
              }}
            ></div>
      
            {/* Mobile background image on top */}
            <div
              className="block md:hidden w-full h-[360px]  bg-cover bg-[position:80%_10%] bg-no-repeat"
              style={{
                backgroundImage: `
                  url('/images/discover.png')
                `
              }}
            ></div>
      
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:h-full pt-[40px] md:pt-[60px] md:text-left text-center">
              <div className="md:h-full content-center mx-auto  max-w-[280px] md:max-w-[100%]">
                <h1 className="md:text-white md:leading-[48px] leading-[30px] mb-6">
                  <span>Work</span>
                  <span className="font-bold lg:inline inline pl-2">@ Bitpastel</span>
                  <br/>
                   on Awesome Projects
                </h1>
      
                <div className="md:text-white">
                  {[
                    'Dynamic Teams working on new ideas',
                    'Enjoy a Happy work enviroment',
                    'Fast-track career progress',
                  ].map((text, idx) => (
                    <div key={idx} className="flex md:gap-4 gap-2 mb-1 items-center">
                      <Image
                        src="/images/img_materialsymbolscheckrounded.svg"
                        alt="Check"
                        width={24}
                        height={24}
                        className="w-auto invert md:invert-0"
                      />
                      <p className="md:leading-[44px] leading-[24px] text-[16px] font-[400]">{text}</p>
                    </div>
                  ))}
                </div>
      
                <button className="btn leading-normal bg-primary-teal md:w-auto w-[100%] text-white md:text-[rgba(30,30,30,1)] md:bg-[rgba(255,255,255,1)] mt-8 hover:text-white hover:bg-green-btn transition-all duration-200 font-inter">
                 Explore Opportunities
                </button>
              </div>
            </div>
          </section>
        
    </div>
  )
}

export default Banner
