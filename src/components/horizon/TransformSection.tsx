
import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
interface TransformSectionProps {
    openModal?: () => void;
}

const TransformSection: React.FC<TransformSectionProps> = ({ openModal }) => {
    return (
        <>
            <section id="Advantages" className="relative  overflow-hidden md:pb-[90px] pb-[60px]">
                <div className="relative z-10 container  mx-auto px-4 md:pt-[50px] pt-[50px] md:pb-[50px] pb-[50px]  text-left ">
                    <div
                        className="hidden md:block absolute inset-0 bg-cover rounded-[20px]  bg-[position:60%_20%] bg-no-repeat z-[-1]"
                        style={{
                            backgroundImage: `
            linear-gradient(270deg, rgba(0, 0, 0, 0) 49.05%, rgba(0, 0, 0, 0.5) 78.85%),
            url('/images/transformsectionbackground.svg')
          `,
                        }}
                    ></div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className="md:h-full content-center mx-auto md:max-w-[100%] max-w-[310px]">
                            <div className="flex justify-star items-center">
                                <img src="/images/horizon_logo.png" alt="Horizon logo" width={146} height={60} />
                            </div>
                            <h1 className="md:text-primary-white text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-start md:text-start ">
                                <span className='block'>Ready to Transform</span>
                                <span>Your Shopify Store with Horizon?</span>
                            </h1>
                            <h4 className="md:text-primary-white horizon-subtitle text-title title lg:leading-[40px] font-source leading-[normal] md:mb-5 mb-4 text-start md:text-start ">
                                <span className='block'>Let Bitpastel handle your migration, customisation</span>
                                <span>, and AI integration-so you can focus on growth.</span>
                            </h4>

                            <div className='flex justify-start items-center gap-2'>
                                <button
                                    className="btn leading-normal bg-white-btn bg-green-text md:w-auto w-[100%] mt-[15px] font-roboto btn-hover"
                                    // onClick={() => setIsModalOpen(true)}
                                    onClick={openModal}
                                >
                                  Book Free Consultation
                                </button>
                                
                            </div>
                            <div>


                            </div>
                            {/* <button
              className="btn leading-normal bg-green-btn md:w-auto w-[100%] mt-[15px] font-roboto"
              // onClick={() => setIsModalOpen(true)}
              onClick={openModal}
            >
              Let’s Work Together
            </button> */}

                        </div>
                        <div className='flex justify-center align-middle'>
                            <img src="/images/transformmain.svg" alt="transformmain" width={430} height={460} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default TransformSection;