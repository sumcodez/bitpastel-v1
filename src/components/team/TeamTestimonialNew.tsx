'use client';
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  testimonialDesk: string;
  testimonialMob: string;
  rightSideTestimonial?: string;
  rightSideTestimonialMob?: string;
}

const TeamTestimonialNew = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial Section/Images/Shovan.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Shovan Kar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Shovan Kar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Shovan Kar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Shovan Kar/right.png"
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial Section/Images/Suman.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Suman Naskar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Suman Naskar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Suman Naskar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Suman Naskar/right.png"
    },
    {
      id: 3,
      name: "Ibrahim",
      image: "/images/Testimonial Section/Images/Ibrahim.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Md Ibrahim/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Md Ibrahim/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Md Ibrahim/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Md Ibrahim/right.png"
    },
    {
      id: 4,
      name: "Sneha",
      image: "/images/Testimonial Section/Images/sneha.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/sneha mondal/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/sneha mondal/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/sneha mondal/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/sneha mondal/right.png"
    },
    {
      id: 5,
      name: "Sourav",
      image: "/images/Testimonial Section/Images/Sourav.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Sourav Saha/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Sourav Saha/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Sourav Saha/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Sourav Saha/right.png"
    },
    {
      id: 6,
      name: "Aditi",
      image: "/images/Testimonial Section/Images/Aditi.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Aditi sau/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Aditi sau/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Aditi sau/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Aditi sau/right.png"
    },
    {
      id: 7,
      name: "Mousumi",
      image: "/images/Testimonial Section/Images/Mousumi.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/Mousumi sengupta/right.png"
    },
    {
      id: 8,
      name: "Bony",
      image: "/images/Testimonial Section/Images/Bony.png",
      testimonialDesk: "/images/Testimonial Section/Chat boxes/bony malakar/left.png",
      testimonialMob: "/images/Testimonial Section/Chat boxes/bony malakar/left.png",
      rightSideTestimonial: "/images/Testimonial Section/Chat boxes/bony malakar/right.png",
      rightSideTestimonialMob: "/images/Testimonial Section/Chat boxes/bony malakar/right.png"
    },
  ];

  const getRandomIndices = (): number[] => {
    const indices: number[] = [];
    while (indices.length < 3) {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [aosInitialized, setAosInitialized] = useState(false);

  useEffect(() => {
    setCurrentIndices(getRandomIndices());
  }, []);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true, // Changed to false to allow multiple animations
        offset: 120,
        delay: 0
      });
      setAosInitialized(true);
    };
    
    if (!aosInitialized) {
      initAOS();
    }
  }, [aosInitialized]);

  useEffect(() => {
    if (currentIndices.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndices(getRandomIndices());
      setAnimationKey(prev => prev + 1);
    }, 30000);

    return () => clearInterval(interval);
  }, [currentIndices]);

  // Refresh AOS when testimonials change
  useEffect(() => {
    if (aosInitialized && typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.refresh();
    }
  }, [currentIndices, aosInitialized]);

  if (currentIndices.length === 0) {
    return null;
  }

  const currentStrip1 = testimonials[currentIndices[0]];
  const currentStrip2 = testimonials[currentIndices[1]];
  const currentStrip3 = testimonials[currentIndices[2]];

  return (
    <section key={animationKey} className='md:pt-0 pt-[40px]'>
      <div className="testimonial testimonial-first">
        <img
          alt={`${currentStrip1.name}'s image`}
          className="testimonial-person-image"
          src={currentStrip1.image}
            data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
        />
        <img
          alt={`${currentStrip1.name}'s Testimonial`}
          className="testimonial-data"
          src={currentStrip1.testimonialDesk}
         data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".testimonial-first .testimonial-person-image"
        />
      </div>
      <div className="testimonial testimonial-second">
        <img
          alt={`${currentStrip2.name}'s image`}
          className="testimonial-person-image"
          src={currentStrip2.image}
           data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
        />
        <img
          alt={`${currentStrip2.name}'s Testimonial`}
          className="testimonial-data"
          src={currentStrip2.rightSideTestimonial}
         data-aos="animated-right"
            data-aos-duration="600"
            data-aos-anchor=".testimonial-second .testimonial-person-image"
        />
      </div>
      <div className="testimonial testimonial-third">
        <img
          alt={`${currentStrip3.name}'s image`}
          className="testimonial-person-image"
          src={currentStrip3.image}
           data-aos="animated-up"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
        />
        <img
          alt={`${currentStrip3.name}'s Testimonial`}
          className="testimonial-data"
          src={currentStrip3.testimonialMob}
         data-aos="animated-left"
            data-aos-duration="600"
            data-aos-anchor=".testimonial-third .testimonial-person-image"
        />
      </div>
    </section>
  )
}

export default TeamTestimonialNew;