import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
const CultureSection = () => {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const handleClick = (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }; 
  const features = [
    {
      id: 1,
      title: "Reliable Engineering",
      icon: "/images/img_icroundsettings.svg",
      mobileTextColor: "text-[rgba(62,203,144,1)]",
      mobileBg: "bg-[rgba(216,245,233,1)]",
      items: [
        "Multifunctional engineering teams with deep expertise",
        "Proven track record of 100% Customer Satisfaction"
      ]
    },
    {
      id: 2,
      title: "Quality Assurance",
      icon: "/images/img_icbaselinediamond.svg",
      mobileTextColor: "text-[rgba(240,198,56,1)]",
      mobileBg: "bg-[rgba(252,244,215,1)]",
      items: [
        "Dedicated QA team for thorough testing",
        "Multilayered Quality Assurance before delivery"
      ]
    },
    {
      id: 3,
      title: "Cool & Elegant Designs",
      icon: "/images/ink-pen 2.svg",
      mobileTextColor: "text-[rgba(85,184,208,1)]",
      mobileBg: "bg-[rgba(216,247,255,1)]",
      items: [
        "Dedicated design studio with a talented team",
        "Specialists in high-quality UI/UX"
      ]
    },
    {
      id: 4,
      title: "Agile Delivery",
      icon: "/images/img_mingcutetimefill.svg",
      mobileTextColor: "text-[rgba(245,116,126,1)]",
      mobileBg: "bg-[rgba(253,227,229,1)]",
      items: [
        "Delivery on demanding timelines",
        "Fast-paced response across all timezone"
      ]
    }
  ];

  return (
    <section id='culture' className="md:pt-[90px] pt-[64px] bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="font-source font-bold text-center text-title title md:mb-8 mb-4">
          Why work with us?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] md:grid-cols-1 items-center md:gap-12 gap-10">
          <div className="xl:h-[auto] md:h-[100%]">
            <Image
              src="/images/img_rectangle_51.png"
              alt="Team collaboration"
              width={695}
              height={537}
              className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto"
            />
          </div>
          <div className="work-with-us-features grid grid-cols-1 md:grid-cols-1 xl:gap-10 md:gap-6 gap-6">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`p-0 relative 
                  `}
              >
                <div className="flex md:space-x-4 space-x-3 mb-4 flex-row gap-0 text-left justify-start ">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className=''
                  />
                  <h3 className={`font-bold font-source text-title subheading leading-[1]`}>
                    {feature.title}
                  </h3>
                </div>
                {/* <ul className='mobile-none'> */}
                <ul className='md:pl-[57px] pl-[36px] text-title'>
                  {feature.items.map((item, index) => (
                    <li key={index} className="md:leading-[1] leading-[normal] md:list-disc list-none  font-roboto text-[16px] md:mb-3 mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CultureSection