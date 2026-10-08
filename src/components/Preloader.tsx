import React, { useEffect, useState } from 'react';
import { NtomatiniLogo } from './NtomatiniLogo.tsx';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const step = Math.max(2, Math.floor((100 - prev) * 0.18));
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          onComplete();
        }, 650);
        return () => clearTimeout(exitTimer);
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#D2B48C] px-6 transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background soft ambient warm kraft texture glow */}
      <div className="absolute inset-0 bg-[#D2B48C] -z-10" />

      {/* Main Container with smooth entrance */}
      <div className="flex flex-col items-center max-w-md w-full text-center">
        {/* Logo Recreated in High Quality */}
        <div className="relative mb-8 transform transition-all duration-700 hover:scale-105">
          <NtomatiniLogo size="hero" showSubtext={true} />
        </div>

        {/* Traditional Tagline */}
        <div className="space-y-1 mb-8">
          <p className="font-serif-title text-2xl sm:text-3xl text-black font-black tracking-normal">
            Φρέσκο σπιτικό φαγητό κάθε μέρα...
          </p>
          <p className="text-xs uppercase tracking-widest text-black font-black">
            Ιωάννινα · Μαγειρευτά Κατσαρόλας & Φούρνου
          </p>
        </div>

        {/* Minimalist Progress Bar */}
        <div className="w-56 h-2.5 bg-[#FDF6EC] rounded-full overflow-hidden border-2 border-black mb-3 shadow-inner">
          <div
            className="h-full bg-[#6e1919] rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <p className="text-[11px] text-black font-black tracking-wider uppercase">
          {progress < 40 && 'Επιλέγουμε τα πιο φρέσκα υλικά...'}
          {progress >= 40 && progress < 85 && 'Ανάβουμε τους φούρνους & τις κατσαρόλες...'}
          {progress >= 85 && 'Καλώς ήρθατε!'}
        </p>

        {/* Skip button for immediate entry */}
        <button
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 300);
          }}
          className="mt-6 text-xs text-black font-extrabold underline underline-offset-4 transition-colors cursor-pointer"
        >
          Άμεση είσοδος →
        </button>
      </div>
    </div>
  );
};
