import React from 'react';
import { Phone, UtensilsCrossed } from 'lucide-react';

interface HeroSectionProps {
  onScrollToMenu: () => void;
  onScrollToGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToMenu,
  onScrollToGallery,
}) => {
  return (
    <header className="relative bg-[#D2B48C] pt-8 pb-16 md:pt-12 md:pb-24 border-b-2 border-black overflow-hidden">
      {/* Subtle paper grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Large Prominent Headline */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-black tracking-normal text-black max-w-4xl leading-[1.18] mb-6 sm:mb-8">
          Καλώς ορίσατε στο{' '}
          <span className="text-black inline-block underline decoration-black decoration-2 underline-offset-8">
            Ντοματίνι
          </span>
        </h1>

        {/* Philosophy Text */}
        <div className="max-w-3xl mx-auto space-y-4 text-black mb-10 px-2">
          <p className="font-menu-serif text-lg sm:text-xl md:text-2xl text-black leading-relaxed font-bold italic">
            «Το σπιτικό φαγητό δεν είναι απλώς ένα γεύμα· είναι η ζεστασιά του μεσημεριανού τραπεζιού, 
            η ευωδιά του έξτρα παρθένου ελαιόλαδου και η γαλήνη της καλομαγειρεμένης κατσαρόλας.»
          </p>

          <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-black font-semibold">
            Στο <strong className="font-black text-black">Ντοματίνι</strong> μαγειρεύουμε καθημερινά με μεράκι και αγνές πρώτες ύλες, 
            όπως ακριβώς στο σπίτι μας. Ολόφρεσκα υλικά, παραδοσιακές συνταγές και αληθινό σπιτικό φαγητό 
            — έτοιμο για παραλαβή ή delivery στην πόρτα σας.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
          <a
            href="tel:2651035000"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#6e1919] hover:bg-[#561313] text-white font-extrabold text-sm sm:text-base rounded-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-white" />
            <span>Παραγγελία: 26510 35000</span>
          </a>

          {/* Button with White/Cream BG: Keep text black */}
          <button
            onClick={onScrollToMenu}
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-black bg-[#FDF6EC] hover:bg-[#6e1919] text-black hover:text-white font-extrabold text-sm sm:text-base rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4 text-black group-hover:text-white transition-colors" />
            <span>Πού Να Δείτε το Μενού</span>
          </button>

          {/* Button on beige/tan BG: Text black and bold */}
          <button
            onClick={onScrollToGallery}
            className="inline-flex items-center justify-center px-4 py-3.5 text-black hover:underline font-extrabold text-sm transition-colors cursor-pointer"
          >
            <span>Τα Πιάτα μας</span>
          </button>
        </div>

      </div>
    </header>
  );
};
