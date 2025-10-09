import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface ChooseHorizonSectionProps {
    openModal?: () => void;
}
interface Advantages {
    id: string;
    title: string;
    description: string;
    icon: string;
    bgColor: string;
    bgcolorCollapsed: string;
    mobileTextColor: string;
}
const ChooseHorizonSection: React.FC<ChooseHorizonSectionProps> = ({ openModal }) => {

    const Advantages: Advantages[] = [
        {
            id: 'performance',
            title: 'Performance Optimised',
            description: 'Faster load times, improved Core Web Vitals',
            icon: '/images/AdvantagesIcon/PerformanceIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        },
        {
            id: 'design',
            title: ' Modern Design Flexibility',
            description: 'Sleek layouts adaptable to any industry',
            icon: '/images/AdvantagesIcon/DesignIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
        ,
        {
            id: 'mobile',
            title: 'Mobile-First UX',
            description: 'Designed for mobile shoppers to boost conversions',
            icon: '/images/AdvantagesIcon/FastmobileIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
        ,
        {
            id: 'seo',
            title: 'SEO-Ready',
            description: 'Clean structure with built-in best practices',
            icon: '/images/AdvantagesIcon/SeoIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
        ,
        {
            id: 'customization',
            title: 'Easy Customisation',
            description: 'Change layouts without heavy coding',
            icon: '/images/AdvantagesIcon/EasyCustomizationIcon.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        },
        {
            id: 'futureproof',
            title: 'Free & Future-Proof',
            description: 'It’s free and fully aligned with Shopify’s Online Store 2.0',
            icon: '/images/AdvantagesIcon/Free & Future-Proof.svg',
            bgColor: ' ',
            bgcolorCollapsed: '#fcf4d7',
            mobileTextColor: ' text-[rgba(240,198,56,1)]',
        }
    ]
    const AdvantagesData = Advantages;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] md:pb-[90px] pb-[60px]">
                <div className="container mx-auto px-4 overflow-hidden">
                    <h2 className=" md:font-[600] font-[700] font-source text-center text-title md:mb-0 mb-3 title">
                        Why Choose Horizon for Your Store?
                    </h2>
                    <h4 className="md:font-[500] font-[500] font-source text-center text-[16px] leading-[20px] w-200 md:mb-0 mb-3 description">
                        Horizon isn’t just another Shopify theme—it’s built for speed, scalability, and conversions. Whether you’re running a startup store or scaling to enterprise level, Horizon ensures your brand looks modern, loads faster, and converts better.
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2  mx-auto our-services-wrapper ">
                        {AdvantagesData.map((service, index) => (
                            <div
                                key={service.id}
                                onClick={() => setActiveIndex(index)}
                                // className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer py-10"
                                className={`card-element relative card-element-Horizon text-center transition-shadow duration-300m md:min-w-[275px] min-w-[unset] cursor-pointer md:py-8 pt:0 pb-8 md:bg-transparent ${service.bgColor} md:rounded rounded-[10px] md:min-h-full min-h-[160px]
                        ${activeIndex === index ? 'active' : ''}
                        `}
                            >
                                <div className="">
                                    <div
                                        className={`${service.bgColor} mobile-bg-transparent flex items-center justify-center mx-auto md:mb-6 mb-4`}
                                    >
                                        <Image src={service.icon} alt={service.title} width={60} height={60} />
                                    </div>
                                    <h3
                                        className={`font-[500] md:font-bold md:text-title md:mb-2 mb-0 md:h-auto h-[60px] md:leading-[normal] md:text-[20px] text-[16px] leading-[20px] md:px-0 px-[17px]  content-center ${service.mobileTextColor}`}
                                    >
                                        {service.title}
                                    </h3>
                                    <p className="-relaxed paragraph md:max-w-[275px] max-w-[unset] w-full mx-auto text-title">
                                        {service.description}
                                    </p>
                                </div>
                                <div
                                    className={`collapsible-element text-left content-center${activeIndex === index ? 'active' : ''}`}
                                    style={{ background: service.bgcolorCollapsed }}
                                >
                                    <p className="paragraph text-title text-[16px] leading-[20px]">
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
        </>
    )
}
export default ChooseHorizonSection;
