'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  testimonialDesk: string;
  testimonialMob: string;
}

const NewTeamtestimonial = () => {
  const testimonials: Testimonial[] = [
    { id: 1, name: "Shovan", image: "/images/Testimonial-BP/Shovan-ID.png", testimonialDesk: "/images/Testimonial-BP/Shovan-testim.png", testimonialMob: "/images/Testimonial-BP/Shovan-testim.png" },
    { id: 2, name: "Suman", image: "/images/Testimonial-BP/Suman-ID.png", testimonialDesk: "/images/Testimonial-BP/Suman-testim.png", testimonialMob: "/images/Testimonial-BP/Suman-testim.png" },
    { id: 3, name: "Madhurima", image: "/images/Testimonial-BP/Madhu-ID.png", testimonialDesk: "/images/Testimonial-BP/Madhu-testim.png", testimonialMob: "/images/Testimonial-BP/Madhu-testim.png" },
    { id: 4, name: "Bhaskar", image: "/images/Testimonial-BP/Bhaskar-ID.png", testimonialDesk: "/images/Testimonial-BP/Bhaskar-testim.png", testimonialMob: "/images/Testimonial-BP/Bhaskar-testim.png" },
    { id: 5, name: "Nayanika", image: "/images/Testimonial-BP/Nayanika-ID.png", testimonialDesk: "/images/Testimonial-BP/Nayanika-testim.png", testimonialMob: "/images/Testimonial-BP/Nayanika-testim.png" },
    { id: 6, name: "Sourav", image: "/images/Testimonial-BP/Sourav-ID.png", testimonialDesk: "/images/Testimonial-BP/Sourav-testim.png", testimonialMob: "/images/Testimonial-BP/Sourav-testim.png" },
    { id: 7, name: "Ayan", image: "/images/Testimonial-BP/Ayan-ID.png", testimonialDesk: "/images/Testimonial-BP/Ayan-testim.png", testimonialMob: "/images/Testimonial-BP/Ayan-testim.png" },
    { id: 8, name: "Riya", image: "/images/Testimonial-BP/Riya-ID.png", testimonialDesk: "/images/Testimonial-BP/Riya-testim.png", testimonialMob: "/images/Testimonial-BP/Riya-testim.png" },
    { id: 9, name: "Priya", image: "/images/Testimonial-BP/Priya-ID.png", testimonialDesk: "/images/Testimonial-BP/Priya-testim.png", testimonialMob: "/images/Testimonial-BP/Priya-testim.png" },
  ];




  // State for current testimonial indices for each strip
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [animationKey, setAnimationKey] = useState(0);
  const [usedCombinations, setUsedCombinations] = useState<number[][]>([]);

  // Generate non-repeating random combinations
  const getRandomCombination = (): number[] => {
    const availableIndices = testimonials
      .map((_, index) => index)
      .filter(index => !currentIndices.includes(index));

    // If we've used all testimonials, reset
    if (availableIndices.length < 3) {
      return [
        Math.floor(Math.random() * testimonials.length),
        Math.floor(Math.random() * testimonials.length),
        Math.floor(Math.random() * testimonials.length)
      ].filter((v, i, a) => a.indexOf(v) === i); // Ensure unique indices
    }

    // Select 3 unique random indices
    const shuffled = [...availableIndices].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Check if combination has been used recently
  const isCombinationUsed = (combo: number[]): boolean => {
    return usedCombinations.some(used => 
      used.every(id => combo.includes(id))
    );
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false
    });

    // Initial setup
    const initialCombination = getRandomCombination();
    setCurrentIndices(initialCombination);
    setUsedCombinations([initialCombination]);

    const interval = setInterval(() => {
      let newCombination;
      let attempts = 0;
      
      // Try to find a new combination that hasn't been used recently
      do {
        newCombination = getRandomCombination();
        attempts++;
        if (attempts > 10) break; // Prevent infinite loops
      } while (isCombinationUsed(newCombination) && attempts <= 10);

      setCurrentIndices(newCombination);
      setUsedCombinations(prev => [...prev.slice(-5), newCombination]); // Keep last 5 combinations
      setAnimationKey(prev => prev + 1);
      AOS.refresh();
    }, 10000); // Rotate every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Get current testimonials for each strip
  const currentStrip1 = testimonials[currentIndices[0]] || testimonials[0];
  const currentStrip2 = testimonials[currentIndices[1]] || testimonials[1];
  const currentStrip3 = testimonials[currentIndices[2]] || testimonials[2];

  return (
    <section className="relative overflow-hidden" key={animationKey}>
      <div className="team-first-banner mx-auto">
        {/* First strip */}
        <div className="first relative other-element">
          <img
            alt={`${currentStrip1.name}'s image`}
            className="testi-image"
            src={currentStrip1.image}
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className={`testi-data desk-team`}
            src={currentStrip1.testimonialDesk}
            data-aos="fade-left"
            data-aos-duration="800" 
            data-aos-delay="200"
          />
          <img
            alt={`${currentStrip1.name}'s Testimonial`}
            className={`testi-data mob-team`}
            src={currentStrip1.testimonialMob}
            data-aos="fade-left"
            data-aos-duration="800" 
            data-aos-delay="200"
          />
        </div>

        {/* Second strip */}
        <div className="second other-element2 relative">
          <img
            alt={`${currentStrip2.name}'s image`}
            className="testi-image"
            src={currentStrip2.image}
            data-aos="fade-up"
            data-aos-duration="800" 
            data-aos-anchor="other-element"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className={`testi-data desk-team`}
            src={currentStrip2.testimonialDesk}
            data-aos="fade-right"
            data-aos-duration="800" 
            data-aos-delay="200"
          />
          <img
            alt={`${currentStrip2.name}'s Testimonial`}
            className={`testi-data mob-team`}
            src={currentStrip2.testimonialMob}
            data-aos="fade-right"
            data-aos-duration="800" 
            data-aos-delay="200"
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
            className={`testi-data desk-team`}
            src={currentStrip3.testimonialDesk}
            data-aos="fade-left"
            data-aos-duration="800" 
            data-aos-delay="200"
          />
          <img
            alt={`${currentStrip3.name}'s Testimonial`}
            className={`testi-data mob-team`}
            src={currentStrip3.testimonialMob}
            data-aos="fade-left"
            data-aos-duration="800" 
            data-aos-delay="200"
          />
        </div>
      </div>
    </section>
  );
};

export default NewTeamtestimonial;