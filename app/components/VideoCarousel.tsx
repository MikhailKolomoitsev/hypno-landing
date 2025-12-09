'use client';

import { useState, useEffect } from 'react';

interface VideoTestimonial {
  id: string;
  title: string;
  youtubeId: string;
}

interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
  onVideoPlayStateChange?: (isPlaying: boolean) => void;
}

export default function VideoCarousel({ testimonials, onVideoPlayStateChange }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useEffect(() => {
    // Listen for YouTube API messages
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://www.youtube.com') return;

      try {
        const data = JSON.parse(event.data);
        if (data.event === 'infoDelivery' && data.info?.playerState !== undefined) {
          const isPlaying = data.info.playerState === 1; // 1 = playing
          setIsVideoPlaying(isPlaying);
          onVideoPlayStateChange?.(isPlaying);
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onVideoPlayStateChange]);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  if (testimonials.length === 0) return null;

  const currentVideo = testimonials[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="aspect-video w-full rounded-lg sm:rounded-xl overflow-hidden bg-black shadow-xl sm:shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?enablejsapi=1`}
            title={currentVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {testimonials.length > 1 && (
          <>
            {/* Desktop Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="hidden md:flex absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:scale-110 items-center justify-center"
              aria-label="Предыдущий отзыв"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="hidden md:flex absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 lg:p-3 shadow-lg transition-all duration-200 hover:scale-110 items-center justify-center"
              aria-label="Следующий отзыв"
            >
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Mobile Navigation Arrows - Below video */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button
                onClick={goToPrevious}
                className="bg-white/90 active:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 active:scale-95"
                aria-label="Предыдущий отзыв"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="bg-white/90 active:bg-white text-gray-800 rounded-full p-3 shadow-md transition-all duration-200 active:scale-95"
                aria-label="Следующий отзыв"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple-600 w-6 sm:w-8'
                  : 'bg-gray-300 active:bg-gray-400 w-2 sm:w-3'
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
