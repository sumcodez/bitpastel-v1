'use client';

import React, { useState, useEffect, useRef } from 'react';
import InstagramCarousel, { CarouselItem } from './InstaMobile';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MobileTeamCollage: React.FC = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }, []);

  // All image arrays
  const sampleImages: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Escape room/1.webp',
      alt: 'Escape Room 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Escape room/2.webp',
      alt: 'Escape Room 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Escape room/3.webp',
      alt: 'Escape Room 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Escape room/4.webp',
      alt: 'Escape Room 4',
    },
  ];

  const interactive: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Interactive Team session/1.webp',
      alt: 'Interactive Session 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Interactive Team session/2.webp',
      alt: 'Interactive Session 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Interactive Team session/3.webp',
      alt: 'Interactive Session 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Interactive Team session/4.webp',
      alt: 'Interactive Session 4',
    },
  ];

  const bitpastelTurns: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/1.webp',
      alt: 'Bitpastel Turns 8 - 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/2.webp',
      alt: 'Bitpastel Turns 8 - 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/3.webp',
      alt: 'Bitpastel Turns 8 - 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel Turns 8/4.webp',
      alt: 'Bitpastel Turns 8 - 4',
    },
  ];

  const icebreakers: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/1.webp',
      alt: 'Ice Breaker Coffee 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/2.webp',
      alt: 'Ice Breaker Coffee 2',
    },
  ];

  const cristmasCelebration: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/1.webp',
      alt: 'Christmas Celebration 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Christmas celeb 2024/2.webp',
      alt: 'Christmas Celebration 2',
    },
  ];

  const ethnicDay: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Ethnic day/1.webp',
      alt: 'Ethnic Day 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Ethnic day/2.webp',
      alt: 'Ethnic Day 2',
    },
  ];

  const birthdayCelebration: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Birthday celebration/1.webp',
      alt: 'Birthday Celebration 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Birthday celebration/2.webp',
      alt: 'Birthday Celebration 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Birthday celebration/3.webp',
      alt: 'Birthday Celebration 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Birthday celebration/4.webp',
      alt: 'Birthday Celebration 4',
    },
  ];

  const workAniversary: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/1.webp',
      alt: 'Work Anniversary 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/2.webp',
      alt: 'Work Anniversary 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/3.webp',
      alt: 'Work Anniversary 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/4.webp',
      alt: 'Work Anniversary 4',
    },
  ];

  const teamMeetUp: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Team meet up/2.webp',
      alt: 'Team Meetup 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Team meet up/1.webp',
      alt: 'Team Meetup 2',
    },
  ];

  const bitpastelTownhall2024: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/1.webp',
      alt: 'Townhall 2024 - 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/2.webp',
      alt: 'Townhall 2024 - 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/3.webp',
      alt: 'Townhall 2024 - 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/4.webp',
      alt: 'Townhall 2024 - 4',
    },
    {
      id: '5',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/5.webp',
      alt: 'Townhall 2024 - 5',
    },
    {
      id: '6',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/6.webp',
      alt: 'Townhall 2024 - 6',
    },
    {
      id: '7',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/7.webp',
      alt: 'Townhall 2024 - 7',
    },
    {
      id: '8',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/8.webp',
      alt: 'Townhall 2024 - 8',
    },
    {
      id: '9',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/9.webp',
      alt: 'Townhall 2024 - 9',
    },
    {
      id: '10',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/10.webp',
      alt: 'Townhall 2024 - 10',
    },
    {
      id: '11',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/11.webp',
      alt: 'Townhall 2024 - 11',
    },
    {
      id: '12',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/12.webp',
      alt: 'Townhall 2024 - 12',
    },
    {
      id: '13',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/13.webp',
      alt: 'Townhall 2024 - 13',
    },
    {
      id: '14',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/14.webp',
      alt: 'Townhall 2024 - 14',
    },
    {
      id: '15',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall 2024/15.webp',
      alt: 'Townhall 2024 - 15',
    },
  ];

  const bitpastelTownhall2023: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/1.webp',
      alt: 'Townhall 2023 - 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/2.webp',
      alt: 'Townhall 2023 - 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/3.webp',
      alt: 'Townhall 2023 - 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/4.webp',
      alt: 'Townhall 2023 - 4',
    },
    {
      id: '5',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/5.webp',
      alt: 'Townhall 2023 - 5',
    },
    {
      id: '6',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/6.webp',
      alt: 'Townhall 2023 - 6',
    },
    {
      id: '7',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/7.webp',
      alt: 'Townhall 2023 - 7',
    },
    {
      id: '8',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/8.webp',
      alt: 'Townhall 2023 - 8',
    },
    {
      id: '9',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/9.webp',
      alt: 'Townhall 2023 - 9',
    },
    {
      id: '10',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/10.webp',
      alt: 'Townhall 2023 - 10',
    },
    {
      id: '11',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/11.webp',
      alt: 'Townhall 2023 - 11',
    },
    {
      id: '12',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/12.webp',
      alt: 'Townhall 2023 - 12',
    },
    {
      id: '13',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/13.webp',
      alt: 'Townhall 2023 - 13',
    },
    {
      id: '14',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/14.webp',
      alt: 'Townhall 2023 - 14',
    },
    {
      id: '15',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/15.webp',
      alt: 'Townhall 2023 - 15',
    },
    {
      id: '16',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel townhall2023/16.webp',
      alt: 'Townhall 2023 - 16',
    },
  ];

  const bitpastelTownhall2022: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/1.webp',
      alt: 'Townhall 2022 - 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/2.webp',
      alt: 'Townhall 2022 - 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/3.webp',
      alt: 'Townhall 2022 - 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/4.webp',
      alt: 'Townhall 2022 - 4',
    },
  ];

  const bitpastelTownhall2021: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/1.webp',
      alt: 'Townhall 2021 - 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/2.webp',
      alt: 'Townhall 2021 - 2',
    },
  ];

  const cultureAtBitpastel: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/1.webp',
      alt: 'Culture at Bitpastel 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Culture at Bitpastel/2.webp',
      alt: 'Culture at Bitpastel 2',
    },
  ];

  const yearEndCelebration: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Year end celeb 2022/1.webp',
      alt: 'Year End Celebration 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Year end celeb 2022/2.webp',
      alt: 'Year End Celebration 2',
    },
    {
      id: '3',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Year end celeb 2022/3.webp',
      alt: 'Year End Celebration 3',
    },
    {
      id: '4',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Year end celeb 2022/4.webp',
      alt: 'Year End Celebration 4',
    },
    {
      id: '5',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Year end celeb 2022/5.webp',
      alt: 'Year End Celebration 5',
    },
  ];

  const sundayBrunchAtWestin: CarouselItem[] = [
    {
      id: '1',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Sunday brunch/1.webp',
      alt: 'Sunday Brunch at Westin 1',
    },
    {
      id: '2',
      type: 'image',
      src: '/images/new-team-images/Team page slicing/Sunday brunch/2.webp',
      alt: 'Sunday Brunch at Westin 2',
    },
  ];

  // State to track which carousel is in view
  const [activeCarousel, setActiveCarousel] = useState<string | null>(null);
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const carouselId = entry.target.getAttribute('data-carousel-id');
          if (!carouselId) return;

          if (entry.isIntersecting) {
            setActiveCarousel(carouselId);
          } else if (activeCarousel === carouselId) {
            setActiveCarousel(null);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7, // 70% of carousel must be visible
      }
    );

    // Observe all carousels
    Object.values(carouselRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeCarousel]);

  // Function to set ref for each carousel
  const setCarouselRef = (ref: HTMLDivElement | null, id: string) => {
    if (ref) {
      carouselRefs.current[id] = ref;
    } else {
      delete carouselRefs.current[id];
    }
  };

  // Helper function to render carousel sections
  const renderCarouselSection = (
    id: string,
    items: CarouselItem[],
    title: string,
    subtitle: string
  ) => (
    <div
      className="team-collage"
      ref={(ref) => setCarouselRef(ref, id)}
      data-carousel-id={id}
      data-aos="fade-up"
    >
      <div className="relative">
        <InstagramCarousel
          key={`${id}-${activeCarousel === id}`} // Force re-render when visibility changes
          items={items}
          autoPlay={activeCarousel === id}
          showDots={true}
          showArrows={false}
          infinite={true}
        />
      </div>
      <div className="px-8">
        <h2 className="text-[16px] text-left font-[700] leading-[normal]">{title}</h2>
        <p className="text-left text-[12px] text-white">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <section className="relative team-members-mob team-members-mobile" id="OurTeam">
      {/* Escape Rooms */}
      {renderCarouselSection(
        'escapeRooms',
        sampleImages,
        'Escape Rooms',
        '#MysteryRooms #CanYouEscape #RealLifeEscapeExperience'
      )}

      {/* Interactive Team Mission */}
      {renderCarouselSection(
        'interactive',
        interactive,
        'Interactive Team Mission',
        '#TeamBuilding #BlockByBlock'
      )}

      {/* Bitpastel Turns 8 */}
      {renderCarouselSection(
        'bitpastelTurns',
        bitpastelTurns,
        'Bitpastel Turns 8',
        '#TeamGoals #MilestoneMoment'
      )}

      {/* Ice Breaker - Coffee Evening */}
      {renderCarouselSection(
        'icebreakers',
        icebreakers,
        'Ice Breaker - Coffee Evening',
        '#CoffeeAndConversations #BrewingConnections'
      )}

      {/* Christmas Celebration at Office 2024 */}
      {renderCarouselSection(
        'cristmasCelebration',
        cristmasCelebration,
        'Christmas Celebration at Office 2024',
        '#ChristmasCelebration #FestiveVibes'
      )}

      {/* Ethnic Day Celebration at Office 2024 */}
      {renderCarouselSection(
        'ethnicDay',
        ethnicDay,
        'Ethnic Day Celebration at Office 2024',
        '#BitpastelEthnicDay #TraditionMeetsStyle'
      )}

      {/* Birthday Celebration at Office */}
      {renderCarouselSection(
        'birthdayCelebration',
        birthdayCelebration,
        'Birthday Celebration at Office',
        '#BirthdayCheers #CakeTime'
      )}

      {/* Work Anniversary Celebration at Office 2024 */}
      {renderCarouselSection(
        'workAniversary',
        workAniversary,
        'Work Anniversary Celebration at Office 2024',
        '#CelebratingSuccess #CheersToYears'
      )}

      {/* Team Meetup */}
      {renderCarouselSection(
        'teamMeetUp',
        teamMeetUp,
        'Team Meetup',
        '#LunchWithColleagues #TeamBonding'
      )}

      {/* Bitpastel Townhall 2024 */}
      {renderCarouselSection(
        'bitpastelTownhall2024',
        bitpastelTownhall2024,
        'Bitpastel Townhall 2024',
        '#BuildingTheFuture #TogetherWeGrow'
      )}

      {/* Bitpastel Townhall 2023 */}
      {renderCarouselSection(
        'bitpastelTownhall2023',
        bitpastelTownhall2023,
        'Bitpastel Townhall 2023',
        '#OurJourney2023 #TownhallHighlights'
      )}

      {/* Culture at Bitpastel */}
      {renderCarouselSection(
        'cultureAtBitpastel',
        cultureAtBitpastel,
        'Culture at Bitpastel',
        '#CultureDriven #ThrivingAtWork'
      )}

      {/* Year-end Celebration 2022 */}
      {renderCarouselSection(
        'yearEndCelebration',
        yearEndCelebration,
        'Year-end Celebration 2022',
        '#BitpastelMovieMoments #BuildingStrongerTeams'
      )}

      {/* Sunday Brunch at Westin */}
      {renderCarouselSection(
        'sundayBrunchAtWestin',
        sundayBrunchAtWestin,
        'Sunday Brunch at Westin',
        '#WeekendWithTeam #WestinBrunch'
      )}

      {/* Bitpastel Townhall 2022 */}
      {renderCarouselSection(
        'bitpastelTownhall2022',
        bitpastelTownhall2022,
        'Bitpastel Townhall 2022',
        '#Townhall2022 #VisionAndValues'
      )}

      {/* Bitpastel Townhall 2021 */}
      {renderCarouselSection(
        'bitpastelTownhall2021',
        bitpastelTownhall2021,
        'Bitpastel Townhall 2021',
        '#Milestones2021 #FoundationsOfGrowth'
      )}
    </section>
  );
};

export default MobileTeamCollage;
