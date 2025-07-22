'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import HomePage from '../home/page';

const FreeQuote: React.FC = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/', { scroll: false });
  };

  return (
    <HomePage forceModalOpen={true} onModalClose={handleClose} />
  );
};

export default FreeQuote;
