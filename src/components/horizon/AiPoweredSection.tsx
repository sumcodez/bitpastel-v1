import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface AiPoweredSectionProps {
    openModal?: () => void;
}

const AiPoweredSection: React.FC<AiPoweredSectionProps> = ({ openModal }) => {
    return (
        <>
            <section id="Advantages" className="relative h-auto overflow-hidden">
                <div
                    className="hidden md:block absolute inset-0 bg-cover bg-[position:60%_20%] bg-no-repeat"
                    style={{
                        backgroundImage: `
            linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
            url('/images/ai-poweredbackground.png')
          `,
                    }}
                ></div>
                <div className="relative z-10 container mx-auto px-4 md:pt-[50px] pt-[50px] md:pb-[50px] pb-[50px] text-left ">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='flex justify-center items-left flex-col'>
                            <h1 className="md:text-primary-white text-title title lg:leading-[40px] font-source leading-[normal] md:mb-2 mb-3 text-center md:text-left ai-powered-title">
                                <span className="block">AI-Powered Selling </span>
                                <span >with </span>
                                <span className="bold">  Horizon + Bitpastel</span>
                            </h1>
                            <div className="ai-powered-green-gradient"></div>
                            <h4 className='ai-powered-subtitle'>
                                <span className="block font-[500] text-roboto">Horizon becomes more powerful when paired with Bitpastel’s AI-driven  </span>
                                <span className="block font-[500]">solutions. We bring advanced personalisation and automation into your</span>
                                <span className='font-[500]'>Shopify store:</span>
                            </h4>
                            <div className="md:text-primary-white text-title md:text-left text-center">
                                {[
                                    'Smart product recommendations and upsells.',
                                    'Personalised shopping journeys for every customer.',
                                    'Dynamic content adjustments based on user behaviour.',
                                    'AI-driven insights to improve conversion rates.',
                                ].map((text, idx) => (
                                    <div key={idx} className="flex md:gap-4 gap-2 mb-[5px] items-center">
                                        <Image
                                            src="/images/img_materialsymbolscheckrounded.svg"
                                            alt="Check"
                                            width={24}
                                            height={24}
                                            className="w-auto md:block hidden"
                                        />
                                        <Image
                                            src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                                            alt="Check"
                                            width={24}
                                            height={24}
                                            className="md:hidden block w-[20px]"
                                        />
                                        <p className="  md:text-[20px]  paragraph font-[400] font-roboto">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center align-middle'>
                            <img src="/images/Ai_powered_Image.svg" alt="Ai_powered_Image" width={430} height={460} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AiPoweredSection;