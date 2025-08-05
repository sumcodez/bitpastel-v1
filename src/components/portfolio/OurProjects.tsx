'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation, Pagination, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/effect-flip';
import 'swiper/css/free-mode';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  category: string;
  images: string[];
  hoverBg: string;
  link: string;
};

const OurProjects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'The Couture Club',
      category: 'Fashion',
      link: 'https://www.thecoutureclub.com',
      images: ['/images/projects/the counter club/1.webp'],
      hoverBg: '#D8F5E9',
    },
    {
      id: 2,
      title: 'Low Dose',
      category: 'Alcoholic beverages',
      link: 'https://missmini.com/',
      images: ['/images/projects/low dose/1.webp', ''],
      hoverBg: '#FCF4D7',
    },
    {
      id: 3,
      title: 'Amity Alexandra',
      category: 'Jewellery',
      link: 'https://amityalexandra.com',
      images: ['/images/projects/amity university/1.webp'],
      hoverBg: '#FDE3E5',
    },
    {
      id: 4,
      title: 'Mauvais',
      category: 'Fashion',
      link: 'https://mauvais.co.uk/',
      images: ['/images/projects/mauvais/1.webp'],
      hoverBg: '#CEEEF6',
    },
    {
      id: 5,
      title: 'Visual Displays',
      category: 'Audio visual equipment',
      link: 'https://visualdisplays.co.uk/',
      images: ['/images/projects/visual display/1.webp'],
      hoverBg: '#D8F5E9',
    },
    {
      id: 6,
      title: 'Rokoko',
      category: 'Motion-capture hardware and software',
      link: 'https://store.rokoko.com/',
      images: ['/images/projects/rokoko/1.webp'],
      hoverBg: '#CEEEF6',
    },
    {
      id: 7,
      title: 'Lovinity',
      category: 'Jewellery',
      link: 'https://lovinitydiamond.com',
      images: ['/images/projects/lovinity/1.webp'],
      hoverBg: '#FCF4D7',
    },
    {
      id: 8,
      title: 'JZN Market',
      category: 'Sim & Top-ups',
      link: 'https://jznmarket.com/',
      images: ['/images/projects/jzn/1.webp'],
      hoverBg: '#FDE3E5',
    },
  ];

  const allCategories: string[] = projects.map((project: Project) => project.category);
  const uniqueCategories: string[] = Array.from(new Set(allCategories));
  const categories: string[] = ['All', ...uniqueCategories];

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Filter projects based on active category
  const filteredProjects: Project[] =
    activeCategory === 'All'
      ? projects
      : projects.filter((project: Project) => project.category === activeCategory);

  // Handle category changes with animation
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const openModal = (project: Project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
    setActiveThumbIndex(0);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    setThumbsSwiper(null);
  };

  return (
    <section id="ourProjects" className="md:pt-[90px] pt-[50px]">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className="font-[700] font-source text-center text-title md:mb-0 mb-3 slide-up">
          Industries We've Transformed
        </h2>

        {/* Category Tabs with Swiper */}
        <div className="nav-tabs nav slide-up font-source md:pt-[80px] pt-[20px]">
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={{
              nextEl: '.swiper-arrow-right',
              prevEl: '.swiper-arrow-left',
            }}
            watchSlidesProgress={true}
            spaceBetween={0}
            slidesPerView={'auto'}
            freeMode={true}
            className="category-tabs-swiper"
          >
            {categories.map((category: string) => (
              <SwiperSlide key={category} className="!w-auto">
                <li className="nav-item font-source subheading">
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 nav-link subheading transition-colors ${
                      activeCategory === category ? 'active-category text-accent-green' : ''
                    }`}
                  >
                    {category}
                  </button>
                </li>
              </SwiperSlide>
            ))}

            <div className="arrow-icon swiper-arrow swiper-arrow-left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.30371 8.88874L8.37496 15.96L10.1425 14.1925L3.95496 8.00499L10.1425 1.81749L8.37496 0.0499878L1.30371 7.12124C1.06937 7.35565 0.937723 7.67353 0.937723 8.00499C0.937723 8.33644 1.06937 8.65433 1.30371 8.88874Z"
                  fill="#2A2A2A"
                />
              </svg>
            </div>
            <div className="arrow-icon swiper-arrow swiper-arrow-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="16"
                viewBox="0 0 11 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.69617 8.88874L2.62492 15.96L0.857422 14.1925L7.04492 8.00499L0.857422 1.81749L2.62492 0.0499878L9.69617 7.12124C9.93051 7.35565 10.0622 7.67353 10.0622 8.00499C10.0622 8.33644 9.93051 8.65433 9.69617 8.88874Z"
                  fill="#2A2A2A"
                />
              </svg>
            </div>
          </Swiper>
        </div>

        {/* Projects Grid */}
        <div className="project-cards-inner">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:pt-[50px] pt-[20px] md:pb-[120px] pb-[50px] gap-[20px]">
              {filteredProjects.map((project: Project, index: number) => (
                <div
                  key={project.id}
                  className={`project-card ${isTransitioning ? 'opacity-0' : 'opacity-100 slide-up'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image relative md:h-[450px] h-[250px] overflow-hidden md:rounded-[20px] rounded-[10px]">
                    {/* Default image - always present */}
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} cover image`}
                      fill
                      quality={100}
                      // className={`object-cover`}
                      className={`object-cover transition-opacity duration-300`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 6}
                    />

                    {project.hoverBg && (
                      <div
                        className={`absolute hover-bg-project top-0 left-0 w-full h-full opacity-0 transition-all duration-300 bg-[${project.hoverBg}]`}
                      >
                        <div className="place-items-center h-full content-center text-hover-element">
                          <h3 className="text-title title font-source font-[400]">
                            {project.title}
                          </h3>
                          <button
                            onClick={() => openModal(project)}
                            className="text-center block text-accent-green font-source font-[700] underline uppercase"
                          >
                            View Project
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <div className="text-center pt-12 pb-16">
                    <h3 className="text-title subheading font-source font-[700] mb-4">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => openModal(project)}
                      className="min-w-[96px] card-button rounded-[4px] bg-green-btn text-primary-white py-2 px-5 w-auto mx-auto hover:bg-opacity-90 transition-opacity button-hover"
                    >
                      View Project
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`py-20 text-center text-gray-500 ${isTransitioning ? 'opacity-0' : 'opacity-100 slide-up'}`}
            >
              No projects found in this category
            </div>
          )}
        </div>
      </div>

      {/* Modal with Swiper and Thumbs */}
      {isModalOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div className="bg-white md:rounded-[20px] rounded-[10px] max-w-3xl w-full max-h-[90vh] flex flex-col scale-in">
            <div className="flex justify-between items-center border-b p-4">
              <div>
                <h3 className="text-title title font-bold">{currentProject.title}</h3>
                <p className="text-dark">{currentProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="text-dark hover:text-title p-1 rounded-full hover:bg-gray-100 transition-colors button-hover"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-grow p-4 overflow-auto">
              {/* Main Swiper */}
              <div className="md:h-[350px] h-[300px] carousel-image md:rounded-[20px] rounded-[10px]">
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation={{
                    nextEl: '.swiper-arrow-image-right',
                    prevEl: '.swiper-arrow-image-left',
                  }}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  spaceBetween={10}
                  className="h-full"
                  onSlideChange={(swiper) => setActiveThumbIndex(swiper.activeIndex)}
                >
                  {currentProject.images.map((image: string, index: number) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center items-center h-full w-full relative">
                        <Image
                          src={image}
                          alt={`${currentProject.title} - ${index + 1}`}
                          fill
                          quality={100}
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="arrow-icon-image swiper-arrow-image-left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      viewBox="0 0 11 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.30371 8.88874L8.37496 15.96L10.1425 14.1925L3.95496 8.00499L10.1425 1.81749L8.37496 0.0499878L1.30371 7.12124C1.06937 7.35565 0.937723 7.67353 0.937723 8.00499C0.937723 8.33644 1.06937 8.65433 1.30371 8.88874Z"
                        fill="#2A2A2A"
                      />
                    </svg>
                  </div>
                  <div className="arrow-icon-image swiper-arrow-image-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="20"
                      viewBox="0 0 11 16"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.69617 8.88874L2.62492 15.96L0.857422 14.1925L7.04492 8.00499L0.857422 1.81749L2.62492 0.0499878L9.69617 7.12124C9.93051 7.35565 10.0622 7.67353 10.0622 8.00499C10.0622 8.33644 9.93051 8.65433 9.69617 8.88874Z"
                        fill="#2A2A2A"
                      />
                    </svg>
                  </div>
                </Swiper>
              </div>

              {/* Thumbs Swiper */}
              {/* Thumbs Swiper */}
              {currentProject.images.length > 1 && (
                <div className="mt-6 md:rounded-[20px] rounded-[10px] thumbnail-slider relative">
                  <Swiper
                    modules={[FreeMode, Navigation, Thumbs]}
                    navigation={{
                      nextEl: '.swiper-arrow-thubnail-right',
                      prevEl: '.swiper-arrow-thubnail-left',
                    }}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={'auto'}
                    freeMode={true}
                    watchSlidesProgress={true}
                    className="thumbs-gallery"
                    breakpoints={{
                      640: {
                        spaceBetween: 15,
                      },
                      768: {
                        spaceBetween: 15,
                      },
                    }}
                  >
                    {currentProject.images.map((image: string, index: number) => (
                      <SwiperSlide
                        key={index}
                        className="lg:!w-[25%] md:!w-[33.33333%] !w-[50%] cursor-pointer"
                      >
                        <div
                          className={`flex justify-center items-center h-20 bg-white rounded-[10px] overflow-hidden relative transition-all duration-200 thumb-hover ${
                            activeThumbIndex === index ? 'active-slide' : ''
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Thumb ${index + 1}`}
                            fill
                            quality={100}
                            className="object-cover"
                            sizes="100px"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="arrow-icon-image swiper-arrow-thubnail-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.30371 8.88874L8.37496 15.96L10.1425 14.1925L3.95496 8.00499L10.1425 1.81749L8.37496 0.0499878L1.30371 7.12124C1.06937 7.35565 0.937723 7.67353 0.937723 8.00499C0.937723 8.33644 1.06937 8.65433 1.30371 8.88874Z"
                          fill="#2A2A2A"
                        />
                      </svg>
                    </div>
                    <div className="arrow-icon-image swiper-arrow-thubnail-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.69617 8.88874L2.62492 15.96L0.857422 14.1925L7.04492 8.00499L0.857422 1.81749L2.62492 0.0499878L9.69617 7.12124C9.93051 7.35565 10.0622 7.67353 10.0622 8.00499C10.0622 8.33644 9.93051 8.65433 9.69617 8.88874Z"
                          fill="#2A2A2A"
                        />
                      </svg>
                    </div>
                  </Swiper>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;
