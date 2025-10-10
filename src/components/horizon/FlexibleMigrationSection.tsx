import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface FlexibleMigrationSectionProps {
    openModal?: () => void;
}
interface FlexibleMigrationSection {
    id: string;
    title: string;
    description: {
        icon: string;
        text: string;
    }[];
    icon: string;
    backgroundimage: string;
    button: string
}

const FlexibleMigrationSection: React.FC<FlexibleMigrationSectionProps> = ({ openModal }) => {
    const FlexibleMigrationSection: FlexibleMigrationSection[] = [
        {
            id: 'basicmigration',
            title: 'Basic Migration',
            description: [
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'For small to mid-sized stores.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Core theme migration.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Basic customisation (colors, fonts, branding).'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Performance check & mobile optimisation.'
                }
            ],
            icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
            backgroundimage: '/images/FlexibleMigration01.svg',
            button: 'Get Started'
        },
        {
            id: 'advancedmigration',
            title: 'Advanced Migration',
            description: [
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Includes everything in Basic.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Advanced design customisation.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'App integrations & compatibility checks.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Enhanced SEO setup.'
                }
            ],
            icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
            backgroundimage: '/images/FlexibleMigration02.svg',
            button: 'Upgrade to Advanced'
        }
        ,
        {
            id: 'premiummigration',
            title: 'Premium Migration',
            description: [
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Includes everything in Advanced.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'AI personalisation & product recommendations.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Dynamic content & automation setup.'
                },
                {
                    icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
                    text: 'Ongoing optimisation support.'
                }
            ],
            icon: '/images/img_materialsymbolscheckrounded_teal_300.svg',
            backgroundimage: '/images/FlexibleMigration03.svg',
            button: 'Go Premium'
        }
    ]
    const FlexibleMigrationData = FlexibleMigrationSection;
    return (
        <>
            <section id="services" className="md:pt-[90px] pt-[60px] ">
                <div className="container mx-auto px-4 overflow-hidden relative">
                    <h2 className=" md:font-[600] font-[700] font-source text-center text-[36px] text-[#111827] md:mb-0 mb-3">
                        Flexible Horizon Migration Packages
                    </h2>
                     <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <h4 className="md:font-[500] font-[500] font-source text-center text-[16px] leading-[20px] w-200 md:mb-6 mb-4 description">
                         
                        <span className="block text-[18px] font-[500] leading-[20px] description text-[#4B5563]">Every store has unique needs. That’s why we offer tailored migration packages to help you move to</span>
                        <span className="block text-[18px] font-[500] leading-[20px] description text-[#4B5563]">Horizon with the right balance of customization, performance, and AI-powered enhancements</span>
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 mx-auto our-services-wrapper w-[1200px] mx-auto">
                        {
                            FlexibleMigrationData.map((item, idx) => (
                                <div className='partner-card-item flexible-card-item flex flex-col justify-center items-start '>
                                    <div className='partner-card-item-bg' style={{
                                        backgroundImage: `url(${item.backgroundimage})`,
                                    }}>

                                        <h3 className="md:font-[600] font-[600] font-source text-center text-[25px] md:mb-0 mb-3 text-[#111827]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <div>

                                        <div key={idx} className="flex flex-col md:gap-2 gap-2 mb-[5px] items-start pt-[20px] ">

                                            {
                                                item.description.map((item) => (
                                                    <div className="flex md:gap-2 gap-2 mb-[5px] items-start">
                                                        <Image
                                                            src={item.icon}
                                                            alt="Check"
                                                            width={24}
                                                            height={24}
                                                            className="block w-[20px] " />
                                                        <p className="md:font-[500] font-[500] font-source text-center text-[16px] leading-[20px] w-200 md:mb-0 mb-3 description text-[#1E1E1E]">
                                                            {item.text}
                                                        </p>
                                                    </div>
                                                ))
                                            }


                                        </div>

                                    </div>
                                    <div className="flex justify-center items-center w-full mt-[20px]" >
                                        <button type='button' className="md:font-[500] font-[500] font-source text-center text-[16px] leading-[20px] w-200 md:mb-0 mb-3 description flexible-card-button btn-hover" >
                                            {item.button}
                                        </button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section >

        </>
    );
};

export default FlexibleMigrationSection;