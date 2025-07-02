'use client';
import React from 'react';
import Image from 'next/image';

interface BenefitItem {
  text: string;
  icon: string;
  alt: string;
}

interface JobDetailsBannerProps {
  jobTitle: string;
  backgroundImage: string;
  mobileBackgroundImage?: string; // Optional if same as desktop
  benefits: BenefitItem[];
  applyButtonText?: string;
  scrollToId?: string;
  overlayGradient?: string;
  overlayColor?: string;
  buttonanimation?: string
}

const JobDetailsBanner: React.FC<JobDetailsBannerProps> = ({
  jobTitle = "Full Stack Developer",
  backgroundImage = "/images/apply-job.png",
  mobileBackgroundImage,
  buttonanimation,
  benefits = [
    {
      text: 'Dynamic Teams working on new ideas',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon'
    },
    {
      text: 'Enjoy a Happy work environment',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon'
    },
    {
      text: 'Fast-track career progress',
      icon: '/images/img_materialsymbolscheckrounded.svg',
      alt: 'Check icon'
    }
  ],
  applyButtonText = "Apply Now",
  scrollToId = "jobCards",
  // overlayGradient = "none",
  // overlayColor = "rgba(255, 255, 255, 0.2)"
}) => {
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
      <section className="relative lg:h-[470px] md:h-[400px] h-auto overflow-hidden">
        {/* Desktop Background */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `
              url(${backgroundImage})
            `,
          }}
        ></div>
  
        {/* Mobile Background */}
        <div
          className="block md:hidden w-full h-[450px] bg-cover bg-[position:70%_10%] bg-no-repeat"
          style={{
            backgroundImage: `url(${mobileBackgroundImage || backgroundImage})`
          }}
        ></div>
  
        {/* Content - Modified to align right */}
        <div className="relative z-10 container mx-auto pl-[10rem] pr-[1rem] md:h-full pt-[20px] md:pt-[60px] text-left">
          <div className="md:h-full content-center mx-auto max-w-[100%] md:ml-auto md:mr-0 md:max-w-[50%]">
            <h1 className=" text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-center md:text-left ">
              <span>{jobTitle}</span>
            </h1>
  
            <div className="md:text-primary-white text-title md:text-left text-center mt-[1.8rem]">
              {/* First Benefit */}
              <div className="flex md:gap-4 gap-0 mb-[15px] items-start">
                <Image
                  src={benefits[0].icon}
                  alt={benefits[0].alt}
                  width={24}
                  height={24}
                  className="w-auto invert md:invert-0 mt-1.5"
                />
                <p className="text-title font-roboto md:text-[20px] text-[16px] font-[400] max-w-[80%] md:max-w-[450px] whitespace-normal break-words">{benefits[0].text}</p>
              </div>
              
              {/* Second Benefit */}
              <div className="flex md:gap-4 gap-0 mb-[15px] items-center">
                <Image
                  src={benefits[1].icon}
                  alt={benefits[1].alt}
                  width={24}
                  height={24}
                  className="w-auto invert md:invert-0 mb-[0.368rem] mt-1"
                />
                <p className=" md:text-[20px] text-[16px] font-[400] text-title font-roboto">Experience: {benefits[1].text}</p>
              </div>
              
              {/* Third Benefit */}
              <div className="flex md:gap-4 gap-2 mb-[15px] items-center">
                <Image
                  src={benefits[2].icon}
                  alt={benefits[2].alt}
                  width={24}
                  height={24}
                  className="w-auto invert md:invert-0"
                />
                <p className="md:text-[20px] text-[16px] font-[400] text-title font-roboto">Location: {benefits[2].text}</p>
              </div>
            </div>
  
            <button 
              className={`${buttonanimation} btn leading-normal bg-green-btn md:w-auto w-[100%] text-primary-white mt-[25px] font-roboto`}
              onClick={() => scrollToSection(scrollToId)}
            >
              {applyButtonText}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetailsBanner;