// 
// import PartnerOptimized from '@/components/partner/optimizedPartner/OptimizedPartner'
// import React from 'react'

// export default function page() {
//   return (
//     <PartnerOptimized />
//   )
// }



import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';

// Dynamically import components with Suspense fallbacks
const PartnerHero = dynamic(() => import('@/components/partner/PartnerHero'), {
  suspense: true,
  loading: () => <div className="min-h-screen bg-gray-50 animate-pulse" />
});

const PartnerService = dynamic(() => import('@/components/partner/PartnerService'), {
  suspense: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});

const NewIntegrated = dynamic(() => import('@/components/partner/NewIntegrated'), {
  suspense: true,
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />
});


export default function PartnerPage() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen bg-gray-50 animate-pulse" />}>
        <PartnerHero />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <PartnerService />
      </Suspense>

      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <NewIntegrated />
      </Suspense>
    </>
  );
}