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

const NewTeamtestimonial = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial-BP/Shovan-Profile.webp",
      testimonialDesk: "/images/Testimonial-BP/shovan-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/shovan-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/shovan-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/shovan-testim-right.png"
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial-BP/Suman-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/suman-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/suman-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/suman-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/suman-testim-right.png"
    },
    {
      id: 3,
      name: "Madhurima",
      image: "/images/Testimonial-BP/madhurima-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/madhurima-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/madhurima-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/madhurima-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/madhurima-testim-right.png"
    },
    {
      id: 4,
      name: "Bhaskar",
      image: "/images/Testimonial-BP/Bhaskar-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/bhaskar-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/bhaskar-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/bhaskar-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/bhaskar-testim-right.png"
    },
    {
      id: 5,
      name: "Nayanika",
      image: "/images/Testimonial-BP/Nayanika-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/nayanika-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/nayanika-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/nayanika-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/nayanika-testim-right.png"
    },
    {
      id: 6,
      name: "Sourav",
      image: "/images/Testimonial-BP/Sourav-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/sourav-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/sourav-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/sourav-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/sourav-testim-right.png"
    },
    {
      id: 7,
      name: "Adity",
      image: "/images/Testimonial-BP/Aditi-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/adity-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/adity-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/adity-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/adity-testim-right.png"
    },
    {
      id: 8,
      name: "Mousumi",
      image: "/images/Testimonial-BP/Mousumi-profile.webp",
      testimonialDesk: "/images/Testimonial-BP/mousumi-testim-left.png",
      testimonialMob: "/images/Testimonial-BP/mousumi-testim-left.png",
      rightSideTestimonial: "/images/Testimonial-BP/mousumi-testim-right.png",
      rightSideTestimonialMob: "/images/Testimonial-BP/mousumi-testim-right.png"
    },
    {
      id: 9,
      name: "Bony",
      image: "/images/Testimonial-BP/Bony-profile.webp",
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

  const [currentIndices, setCurrentIndices] = useState<number[] | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setCurrentIndices(getRandomIndices());
  }, []);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 400,
        easing: 'ease-in-out',
        once: true,
        offset: 120,
        delay: 0
      });
    };
    initAOS();
  }, []);

  useEffect(() => {
    if (!currentIndices) return;

    const interval = setInterval(() => {
      setCurrentIndices(getRandomIndices());
      setAnimationKey(prev => prev + 1);
    }, 9000);

    return () => clearInterval(interval);
  }, [currentIndices]);

  const currentStrip1 = currentIndices ? testimonials[currentIndices[0]] : null;
  const currentStrip2 = currentIndices ? testimonials[currentIndices[1]] : null;
  const currentStrip3 = currentIndices ? testimonials[currentIndices[2]] : null;

  if (!currentStrip1 || !currentStrip2 || !currentStrip3) {
    return null;
  }

  return (
    <section className="relative overflow-hidden" key={animationKey}>
      <div className="team-first-banner mx-auto">
        {/* First strip */}
        <div className="first relative">
          <img
            alt={`${currentStrip1.name}'s image`}
            className="testi-image"
            src={currentStrip1.image}
            data-aos="animated-up"
            data-aos-duration="400"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip1.testimonialDesk}
            data-aos="animated-left"
            data-aos-duration="400"
            data-aos-anchor=".first .testi-image"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip1.testimonialMob}
            data-aos="animated-left"
            data-aos-duration="400"
            data-aos-anchor=".first .testi-image"
          />
        </div>

        {/* Second strip */}
        <div className="second relative">
          <img
            alt={`${currentStrip2.name}'s image`}
            className="testi-image"
            src={currentStrip2.image}
            data-aos="animated-up"
            data-aos-duration="400"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip2.rightSideTestimonial}
            data-aos="animated-right"
            data-aos-duration="400"
            data-aos-anchor=".second .testi-image"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip2.rightSideTestimonialMob}
            data-aos="animated-right"
            data-aos-duration="400"
            data-aos-anchor=".second .testi-image"
          />
        </div>

        {/* Third strip */}
        <div className="third relative">
          <img
            alt={`${currentStrip3.name}'s image`}
            className="testi-image"
            src={currentStrip3.image}
            data-aos="animated-up"
            data-aos-duration="400"
            data-aos-anchor-placement="top-bottom"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className="testi-data desk-team"
            src={currentStrip3.testimonialDesk}
            data-aos="animated-left"
            data-aos-duration="400"
            data-aos-anchor=".third .testi-image"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className="testi-data mob-team"
            src={currentStrip3.testimonialMob}
            data-aos="animated-left"
            data-aos-duration="400"
            data-aos-anchor=".third .testi-image"
          />
        </div>
      </div>
    </section>
  );
};

export default NewTeamtestimonial;