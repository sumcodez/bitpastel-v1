// import FreeQuoteOptimized from '@/components/free-quote/optimized-freeQuote/OptimizedFreeQuote'
// import React from 'react'

// export default function page() {
//   return (
//     <FreeQuoteOptimized />
//   )
// }



'use client';
import React, { Suspense } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Dynamically import the HomePage component with loading state
const HomePage = dynamic(() => import('@/app/home/page'), {
  suspense: true,
  loading: () => <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>
});

const FreeQuote: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/', { scroll: false });
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <HomePage forceModalOpen={true} onModalClose={handleClose} />
    </Suspense>
  );
};

export default FreeQuote;