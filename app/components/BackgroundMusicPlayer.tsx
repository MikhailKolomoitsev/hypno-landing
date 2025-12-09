'use client';

import { useEffect, useRef, useState } from 'react';

interface BackgroundMusicPlayerProps {
  isVideoPlaying: boolean;
}

export default function BackgroundMusicPlayer({ isVideoPlaying }: BackgroundMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const initializingRef = useRef(false);

  useEffect(() => {
    if (initializingRef.current) return;
    initializingRef.current = true;

    const initializePlayer = () => {
      if (playerRef.current) return; // Prevent multiple initializations

      playerRef.current = new (window as any).YT.Player('background-music-player', {
        height: '0',
        width: '0',
        playerVars: {
          listType: 'playlist',
          list: 'PLN2cjLHtd4Dd0xpKoFSTseGyfTZU3GUgo',
          autoplay: 0,
          loop: 1,
          controls: 0,
        },
        events: {
          onReady: (event: any) => {
            setIsReady(true);
            // Auto-play music when player is ready
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const playerState = event.data;
            // 1 = playing, 2 = paused
            setIsPlaying(playerState === 1);
          },
        },
      });
    };

    // Check if API already loaded
    if ((window as any).YT && (window as any).YT.Player) {
      initializePlayer();
      return;
    }

    // Load YouTube IFrame API only once
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player when API is ready
    (window as any).onYouTubeIframeAPIReady = initializePlayer;
  }, []);

  useEffect(() => {
    if (!playerRef.current || !isReady) return;

    // Pause music when video is playing, resume when video stops
    try {
      if (isVideoPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    } catch (e) {
      console.error('YouTube player error:', e);
    }
  }, [isVideoPlaying, isReady]);

  const togglePlayPause = () => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Player */}
      <div id="background-music-player" className="hidden" />

      {/* Music Control Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={togglePlayPause}
          className="bg-green-500/90 hover:bg-green-400 backdrop-blur-sm text-black rounded-full p-4 shadow-lg shadow-green-500/50 transition-all duration-200 hover:scale-110"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Пауза' : 'Играть музыку'}
        >
          {isPlaying ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          onClick={toggleMute}
          className="bg-green-500/90 hover:bg-green-400 backdrop-blur-sm text-black rounded-full p-4 shadow-lg shadow-green-500/50 transition-all duration-200 hover:scale-110"
          aria-label={isMuted ? 'Unmute music' : 'Mute music'}
          title={isMuted ? 'Включить звук' : 'Выключить звук'}
        >
          {isMuted ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
