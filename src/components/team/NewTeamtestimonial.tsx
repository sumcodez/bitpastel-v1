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
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Shovan",
      image: "/images/Testimonial-BP/Shovan-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Shovan-testim.png",
      testimonialMob: "/images/Testimonial-BP/Shovan-testim.png",
      rightImage: false
    },
    {
      id: 2,
      name: "Suman",
      image: "/images/Testimonial-BP/Suman-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Suman-testim.png",
      testimonialMob: "/images/Testimonial-BP/Suman-testim.png",
      rightImage: false
    },
    {
      id: 3,
      name: "Sourav",
      image: "/images/Testimonial-BP/Sourav-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Sourav-testim.png",
      testimonialMob: "/images/Testimonial-BP/Sourav-testim.png",
      rightImage: true
    },
    {
      id: 4,
      name: "Bhaskar",
      image: "/images/Testimonial-BP/Bhaskar-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Bhaskar-testim.png",
      testimonialMob: "/images/Testimonial-BP/Bhaskar-testim.png",
      rightImage: true
    },
    {
      id: 5,
      name: "Madhurima",
      image: "/images/Testimonial-BP/Madhu-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Madhu-testim.png",
      testimonialMob: "/images/Testimonial-BP/Madhu-testim.png",
      rightImage: false
    },
    {
      id: 6,
      name: "Nayanika",
      image: "/images/Testimonial-BP/Nayanika-ID.png",
      testimonialDesk: "/images/Testimonial-BP/Nayanika-testim.png",
      testimonialMob: "/images/Testimonial-BP/Nayanika-testim.png",
      rightImage: true
    }
  ];

  // Positions configuration
  const positions = [
    { 
      class: "first", 
      animation: "animated-up",
      testimonialIds: [1, 2, 3, 4, 5, 6] // Using IDs instead of indexes
    },
    { 
      class: "second", 
      animation: "animated-left",
      testimonialIds: [5, 6, 1, 2, 3, 4]
    },
    { 
      class: "third", 
      animation: "animated-right",
      testimonialIds: [3, 4, 1, 2, 5, 6]
    }
  ];

  // State for current testimonial IDs for each position
  const [currentTestimonialIds, setCurrentTestimonialIds] = useState<number[]>(
    positions.map(pos => pos.testimonialIds[0])
  );

  // State to track shown testimonials for each position
  const [shownTestimonials, setShownTestimonials] = useState<number[][]>(
    positions.map(pos => [pos.testimonialIds[0]])
  );

  // State to trigger animations
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false, // Allow animations to replay
        mirror: false,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS();

    // Set up rotation for each position
    const intervals = positions.map((pos, posIndex) => {
      return setInterval(() => {
        setCurrentTestimonialIds(prev => {
          const currentId = prev[posIndex];
          const availableIds = pos.testimonialIds.filter(id => 
            !shownTestimonials[posIndex].includes(id) || 
            shownTestimonials[posIndex].length === pos.testimonialIds.length
          );

          // If we've shown all, reset the shown list
          if (shownTestimonials[posIndex].length === pos.testimonialIds.length) {
            setShownTestimonials(prevShown => {
              const newShown = [...prevShown];
              newShown[posIndex] = [currentId];
              return newShown;
            });
          }

          // Get random testimonial from available ones
          const randomIndex = Math.floor(Math.random() * availableIds.length);
          const newId = availableIds[randomIndex];

          // Update shown testimonials
          setShownTestimonials(prevShown => {
            const newShown = [...prevShown];
            if (!newShown[posIndex].includes(newId)) {
              newShown[posIndex] = [...newShown[posIndex], newId];
            }
            return newShown;
          });

          // Trigger animation
          setAnimationKey(prev => prev + 1);

          // Update current ID
          const newIds = [...prev];
          newIds[posIndex] = newId;
          return newIds;
        });
      }, 10000); // Change every 5 seconds
    });

    return () => intervals.forEach(interval => clearInterval(interval));
  }, [shownTestimonials]);

  return (
    <section className="relative overflow-hidden" key={animationKey}>
      <div className="team-first-banner mx-auto">
        {positions.map((position, posIndex) => {
          const testimonialId = currentTestimonialIds[posIndex];
          const testimonial = testimonials.find(t => t.id === testimonialId);
          
          if (!testimonial) return null;

          const animationDirection = testimonial.rightImage ? "animated-left" : "animated-right";
          const imageAnimation = position.animation;

          return (
            <div key={`${posIndex}-${testimonialId}`} className={`${position.class} relative`}>
              <img
                alt={`${testimonial.name}'s image`}
                className="testi-image"
                src={testimonial.image}
                data-aos={imageAnimation}
                data-aos-duration="800"
              />
              <img
                alt={`${testimonial.name}'s Testimonial`}
                className={`testi-data desk-team ${testimonial.rightImage ? 'right' : ''}`}
                src={testimonial.testimonialDesk}
                data-aos={animationDirection}
                data-aos-duration="800"
              />
              <img
                alt={`${testimonial.name}'s Testimonial`}
                className={`testi-data mob-team ${testimonial.rightImage ? 'right' : ''}`}
                src={testimonial.testimonialMob}
                data-aos={animationDirection}
                data-aos-duration="800"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewTeamtestimonial;