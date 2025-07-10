'use client';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  testimonialDesk: string;
  testimonialMob: string;
  rightImage?: boolean;
}

const NewTeamtestimonial = () => {
  // Single array for all testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial-BP/Shovan-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Shovan-testim.png",
      testimonialMob: "/images/Testimonial-BP/Shovan-testim.png",
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial-BP/Suman-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Suman-testim.png",
      testimonialMob: "/images/Testimonial-BP/Suman-testim.png",
    },
    {
      id: 3,
      name: "Madhurima",
      image: "/images/Testimonial-BP/Madhu-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Madhu-testim.png",
      testimonialMob: "/images/Testimonial-BP/Madhu-testim.png",
    },
    {
      id: 4,
      name: "Bhaskar",
      image: "/images/Testimonial-BP/Bhaskar-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Bhaskar-testim.png",
      testimonialMob: "/images/Testimonial-BP/Bhaskar-testim.png",
    },
    {
      id: 5,
      name: "Nayanika",
      image: "/images/Testimonial-BP/Nayanika-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Nayanika-testim.png",
      testimonialMob: "/images/Testimonial-BP/Nayanika-testim.png",
    },
    {
      id: 6,
      name: "Sourav",
      image: "/images/Testimonial-BP/Sourav-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Sourav-testim.png",
      testimonialMob: "/images/Testimonial-BP/Sourav-testim.png",
    }
  ];

  // State for current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to trigger animations
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
      });
    };
    initAOS();

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
      setAnimationKey(prev => prev + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Get current testimonials for each strip by offsetting from the currentIndex
  const currentStrip1 = testimonials[currentIndex % testimonials.length];
  const currentStrip2 = testimonials[(currentIndex + 1) % testimonials.length];
  const currentStrip3 = testimonials[(currentIndex + 2) % testimonials.length];

  return (
    <section className="relative overflow-hidden" key={animationKey}>
      <div className="team-first-banner mx-auto">
        {/* First strip */}
        <div className="first relative">
          <img
            alt={`${currentStrip1.name}'s image`}
            className="testi-image other-element"
            src={currentStrip1.image}
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className={`testi-data desk-team`}
            src={currentStrip1.testimonialDesk}
            data-aos="animated-left"
            data-aos-duration="800" data-aos-delay="200"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className={`testi-data mob-team`}
            src={currentStrip1.testimonialMob}
            data-aos="animated-left"
            data-aos-duration="800" data-aos-delay="200"
          />
        </div>

        {/* Second strip */}
        <div className="second relative">
          <img
            alt={`${currentStrip2.name}'s image`}
            className="testi-image other-element2"
            src={currentStrip2.image}
            data-aos="fade-up"
            data-aos-duration="800" data-aos-anchor="other-element"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className={`testi-data desk-team `}
            src={currentStrip2.testimonialDesk}
            data-aos="animated-right"
            data-aos-duration="800" data-aos-delay="200"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className={`testi-data mob-team `}
            src={currentStrip2.testimonialMob}
            data-aos="animated-right"
           data-aos-duration="800" data-aos-delay="200"
          />
        </div>

        {/* Third strip */}
        <div className="third relative">
          <img
            alt={`${currentStrip3.name}'s image`}
            className="testi-image"
            src={currentStrip3.image}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-anchor="other-element2"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className={`testi-data desk-team `}
            src={currentStrip3.testimonialDesk}
            data-aos="animated-left"
             data-aos-duration="800" 
            data-aos-delay="200"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className={`testi-data mob-team`}
            src={currentStrip3.testimonialMob}
            data-aos="animated-left"
             data-aos-duration="800" 
            data-aos-delay="200"
          />
        </div>
      </div>
    </section>
  );
};

export default NewTeamtestimonial;