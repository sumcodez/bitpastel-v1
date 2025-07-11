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
    message:
      "Ayan and his team are superstars, they interpret suggestions well and propose even better and more efficient alternatives, the team's work is to a very high standard and turn around time is much faster than a UK equivalent",
    image: '/images/Reece_W.jpg',
    bgColor: 'bg-[#9FDDEE]',
  },
  {
    id: '2',
    name: 'Cameron Sangster',
    title: 'Director, RareBoots4U, UK',
    message:
      'As soon as I came into contact with Ayan and his Bitpastel team, I felt in safe hands. What impressed me most is Ayan’s level of communication. In the past I have experienced slow turnaround times and lack of communication but with Ayan and his team I genuinely felt like I was their only client and the attention to detail is impeccable. I highly recommend them',
    image: '/images/cameron_01.jpg',
    bgColor: 'bg-[#FFEA97]',
  },
  {
    id: '3',
    name: 'Honey Patel',
    title: 'Business Strategy & Operations Leader, USA',
    message:
      'Bitpastel has been a delight to work with! They take the time to truly understand the requirements and provide expert opinion on design, development, and implementation. The team is also very detail oriented and communicate extremely well. Everything is timely, effective, and well done. I keep going back to them to build new things because there is no one else I would rather work with.',
    image: '/images/Honey_P.jpg',
    bgColor: 'bg-[#FFA1AA]',
  },
  {
    id: '4',
    name: 'Paul R. Turner',
    title: 'International Director & Co-founder, Food for Life Global, USA',
    message:
      'Ayan and his team were excellent to work with. He was a great communicator, took the time to understand my needs and always delivered as promised. I will hire him again in the future.',
    image: '/images/Paul_R_T.jpg',
    bgColor: 'bg-[#82EAB3]',
  },
  {
    id: '5',
    name: 'David Jones',
    title: 'Marketing Manager, Jax Brands, Canada',
    message:
      "Ayan and the Bitpastel team are a reliable and dedicated group. Whenever I reach out to the team about back-end or front-end tasks that need to be completed, they're not only quick to respond but I can rely on their turnaround time. Since partnering with them, my mind has been at ease knowing that they will get the job done so that I can focus on other tasks. It has been a pleasure working with them!",
    image: '/images/david.jpg',
    bgColor: 'bg-[#9FDDEE]',
  },
  {
    id: '6',
    name: 'Josiah M. Young, Esq.',
    title: 'Managing Shareholder, The Law Office of Josiah Young, USA',
    message:
      'Ayan and his team were very helpful, responsive and knowledgeable. This contract has been completed but I will continue to work with Ayan. I would recommend his services to anyone looking to build a website or improve their online presence. The design was very clean. Ayan was also a pleasure to work with and made the process of completing this task much easier.',
    image: '/images/Josiah_Y.jpg',
    bgColor: 'bg-[#FFEA97]',
  },
  {
    id: '7',
    name: 'Doug Anderson',
    title: 'President, Blue Fence Real Estate, USA',
    message:
      'The entire team did a great job and will definitely hire again for future projects. They delivered exactly what they promised on time and on budget. The attention to detail was perfect as was the constant communication. We are happy we finally found a great team to work with',
    image: '/images/Doug_A.jpg',
    bgColor: 'bg-[#FFA1AA]',
  },
  {
    id: '8',
    name: 'Anthony Deketelaere',
    title: 'Founder, YesMLS, Belgium',
    message:
      "The people at Bitpastel are professionals, the SRS (Software Requirement Specification) that the team is working on is the exact translation of my insights and idea's about the app. Bitpastel gives me the guarantee that the app will be all I wanted it to be, and more... I highly recommend them for your next project",
    image: '/images/Anthony.jpg',
    bgColor: 'bg-[#82EAB3]',
  },
  {
    id: '9',
    name: 'Brandon Philbrick',
    title: 'Brand Manager & Designer, USA',
    message:
      'Bitpastel has been doing custom HubSpot COS development for us and our expectations have been consistently exceeded. There is always a great turnaround on project requests and they are available for talking through upcoming work and ready to take on new challenges.',
    image: '/images/Brandon_P.jpg',
    bgColor: 'bg-[#FFEA97]',
  },
  {
    id: '10',
    name: 'Dan Miller',
    title: 'CEO, Young Professionals, UK',
    message:
      "We have worked with Bitpastel now for over 2 years and we've been really happy with the level of service and development work we have had done. They now manage all of our technology needs on an ongoing basis and nothing ever seems to be an issue with our requirements. Work is completed on time and to the highest quality that meets our expectations.",
    image: '/images/Dan_M.jpg',
    bgColor: 'bg-[#9FDDEE]',
  },
  {
    id: '11',
    name: 'Charles Fried',
    title: 'CTO & Co-Founder, BlockSmith Capital Ltd, UK',
    message:
      'Ayan is a sharp individual and showed a very good ability to quickly understand our brief and get his team to deliver according to our specification. I recommend',
    image: '/images/Charles_F.jpg',
    bgColor: 'bg-[#FFA1AA]',
  },
  {
    id: '12',
    name: 'Alf Bergin',
    title: 'CEO, Svart på Kvitt SA, Norway',
    message:
      'Bitpastel is an ambitious design & development team. They take good care of the client and have a professional attitude. What I really appreciate is that work is done quickly and without delays which is very important for a long-term business relationship. I really like their way to communicate',
    image: '/images/Alf_B.jpeg',
    bgColor: 'bg-[#82EAB3]',
  },
];

