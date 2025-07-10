
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
  rightSideTestimonial?: string;
  rightSideTestimonialMob?: string;
}

const NewTeamtestimonial = () => {
  // Single array for all testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial-BP/shovan-profile.png",
      testimonialDesk: "/images/Testimonial-BP/shovan-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/shovan-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/shovan-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/shovan-testim-right.png"
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial-BP/suman-profile.png",
      testimonialDesk: "/images/Testimonial-BP/suman-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/suman-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/suman-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/suman-testim-right.png"
    },
    {
      id: 3,
      name: "Madhurima",
      image: "/images/Testimonial-BP/madhurima-profile.png",
      testimonialDesk: "/images/Testimonial-BP/madhurima-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/madhurima-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/madhurima-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/madhurima-testim-right.png"
    },
    {
      id: 4,
      name: "Bhaskar",
      image: "/images/Testimonial-BP/bhaskar-profile.png",
      testimonialDesk: "/images/Testimonial-BP/bhaskar-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/bhaskar-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/bhaskar-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/bhaskar-testim-right.png"
    },
    {
      id: 5,
      name: "Nayanika",
      image: "/images/Testimonial-BP/nayanika-profile.png",
      testimonialDesk: "/images/Testimonial-BP/nayanika-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/nayanika-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/nayanika-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/nayanika-testim-right.png"
    },
    {
      id: 6,
      name: "Sourav",
      image: "/images/Testimonial-BP/sourav-profile.png",
      testimonialDesk: "/images/Testimonial-BP/sourav-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/sourav-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/sourav-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/sourav-testim-right.png"
    },
    {
      id: 7,
      name: "Adity",
      image: "/images/Testimonial-BP/adity-profile.png",
      testimonialDesk: "/images/Testimonial-BP/adity-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/adity-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/adity-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/adity-testim-right.png"
    },
    {
      id: 8,
      name: "Mousumi",
      image: "/images/Testimonial-BP/mousumi-profile.png",
      testimonialDesk: "/images/Testimonial-BP/mousumi-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/mousumi-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/mousumi-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/mousumi-testim-right.png"
    },
    {
      id: 9,
      name: "Bony",
      image: "/images/Testimonial-BP/bony-profile.png",
      testimonialDesk: "/images/Testimonial-BP/bony-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/bony-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/bony-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/bony-testim-right.png"
    },
    {
      id: 10,
      name: "Sneha",
      image: "/images/Testimonial-BP/sneha-profile.png",
      testimonialDesk: "/images/Testimonial-BP/sneha-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/sneha-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/sneha-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/sneha-testim-right.png"
    }
  ];

  // Function to get 3 unique random indices
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

  // State for current testimonial index for each strip
  const [currentIndices, setCurrentIndices] = useState<number[]>(getRandomIndices());
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

    // Single interval for all strips
    const interval = setInterval(() => {
      setCurrentIndices(prev => [
        (prev[0] + 1) % testimonials.length,
        (prev[1] + 1) % testimonials.length,
        (prev[2] + 1) % testimonials.length
      ]);
      setAnimationKey(prev => prev + 1);
    }, 10000); // Same interval for all strips

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Get current testimonials for each strip
  const currentStrip1 = testimonials[currentIndices[0]];
  const currentStrip2 = testimonials[currentIndices[1]];
  const currentStrip3 = testimonials[currentIndices[2]];
  

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
            src={currentStrip2.rightSideTestimonial}
            data-aos="animated-right"
            data-aos-duration="800" data-aos-delay="200"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className={`testi-data mob-team `}
            src={currentStrip2.rightSideTestimonialMob}
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