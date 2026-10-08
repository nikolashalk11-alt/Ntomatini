import React, { useState } from 'react';
import { NtomatiniLogo } from './NtomatiniLogo.tsx';
import { Bike, Phone, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async () => {
    const phoneNumber = '26510 35000';
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(phoneNumber);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = phoneNumber;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handlePhoneClick = () => {
    if (window.innerWidth < 768) {
      window.location.href = 'tel:2651035000';
    } else {
      handleCopyPhone();
    }
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-[#D2B48C]/95 backdrop-blur-md border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo brand link */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer text-left"
          >
            <NtomatiniLogo size="sm" showSubtext={false} />
            <span className="font-handwritten text-xl sm:text-2xl text-black font-black ml-1.5 hidden xs:inline">
              φαΐ στο κουτί
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm font-extrabold text-black">
            <button
              onClick={() => scrollTo('food-gallery')}
              className="hover:underline underline-offset-4 transition-colors cursor-pointer text-black font-extrabold"
            >
              Τα Πιάτα μας (7)
            </button>

            <button
              onClick={() => scrollTo('ingredients')}
              className="hover:underline underline-offset-4 transition-colors cursor-pointer text-black font-extrabold"
            >
              Αγνά Υλικά
            </button>

            <button
              onClick={() => scrollTo('delivery')}
              className="hover:underline underline-offset-4 transition-colors cursor-pointer flex items-center gap-1.5 text-black font-extrabold"
            >
              <Bike className="w-4 h-4 text-black" />
              <span>Delivery</span>
            </button>

            <button
              type="button"
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#6e1919] hover:bg-[#561313] text-white border-2 border-black rounded font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95 cursor-pointer"
              title="Κλήση / Αντιγραφή: 26510 35000"
              aria-label="Κλήση στο 26510 35000"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Αντιγράφηκε!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>26510 35000</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Phone button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={handlePhoneClick}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#6e1919] hover:bg-[#561313] text-white border-2 border-black rounded text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform active:scale-95 cursor-pointer"
              title="Κλήση: 26510 35000"
              aria-label="Κλήση στο 26510 35000"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span>Αντιγράφηκε!</span>
                </>
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5 text-white" />
                  <span>26510 35000</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};
