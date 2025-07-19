'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface ImageSection {
  images: string[];
  altText: string;
  className?: string;
}

const TeamCollageNew: React.FC = () => {
  // Helper function to render images for both desktop and mobile
  const renderImages = (images: string[], altTextPrefix: string = "") => {
    return (
      <>
        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-2">
          {images.map((src, index) => (
            <div key={`desktop-${index}`} className="w-full h-full relative aspect-[4/3]">
              <Image
                src={src}
                alt={`${altTextPrefix} ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        {/* Mobile View - Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={8}
            slidesPerView={1}
            className="team-swiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <div className="w-full h-full relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={`${altTextPrefix} ${index + 1}`}
                    fill
                    className="object-cover"
                    style={{ borderRadius: '0' }}
                    sizes="100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  };

  // Helper function for sections with mixed single and double images
  const renderMixedImages = (sections: ImageSection[]) => {
    return sections.map((section, sectionIndex) => (
      <div key={`section-${sectionIndex}`} className={section.className || "mb-2"}>
        {section.images.length > 1 ? (
          renderImages(section.images, section.altText)
        ) : (
          <>
            <div className="hidden md:block w-full relative aspect-[4/3]">
              <Image
                src={section.images[0]}
                alt={section.altText}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:hidden">
              <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }}>
                <SwiperSlide>
                  <div className="w-full h-full relative aspect-[4/3]">
                    <Image
                      src={section.images[0]}
                      alt={section.altText}
                      fill
                      className="object-cover"
                      style={{ borderRadius: '0' }}
                      sizes="100vw"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <section className="team-members" id="OurTeam">
      <div className="container mx-auto px-4">
        {/* Escape Rooms */}
        <div className="team-collage mb-8">
          <h2 className="subheading title font-[700]">Escape Rooms</h2>
          {renderImages([
            "/images/new-team-images/new/escape_room_img-1.webp",
            "/images/new-team-images/new/escape_room_img-2.webp",
            "/images/new-team-images/new/escape_room_img-3.webp",
            "/images/new-team-images/new/escape_room_img-4.webp"
          ], "escape room with team members")}
        </div>

        {/* Interactive Team Mission */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Interactive Team Mission</h2>
          {renderImages([
            "/images/new-team-images/new/jenga_puzzle-play-1.webp",
            "/images/new-team-images/new/jenga_puzzle-play-2.webp",
            "/images/new-team-images/new/jenga_puzzle-play-3.webp",
            "/images/new-team-images/new/jenga_puzzle-play-4.webp"
          ], "Jenga Puzzle Playing team members")}
        </div>

        {/* Bitpastel turns 8 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Bitpastel turns 8</h2>
          {renderMixedImages([
            {
              images: ["/images/new-team-images/new/bitpastel-turn-8-1.webp"],
              altText: "Bitpastel Turns 8 year Celebration"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-turn-8-2.webp",
                "/images/new-team-images/new/bitpastel-turn-8-3.webp"
              ],
              altText: "Bitpastel Turns 8 year Celebration"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-turn-8-4.webp"],
              altText: "Bitpastel Turns 8 year Celebration"
            }
          ])}
        </div>

        {/* Ice Breaker - Coffee Evening */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Ice Breaker - Coffee Evening</h2>
          {renderImages([
            "/images/new-team-images/new/ice-breaker-coffee-1.webp",
            "/images/new-team-images/new/ice-breaker-coffee-2.webp"
          ], "Ice Breaker - Coffee Evening team members")}
        </div>

        {/* Christmas Celebration at Office 2024 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Christmas Celebration at Office 2024</h2>
          {renderImages([
            "/images/new-team-images/new/christmas-celebration-at-office-2024-1.webp",
            "/images/new-team-images/new/christmas-celebration-at-office-2024-2.webp"
          ], "Christmas Celebration at Office 2024 with team members")}
        </div>

        {/* Ethnic Day Celebration at Office 2024 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Ethnic Day Celebration at Office 2024</h2>
          {renderImages([
            "/images/new-team-images/new/ethnic-day-celeb-1.webp",
            "/images/new-team-images/new/ethnic-day-celeb-2.webp"
          ], "Ethnic Day Celebration at Office 2024 with team members")}
        </div>

        {/* Birthday Day Celebration at Office */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Birthday Day Celebration at Office</h2>
          {renderImages([
            "/images/new-team-images/new/birthday-celeb-office-1.webp",
            "/images/new-team-images/new/birthday-celeb-office-2.webp",
            "/images/new-team-images/new/birthday-celeb-office-3.webp",
            "/images/new-team-images/new/birthday-celeb-office-4.webp"
          ], "Birthday Celebration at Office with team members")}
        </div>

        {/* Work Anniversary Celebration at Office 2024 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Work Anniversary Celebration at Office 2024</h2>
          {renderImages([
            "/images/new-team-images/new/work-anniversary-celeb-2024-1.webp",
            "/images/new-team-images/new/work-anniversary-celeb-2024-2.webp",
            "/images/new-team-images/new/work-anniversary-celeb-2024-3.webp",
            "/images/new-team-images/new/work-anniversary-celeb-2024-4.webp"
          ], "Work Anniversary Celebration at Office 2024 with team members")}
        </div>

        {/* Team Meetup #Movie #Coffee */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Team Meetup #Movie #Coffee</h2>
          {renderImages([
            "/images/new-team-images/new/team-meetup-1.webp",
            "/images/new-team-images/new/team-meetup-2.webp"
          ], "Team Meetup #Movie #Coffee")}
        </div>

        {/* Bitpastel Townhall 2024 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Bitpastel Townhall 2024</h2>
          {renderMixedImages([
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2024-1.webp"],
              altText: "Bitpastel Townhall 2024 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2024-2.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-3.webp"
              ],
              altText: "Bitpastel Townhall 2024"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2024-4.webp"],
              altText: "Bitpastel Townhall 2024 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2024-5.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-6.webp"
              ],
              altText: "Bitpastel Townhall 2024"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2024-7.webp"],
              altText: "Bitpastel Townhall 2024 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2024-8.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-9.webp"
              ],
              altText: "Bitpastel Townhall 2024"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2024-10.webp"],
              altText: "Bitpastel Townhall 2024 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2024-11.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-12.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-13.webp",
                "/images/new-team-images/new/bitpastel-townhall-2024-14.webp"
              ],
              altText: "Bitpastel Townhall 2024"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2024-15.webp"],
              altText: "Bitpastel Townhall 2024 CEO Speech"
            }
          ])}
        </div>

        {/* Bitpastel Townhall 2023 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Bitpastel Townhall 2023</h2>
          {renderMixedImages([
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2023-1.webp"],
              altText: "Bitpastel Townhall 2023 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2023-2.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-3.webp"
              ],
              altText: "Bitpastel Townhall 2023"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2023-4.webp"],
              altText: "Bitpastel Townhall 2023 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2023-5.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-6.webp"
              ],
              altText: "Bitpastel Townhall 2023"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2023-7.webp"],
              altText: "Bitpastel Townhall 2023 cover"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2023-8.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-9.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-10.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-11.webp"
              ],
              altText: "Bitpastel Townhall 2023"
            },
            {
              images: ["/images/new-team-images/new/bitpastel-townhall-2023-12.webp"],
              altText: "Bitpastel Townhall 2023 CEO Speech"
            },
            {
              images: [
                "/images/new-team-images/new/bitpastel-townhall-2023-13.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-14.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-15.webp",
                "/images/new-team-images/new/bitpastel-townhall-2023-16.webp"
              ],
              altText: "Bitpastel Townhall 2023"
            }
          ])}
        </div>

        {/* Culture at Bitpastel */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Culture at Bitpastel</h2>
          {renderImages([
            "/images/new-team-images/new/culture-1.webp",
            "/images/new-team-images/new/culture-2.webp"
          ], "Culture at Bitpastel")}
        </div>

        {/* Year-end Celebration 2022 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Year-end Celebration 2022</h2>
          {renderMixedImages([
            {
              images: [
                "/images/new-team-images/new/year-end-celeb-2022-1.webp",
                "/images/new-team-images/new/year-end-celeb-2022-2.webp"
              ],
              altText: "Year-end Celebration 2022"
            },
            {
              images: ["/images/new-team-images/new/year-end-celeb-2022-3.webp"],
              altText: "Year-end Celebration 2022"
            },
            {
              images: [
                "/images/new-team-images/new/year-end-celeb-2022-4.webp",
                "/images/new-team-images/new/year-end-celeb-2022-5.webp"
              ],
              altText: "Year-end Celebration 2022"
            }
          ])}
        </div>

        {/* Sunday Brunch at Westin */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Sunday Brunch at Westin</h2>
          {renderImages([
            "/images/new-team-images/new/sunday-brunch-westin-1.webp",
            "/images/new-team-images/new/sunday-brunch-westin-2.webp"
          ], "Sunday Brunch at Westin")}
        </div>

        {/* Bitpastel Townhall 2022 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Bitpastel Townhall 2022</h2>
          {renderImages([
            "/images/new-team-images/new/bitpastel-townhall-2022-1.webp",
            "/images/new-team-images/new/bitpastel-townhall-2022-2.webp",
            "/images/new-team-images/new/bitpastel-townhall-2022-3.webp",
            "/images/new-team-images/new/bitpastel-townhall-2022-4.webp"
          ], "Bitpastel Townhall 2022")}
        </div>

        {/* Bitpastel Townhall 2021 */}
        <div className="team-collage mb-8">
          <h2 className="text-title title font-[600]">Bitpastel Townhall 2021</h2>
          {renderImages([
            "/images/new-team-images/new/bitpastel-townhall-2021-1.webp",
            "/images/new-team-images/new/bitpastel-townhall-2021-2.webp"
          ], "Bitpastel Townhall 2021")}
        </div>
      </div>

      {/* Add Swiper styles */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .team-swiper {
            border-radius: 0 !important;
          }
          .team-swiper .swiper-slide > div {
            border-radius: 0 !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            background: rgba(0,0,0,0.5);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            padding: 15px;
          }
          .swiper-pagination-bullet {
            background: white;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamCollageNew;