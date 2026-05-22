'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoTestimonial {
  id: string;
  title: string;
  youtubeId: string;
}

interface VideoCarouselProps {
  testimonials: VideoTestimonial[];
}

export default function VideoCarousel({ testimonials }: VideoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const goTo = (index: number) => setActiveIndex(index);

  const goToPrevious = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const goToNext = () =>
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) goToNext();
    if (distance < -minSwipeDistance) goToPrevious();
  };

  if (!testimonials.length) return null;

  const current = testimonials[activeIndex];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Main video */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/30 border border-white/10"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="aspect-video bg-black">
          <iframe
            key={current.youtubeId}
            src={`https://www.youtube.com/embed/${current.youtubeId}?enablejsapi=1`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Arrow buttons - desktop */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white items-center justify-center hover:bg-black/80 transition-all hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Counter badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full border border-white/10">
          {activeIndex + 1} / {testimonials.length}
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {testimonials.map((video, index) => (
          <button
            key={video.id}
            onClick={() => goTo(index)}
            className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-200 ${
              index === activeIndex
                ? 'ring-2 ring-purple-500 opacity-100 scale-105'
                : 'opacity-50 hover:opacity-75'
            }`}
            style={{ width: '120px', height: '68px' }}
          >
            <Image
              src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
              alt={video.title || `Отзыв ${index + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
            {index === activeIndex && (
              <div className="absolute inset-0 bg-purple-500/20 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white/90 flex items-center justify-center">
                  <svg className="w-3 h-3 text-purple-600 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Mobile arrows */}
      <div className="flex md:hidden justify-center gap-3 mt-4">
        <button
          onClick={goToPrevious}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center active:scale-95 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
