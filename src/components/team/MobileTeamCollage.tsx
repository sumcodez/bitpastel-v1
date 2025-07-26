'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState, useEffect, useRef, useCallback } from 'react';

import { InstagramCarousel, CarouselItem } from './InstaMobile';

const MobileTeamCollage: React.FC = () => {

const sampleImages:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/1.webp', alt: 'Escape Room 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/2.webp', alt: 'Escape Room 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/3.webp', alt: 'Escape Room 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Escape room/4.webp', alt: 'Escape Room 4' },
];
const interactive:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/1.webp', alt: 'Interactive Session 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/2.webp', alt: 'Interactive Session 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/3.webp', alt: 'Interactive Session 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Interactive Team session/4.webp', alt: 'Interactive Session 4' },
];
const bitpastelTurns:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/1.webp', alt: 'Bitpastel Turns 8 - 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/2.webp', alt: 'Bitpastel Turns 8 - 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/3.webp', alt: 'Bitpastel Turns 8 - 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/4.webp', alt: 'Bitpastel Turns 8 - 4' },
];
const icebreakers:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/1.webp', alt: 'Ice Breaker Coffee 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/2.webp', alt: 'Ice Breaker Coffee 2' },
];
const cristmasCelebration:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/1.webp', alt: 'Christmas Celebration 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/2.webp', alt: 'Christmas Celebration 2' },
];
const ethnicDay:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Ethnic day/1.webp', alt: 'Ethnic Day 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Ethnic day/2.webp', alt: 'Ethnic Day 2' },
];
const birthdayCelebration:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/1.webp', alt: 'Birthday Celebration 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/2.webp', alt: 'Birthday Celebration 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/3.webp', alt: 'Birthday Celebration 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Birthday celebration/4.webp', alt: 'Birthday Celebration 4' },
];
const workAniversary:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/1.webp', alt: 'Work Anniversary 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/2.webp', alt: 'Work Anniversary 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/3.webp', alt: 'Work Anniversary 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/4.webp', alt: 'Work Anniversary 4' },
];
const teamMeetUp:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Team meet up/2.webp', alt: 'Team Meetup 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Team meet up/1.webp', alt: 'Team Meetup 2' },
];
const bitpastelTownhall2024:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/1.webp', alt: 'Townhall 2024 - 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/2.webp', alt: 'Townhall 2024 - 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/3.webp', alt: 'Townhall 2024 - 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/4.webp', alt: 'Townhall 2024 - 4' },
  { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/5.webp', alt: 'Townhall 2024 - 5' },
  { id: '6', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/6.webp', alt: 'Townhall 2024 - 6' },
  { id: '7', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/7.webp', alt: 'Townhall 2024 - 7' },
  { id: '8', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/8.webp', alt: 'Townhall 2024 - 8' },
  { id: '9', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/9.webp', alt: 'Townhall 2024 - 9' },
  { id: '10', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/10.webp', alt: 'Townhall 2024 - 10' },
  { id: '11', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/11.webp', alt: 'Townhall 2024 - 11' },
  { id: '12', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/12.webp', alt: 'Townhall 2024 - 12' },
  { id: '13', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/13.webp', alt: 'Townhall 2024 - 13' },
  { id: '14', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/14.webp', alt: 'Townhall 2024 - 14' },
  { id: '15', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/15.webp', alt: 'Townhall 2024 - 15' },
];
const bitpastelTownhall2023:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/1.webp', alt: 'Townhall 2023 - 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/2.webp', alt: 'Townhall 2023 - 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/3.webp', alt: 'Townhall 2023 - 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/4.webp', alt: 'Townhall 2023 - 4' },
  { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/5.webp', alt: 'Townhall 2023 - 5' },
  { id: '6', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/6.webp', alt: 'Townhall 2023 - 6' },
  { id: '7', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/7.webp', alt: 'Townhall 2023 - 7' },
  { id: '8', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/8.webp', alt: 'Townhall 2023 - 8' },
  { id: '9', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/9.webp', alt: 'Townhall 2023 - 9' },
  { id: '10', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/10.webp', alt: 'Townhall 2023 - 10' },
  { id: '11', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/11.webp', alt: 'Townhall 2023 - 11' },
  { id: '12', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/12.webp', alt: 'Townhall 2023 - 12' },
  { id: '13', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/13.webp', alt: 'Townhall 2023 - 13' },
  { id: '14', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/14.webp', alt: 'Townhall 2023 - 14' },
  { id: '15', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/15.webp', alt: 'Townhall 2023 - 15' },
  { id: '16', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/16.webp', alt: 'Townhall 2023 - 16' },
];
const bitpastelTownhall2022:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/1.webp', alt: 'Townhall 2022 - 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/2.webp', alt: 'Townhall 2022 - 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/3.webp', alt: 'Townhall 2022 - 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/4.webp', alt: 'Townhall 2022 - 4' },
];
const bitpastelTownhall2021:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/1.webp', alt: 'Townhall 2021 - 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/2.webp', alt: 'Townhall 2021 - 2' },
];
const cultureAtBitpastel:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/1.webp', alt: 'Culture at Bitpastel 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/2.webp', alt: 'Culture at Bitpastel 2' },
];
const yearEndCelebration:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/1.webp', alt: 'Year End Celebration 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/2.webp', alt: 'Year End Celebration 2' },
  { id: '3', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/3.webp', alt: 'Year End Celebration 3' },
  { id: '4', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/4.webp', alt: 'Year End Celebration 4' },
  { id: '5', type: 'image', src: '/images/new-team-images/Team page slicing/Year end celeb 2022/5.webp', alt: 'Year End Celebration 5' },
];
const sundayBrunchAtWestin:CarouselItem[] = [
  { id: '1', type: 'image', src: '/images/new-team-images/Team page slicing/Sunday brunch/1.webp', alt: 'Sunday Brunch at Westin 1' },
  { id: '2', type: 'image', src: '/images/new-team-images/Team page slicing/Sunday brunch/2.webp', alt: 'Sunday Brunch at Westin 2' },
];


  return (
    <section className="relative team-members-mob team-members-mobile" id="OurTeam">


      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={sampleImages}
            autoPlay={true}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Escape Rooms</h2>
          <p className="text-left text-[12px] text-white">#MysteryRooms #CanYouEscape #RealLifeEscapeExperience</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={interactive}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Interactive Team Mission
          </h2>
          <p className="text-left text-[12px] text-white">#TeamBuilding #BlockByBlock</p>
        </div>
      </div>




      <div className="team-collage">
        <div className="relative">
           <InstagramCarousel
            items={bitpastelTurns}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Turns 8</h2>
          <p className="text-left text-[12px] text-white">#TeamGoals #MilestoneMoment</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={icebreakers}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Ice Breaker - Coffee Evening
          </h2>
          <p className="text-left text-[12px] text-white">#CoffeeAndConversations #BrewingConnections</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={cristmasCelebration}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Christmas Celebration at Office 2024
          </h2>
          <p className="text-left text-[12px] text-white">#ChristmasCelebration #FestiveVibes</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={ethnicDay}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Ethnic Day Celebration at Office 2024
          </h2>
          <p className="text-left text-[12px] text-white">#BitpastelEthnicDay #TraditionMeetsStyle</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={birthdayCelebration}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Birthday Celebration at Office
          </h2>
          <p className="text-left text-[12px] text-white">#BirthdayCheers #CakeTime</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={workAniversary}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Work Anniversary Celebration at Office 2024
          </h2>
          <p className="text-left text-[12px] text-white">#CelebratingSuccess #CheersToYears</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={teamMeetUp}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Team Meetup</h2>
          <p className="text-left text-[12px] text-white">#LunchWithColleagues #TeamBonding</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={bitpastelTownhall2024}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Bitpastel Townhall 2024
          </h2>
          <p className="text-left text-[12px] text-white">#BuildingTheFuture #TogetherWeGrow</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={bitpastelTownhall2023}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Bitpastel Townhall 2023
          </h2>
          <p className="text-left text-[12px] text-white">#OurJourney2023 #TownhallHighlights</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={cultureAtBitpastel}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Culture at Bitpastel
          </h2>
          <p className="text-left text-[12px] text-white">#CultureDriven #ThrivingAtWork</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
         <InstagramCarousel
            items={yearEndCelebration}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Year-end Celebration 2022
          </h2>
          <p className="text-left text-[12px] text-white ">#BitpastelMovieMoments #BuildingStrongerTeams</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <InstagramCarousel
            items={sundayBrunchAtWestin}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Sunday Brunch at Westin
          </h2>
          <p className="text-left text-[12px] text-white">#WeekendWithTeam #WestinBrunch</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={bitpastelTownhall2022}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Bitpastel Townhall 2022
          </h2>
          <p className="text-left text-[12px] text-white">#Townhall2022 #VisionAndValues</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <InstagramCarousel
            items={bitpastelTownhall2021}
            autoPlay={false}
            showDots={true}
            showArrows={false}
            infinite={true}
          />
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">
            Bitpastel Townhall 2021
          </h2>
          <p className="text-left text-[12px] text-white">#Milestones2021 #FoundationsOfGrowth</p>
        </div>
      </div>

      
    </section>
  );
}

export default MobileTeamCollage;