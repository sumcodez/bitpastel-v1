'use client';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

const NewTeamtestimonial = () => {
  // Testimonials organized by position with varying counts
  const testimonialsByPosition = {
    firstPosition: [
      {
        id: 1,
        name: "Souvik",
        image: "/images/souvik_comic.png",
        testimonialDesk: "/images/so_text.png",
        testimonialMob: "/images/so_text_new.png"
      },
      {
        id: 2,
        name: "Ibrahim",
        image: "/images/ibrahim_comic.png",
        testimonialDesk: "/images/ib_text.png",
        testimonialMob: "/images/ib_text_new.png"
      },

      // Can add up to 9 or more for this position
    ],
    secondPosition: [
      {
        id: 3,
        name: "Jayati",
        image: "/images/jayati_comic.png",
        testimonialDesk: "/images/jayati_text_web.png",
        testimonialMob: "/images/jayati_text_mob.png"
      }
      // Only one testimonial for this position
    ],
    thirdPosition: [
      {
        id: 5,
        name: "Ibrahim",
        image: "/images/ibrahim_comic.png",
        testimonialDesk: "/images/ib_text.png",
        testimonialMob: "/images/ib_text_new.png"
      },
      {
        id: 6,
        name: "Souvik",
        image: "/images/souvik_comic.png",
        testimonialDesk: "/images/so_text.png",
        testimonialMob: "/images/so_text_new.png"
      },
      // Three testimonials for this position
    ]
  };

  // State for each position's current index
  const [currentIndices, setCurrentIndices] = useState({
    firstPosition: 0,
    secondPosition: 0,
    thirdPosition: 0
  });

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default as {
        init: (options?: any) => void;
        refresh: () => void;
      };
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();

    // Set up rotation for each position independently
    const intervals = {
      firstPosition: setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          firstPosition: (prev.firstPosition + 1) % testimonialsByPosition.firstPosition.length
        }));
      }, 6000),
      
      secondPosition: setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          secondPosition: testimonialsByPosition.secondPosition.length > 1 
            ? (prev.secondPosition + 1) % testimonialsByPosition.secondPosition.length 
            : 0
        }));
      }, 6000),
      
      thirdPosition: setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          thirdPosition: (prev.thirdPosition + 1) % testimonialsByPosition.thirdPosition.length
        }));
      }, 6000)
    };

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  // Helper function to get current testimonial for a position
  const getCurrentTestimonial = (position: keyof typeof testimonialsByPosition) => {
    return testimonialsByPosition[position][currentIndices[position]];
  };

  return (
    <section className="relative overflow-hidden md:pt-[100px] pt-[70px]">
      <div className="team-first-banner mx-auto">
        {/* First Position */}
        <div className="first relative">
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s image`}
            className="testi-image"
            src={getCurrentTestimonial('firstPosition').image}
            data-aos="fade-up"
            key={`first-image-${currentIndices.firstPosition}`}
          />
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s Testimonial`}
            className="testi-data desk-team"
            src={getCurrentTestimonial('firstPosition').testimonialDesk}
            data-aos="fade-left"
            key={`first-desk-${currentIndices.firstPosition}`}
          />
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s Testimonial`}
            className="testi-data mob-team"
            src={getCurrentTestimonial('firstPosition').testimonialMob}
            data-aos="fade-left"
            key={`first-mob-${currentIndices.firstPosition}`}
          />
        </div>

        {/* Second Position */}
        {testimonialsByPosition.secondPosition.length > 0 && (
          <div className="second relative">
            <img
              alt={`${getCurrentTestimonial('secondPosition').name}'s image`}
              className="testi-image"
              src={getCurrentTestimonial('secondPosition').image}
              data-aos="fade-up"
              data-aos-delay="100"
              key={`second-image-${currentIndices.secondPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('secondPosition').name}'s Testimonial`}
              className="testi-data desk-team"
              src={getCurrentTestimonial('secondPosition').testimonialDesk}
              data-aos="fade-right"
              data-aos-delay="100"
              key={`second-desk-${currentIndices.secondPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('secondPosition').name}'s Testimonial`}
              className="testi-data mob-team"
              src={getCurrentTestimonial('secondPosition').testimonialMob}
              data-aos="fade-right"
              data-aos-delay="100"
              key={`second-mob-${currentIndices.secondPosition}`}
            />
          </div>
        )}

        {/* Third Position */}
        {testimonialsByPosition.thirdPosition.length > 0 && (
          <div className="third relative">
            <img
              alt={`${getCurrentTestimonial('thirdPosition').name}'s image`}
              className="testi-image"
              src={getCurrentTestimonial('thirdPosition').image}
              data-aos="fade-up"
              data-aos-delay="200"
              key={`third-image-${currentIndices.thirdPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('thirdPosition').name}'s Testimonial`}
              className="testi-data desk-team"
              src={getCurrentTestimonial('thirdPosition').testimonialDesk}
              data-aos="fade-left"
              data-aos-delay="200"
              key={`third-desk-${currentIndices.thirdPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('thirdPosition').name}'s Testimonial`}
              className="testi-data mob-team"
              src={getCurrentTestimonial('thirdPosition').testimonialMob}
              data-aos="fade-left"
              data-aos-delay="200"
              key={`third-mob-${currentIndices.thirdPosition}`}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default NewTeamtestimonial;