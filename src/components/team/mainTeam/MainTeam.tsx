'use client';
import React from 'react';
import { lazy, Suspense } from "react"
import TeamBanner from '@/components/team/TeamBanner';
import TeamEngage from '@/components/team/TeamEngage';
// import TeamCollageNew from '@/components/team/TeamCollageNew';
import TeamTestimonialNew from '@/components/team/TeamTestimonialNew';
// import MobileTeamCollage from '@/components/team/MobileTeamCollage';
const LazyMobileTeamCollage = lazy(() => import("@/components/team/MobileTeamCollage"))
const LazyTeamCollageNew = lazy(() => import("@/components/team/TeamCollageNew"))
import { useState, useEffect } from 'react';

const page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This ensures the loader shows immediately
    setIsLoading(true);

    // Use both timeout and window load event for better reliability
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleLoad = () => setIsLoading(false);
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* {isLoading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <svg
            style={{
              left: '50%',
              top: '50%',
              position: 'absolute',
              transform: 'translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)',
            }}
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 187.3 93.7"
            height="150px"
            width="200px"
          >
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              id="outline"
              stroke="#009999"
            />
            <path
              d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              stroke="#009999"
              fill="none"
              opacity="0.05"
              id="outline-bg"
            />
          </svg>
        </div>
      )} */}

      <div className="relative">
        <TeamBanner />
        <TeamTestimonialNew />
        {/* <NewTeamtestimonial/> */}
        {/* <NewTeamCollage/> */}
        {/* <TeamCollageNew/> */}
        {/* <MobileTeamCollage/> */}

        {/* Show only on mobile */}
       <div id="OurTeam">
          <Suspense fallback={<div className="flex justify-center items-center h-48 text-lg">Loading Team...</div>}>
            {/* Show only on mobile */}
            <div className="block md:hidden">
              <LazyMobileTeamCollage />
            </div>
            {/* Show only on desktop */}
            <div className="hidden md:block">
              <LazyTeamCollageNew />
            </div>
          </Suspense>
        </div>

        {/* <TeamTestimonials/> */}
        {/* <TeamCollage/> */}
        <TeamEngage />
        {/* <Common_banner/> */}
      </div>
    </>
  );
};

export default page;
