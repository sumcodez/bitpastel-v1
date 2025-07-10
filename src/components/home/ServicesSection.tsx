import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react';

interface services{
 id: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  bgcolorCollapsed: string;
  mobileTextColor: string;
}


const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setisMobile] = useState(false); 


  useEffect(() => {
  const handleResize = () => {
    setisMobile(window.innerWidth <= 767);
  };
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
})



  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }; 
      const services:services[] = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Boost efficiency and automate workflows with intelligent apps',
      icon: '/images/AI icon 1.svg',
      bgColor: '  bg-primary-green-light',
      bgcolorCollapsed:'#fcf4d7',
      mobileTextColor: " text-[rgba(240,198,56,1)]",
    },
    {
      id: 'shopify',
      title: 'Shopify Plus',
      description: 'Customised Shopify Plus design, development, and app solutions',
      icon: '/images/img_hugeiconsshopify.svg',
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: "text-[rgba(62,203,144,1)]",
      
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom websites built with React, Angular, PHP, WordPress, Webflow',
      icon: '/images/img_icoutlinelaptop.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed:'#fde3e5',
       mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Crafting creative visuals for marketing and brand identity',
      icon: '/images/img_iconoirdesignnib.svg',
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed:'#fcf4d7',
      mobileTextColor: "text-[rgba(240,198,56,1)]",
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Bespoke e-commerce platforms that fuel your brand’s expansion',
      icon: '/images/img_bicartplus.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed:'#fde3e5',
      mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Flexible SaaS Applications focused on achieving your business vision',
      icon: '/images/img_lineiconscloudiot2.svg',
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed:'#d8f5e9',
      mobileTextColor: "text-[rgba(62,203,144,1)]",
    },
  ];



      const servicesMobile:services[] = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Boost efficiency and automate workflows with intelligent apps',
      icon: ' /images/img_hugeiconsshopify.svg',
      bgColor: ' bg-primary-yellow-light',
      bgcolorCollapsed:'#fcf4d7',
      mobileTextColor: " text-[rgba(240,198,56,1)]",
    },
    {
      id: 'shopify',
      title: 'Shopify Plus',
      description: 'Customised Shopify Plus design, development, and app solutions',
      icon: '/images/AI icon 1.svg',
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed: '#d8f5e9',
      mobileTextColor: "text-[rgba(62,203,144,1)]",
      
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom websites built with React, Angular, PHP, WordPress, Webflow',
      icon: '/images/img_icoutlinelaptop.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed:'#fde3e5',
       mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Crafting creative visuals for marketing and brand identity',
      icon: '/images/img_iconoirdesignnib.svg',
      bgColor: 'bg-primary-yellow-light',
      bgcolorCollapsed:'#fcf4d7',
      mobileTextColor: "text-[rgba(240,198,56,1)]",
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Flexible SaaS Applications focused on achieving your business vision',
      icon: '/images/img_lineiconscloudiot2.svg',
      bgColor: 'bg-primary-green-light',
      bgcolorCollapsed:'#d8f5e9',
      mobileTextColor: "text-[rgba(62,203,144,1)]",

    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Bespoke e-commerce platforms that fuel your brand’s expansion',
      icon: '/images/img_bicartplus.svg',
      bgColor: 'bg-primary-coral-light',
      bgcolorCollapsed:'#fde3e5',
      mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    
  ];

  
const servicesData = isMobile ? servicesMobile : services;

  return (

            <section id="services" className="md:pt-[90px] pt-[60px]">
              <div className="container mx-auto px-4 overflow-hidden">
                <h2 className=" font-[600] font-source text-center text-title md:mb-0 mb-3 title">Our Services</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 mx-auto our-services-wrapper">

                  {servicesData.map((service, index) => (
                    <div
                      key={service.id}
                      onClick={() => handleClick(index)}
                      // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
                      className={`card-element text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-8 pt:0 pb-8 md:bg-transparent ${service.bgColor} md:rounded rounded-[10px] md:min-h-full min-h-[160px]
                        ${
            activeIndex === index ? 'active' : ''
          }
                        `}
                    >
                      <div className='mobile-none'>
                      <div
                        className={`${service.bgColor} mobile-bg-transparent w-20 md:h-20 h-auto rounded-full flex items-center justify-center mx-auto md:mb-6 mb-4`}
                      >

                        <Image src={service.icon} alt={service.title} width={36} height={36}/>

                      </div>
                      <h3 className={` subheading font-bold md:text-title md:mb-1 mb-0 md:h-auto h-[60px] md:leading-[normal] leading-[23px] content-center ${service.mobileTextColor}`}>{service.title}</h3>
                      <p className="-relaxed paragraph md:max-w-[275px] max-w-[unset] w-full mx-auto text-title">
                        {service.description}
                      </p>
                      </div>
                      <div className={`collapsible-element text-left content-center${activeIndex === index ? 'active' : ''}`} style={{background:service.bgcolorCollapsed}}>
                        <p className='paragraph text-title text-[16px] leading-[20px]'>
                          {service.description}
                        </p>
                      </div>

                      {/* <div className='mobile-block'>
                           <h3 className={` font-bold ${service.mobileTextColor} mb-3 font-source leading-[20px]`}>{service.title}</h3>
                           <p className='text-[rgba(59,59,61,1)] text-[12px] leading-[20px]'>{service.description}</p>
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </section>

  )
}

export default ServicesSection
