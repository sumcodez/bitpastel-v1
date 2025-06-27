


'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  message: string;
  image: string;
  bgColor: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}
const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Reece Wabara',
    title: 'CEO, Maniére De Voir, UK | Forbes 30 Under 30',
    message: 'Ayan and his team are superstars, they interpret suggestions well and propose even better and more efficient alternatives, the team\'s work is to a very high standard and turn around time is much faster than a UK equivalent',
    image: '/images/img_image_56x56.png',
    bgColor: 'bg-primary-blue'
  },
  {
    id: '2',
    name: 'Honey Patel',
    title: 'Business Strategy & Operations Leader, USA',
    message: 'Bitpastel has been a delight to work with! They take the time to truly understand the requirements and provide expert opinion on design, development, and implementation. The team is also very detail oriented and communicate extremely well. Everything is timely, effective, and well done. I keep going back to them to build new things because there is no one else I would rather work with.',
    image: '/images/img_image_1.png',
    bgColor: 'bg-primary-coral'
  },
  {
    id: '3',
    name: 'David Jone',
    title: 'Marketing Manager, Jax Brands, Canada',
    message: 'Ayan and the Bitpastel team are a reliable and dedicated group. Whenever I reach out to the team about back-end or front-end tasks that need to be completed, they\'re not only quick to respond but I can rely on their turnaround time. Since partnering with them, my mind has been at ease knowing that they will get the job done so that I can focus on other tasks. It has been a pleasure working with them!',
    image: '/images/img_image_2.png',
    bgColor: 'bg-primary-yellow'
  },
  {
    id: '4',
    name: 'Cameron Sangster',
    title: 'Director, RareBoots4U, UK',
    message: 'As soon as I came into contact with Ayan and his Bitpastel team, I felt in safe hands. What impressed me most is Ayan\'s level of communication. In the past I have experienced slow turnaround times and lack of communication but with Ayan and his team I genuinely felt like I was their only client and the attention to detail is impeccable. I highly recommend them',
    image: '/images/img_image_56x53.png',
    bgColor: 'bg-primary-yellow'
  },
  {
    id: '5',
    name: 'Paul R. Turner',
    title: 'International Director & Co-founder, Food for Life Global, USA',
    message: 'Ayan and his team were excellent to work with. He was a great communicator, took the time to understand my needs and always delivered as promised. I will hire him again in the future.',
    image: '/images/img_image_51x56.png',
    bgColor: 'bg-primary-green'
  },
  {
    id: '6',
    name: 'Josiah M. Young, Esq.',
    title: 'Managing Shareholder, The Law Office of Josiah Young, USA',
    message: 'Ayan and his team were very helpful, responsive and knowledgeable. This contract has been completed but I will continue to work with Ayan. I would recommend his services to anyone looking to build a website or improve their online presence. The design was very clean. Ayan was also a pleasure to work with and made the process of completing this task much easier.',
    image: '/images/img_image_3.png',
    bgColor: 'bg-primary-blue'
  },
  {
    id: '7',
    name: 'Cameron Sangster',
    title: 'Director, RareBoots4U, UK',
    message: 'As soon as I came into contact with Ayan and his Bitpastel team, I felt in safe hands. What impressed me most is Ayan\'s level of communication. In the past I have experienced slow turnaround times and lack of communication but with Ayan and his team I genuinely felt like I was their only client and the attention to detail is impeccable. I highly recommend them',
    image: '/images/img_image_56x53.png',
    bgColor: 'bg-primary-yellow'
  },
  {
    id: '8',
    name: 'Paul R. Turner',
    title: 'International Director & Co-founder, Food for Life Global, USA',
    message: 'Ayan and his team were excellent to work with. He was a great communicator, took the time to understand my needs and always delivered as promised. I will hire him again in the future.',
    image: '/images/img_image_51x56.png',
    bgColor: 'bg-primary-green'
  },
  {
    id: '9',
    name: 'Josiah M. Young, Esq.',
    title: 'Managing Shareholder, The Law Office of Josiah Young, USA',
    message: 'Ayan and his team were very helpful, responsive and knowledgeable. This contract has been completed but I will continue to work with Ayan. I would recommend his services to anyone looking to build a website or improve their online presence. The design was very clean. Ayan was also a pleasure to work with and made the process of completing this task much easier.',
    image: '/images/img_image_3.png',
    bgColor: 'bg-primary-blue'
  }
];

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [initialShowCount, setInitialShowCount] = useState(6);
  const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
  const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const count = isMobile ? 3 : 6;
      setInitialShowCount(count);
      setVisibleTestimonials(testimonials.slice(0, count));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials]);

  const loadMoreTestimonials = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Show all testimonials with animation
    const newItems = testimonials.slice(visibleTestimonials.length);
    
    newItems.forEach((testimonial, index) => {
      setTimeout(() => {
        setVisibleTestimonials(prev => [...prev, testimonial]);
        
        setAnimatingItems(prev => {
          const newSet = new Set(prev);
          newSet.add(testimonial.id);
          return newSet;
        });

        setTimeout(() => {
          setAnimatingItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(testimonial.id);
            return newSet;
          });
          if (index === newItems.length - 1) {
            setIsAnimating(false);
            setShowAll(true);
          }
        }, 300);
      }, index * 150);
    });
  };

  const hasMoreTestimonials = !showAll && testimonials.length > initialShowCount;

  return (
    <section id="stories" className="pt-12 lg:pt-16">
      <div className="container mx-auto px-4">
        <h2 className="font-source font-bold text-center text-[rgba(30,30,30,1)] md:mb-16 mb-8">Stories</h2>

        <div className="columns-1 lg:columns-2 gap-8 space-y-8 mx-auto ">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${testimonial.bgColor} rounded-2xl p-8 content-end text-[rgba(33,37,41,1)] transform transition-all min-h-[277px] duration-300 break-inside-avoid mb-8 ${
                animatingItems.has(testimonial.id) ? 'animate-fade-in-up' : ''
              }`}
            >
              <div className="relative mb-6">
                <p className="text-lg leading-relaxed md:pl-4 line-clamp-4">
                  "{testimonial.message}"
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-auto pt-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className=""
                />
                <div>
                  <h4 className="font-[600] font-source">{testimonial.name}</h4>
                  <p className="opacity-90 italic">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMoreTestimonials && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMoreTestimonials}
              disabled={isAnimating}
              className={`group flex btn items-center space-x-3 transition-all duration-300 focus:outline-none font-inter h-auto text-white font-[400] bg-green-btn ${
                isAnimating ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <span>Explore more stories</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;