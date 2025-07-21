'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function MobileTeamCollage() {
  const sampleImages = [
    '/images/new-team-images/team-image-mobile/Escape room/1.webp',
    '/images/new-team-images/team-image-mobile/Escape room/2.webp',
    '/images/new-team-images/team-image-mobile/Escape room/3.webp',
    '/images/new-team-images/team-image-mobile/Escape room/4.webp',
  ];

  const interactive = [
    '/images/new-team-images/team-image-mobile/Interactive Team session/1.webp',
    '/images/new-team-images/team-image-mobile/Interactive Team session/2 (1).webp',
    '/images/new-team-images/team-image-mobile/Interactive Team session/3.webp',
    '/images/new-team-images/team-image-mobile/Interactive Team session/4.webp',
  ]

  const bitpastelTurns = [
    '/images/new-team-images/team-image-mobile/Bitpastel Turns 8/1.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel Turns 8/2.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel Turns 8/3 (1).webp',
    '/images/new-team-images/team-image-mobile/Bitpastel Turns 8/4.webp',
  ]

  const icebreakers = [
    '/images/new-team-images/team-image-mobile/Ice Breaker - Coffee/1.webp',
    '/images/new-team-images/team-image-mobile/Ice Breaker - Coffee/2.webp',
  ]

  const ethnicDay = [
    '/images/new-team-images/team-image-mobile/Ethnic day/1.webp',
    '/images/new-team-images/team-image-mobile/Ethnic day/2.webp',
  ]

  const birthdayCelebration = [
    '/images/new-team-images/team-image-mobile/Birthdday celebration/1.webp',
    '/images/new-team-images/team-image-mobile/Birthdday celebration/2.webp',
    '/images/new-team-images/team-image-mobile/Birthdday celebration/3.webp',
    '/images/new-team-images/team-image-mobile/Birthdday celebration/4.webp',
  ]

  const workAniversary = [
    '/images/new-team-images/team-image-mobile/Work anniversary celeb 2024/1 (1).webp',
    '/images/new-team-images/team-image-mobile/Work anniversary celeb 2024/2.webp',
    '/images/new-team-images/team-image-mobile/Work anniversary celeb 2024/3.webp',
    '/images/new-team-images/team-image-mobile/Work anniversary celeb 2024/4.webp',
  ]

  const teamMeetUp = [
    '/images/new-team-images/team-image-mobile/Team meet up/1.webp',
    '/images/new-team-images/team-image-mobile/Team meet up/2 (1).webp',
  ]

  const bitpastelTownhall2024 = [
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/1 (1).webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/2.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/3.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/4.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/5.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/6.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/7.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/8.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/9.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/10.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/11.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/12.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/13.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/14.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall 2024/15.webp',
  ]


  const bitpastelTownhall2023 = [
       '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/1.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/2.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/3.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/4.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/5.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/6.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/7.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/8.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/9.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/10.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/11.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/12.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/13.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/14.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/15.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel townhall2023/16.webp',
  ]

  const bitpastelTownhall2022 = [
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/1.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/2.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/3.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/4.webp',
  ]

  const bitpastelTownhall2021 = [
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/1.webp',
    '/images/new-team-images/team-image-mobile/Bitpastel town hall 2021/2.webp',
  ]

  const cultureAtBitpastel = [
    '/images/new-team-images/team-image-mobile/Culture at Bitpastel/1 (1).webp',
    '/images/new-team-images/team-image-mobile/Culture at Bitpastel/2.webp',
  ]

  const yearEndCelebration = [
    '/images/new-team-images/team-image-mobile/Year end celeb 2022/1.webp',
    '/images/new-team-images/team-image-mobile/Year end celeb 2022/2.webp',
    '/images/new-team-images/team-image-mobile/Year end celeb 2022/3.webp',
    '/images/new-team-images/team-image-mobile/Year end celeb 2022/4.webp',
    '/images/new-team-images/team-image-mobile/Year end celeb 2022/5.webp',
  ]

  const sundayBrunchAtWestin = [
    '/images/new-team-images/team-image-mobile/Sunday brunch/1.webp',
    '/images/new-team-images/team-image-mobile/Sunday brunch/2.webp',
  ]

  return (
    <section className="relative team-members-mob team-members-mobile" id="OurTeam">
      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {sampleImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Escape Rooms</h2>
          <p className="text-left">#Mysteryrooms #Officefuntime</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {interactive.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Interactive Team Mission</h2>
          <p className="text-left">#OfficeGames #InteractiveGames</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {bitpastelTurns.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Bitpastel Turns 8</h2>
          <p className="text-left">#team #team_outing</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {icebreakers.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Ice Breaker - Coffe Evening</h2>
          <p className="text-left">#Chrishmas_celebration #festival</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {ethnicDay.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Ethnic Day Celebration at Office 2024</h2>
          <p className="text-left">#Traditionalwear #ethnic_wear</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {birthdayCelebration.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Birthday ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Birthday Celebration at Office</h2>
          <p className="text-left">#birthday #office_celebration</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {workAniversary.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Work Aniversary Celebration at Office 2024</h2>
          <p className="text-left">#office_culture #cake_cutting</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {teamMeetUp.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Team Meetup</h2>
          <p className="text-left">#group_lunch #team</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {bitpastelTownhall2024.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Bitpastel Townhall 2024</h2>
          <p className="text-left">#Townhall #office_culture</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {bitpastelTownhall2023.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Bitpastel Townhall 2023</h2>
          <p className="text-left">#6th_year #celebration</p>
        </div>
      </div>


       <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {cultureAtBitpastel.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Culture at Bitpastel</h2>
          <p className="text-left">#team #teamwork</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {yearEndCelebration.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Year-end Celebration 2022</h2>
          <p className="text-left">#Movie #Officefan</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {bitpastelTownhall2022.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Bitpastel Townhall 2022</h2>
          <p className="text-left">#Townhall2022 #awards</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {bitpastelTownhall2021.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Bitpastel Townhall 2021</h2>
          <p className="text-left">#Townhall #officefuntime</p>
        </div>
      </div>

      

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            className="team-swiper"
          >
            {sundayBrunchAtWestin.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-title title text-left font-[600] leading-[normal]">Sunday Brunch at Westin</h2>
          <p className="text-left">#brunch #westin_hotel</p>
        </div>
      </div>
    </section>
  );
}

export default MobileTeamCollage;
