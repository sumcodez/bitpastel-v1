'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function MobileTeamCollage() {
  const sampleImages = [
    '/sample/Rectangle 122.png',
    '/sample/Rectangle 122.png',
    '/sample/Rectangle 122.png',
    '/sample/Rectangle 122.png',
  ];

  return (
    <section className="relative team-members team-members-mobile">
      <div className="team-collage"> 
        <div className="relative">
         <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {sampleImages.map((image, index) => (
              <SwiperSlide key={index}>
                  <img 
                    src={image} 
                    alt={`Team member ${index + 1}`} 
                    className="w-full h-full"
                  />
              </SwiperSlide>
            ))}
            
            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
          
        </div>
        <div className='px-8'>
                <h2 className="text-title title text-left font-[600] leading-[normal]">Escape Rooms</h2>
                <p className='text-left'>#Mysteryrooms #Officefuntime</p>
        </div>

      </div>
    </section>
  );
}

export default MobileTeamCollage;