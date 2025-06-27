import React from 'react'
import Button from '@/components/ui/Button'

const CtaSection = () => {
  return (
    <section className="py-16 lg:py-16 cta-section">
      <div className="container mx-auto px-4">
        <div className="relative md:rounded-2xl overflow-hidden flex flex-col md:block">
          {/* Background for mobile and desktop */}
          <div 
            className="hidden md:block w-full md:absolute md:inset-0 bg-cover bg-no-repeat md:h-auto 
                       md:bg-[position:50%_10%]"
            style={{
              backgroundImage: "url('/images/descover_new.png')"
            }}
          ></div>

          {/* Background for mobile only */}
          <div 
            className="md:hidden block w-full min-h-[250px] md:absolute md:inset-0 bg-cover ml-4  bg-no-repeat md:h-auto 
                       bg-[position:50%_10%] rounded-tl-[20px] rounded-bl-[20px]"
            style={{
              backgroundImage: "url('/images/CTA.png')"
            }}
          ></div>

          {/* Gradient Overlay only for desktop */}
          <div 
            className="hidden md:block absolute inset-0"
            style={{
              background: "linear-gradient(270deg, rgba(0, 0, 0, 0) 41.14%, rgba(0, 0, 0, 0.65) 72.12%)"
            }}
          ></div>

          {/* Content */}
          <div className="relative px-[16px] md:py-[130px] py-[40px] lg:px-[66px] md:bg-transparent text-[rgba(42,42,42,1)]">
            <div className="lg:max-w-[520px] md:max-w-[480px] max-w-full">
              <h2 className="font-bold font-source md:text-white mb-6 leading-tight">
                Discover the digital possibilities
                <br />
                we can help you unlock for your business!
              </h2>
              <p className="md:text-white mb-8 leading-relaxed max-w-[100%] md:max-w-[100%] mr-auto">
                We understand your unique way of work and provide bespoke technology solutions.
                Our team works in sync with you ensuring seamless delivery and optimum quality. We
                are eager to know about your business
              </p>
              <button className="btn leading-normal bg-green-btn md:w-auto w-[100%] text-white md:text-[rgba(30,30,30,1)] md:bg-[rgba(255,255,255,1)] mt-8 hover:text-white hover:bg-green-btn transition-all duration-200 font-inter">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
