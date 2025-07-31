// import FreeQuoteOptimized from '@/components/free-quote/optimized-freeQuote/OptimizedFreeQuote'
// import React from 'react'

// export default function page() {
//   return (
//     <FreeQuoteOptimized />
//   )
// }



'use client';
import React, { Suspense, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

// Loading component
const LoadingScreen = () => (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
          <svg
            style={{
              left: "50%",
              top: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)",
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
);

// Dynamically import the HomePage component
const HomePage = dynamic(() => import('@/app/home/page'), {
  loading: () => <LoadingScreen />
});

const FreeQuote: React.FC = () => {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  const handleClose = () => {
    router.push('/', { scroll: false });
  };

  useEffect(() => {
    // Ensure component is mounted and ready before showing content
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 220); // Adjust timing as needed
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading screen until everything is ready
  if (!isReady) {
    return <LoadingScreen />;
  }

  return (
    <div style={{ visibility: isReady ? 'visible' : 'hidden' }}>
      <Suspense fallback={<LoadingScreen />}>
        <HomePage forceModalOpen={true} onModalClose={handleClose} />
      </Suspense>
    </div>
  );
};

export default FreeQuote;