// import CareerOptimized from '@/components/career/optimizedCareer/OptimizedCareer'
// import React from 'react'

// export default function page() {
//   return (
//     <CareerOptimized />
//   )
// }


'use client';
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with loading states
const Banner = dynamic(() => import('@/components/career/Banner'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const JobCard = dynamic(() => import('@/components/career/JobCard'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />
});

const JoinTeam = dynamic(() => import('@/components/JoinTeamForm'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const Common_banner = dynamic(() => import('@/components/ui/Common_banner'), {
  loading: () => <div className="h-64 bg-gray-50 animate-pulse" />
});

const CareersPage = () => {
  return (
    <div className='relative bg-white'>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Banner/>
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <JobCard/>
      </Suspense>

      <div className='container px-4 mx-auto relative'>
        <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
          <JoinTeam/>
        </Suspense>
      </div>

      <Suspense fallback={<div className="h-64 bg-gray-50 animate-pulse" />}>
        <Common_banner/>
      </Suspense>
    </div>
  );
};

export default CareersPage;