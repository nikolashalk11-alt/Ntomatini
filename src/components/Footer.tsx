import React from 'react';
import { NtomatiniLogo } from './NtomatiniLogo.tsx';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#D2B48C] text-black border-t-2 border-black pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-2 flex flex-col items-start space-y-4">
            <div className="border-2 border-black bg-[#FDF6EC] p-2.5 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <NtomatiniLogo size="sm" showSubtext={true} />
            </div>

            <p className="font-body text-base text-black max-w-md leading-relaxed font-semibold">
              Παραδοσιακά και σύγχρονα σπιτικά μαγειρευτά φαγητά στα Ιωάννινα. 
              Αγνές πρώτες ύλες, εξαιρετικό παρθένο ελαιόλαδο και μεράκι σε κάθε μπουκιά. 
              Φαΐ στο κουτί — ζεστό, φρέσκο και λαχταριστό στο τραπέζι σας.
            </p>

            {/* Social Media Links with authentic SVG logos */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-black text-black">
                Ακολουθήστε μας:
              </span>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ntomatini_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black bg-[#FDF6EC] hover:bg-[#6e1919] hover:text-white flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                title="Ακολουθήστε το Ντοματίνι στο Instagram"
                aria-label="Instagram @ntomatini_"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/%CE%9D%CF%84%CE%BF%CE%BC%CE%B1%CF%84%CE%AF%CE%BD%CE%B9-%CE%A6%CE%B1%CE%90-%CE%A3%CF%84%CE%BF-%CE%9A%CE%BF%CF%85%CF%84%CE%AF-61552134661993/?locale=el_GR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-black bg-[#FDF6EC] hover:bg-[#6e1919] hover:text-white flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                title="Βρείτε το Ντοματίνι στο Facebook"
                aria-label="Facebook Ντοματίνι - Φαΐ Στο Κουτί"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Επικοινωνία (Contact) */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-base font-black text-black uppercase tracking-wider border-b-2 border-black/30 pb-2">
              Επικοινωνία
            </h4>
            <div className="space-y-2 text-sm text-black font-bold">
              <a
                href="tel:2651035000"
                className="flex items-center gap-2 font-black text-black hover:underline transition-colors text-base"
              >
                <Phone className="w-4 h-4 text-black" />
                <span>26510 35000</span>
              </a>

              <p className="flex items-center gap-2 text-black font-bold">
                <MapPin className="w-4 h-4 text-black" />
                <span>Ιωάννινα, Ελλάδα</span>
              </p>

              <div className="pt-2 text-xs text-black font-bold">
                <span className="font-black text-black">Online Παραγγελίες:</span>
                <div className="mt-1 flex gap-2">
                  <a
                    href="https://www.e-food.gr/delivery/ioannina/ntomatini-6890363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline font-black"
                  >
                    efood
                  </a>
                  <span className="text-black">·</span>
                  <a
                    href="https://wolt.com/el/grc/ioannina/restaurant/ntomatini-fai-sto-kouti?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline font-black"
                  >
                    Wolt
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Ώρες Λειτουργίας (Hours) */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-base font-black text-black uppercase tracking-wider border-b-2 border-black/30 pb-2">
              Ωράριο Διανομής
            </h4>
            <div className="space-y-1.5 text-xs sm:text-sm text-black font-bold">
              <div className="flex items-center justify-between">
                <span>Δευτέρα - Παρασκευή:</span>
                <span className="font-black text-black">11:30 - 18:00</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Σάββατο:</span>
                <span className="font-black text-black">11:30 - 18:00</span>
              </div>
              <div className="flex items-center justify-between text-black">
                <span>Κυριακή:</span>
                <span className="font-black text-black">Κλειστά</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t-2 border-black/30 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black font-bold">
          <p>© {new Date().getFullYear()} Ντοματίνι - Φαΐ στο κουτί. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>

      </div>
    </footer>
  );
};
