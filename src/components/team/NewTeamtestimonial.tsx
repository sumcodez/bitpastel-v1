'use client';
import React, { useEffect, useState, useRef } from 'react';
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
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Shovan',
      image: '/images/Testimonial-BP/shovan-profile.png',
      testimonialDesk: '/images/Testimonial-BP/shovan-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/shovan-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/shovan-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/shovan-testim-right.png',
    },
    {
      id: 2,
      name: 'Suman',
      image: '/images/Testimonial-BP/suman-profile.png',
      testimonialDesk: '/images/Testimonial-BP/suman-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/suman-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/suman-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/suman-testim-right.png',
    },
    {
      id: 3,
      name: 'Madhurima',
      image: '/images/Testimonial-BP/madhurima-profile.png',
      testimonialDesk: '/images/Testimonial-BP/madhurima-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/madhurima-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/madhurima-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/madhurima-testim-right.png',
    },
    {
      id: 4,
      name: 'Bhaskar',
      image: '/images/Testimonial-BP/bhaskar-profile.png',
      testimonialDesk: '/images/Testimonial-BP/bhaskar-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/bhaskar-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/bhaskar-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/bhaskar-testim-right.png',
    },
    {
      id: 5,
      name: 'Nayanika',
      image: '/images/Testimonial-BP/nayanika-profile.png',
      testimonialDesk: '/images/Testimonial-BP/nayanika-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/nayanika-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/nayanika-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/nayanika-testim-right.png',
    },
    {
      id: 6,
      name: 'Sourav',
      image: '/images/Testimonial-BP/sourav-profile.png',
      testimonialDesk: '/images/Testimonial-BP/sourav-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/sourav-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/sourav-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/sourav-testim-right.png',
    },
    {
      id: 7,
      name: 'Adity',
      image: '/images/Testimonial-BP/adity-profile.png',
      testimonialDesk: '/images/Testimonial-BP/adity-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/adity-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/adity-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/adity-testim-right.png',
    },
    {
      id: 8,
      name: 'Mousumi',
      image: '/images/Testimonial-BP/mousumi-profile.png',
      testimonialDesk: '/images/Testimonial-BP/mousumi-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/mousumi-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/mousumi-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/mousumi-testim-right.png',
    },
    {
      id: 9,
      name: 'Bony',
      image: '/images/Testimonial-BP/bony-profile.png',
      testimonialDesk: '/images/Testimonial-BP/bony-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/bony-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/bony-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/bony-testim-right.png',
    },
    {
      id: 10,
      name: 'Sneha',
      image: '/images/Testimonial-BP/sneha-profile.png',
      testimonialDesk: '/images/Testimonial-BP/sneha-testim-left.png',
      testimonialMob: '/images/Testimonial-BP/sneha-testim-left.png',
      rightSideTestimonial: '/images/Testimonial-BP/sneha-testim-right.png',
      rightSideTestimonialMob: '/images/Testimonial-BP/sneha-testim-right.png',
    },
  ];

  const generateCombinations = (array: Testimonial[], k: number) => {
    const result: Testimonial[][] = [];
    const backtrack = (start: number, current: Testimonial[]) => {
      if (current.length === k) {
        result.push([...current]);
        return;
      }
      for (let i = start; i < array.length; i++) {
        current.push(array[i]);
        backtrack(i + 1, current);
        current.pop();
      }
    };
    backtrack(0, []);
    return result;
  };

  const shuffle = <T,>(array: T[]): T[] => {
    return [...array].sort(() => 0.5 - Math.random());
  };

  const [currentSet, setCurrentSet] = useState<Testimonial[]>([]);
  const previousSetRef = useRef<number[]>([]);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    };
    initAOS();

    const updateSet = () => {
      const combinations = generateCombinations(testimonials, 3);
      const shuffled = shuffle(combinations);
      const previousIds = previousSetRef.current;

      const nextSet = shuffled.find((set) => !set.some((t) => previousIds.includes(t.id)));

      if (nextSet) {
        setCurrentSet(nextSet);
        previousSetRef.current = nextSet.map((t) => t.id);
      }
    };

    updateSet();
    const interval = setInterval(() => {
      updateSet();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (currentSet.length !== 3) return null;

  const [strip1, strip2, strip3] = currentSet;

  return (
    <section className="relative overflow-hidden">
      <div className="team-first-banner mx-auto">
        {/* Strip 1 */}
        <div className="first relative">
          <img
            alt={strip1.name}
            className="testi-image other-element"
            src={strip1.image}
            data-aos="fade-up"
          />
          <img
            alt={strip1.name}
            className="testi-data desk-team"
            src={strip1.testimonialDesk}
            data-aos="animated-left"
            data-aos-delay="200"
          />
          <img
            alt={strip1.name}
            className="testi-data mob-team"
            src={strip1.testimonialMob}
            data-aos="animated-left"
            data-aos-delay="200"
          />
        </div>

        {/* Strip 2 */}
        <div className="second relative">
          <img
            alt={strip2.name}
            className="testi-image other-element2"
            src={strip2.image}
            data-aos="fade-up"
            data-aos-anchor="other-element"
          />
          <img
            alt={strip2.name}
            className="testi-data desk-team"
            src={strip2.rightSideTestimonial || ''}
            data-aos="animated-right"
            data-aos-delay="200"
          />
          <img
            alt={strip2.name}
            className="testi-data mob-team"
            src={strip2.rightSideTestimonialMob || ''}
            data-aos="animated-right"
            data-aos-delay="200"
          />
        </div>

        {/* Strip 3 */}
        <div className="third relative">
          <img
            alt={strip3.name}
            className="testi-image"
            src={strip3.image}
            data-aos="fade-up"
            data-aos-anchor="other-element2"
          />
          <img
            alt={strip3.name}
            className="testi-data desk-team"
            src={strip3.testimonialDesk}
            data-aos="animated-left"
            data-aos-delay="200"
          />
          <img
            alt={strip3.name}
            className="testi-data mob-team"
            src={strip3.testimonialMob}
            data-aos="animated-left"
            data-aos-delay="200"
          />
        </div>
      </div>
    </section>
  );
};

export default NewTeamtestimonial;
