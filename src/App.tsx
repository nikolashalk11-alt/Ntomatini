/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader.tsx';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { FoodGalleryScroll } from './components/FoodGalleryScroll.tsx';
import { IngredientsSection } from './components/IngredientsSection.tsx';
import { DeliverySection } from './components/DeliverySection.tsx';
import { WeeklyMenuSection } from './components/WeeklyMenuSection.tsx';
import { Footer } from './components/Footer.tsx';
import { DEFAULT_FOOD_IMAGES } from './data/images.ts';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#D2B48C] text-black flex flex-col font-sans selection:bg-[#6e1919] selection:text-white overflow-x-hidden max-w-full w-full">
      {/* Smooth Preloader with recreated logo on warm tan background */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Main App Content */}
      <div className={`flex flex-col min-h-screen transition-opacity duration-500 overflow-x-hidden max-w-full w-full ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection
          onScrollToMenu={() => scrollToSection('weekly-menu')}
          onScrollToGallery={() => scrollToSection('food-gallery')}
        />

        {/* 7 Dishes Interactive Showcase Section */}
        <FoodGalleryScroll images={DEFAULT_FOOD_IMAGES} />

        {/* Ingredients Narrative & Commitment Section */}
        <IngredientsSection />

        {/* Delivery / Order Section (26510 35000 & efood & wolt) */}
        <DeliverySection />

        {/* Transcribed Weekly Menu (Text-based, with search & print) */}
        <WeeklyMenuSection />

        {/* Footer with telephone, social links (Instagram & Facebook) */}
        <Footer />

        {/* Floating Quick Action Controls (Scroll to Top) */}
        {showScrollTop && (
          <div className="fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2.5">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#FDF6EC] border-2 border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#6e1919] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Επιστροφή στην κορυφή"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
