import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
const ShopifyStoreSection = () => {
  return (
      <section className="pt-12 lg:pt-16 ">
        <div className="container mx-auto px-4  ">
          <div className="flex flex-col lg:flex-row items-center gap-12 rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center ">
            <div className="lg:w-1/2 w-full lg:pr-12 lg:pl-8">
              <h2 className="text-[35px] font-bold text-[#2a2a2a] mb-6 md:leading-[45px] leading-[24px]">
                Managing 200+ Shopify Stores
                <br/>
                 Worldwide & 50+ Shopify Plus Stores
              </h2>
              <p className="text-secondary text-[16px] leading-[26px] md:leading-relaxed mb-8">
                We have helped 100+ brands grow from scratch to $1M GMV.
                <br />
                At Bitpastel studio, we build differentiated, fast, and scalable online
                <br />
                 stores to help you provide the best customer experience!
              </p>
              <button  className="btn font-inter h-auto text-white font-[400] bg-green-btn">
                Explore Our Portfolio
              </button>
            </div>
            <div className="lg:w-1/2 w-full md:order-last order-first">
              <Image
                src="/images/shopify_client_image.jpg"
                alt="Team working together"
                width={571}
                height={398}
                className="rounded-[40px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default ShopifyStoreSection