// const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
//   testimonials = defaultTestimonials,
// }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [initialShowCount, setInitialShowCount] = useState(6);
//   const [visibleTestimonials, setVisibleTestimonials] = useState<Testimonial[]>([]);
//   const [animatingItems, setAnimatingItems] = useState<Set<string>>(new Set());
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobile = window.innerWidth < 768;
//       const count = isMobile ? 3 : 6;
//       setInitialShowCount(count);
//       setVisibleTestimonials(testimonials.slice(0, count));
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [testimonials]);

//   const loadMoreTestimonials = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);

//     // Show all testimonials with animation
//     const newItems = testimonials.slice(visibleTestimonials.length);

//     newItems.forEach((testimonial, index) => {
//       setTimeout(() => {
//         setVisibleTestimonials(prev => [...prev, testimonial]);

//         setAnimatingItems(prev => {
//           const newSet = new Set(prev);
//           newSet.add(testimonial.id);
//           return newSet;
//         });

//         setTimeout(() => {
//           setAnimatingItems(prev => {
//             const newSet = new Set(prev);
//             newSet.delete(testimonial.id);
//             return newSet;
//           });
//           if (index === newItems.length - 1) {
//             setIsAnimating(false);
//             setShowAll(true);
//           }
//         }, 300);
//       }, index * 150);
//     });
//   };

//   const hasMoreTestimonials = !showAll && testimonials.length > initialShowCount;

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = defaultTestimonials,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const initialTestimonials = testimonials.slice(0, 6);
  const extraTestimonials = testimonials.slice(6);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderTestimonialCard = (testimonial: Testimonial) => (
    <div
      key={testimonial.id}
      className={`${testimonial.bgColor} break-inside-avoid overflow-hidden md:rounded-[20px] ${
        !isMobile ? 'testimonial-card-parent' : ''
      } rounded-[10px] md:px-12 px-6 py-6 text-[rgba(33,37,41,1)] flex flex-col`}
    >
      <div className="flex-grow">
        <div className={`${!isMobile ? 'testimonial-card-content min-h-[70px]' : ''}`}>
          <p
            className={`lg:line-clamp-3 line-clamp-none ${
              testimonial.message.trim().length > 290 ? 'collabsile-lg' : ''
            } ${testimonial.message.trim().length > 189 ? 'collabsile-small' : ''} ${
              testimonial.message.trim().length > 90 ? 'collabsile-extra-small' : ''
            } ${isMobile ? 'text-[12px]' : 'text-[13px] leading-[23px]'}`}
          >
            "{testimonial.message}"
          </p>
        </div>
      </div>
      <div className="flex items-top space-x-4 mt-4 pt-4 border-t border-transparent md:min-h-[80px]">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={56}
          height={56}
          className="rounded-full object-cover md:h-[56px] md:w-[56px] w-[30px] h-[30px]"
        />
        <div>
          <h4 className={`font-[600] ${isMobile ? 'text-[12px]' : 'paragraph'} font-source`}>
            {testimonial.name}
          </h4>
          <p className={`font-roboto italic ${isMobile ? 'text-[12px]' : 'text-[13px]'}`}>
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="stories" className="md:pt-[90px] pt-[55px]">
      <div className="container mx-auto px-4">
        <h2 className="font-source font-[600] text-center text-title title md:mb-8 mb-3">Stories</h2>

        {/* Initial Testimonials */}
        <div className="columns-1 md:columns-2 gap-8 md:space-y-8 space-y-6 mx-auto w-full text-title">
          {initialTestimonials.map(renderTestimonialCard)}
        </div>

        {/* Extra Testimonials (only shown when showMore is true) */}
        {showMore && (
          <div className="columns-1 md:columns-2 gap-8 md:space-y-8 space-y-6 mt-4 mx-auto w-full text-title">
            {extraTestimonials.map(renderTestimonialCard)}
          </div>
        )}

        {/* Button */}
        {!showMore && extraTestimonials.length > 0 && (
          <div className="flex justify-center md:mt-8 mt-7">
            <button
              onClick={() => setShowMore(true)}
              className="group flex btn items-center space-x-3 transition-all duration-300 focus:outline-none font-roboto h-auto font-[400] bg-green-btn"
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