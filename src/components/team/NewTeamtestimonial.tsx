'use client';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

const NewTeamtestimonial = () => {
  // Testimonials organized by position with varying counts
  const testimonialsByPosition = {
    firstPosition: [
      {
        id: 1,
        name: "Shovan",
        image: "/images/Testimonial-BP/Shovan-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Shovan-testim.png",
        testimonialMob: "/images/Testimonial-BP/Shovan-testim.png"
      },
      {
        id: 2,
        name: "Suman",
        image: "/images/Testimonial-BP/Suman-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Suman-testim.png",
        testimonialMob: "/images/Testimonial-BP/Suman-testim.png"
      },

      // Can add up to 9 or more for this position
    ],
    secondPosition: [
      {
        id: 3,
        name: "Madhurima",
        image: "/images/Testimonial-BP/Madhu-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Madhu-testim.png",
        testimonialMob: "/images/Testimonial-BP/Madhu-testim.png"
      },
      {
        id: 4,
        name: "Nayanika",
        image: "/images/Testimonial-BP/Nayanika-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Nayanika-testim.png",
        testimonialMob: "/images/Testimonial-BP/Nayanika-testim.png"
      }
      // Only one testimonial for this position
    ],
    thirdPosition: [
      {
        id: 5,
        name: "Sourav",
        image: "/images/Testimonial-BP/Sourav-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Sourav-testim.png",
        testimonialMob: "/images/Testimonial-BP/Sourav-testim.png"
      },
      {
        id: 6,
        name: "Bhaskar",
       image: "/images/Testimonial-BP/Bhaskar-ID.png",
        testimonialDesk: "/images/Testimonial-BP/Bhaskar-testim.png",
        testimonialMob: "images/Testimonial-BP/Bhaskar-testim.png"
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
        // refresh: () => void;
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
      }, 20000),
      
      secondPosition: setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          secondPosition: testimonialsByPosition.secondPosition.length > 1 
            ? (prev.secondPosition + 1) % testimonialsByPosition.secondPosition.length 
            : 0
        }));
      }, 20000),
      
      thirdPosition: setInterval(() => {
        setCurrentIndices(prev => ({
          ...prev,
          thirdPosition: (prev.thirdPosition + 1) % testimonialsByPosition.thirdPosition.length
        }));
      }, 20000)
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
    <section className="relative overflow-hidden">
      <div className="team-first-banner mx-auto">
        {/* First Position */}
        <div className="first relative">
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s image`}
            className="testi-image"
            src={getCurrentTestimonial('firstPosition').image}
            data-aos="animated-up"
            key={`first-image-${currentIndices.firstPosition}`}
          />
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s Testimonial`}
            className="testi-data desk-team"
            src={getCurrentTestimonial('firstPosition').testimonialDesk}
            data-aos="animated-left"
            key={`first-desk-${currentIndices.firstPosition}`}
          />
          <img
            alt={`${getCurrentTestimonial('firstPosition').name}'s Testimonial`}
            className="testi-data mob-team"
            src={getCurrentTestimonial('firstPosition').testimonialMob}
            data-aos="animated-left"
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
              data-aos="animated-up"
              data-aos-delay="100"
              key={`second-image-${currentIndices.secondPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('secondPosition').name}'s Testimonial`}
              className="testi-data desk-team"
              src={getCurrentTestimonial('secondPosition').testimonialDesk}
              data-aos="animated-right"
              data-aos-delay="100"
              key={`second-desk-${currentIndices.secondPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('secondPosition').name}'s Testimonial`}
              className="testi-data mob-team"
              src={getCurrentTestimonial('secondPosition').testimonialMob}
              data-aos="animated-right"
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
              data-aos="animated-up"
              data-aos-delay="200"
              key={`third-image-${currentIndices.thirdPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('thirdPosition').name}'s Testimonial`}
              className="testi-data desk-team"
              src={getCurrentTestimonial('thirdPosition').testimonialDesk}
              data-aos="animated-left"
              data-aos-delay="200"
              key={`third-desk-${currentIndices.thirdPosition}`}
            />
            <img
              alt={`${getCurrentTestimonial('thirdPosition').name}'s Testimonial`}
              className="testi-data mob-team"
              src={getCurrentTestimonial('thirdPosition').testimonialMob}
              data-aos="animated-left"
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