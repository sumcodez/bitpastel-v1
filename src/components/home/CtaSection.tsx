import React from 'react'
import Button from '@/components/ui/Button'

const CtaSection = () => {
  return (
    <section className="py-16 lg:py-16 cta-section">
      <div className="container mx-auto px-4">
        <div className="relative md:rounded-2xl overflow-hidden">
          {/* Mobile Background (hidden on md and up) */}
          <div 
            className="md:hidden absolute inset-0 bg-cover bg-no-repeat bg-[position:60%_10%]"
            style={{ backgroundImage: "url('/images/descover_mobile.png')" }}
          ></div>
          
          {/* Desktop/Tablet Background (hidden on mobile) */}
          <div 
            className="hidden md:block absolute inset-0 bg-cover bg-no-repeat bg-[position:50%_10%]"
            style={{ backgroundImage: "url('/images/discover.png')" }}
          ></div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(270deg, rgba(0, 0, 0, 0) 41.14%, rgba(0, 0, 0, 0.65) 72.12%)"
            }}
          ></div>
          
          {/* Content */}
          <div className="relative px-[16px] md:py-[130px] py-[60px] lg:px-[66px]">
            <div className="lg:max-w-[520px] md:max-w-[480px] max-w-[290px]">
              <h2 className="font-bold font-source text-white mb-6 leading-tight">
                Discover the digital possibilities
                <br />
                we can help you unlock for your business!
              </h2>
              <p className="text-white mb-8 leading-relaxed max-w-[80%] md:max-w-[100%] mr-auto">
                We understand your unique way of work and provide bespoke technology solutions.
                Our team works in sync with you ensuring seamless delivery and optimum quality. We
                are eager to know about your business
              </p>
              <button className=" btn font-inter h-auto text-white font-[400] bg-green-btn">
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