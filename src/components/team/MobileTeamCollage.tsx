'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    <section className="relative">
      <div className="team-collage px-4 container mx-auto">
        <h2 className="text-title title font-[600] mb-4">Escape Rooms</h2>
        
        <div className="relative">
          <Swiper
            spaceBetween={8}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{ clickable: true }}
            className="relative"
          >
            {sampleImages.map((image, index) => (
              <SwiperSlide key={index}>
                  <img 
                    src={image} 
                    alt={`Team member ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
              </SwiperSlide>
            ))}
            
            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
          
        </div>
      </div>
    </section>
  );
}

export default MobileTeamCollage;