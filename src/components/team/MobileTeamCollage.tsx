'use client'; // Add this at the top for Next.js App Router

import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

// Define TypeScript interfaces for props
interface Dot {
  index: number;
  size: 'regular' | 'small';
  opacity: 'active' | 'inactive' | 'indicator';
}

interface InstagramPaginationProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

interface TeamSwiperWithPaginationProps {
  images: string[];
  title: string;
  hashtags: string;
}

// Instagram Pagination Component
const InstagramPagination: React.FC<InstagramPaginationProps> = ({ total, current, onDotClick }) => {
  const maxVisibleDots = 4;

  const getVisibleDots = (): Dot[] => {
    if (total <= maxVisibleDots) {
      return Array.from({ length: total }, (_, i) => ({
        index: i,
        size: 'regular',
        opacity: i === current ? 'active' : 'inactive',
      }));
    }

    const dots: Dot[] = [];

    if (current < maxVisibleDots - 1) {
      // Show first 4 dots + edge indicator
      for (let i = 0; i < maxVisibleDots; i++) {
        dots.push({
          index: i,
          size: 'regular',
          opacity: i === current ? 'active' : 'inactive',
        });
      }
      if (total > maxVisibleDots) {
        dots.push({
          index: maxVisibleDots,
          size: 'small',
          opacity: 'indicator',
        });
      }
    } else if (current >= total - maxVisibleDots + 1) {
      // Show edge indicator + last 4 dots
      if (total > maxVisibleDots) {
        dots.push({
          index: total - maxVisibleDots - 1,
          size: 'small',
          opacity: 'indicator',
        });
      }
      for (let i = total - maxVisibleDots; i < total; i++) {
        dots.push({
          index: i,
          size: 'regular',
          opacity: i === current ? 'active' : 'inactive',
        });
      }
    } else {
      // Show edge indicator + middle dots + edge indicator
      dots.push({
        index: current - 2,
        size: 'small',
        opacity: 'indicator',
      });
      for (let i = current - 1; i <= current + 1; i++) {
        dots.push({
          index: i,
          size: 'regular',
          opacity: i === current ? 'active' : 'inactive',
        });
      }
      dots.push({
        index: current + 2,
        size: 'small',
        opacity: 'indicator',
      });
    }

    return dots;
  };

  const visibleDots = getVisibleDots();

  return (
    <div className="flex items-center justify-center space-x-1 py-3">
      {visibleDots.map((dot, idx) => (
        <button
          key={`${dot.index}-${idx}`}
          onClick={() => onDotClick(dot.index)}
          className={`rounded-full transition-all duration-200 ${
            dot.size === 'regular' ? 'w-2 h-2' : 'w-1.5 h-1.5'
          } ${
            dot.opacity === 'active'
              ? 'bg-white'
              : dot.opacity === 'indicator'
              ? 'bg-white bg-opacity-40'
              : 'bg-white bg-opacity-60'
          }`}
        />
      ))}
    </div>
  );
};

// Team Swiper Component with Instagram Pagination
const TeamSwiperWithPagination: React.FC<TeamSwiperWithPaginationProps> = ({ images, title, hashtags }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null); // Use `any` for Swiper ref due to Swiper's dynamic typing

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Use realIndex for accurate slide tracking
  };

  const handleDotClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="team-collage">
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Mousewheel, Keyboard]}
          cssMode={true}
          spaceBetween={8}
          keyboard={{ enabled: true }}
          slidesPerView={1}
          speed={600} // Smooth transition speed
          className="team-swiper"
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy" // Optimize image loading
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Instagram-style pagination - only show if more than 1 image */}
        {images.length > 1 && (
          <InstagramPagination total={images.length} current={activeIndex} onDotClick={handleDotClick} />
        )}
      </div>
      <div className="px-8">
        <h2 className="text-[16px] text-left font-[700] leading-[normal]">{title}</h2>
        <p className="text-left text-[12px] text-white">{hashtags}</p>
      </div>
    </div>
  );
};

