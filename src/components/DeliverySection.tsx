import React from 'react';
import { Phone, Bike, ExternalLink } from 'lucide-react';

export const DeliverySection: React.FC = () => {
  return (
    <section id="delivery" className="py-16 md:py-24 bg-[#D2B48C] border-t-2 border-b-2 border-black relative overflow-hidden">
      {/* Background subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6e1919] border-2 border-black text-white text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Bike className="w-3.5 h-3.5 text-white" />
          <span>Delivery & Take Away στα Ιωάννινα</span>
        </div>

        {/* Primary Phone Heading */}
        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-black text-black mb-3 tracking-tight">
          Τηλεφωνήστε στο{' '}
          <a
            href="tel:2651035000"
            className="text-black hover:opacity-85 transition-opacity inline-block underline decoration-black decoration-2 underline-offset-6"
          >
            26510 35000
          </a>
        </h2>

        <p className="font-body text-black text-lg sm:text-xl max-w-2xl mx-auto mb-8 font-semibold sm:font-bold leading-relaxed">
          Παραγγείλτε τηλεφωνικά για άμεση εξυπηρέτηση ή επιλέξτε την αγαπημένη σας online πλατφόρμα. 
          Το φαγητό φτάνει ζεστό, φρεσκομαγειρεμένο και ασφαλές στο κουτί του!
        </p>

        {/* Phone Call Card (White/Cream BG: Keep text black, bold font) */}
        <div className="max-w-md mx-auto mb-12">
          <a
            href="tel:2651035000"
            className="group relative flex items-center justify-between p-4 sm:p-5 bg-[#FDF6EC] border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-[#6e1919] text-white flex items-center justify-center group-hover:scale-105 transition-transform border-2 border-black shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-black font-extrabold block">
                  Άμεση Τηλεφωνική Παραγγελία
                </span>
                <span className="font-serif-title text-2xl sm:text-3xl font-black text-black">
                  26510 35000
                </span>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center text-xs font-black text-black group-hover:translate-x-1 transition-transform">
              Κλήση →
            </span>
          </a>
        </div>

        {/* Separator: ή βρείτε μας στο efood ή wolt */}
        <div className="relative flex items-center justify-center my-8">
          <div className="border-t-2 border-black/30 w-full max-w-xs" />
          <span className="bg-[#D2B48C] px-4 font-menu-serif text-lg sm:text-xl text-black font-black italic">
            ή βρείτε μας στο efood ή wolt
          </span>
          <div className="border-t-2 border-black/30 w-full max-w-xs" />
        </div>

        {/* Delivery Platform Cards (efood & wolt) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          
          {/* E-FOOD CARD - Official clean branding without smiley */}
          <a
            href="https://www.e-food.gr/delivery/ioannina/ntomatini-6890363"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-6 bg-[#FDF6EC] border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          >
            {/* Authentic efood Brand Logo - Clean, no smiley */}
            <div className="h-14 sm:h-16 flex items-center justify-center mb-3">
              <svg
                viewBox="0 0 170 54"
                className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* efood red pill badge */}
                <rect width="170" height="54" rx="14" fill="#E53935" />
                {/* Text: efood */}
                <text
                  x="85"
                  y="37"
                  fill="white"
                  fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="34"
                  letterSpacing="-0.03em"
                  textAnchor="middle"
                >
                  efood
                </text>
              </svg>
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-black group-hover:underline transition-colors">
              <span>Παραγγελία μέσω efood</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] text-black mt-1 font-bold">
              Αξιολογήσεις & online πληρωμή
            </span>
          </a>

          {/* WOLT CARD */}
          <a
            href="https://wolt.com/el/grc/ioannina/restaurant/ntomatini-fai-sto-kouti?"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center p-6 bg-[#FDF6EC] border-2 border-black rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
          >
            {/* Authentic Wolt Brand Logo */}
            <div className="h-14 sm:h-16 flex items-center justify-center mb-3">
              <svg
                viewBox="0 0 170 54"
                className="h-10 sm:h-12 w-auto transition-transform group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wolt cyan rounded pill badge */}
                <rect width="170" height="54" rx="14" fill="#00C2E8" />
                {/* Official cursive script Wolt wordmark */}
                <svg x="32" y="9" width="106" height="36" viewBox="0 0 720 262" fill="white">
                  <path d="M411.996 159.402c-12.655-9.343-18.116-26.236-13.633-52.765.14-.84.502-2.324.98-4.138-2.635-1.049-5.617-1.498-8.976-1.498-29.86 0-46.485 50.303-46.485 97.062 0 24.374 9.528 36.655 23.763 36.655 19.738 0 37.879-34.26 44.351-75.316m246.149-47.158s-14.268 68.612-14.268 93.99c0 17.638 8.218 23.682 18.37 23.682 12.837 0 24.623-8.102 35.6-28.21 2.52-4.615 11.736-1.727 16.57 3.835 2.106 2.426-.318 7.317-3.638 12.913C694.144 246.502 670.643 262 646.225 262c-26.6 0-42.953-12.398-47.05-43.758C583.917 242.244 559.498 262 531.516 262c-34.02 0-48.5-18.827-48.5-52.607 0-22.281 7.505-60.23 7.505-60.23-9.966 8.981-21.522 15.475-34.824 18.172C442.624 228.594 407.632 262 360.613 262c-39.819 0-67.176-20.926-67.176-71.113 0-61.952 39.45-117.15 101.346-117.15 35.243 0 60.825 18.91 63.078 62.92 14.492-2.446 27.884-12.369 39.545-26.498 5.248-33.237 12.748-71.145 17.325-92.536.953-4.45 2.579-12.797 10.504-15.267 8.87-2.768 21.537-3.256 34.857-.608 7.384 1.467 9.261 8.367 9.261 14.533 0 16.397-7.769 52.57-21.278 85.1-9.574 36.262-16.142 72.442-16.142 101.05 0 20.673 6.84 27.485 18.309 27.485 18.72 0 40.466-26.001 50.939-61.226 1.626-16.944 5.916-44.198 8.068-54.357-11.597.557-19.01.894-19.01.894-6.034.221-11.883-2.323-11.586-7.71.394-7.096 1.37-13.925 2.565-18.734 1.196-4.809 3.938-7.793 9.768-7.896 6.255-.11 15.25-.037 24.516.185 3.122-17.875 5.746-31.825 8.266-43.421 1.007-4.641 5.35-7.313 9.82-7.815 5.35-.6 21.291-.487 28.23 1.196 6.986 1.698 9.913 7.185 8.702 12.735-2.472 11.303-7.526 39.04-7.526 39.04a6147.07 6147.07 0 0 1 46.66 2.252c7.475.335 11.327 4.544 10.131 11.125-2.016 11.055-10.246 14.608-21.875 14.875-13.262.304-27.21.731-39.765 1.185M299.32 23.772c0 77.229-41.424 237.729-105.603 237.729-48.42 0-58.144-54.148-60.644-123.13-24.267 52.943-37.112 80.43-53.148 107.952C72.35 259.32 63.246 262 53.302 262c-8.757 0-31.342-2.926-36.603-6.19-5.261-3.262-8.153-6.21-10.73-18.68-11.925-57.698-4.212-132.317 7.642-191.802 2.071-10.393 4.737-15.415 11.917-20.121 7.659-5.019 24.632-5.373 35.686-5.566 5.868-.103 9.279 4.121 7.803 11.274-10.677 51.94-23.21 123.105-13.445 196.466 0 0 36.936-73.192 75.224-164.314 7.685-18.291 9.405-24.297 16.715-25.917 9.568-2.12 16.467-2.13 26.102-.959 6.357.774 9.553 2.432 9.309 11.24-.667 23.745-2.257 50.615-2.257 78.511 0 47.204 5.064 100.27 23.246 100.27 24.419 0 45.87-113.537 38.294-211.097-.524-6.738 1.912-13.583 9.113-14.33C254.925.412 262.227 0 270.457 0c18.748 0 28.864 3.343 28.864 23.772" />
                </svg>
              </svg>
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-black group-hover:underline transition-colors">
              <span>Παραγγελία μέσω Wolt</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] text-black mt-1 font-bold">
              Live tracking & γρήγορη παράδοση
            </span>
          </a>

        </div>

      </div>
    </section>
  );
};
