import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const TechPartnerSection = () => {
  return (
      <section className="pt-12 lg:pt-16 ">
        <div className="mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 ">
            <div
              className="rounded-tr-[40px] rounded-br-[40px] overflow-hidden lg:mr-0 md:mr-4 mr-4 min-h-[15rem] md:min-h-full"
            >
              <Image
                src="/images/person-client.png"
                alt="Team collaboration"
                width={711}
                height={406}
                className="w-full h-full"
              />
            </div>
            <div className="lg:ml-0 md:ml-4 ml-4 bg-primary-mint lg:p-12 md:p-12 py-10 px-6 rounded-tl-[40px] rounded-bl-[40px] content-center overflow-hidden">
              {/* <div className="lg:w-1/2 bg-primary-mint rounded-[40px] p-12"> */}
              <h2 className=" md:leading-[45px] leading-[24px] font-source font-bold text-dark md:mb-8 mb-2 ">
                <span className="font-semibold">Why we are the best </span>
                <br />
                <span className="font-black text-accent-green">Tech Partner</span>
                <span className="font-semibold"> out there</span>
              </h2>
              <div className="md:space-y-4 space-y-2">
                <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className='font-[400] font-roboto text-[rgba(33,37,41,1)]'>Perfectly managed worry-free delivery</p>
                </div>

               <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className='font-[400] font-roboto text-[rgba(33,37,41,1)]'>Fast turn-around time</p>
                </div>
                 <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className='font-[400] font-roboto text-[rgba(33,37,41,1)]'>Multi-layered Quality Assurance</p>
                </div>
                 <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className='font-[400] font-roboto text-[rgba(33,37,41,1)]'>Idea, Confidentiality & Data Protection</p>
                </div>
               <div className='flex gap-4 align-middle'>
                  <Image
                    src="/images/img_materialsymbolscheckrounded_teal_300.svg"
                    alt="Check"
                    width={24}
                    height={24}
                  />
                  <p className='font-[400] font-roboto text-[rgba(33,37,41,1)]'>30 days free maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TechPartnerSection
