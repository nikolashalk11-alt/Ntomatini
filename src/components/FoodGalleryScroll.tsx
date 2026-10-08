import React, { useState, useEffect } from 'react';
import { FoodImageItem } from '../data/images.ts';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FoodGalleryScrollProps {
  images: FoodImageItem[];
}

export const FoodGalleryScroll: React.FC<FoodGalleryScrollProps> = ({
  images,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const numItems = images?.length || 0;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (numItems === 0) return;
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : numItems - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (numItems === 0) return;
    setActiveIndex((prev) => (prev < numItems - 1 ? prev + 1 : 0));
  };

  const jumpToSlide = (idx: number) => {
    setActiveIndex(idx);
  };

  // Keyboard arrow keys navigation (must be called unconditionally before any early returns)
  useEffect(() => {
    if (numItems === 0) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    // Disallow horizontal wheel/trackpad scrolling on the dishes showcase
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > 0) {
        e.preventDefault();
      }
    };

    const sectionEl = document.getElementById('food-gallery');
    if (sectionEl) {
      sectionEl.addEventListener('wheel', handleWheel, { passive: false });
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (sectionEl) {
        sectionEl.removeEventListener('wheel', handleWheel);
      }
    };
  }, [numItems]);

  if (!images || images.length === 0) {
    return null;
  }

  const activeDish = images[activeIndex] || images[0];

  return (
    <section 
      id="food-gallery"
      className="relative bg-[#D2B48C] border-b-2 border-black py-10 sm:py-16 md:py-20 overflow-hidden max-w-full select-none"
      style={{ touchAction: 'pan-y' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full flex flex-col gap-6 sm:gap-8">
        
        {/* Section Header Strip */}
        <div className="w-full flex items-center justify-between pb-4 border-b border-black/20">
          <h2 className="text-xs sm:text-sm font-black uppercase tracking-widest text-black">
            Τα Καθημερινά μας Μαγειρευτά
          </h2>
        </div>

        {/* Center Presentation: Image Showcase + Narrative Info */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-12">
          
          {/* Main Visual Image Card with contained border artifact */}
          <div className="relative w-full md:w-3/5 h-[320px] sm:h-[420px] md:h-[480px] max-w-full flex-shrink-0 group">
            <div className="relative w-full h-full border-2 border-black bg-zinc-900 rounded overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              {/* Stacked Images Cross-fading */}
              {images.map((img, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={img.id}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  >
                    <img
                      src={img.defaultUrl}
                      alt={img.alt}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        isActive ? 'scale-100' : 'scale-105'
                      }`}
                      loading="eager"
                    />
                    {/* Subtle gradient vignette at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                  </div>
                );
              })}

              {/* In-Card Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-[#6e1919] text-white border-2 border-black font-extrabold text-xs tracking-wider uppercase rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {activeDish?.tag}
                </span>
              </div>

              {/* Image Counter Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-black text-[#FDF6EC] border-2 border-black text-xs font-mono font-bold px-2.5 py-1 rounded shadow">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>

              {/* Prominent Navigation Arrow Left */}
              <button
                onClick={(e) => handlePrev(e)}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FDF6EC] hover:bg-[#6e1919] text-black hover:text-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 active:scale-90 transition-all cursor-pointer"
                aria-label="Προηγούμενο πιάτο"
                title="Προηγούμενο πιάτο"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Prominent Navigation Arrow Right */}
              <button
                onClick={(e) => handleNext(e)}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FDF6EC] hover:bg-[#6e1919] text-black hover:text-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 active:scale-90 transition-all cursor-pointer"
                aria-label="Επόμενο πιάτο"
                title="Επόμενο πιάτο"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Dish Information Narrative */}
          <div className="w-full md:w-2/5 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-1.5 text-xs text-black font-black uppercase tracking-wider mb-1">
              <span>ΤΑ ΑΓΑΠΗΜΕΝΑ ΜΑΣ #7</span>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 leading-tight">
              {activeDish?.title}
            </h3>

            <p className="font-menu-serif text-base sm:text-lg text-black italic font-extrabold mb-3">
              {activeDish?.subtitle}
            </p>

            <p className="font-body text-black font-semibold sm:font-bold text-base sm:text-lg leading-relaxed mb-6">
              {activeDish?.description}
            </p>

            {/* Stepper Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => jumpToSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border border-black ${
                    idx === activeIndex
                      ? 'w-8 sm:w-10 bg-[#6e1919]'
                      : 'w-2.5 bg-[#FDF6EC] hover:bg-black/40'
                  }`}
                  aria-label={`Μετάβαση στο πιάτο ${idx + 1}`}
                  title={img.title}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
