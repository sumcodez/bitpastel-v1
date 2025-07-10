import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
const ShopifyStoreSection = () => {
  return (
    <section className="md:pt-[100px] pt-[60px]">
      <div className="container mx-auto px-4  ">
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 md:md:rounded-[40px] md:p-8 px-4 pt-4 pb-12 bg-primary-mint md:text-left text-center "> */}
        <div className="flex flex-col lg:flex-row items-center md:gap-0 gap-12 md:rounded-[40px] rounded-[20px] bg-primary-mint md:text-left text-center pt-[20px] px-[20px] pb-[40px] md:p-0 ">
          <div className="lg:w-1/2 w-full xl:px-[55px] md:pl-[40px] md:pr-[20px] md:pt-[30px] md:pb-[40px]">
            <h2 className=" font-source font-[600] text-title title mb-6 md:leading-[45px] leading-[normal]">
              Managing <span className='text-accent-green'>200+</span> Shopify Stores
              <br />
              Worldwide & <span className='text-accent-green'>50+</span> Shopify Plus Stores
            </h2>
            {/* <p className="text-[16px] leading-[26px] text-title md:leading-relaxed mb-8"> */}
            <p className="text-[16px] leading-[26px] text-title md:leading-relaxed">
              We have helped 100+ brands grow from scratch to $1M GMV.
              <br />
              At Bitpastel studio, we build differentiated, fast, and scalable online
              <br />
              stores to help you provide the best customer experience!
            </p>
            {/* <button className="btn font-roboto h-auto  font-[400] bg-green-btn">
              Explore Our Portfolio
            </button> */}
          </div>
          <div className="lg:w-1/2 lg:py-[11px] lg:pr-[11px] md:p-[11px]  w-full lg:order-last order-first xl:h-auto md:h-[-webkit-fill-available] h-auto">
            <Image
              src="/images/shopify_client_image.webp"
              alt="Team working together"
              width={1200}
              height={800}
              className="md:rounded-[40px] rounded-[20px] w-full xl:h-auto md:h-[100%] h-auto object-contain object-center md:object-cover md:object-[30%] xl:object-contain xl:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyStoreSection;
