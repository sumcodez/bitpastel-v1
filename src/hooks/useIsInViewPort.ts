// hooks/useIsInViewport.ts
import { useState, useEffect, useRef, useCallback } from 'react';

const useIsInViewport = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const checkVisibility = useCallback(() => {
    if (!ref.current) return false;
    
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    // Check if element is centered in viewport
    const isVisible = (
      rect.top <= windowHeight * 0.6 &&
      rect.bottom >= windowHeight * 0.4 &&
      rect.left <= windowWidth * 0.6 &&
      rect.right >= windowWidth * 0.4
    );
    
    setIsInViewport(isVisible);
    return isVisible;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    const timer = setTimeout(checkVisibility, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, [checkVisibility]);

  return [ref, isInViewport] as const;
};

export default useIsInViewport;