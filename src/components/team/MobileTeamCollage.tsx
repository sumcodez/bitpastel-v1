'use client'; // Add this at the top for Next.js App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function MobileTeamCollage() {
  const sampleImages = [
    '/images/new-team-images/Team page slicing/Escape room/1.webp',
    '/images/new-team-images/Team page slicing/Escape room/2.webp',
    '/images/new-team-images/Team page slicing/Escape room/3.webp',
    '/images/new-team-images/Team page slicing/Escape room/4.webp',
  ];

  const interactive = [
    '/images/new-team-images/Team page slicing/Interactive Team session/1.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/2.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/3.webp',
    '/images/new-team-images/Team page slicing/Interactive Team session/4.webp',
  ]

  const bitpastelTurns = [
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel Turns 8/4.webp',
  ]

  const icebreakers = [
    '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/1.webp',
    '/images/new-team-images/Team page slicing/Ice Breaker - Coffee/2.webp',
  ]

  const cristmasCelebration =[
    '/images/new-team-images/Team page slicing/Christmas celeb 2024/1.webp',
    '/images/new-team-images/Team page slicing/Christmas celeb 2024/2.webp'
  ]

  const ethnicDay = [
    '/images/new-team-images/Team page slicing/Ethnic day/1.webp',
    '/images/new-team-images/Team page slicing/Ethnic day/2.webp',
  ]

  const birthdayCelebration = [
    '/images/new-team-images/Team page slicing/Birthday celebration/1.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/2.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/3.webp',
    '/images/new-team-images/Team page slicing/Birthday celebration/4.webp',
  ]

  const workAniversary = [
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/1.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/2.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/3.webp',
    '/images/new-team-images/Team page slicing/Work anniversary celeb 2024/4.webp',
  ]

  const teamMeetUp = [
    '/images/new-team-images/Team page slicing/Team meet up/2.webp',
    '/images/new-team-images/Team page slicing/Team meet up/1.webp',
  ]

  const bitpastelTownhall2024 = [
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
  ]


  const bitpastelTownhall2023 = [
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
  ]

  const bitpastelTownhall2022 = [
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/2.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/3.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2022/4.webp',
  ]

  const bitpastelTownhall2021 = [
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/1.webp',
    '/images/new-team-images/Team page slicing/Bitpastel town hall 2021/2.webp',
  ]

  const cultureAtBitpastel = [
    '/images/new-team-images/Team page slicing/Culture at Bitpastel/1.webp',
    '/images/new-team-images/Team page slicing/Culture at Bitpastel/2.webp',
  ]

  const yearEndCelebration = [
    '/images/new-team-images/Team page slicing/Year end celeb 2022/1.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/2.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/3.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/4.webp',
    '/images/new-team-images/Team page slicing/Year end celeb 2022/5.webp',
  ]

  const sundayBrunchAtWestin = [
    '/images/new-team-images/Team page slicing/Sunday brunch/1.webp',
    '/images/new-team-images/Team page slicing/Sunday brunch/2.webp',
  ]

  return (
    <section className="relative team-members-mob team-members-mobile">
      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Escape Rooms</h2>
          <p className="text-left text-[12px] text-white">#Mysteryrooms #Officefuntime</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Interactive Team Mission</h2>
          <p className="text-left text-[12px] text-white">#OfficeGames #InteractiveGames</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Turns 8</h2>
          <p className="text-left text-[12px] text-white">#team #team_outing</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Ice Breaker - Coffe Evening</h2>
          <p className="text-left text-[12px] text-white">#Coffeetime #employee_interactions</p>
        </div>
      </div>



      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
            slidesPerView={1}
            className="team-swiper"
          >
            {cristmasCelebration.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Team member ${index + 1}`} className="w-full h-full" />
              </SwiperSlide>
            ))}

            {/* Custom fraction pagination */}
            {/* <div className="absolute top-4 right-4 z-20 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm custom-fraction"></div> */}
          </Swiper>
        </div>
        <div className="px-8">
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Christmas Celebration at Office 2024</h2>
          <p className="text-left text-[12px] text-white">#Chrishmas_celebration #festival</p>
        </div>
      </div>





      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Ethnic Day Celebration at Office 2024</h2>
          <p className="text-left text-[12px] text-white">#Traditionalwear #ethnic_wear</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Birthday Celebration at Office</h2>
          <p className="text-left text-[12px] text-white">#birthday #office_celebration</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Work Aniversary Celebration at Office 2024</h2>
          <p className="text-left text-[12px] text-white">#office_culture #cake_cutting</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Team Meetup</h2>
          <p className="text-left text-[12px] text-white">#group_lunch #team</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Townhall 2024</h2>
          <p className="text-left text-[12px] text-white">#Townhall #office_culture</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Townhall 2023</h2>
          <p className="text-left text-[12px] text-white">#6th_year #celebration</p>
        </div>
      </div>


       <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Culture at Bitpastel</h2>
          <p className="text-left text-[12px] text-white">#team #teamwork</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Year-end Celebration 2022</h2>
          <p className="text-left text-[12px] text-white ">#Movie #Officefan</p>
        </div>
      </div>



      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Sunday Brunch at Westin</h2>
          <p className="text-left text-[12px] text-white">#brunch #westin_hotel</p>
        </div>
      </div>


      <div className="team-collage">
        <div className="relative">
          <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Townhall 2022</h2>
          <p className="text-left text-[12px] text-white">#Townhall2022 #awards</p>
        </div>
      </div>

      <div className="team-collage">
        <div className="relative">
           <Swiper
            modules={[Pagination, Mousewheel, Keyboard]}
            pagination={{ clickable: true }}
            cssMode={true}
            spaceBetween={8}
            keyboard={true}
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
          <h2 className="text-[16px] text-left font-[700] leading-[normal]">Bitpastel Townhall 2021</h2>
          <p className="text-left text-[12px] text-white">#Townhall #officefuntime</p>
        </div>
      </div>

      


    </section>
  );
}

export default MobileTeamCollage;
