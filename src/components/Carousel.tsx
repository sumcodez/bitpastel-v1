"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InstagramCarouselProps {
  images: string[]
  className?: string
}

export default function InstagramCarousel({ images, className }: InstagramCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = 0 // Reset end position
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < images.length - 1) {
      nextImage()
    }
    if (isRightSwipe && currentIndex > 0) {
      prevImage()
    }
  }

  const nextImage = () => {
    if (isTransitioning || currentIndex >= images.length - 1) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prevImage = () => {
    if (isTransitioning || currentIndex <= 0) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
    return () => clearTimeout(timer)
  }, [currentIndex])

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-gray-100 flex items-center justify-center rounded-lg">
        <p className="text-gray-500">No images to display</p>
      </div>
    )
  }

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Images container */}
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            // width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows - hidden on mobile, visible on desktop */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white hidden sm:flex rounded-full p-2"
              onClick={prevImage}
              disabled={currentIndex === 0 || isTransitioning}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white hidden sm:flex rounded-full p-2"
              onClick={nextImage}
              disabled={currentIndex === images.length - 1 || isTransitioning}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-200",
                  index === currentIndex ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70",
                )}
                onClick={() => goToImage(index)}
                disabled={isTransitioning}
              />
            ))}
          </div>
        )}

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/50 text-white text-sm px-2 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
