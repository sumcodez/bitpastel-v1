import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
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
  images: string[];
  description: string;
};

const OurProjects = () => {
  // Complete projects array with multiple images for each project
  const projects: Project[] = [
    {
      id: 1,
      title: 'BAEE',
      images: [
        '/images/project/Baee.png',
        '/images/project/Baee2.png',
        '/images/project/Baee3.png',
        '/images/project/Baee4.png',
        '/images/project/Baee4.png',
        '/images/project/Baee4.png',
        '/images/project/Baee4.png',
        '/images/project/Baee4.png',
      ],
      description:
        'A comprehensive e-learning platform with AI-powered recommendations and interactive courses.',
    },
    {
      id: 2,
      title: 'HealthTrack Pro',
      images: [
        '/images/project/Health1.png',
        '/images/project/Health2.png',
        '/images/project/Health3.png',
      ],
      description:
        'Healthcare management system for hospitals with patient tracking and appointment scheduling.',
    },
    {
      id: 3,
      title: 'SmartRetail',
      images: [
        '/images/project/Retail1.png',
        '/images/project/Retail2.png',
        '/images/project/Retail3.png',
        '/images/project/Retail4.png',
      ],
      description:
        'Inventory management and POS system with real-time analytics for retail businesses.',
    },
    {
      id: 4,
      title: 'FinWise',
      images: ['/images/project/Finance1.png', '/images/project/Finance2.png'],
      description: 'Personal finance app with budgeting tools and investment tracking.',
    },
    {
      id: 5,
      title: 'LogiChain',
      images: [
        '/images/project/Logistics1.png',
        '/images/project/Logistics2.png',
        '/images/project/Logistics3.png',
      ],
      description:
        'Supply chain management solution with route optimization and real-time tracking.',
    },
    {
      id: 6,
      title: 'GreenEnergy',
      images: [
        '/images/project/Energy1.png',
        '/images/project/Energy2.png',
        '/images/project/Energy3.png',
      ],
      description: 'Monitoring system for renewable energy plants with performance analytics.',
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);

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
    <section id="ourProjects" className="md:pt-[90px] pt-[60px] ">
      <div className="container mx-auto px-4 overflow-hidden">
        <h2 className=" font-[600] font-source text-center text-title md:mb-0 mb-3 title">
          Industries We've Transformed
        </h2>
        <div className="project-cards-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card"
              >
                <div className="project-image relative">
                  {/* <Image
                    src={project.images[0]}
                    alt={`${project.title} Project Image`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  /> */}
                  <img src={project.images[0]} alt="Project Image" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-title subheading">{project.title}</h3>
                  <button
                    onClick={() => openModal(project)}
                    className="min-w-[96px] card-button rounded-[4px] bg-green-btn text-primary-white py-2 px-5  w-auto mx-auto"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal with Swiper and Thumbs */}
      {isModalOpen && currentProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-2xl font-bold text-gray-800">{currentProject.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
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
              <div className="mb-4 max-h-[300px] rounded-lg">
                <Swiper
                  modules={[Navigation, Thumbs]}
                  navigation
                  // pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                  spaceBetween={10}
                  effect={'flip'}
                  className="h-full"
                  onSlideChange={(swiper) => setActiveThumbIndex(swiper.activeIndex)}
                >
                  {currentProject.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex justify-center items-center max-h-[400px] max-w-[400px] m-auto relative">
                        <img src={image} alt={`${currentProject.title} - ${index + 1}`} className="object-contain" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Project Description */}
              <div className="my-4">
                {/* <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Details</h4> */}
                <p className="text-title text-center">{currentProject.description}</p>
              </div>

              {/* Thumbs Gallery with Navigation */}
              <div className="mt-2 bg-gray-50 p-2 rounded-lg relative">
                <Swiper
                  modules={[FreeMode, Navigation, Thumbs]}
                  onSwiper={setThumbsSwiper}
                  spaceBetween={8}
                  slidesPerView={Math.min(currentProject.images.length, 4)}
                  freeMode={true}
                  watchSlidesProgress={true}
                  className="thumbs-gallery"
                  navigation={{
                    nextEl: '.thumb-next-button',
                    prevEl: '.thumb-prev-button',
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: Math.min(currentProject.images.length, 3),
                    },
                    768: {
                      slidesPerView: Math.min(currentProject.images.length, 4),
                    },
                    1024: {
                      slidesPerView: Math.min(currentProject.images.length, 5),
                    },
                  }}
                >
                  {currentProject.images.map((image, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <div 
                        className={`flex justify-center items-center h-20 bg-white rounded border overflow-hidden relative transition-opacity duration-200 ${
                          activeThumbIndex === index 
                            ? 'opacity-100 border-green-500 border-2' 
                            : 'opacity-50 border-gray-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumb ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* Custom navigation buttons for thumbs */}
                {currentProject.images.length > 4 && (
                  <>
                    <button className="thumb-prev-button absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="thumb-next-button absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-gray-100 mr-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;