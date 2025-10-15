import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface WhyPartnerSectionProps {
    openModal?: () => void;
}
interface PartnerSection {
    id: string;
    title: string;
    description: string;
    icon: string;
}

const WhyPartnerSection: React.FC<WhyPartnerSectionProps> = ({ openModal }) => {
    const PartnerSection: PartnerSection[] = [
        {
            id: 'shopify',
            title: 'Shopify Partner',
            description: 'Edit once, update everywhere with deep nesting and reusable blocks',
            icon: '/images/shopifypartner.png',
        },
        {
            id: 'theme',
            title: 'Theme Customisation',
            description: 'Experts in horizon theme customisation',
            icon: '/images/ThemeCustomization.png',
        }
        ,
        {
            id: 'ai',
            title: 'AI-Powered Shopify Development',
            description: 'Smarter stores, better sales',
            icon: '/images/Ai-Powered-Partner.png',
        }
    ]
    const PartnerData = PartnerSection;
    return (
        <>
            <section id="services" className=" md:pt-[60px] lg:pt-[0px]">
                <div className="container mx-auto px-4 overflow-hidden relative">
                    <h2 className=" md:font-[600] font-[700] font-source text-center md:text-[32px] lg:text-[36px] md:mb-0 mb-3 c">
                        Why Partner with Bitpastel?
                    </h2>
                     <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <h4 className="md:font-[500] font-[500] font-roboto text-center md:text-[16px] lg:text-[18px] leading-[20px] w-200 md:mb-6 mb-4 description text-[#4B5563]">
                        We don’t just migrate your store, we transform it into a high-performing Shopify experience
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 mx-auto our-services-wrapper horizon-ai-powered-wrapper horizon-our-services-wrapper">
                        {
                            PartnerData.map((item) => (
                                <div className='partner-card-item flex flex-col justify-center items-center'>
                                    <Image src={item.icon} alt={item.title} width={340} height={323} className='radius-[20px]' />
                                    <h3 className='font-[700] font-source md:text-[18px] lg:text-[20px] md:leading-[40px] lg:leading-[58px] text-[#111827]'>{item.title}</h3>
                                    <p className='font-[400] font-roboto text-[16px] leading-[20px] text-[#4B5563] letter-spacing-[0%] px-[50px] text-center'>{item.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>

        </>
    );
};

export default WhyPartnerSection;