const MobileTeamCollage: React.FC = () => {
  // Define image arrays with TypeScript
  const sampleImages: string[] = [
    '/images/new-team-images/Team page slicing/Escape room/1.webp',
    '/images/new-team-images/Team page slicing/Escape room/2.webp',
    '/images/new-team-images/Team page slicing/Escape room/3.webp',
    '/images/new-team-images/Team page slicing/Escape room/4.webp',
  ];

  const interactive: string[] = [
    '/images/new-team-images/Team page slicing/Interactive Team session/1.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/2.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/3.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/4.webp',
  ];

  const bitpastelTurns: string[] = [
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/4.webp',
  ];

  const icebreakers: string[] = [
    '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/1.webp',
    '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/2.webp',
  ];

  const cristmasCelebration: string[] = [
    '/images/new-team-images/Team page slicing/Christmas celeb 2024/1.webp',
    '/images/new-team-images/Team page slicing/Christmas celeb 0/2.webp',
  ];

  const ethnicDay: string[] = [
    '/images/new-team-images/Team page slicing/Ethnic day/1.webp',
    '/images/new-team-images/Team page slicing/Ethnic day/2.webp',
  ];

  const birthdayCelebration: string[] = [
    '/images/new-team-images/Team page slicing/Birthday celebration/1.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/2.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/3.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/4.webp',
  ];

  const workAniversary: string[] = [
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/1.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/2.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/3.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/4.webp',
  ];

  const teamMeetUp: string[] = [
    '/images/new-team-images/Team page slicing/Team meet up/2.webp',
    '/images/new-team-images/Team page slicing/Team meet up/1.webp',
  ];

  const bitpastelTownhall2024: string[] = [
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/4.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/5.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/6.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/7.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/8.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/9.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/10.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/11.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/12.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/13.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/14.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/15.webp',
  ];

  const bitpastelTownhall2023: string[] = [
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/4.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/5.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/6.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/7.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/8.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/9.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/10.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/11.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/12.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/13.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/14.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/15.webp',
    '/images/new-team-images/Team page slicing/Bitpastel townhall2023/16.webp',
  ];

  const bitpastelTownhall2022: string[] = [
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/4.webp',
  ];

  const bitpastelTownhall2021: string[] = [
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/2.webp',
  ];

  const cultureAtBitpastel: string[] = [
    '/images/new-team-images/Team page slicing/Culture at Bitpastel/1.webp',
    '/images/new-team-images/Team page slicing/Culture at Bitpastel/2.webp',
  ];

  const yearEndCelebration: string[] = [
    '/images/new-team-images/Team page slicing/Year end celeb 2022/1.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/2.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/3.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/4.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/5.webp',
  ];

  const sundayBrunchAtWestin: string[] = [
    '/images/new-team-images/Team page slicing/Sunday brunch/1.webp',
    '/images/new-team-images/Team page slicing/Sunday brunch/2.webp',
  ];

  return (
    <section className="relative team-members-mob team-members-mobile">
      <TeamSwiperWithPagination
        images={sampleImages}
        title="Escape Rooms"
        hashtags="#Mysteryrooms #Officefuntime"
      />

      <TeamSwiperWithPagination
        images={interactive}
        title="Interactive Team Mission"
        hashtags="#OfficeGames #InteractiveGames"
      />

      <TeamSwiperWithPagination
        images={bitpastelTurns}
        title="Bitpastel Turns 8"
        hashtags="#team #team_outing"
      />

      <TeamSwiperWithPagination
        images={icebreakers}
        title="Ice Breaker - Coffee Evening"
        hashtags="#Coffeetime #employee_interactions"
      />

      <TeamSwiperWithPagination
        images={cristmasCelebration}
        title="Christmas Celebration at Office 2024"
        hashtags="#Christmas_celebration #festival"
      />

      <TeamSwiperWithPagination
        images={ethnicDay}
        title="Ethnic Day Celebration at Office 2024"
        hashtags="#Traditionalwear #ethnic_wear"
      />

      <TeamSwiperWithPagination
        images={birthdayCelebration}
        title="Birthday Celebration at Office"
        hashtags="#birthday #office_celebration"
      />

      <TeamSwiperWithPagination
        images={workAniversary}
        title="Work Anniversary Celebration at Office 2024"
        hashtags="#office_culture #cake_cutting"
      />

      <TeamSwiperWithPagination
        images={teamMeetUp}
        title="Team Meetup"
        hashtags="#group_lunch #team"
      />

      <TeamSwiperWithPagination
        images={bitpastelTownhall2024}
        title="Bitpastel Townhall 2024"
        hashtags="#Townhall #office_culture"
      />

      <TeamSwiperWithPagination
        images={bitpastelTownhall2023}
        title="Bitpastel Townhall 2023"
        hashtags="#6th_year #celebration"
      />

      <TeamSwiperWithPagination
        images={cultureAtBitpastel}
        title="Culture at Bitpastel"
        hashtags="#team #teamwork"
      />

      <TeamSwiperWithPagination
        images={yearEndCelebration}
        title="Year-end Celebration 2022"
        hashtags="#Movie #Officefan"
      />

      <TeamSwiperWithPagination
        images={sundayBrunchAtWestin}
        title="Sunday Brunch at Westin"
        hashtags="#brunch #westin_hotel"
      />

      <TeamSwiperWithPagination
        images={bitpastelTownhall2022}
        title="Bitpastel Townhall 2022"
        hashtags="#Townhall2022 #awards"
      />

      <TeamSwiperWithPagination
        images={bitpastelTownhall2021}
        title="Bitpastel Townhall 2021"
        hashtags="#Townhall #officefuntime"
      />
    </section>
  );
};

export default MobileTeamCollage;