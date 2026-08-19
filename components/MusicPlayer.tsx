"use client";

import { useEffect, useRef, useState } from "react";

const START_TIME = 38;
const END_TIME = 86;

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      try {
        audio.currentTime = START_TIME;
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    tryAutoplay();

    const handleTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/bgm.mp3" />
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "음악 정지" : "음악 재생"}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
      >
        {isPlaying ? (
          <span className="flex items-end gap-[2px] h-3">
            <span className="w-[2px] bg-[var(--color-primary)] animate-[eq1_0.9s_ease-in-out_infinite]" />
            <span className="w-[2px] bg-[var(--color-primary)] animate-[eq2_0.9s_ease-in-out_infinite]" />
            <span className="w-[2px] bg-[var(--color-primary)] animate-[eq3_0.9s_ease-in-out_infinite]" />
          </span>
        ) : (
          <svg
            className="w-3 h-3 text-[var(--color-text-light)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M9 19V6l12-2v13M9 19a3 3 0 11-6 0 3 3 0 016 0zM21 17a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        <span className="text-[11px] tracking-wide text-[var(--color-text-light)]">
          {isPlaying ? "Music On" : "Music Off"}
        </span>
      </button>

      <style jsx global>{`
        @keyframes eq1 {
          0%, 100% { height: 4px; }
          50% { height: 12px; }
        }
        @keyframes eq2 {
          0%, 100% { height: 10px; }
          50% { height: 4px; }
        }
        @keyframes eq3 {
          0%, 100% { height: 6px; }
          50% { height: 11px; }
        }
      `}</style>
    </>
  );
}