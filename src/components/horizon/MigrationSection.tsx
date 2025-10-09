import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Modal from '@/components/Modal';
import Link from 'next/link';

interface MigrationSectionProps {
    openModal?: () => void;
}

const MigrationSection: React.FC<MigrationSectionProps> = ({ openModal }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <section id="Advantages" className="md:pt-[90px] pt-[60px] ">
                <div className="container mx-auto px-4 overflow-hidden relative">
                    <h2 className=" md:font-[600] font-[700] font-source text-center text-title md:mb-0 mb-3 title">
                        Effortless Migration Powered by Bitpastel
                    </h2>
                    <div className="flex justify-center items-center mb-[30px]">
                        <div className="ai-powered-green-gradient heading-bottom"></div>
                    </div>
                    <div className="grid grid-cols-5 md:grid-cols-5 gap-8">
                        <div className='flex justify-center items-center flex-col mb-[120px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title'>Theme Audit</h3>
                                <p className='migration-subtitle'>Review your existing setup</p>
                            </div>

                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#F7F7F7] migration-box-shadow'>
                                <Image src="/images/migration1.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>01.</span>
                        </div>
                        <div className='flex justify-center items-center flex-col-reverse mt-[10px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title'>Strategy & Planning</h3>
                                <p className='migration-subtitle'>Map features to Horizon</p>
                            </div>

                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#F7F7F7] migration-box-shadow'>
                                <Image src="/images/migration2.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline2.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>02.</span>
                        </div>
                        <div className='flex justify-center items-center flex-col mb-[120px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title'>Migration & Customisation</h3>
                                <p className='migration-subtitle'> Move design, products, and apps seamlessly</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#F7F7F7] migration-box-shadow'>
                                <Image src="/images/migration3.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>03.</span>
                        </div>
                        <div className='flex justify-center items-center flex-col-reverse mt-[10px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title'>AI Integration</h3>
                                <p className='migration-subtitle'>Add personalisation and automation</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#F7F7F7] migration-box-shadow'>
                                <Image src="/images/migration4.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline2.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>04.</span>
                        </div>
                        <div className='flex justify-center items-center flex-col mb-[120px]'>
                            <div className='flex justify-center items-center flex-col'>
                                <h3 className='migration-title'>Testing & launch</h3>
                                <p className='migration-subtitle'>Ensure smooth performance and conversions</p>
                            </div>
                            <div className='flex justify-center items-center w-[120px] h-[120px] rounded-full bg-[#F7F7F7] migration-box-shadow'>
                                <Image src="/images/migration5.svg" alt="theme-audit" width={50} height={50} />
                            </div>
                            <div>
                                <Image src="/images/migrationline1.svg" alt="theme-audit" width={8} height={40} />
                            </div>
                            <span className='migration-number'>05.</span>
                        </div>

                    </div>
                    <div className='absolute top-[54%] left-[0px]  translate-y-[-50%]'>
                        <Image src="/images/migration-border.svg" alt="theme-audit" width={2000} height={8} />
                    </div>
                </div>
            </section>
            {/* <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
        </>
    );
};

export default MigrationSection;
