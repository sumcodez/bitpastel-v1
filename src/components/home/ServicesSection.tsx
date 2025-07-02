import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }; 
      const services = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Automate processes, boost efficiency with intelligent applications',
      icon: '/images/img_vector.svg',
      bgColor: 'bg-primary-green-light',
      mobileTextColor: "text-[rgba(62,203,144,1)]",
    },
    {
      id: 'shopify',
      title: 'Shopify Plus',
      description: 'Shopify Plus design, development, migration, apps, custom solutions',
      icon: '/images/img_hugeiconsshopify.svg',
      bgColor: 'bg-primary-yellow-light',
      mobileTextColor: "text-[rgba(240,198,56,1)]",
      
    },
    {
      id: 'web',
      title: 'Web Development',
      description: 'Custom websites in React, Angular, PHP, WordPress, Webflow',
      icon: '/images/img_icoutlinelaptop.svg',
      bgColor: 'bg-primary-coral-light',
       mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    {
      id: 'design',
      title: 'Design & Creatives',
      description: 'Creative designs for branding, marketing, and visual storytelling',
      icon: '/images/img_iconoirdesignnib.svg',
      bgColor: 'bg-primary-yellow-light',
      mobileTextColor: "text-[rgba(240,198,56,1)]",
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Custom e-commerce platforms designed to grow your brand',
      icon: '/images/img_bicartplus.svg',
      bgColor: 'bg-primary-coral-light',
      mobileTextColor: "text-[rgba(245,116,126,1)]",
    },
    {
      id: 'saas',
      title: 'Custom SaaS Development',
      description: 'Flexible SaaS applications tailored to your business goals',
      icon: '/images/img_lineiconscloudiot2.svg',
      bgColor: 'bg-primary-green-light',
      mobileTextColor: "text-[rgba(62,203,144,1)]",
    },
  ];
  return (

            <section id="services" className="pt-12 lg:pt-16">
              <div className="container mx-auto px-4">
                <h2 className=" font-[600] font-source text-center text-title md:mb-0 mb-3 title">Our Services</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 mx-auto our-services-wrapper">
                  {services.map((service, index) => (
                    <div
                      key={service.id}
                      onClick={() => handleClick(index)}
                      // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
                      className={`card-element text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-8 pt:0 pb-8 md:bg-transparent ${service.bgColor} md:rounded rounded-[8px] md:min-h-full min-h-[160px]
                        ${
            activeIndex === index ? 'active' : ''
          }
                        `}
                    >
                      <div className='mobile-none'>
                      <div
                        className={`${service.bgColor} w-20 md:h-20 h-auto rounded-full flex items-center justify-center mx-auto mb-6`}
                      >
                        <Image src={service.icon} alt={service.title} width={36} height={36} />
                      </div>
                      <h3 className={` subheading font-bold md:text-title md:mb-1 mb-0 ${service.mobileTextColor}`}>{service.title}</h3>
                      <p className="-relaxed paragraph md:max-w-[275px] max-w-[unset] w-full mx-auto text-title">
                        {service.description}
                      </p>
                      </div>
                      <div className='collapsible-element text-left content-center'>
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
