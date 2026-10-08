import React from 'react';
import { Utensils, ExternalLink } from 'lucide-react';

export const WeeklyMenuSection: React.FC = () => {
  return (
    <section id="weekly-menu" className="py-16 md:py-24 bg-[#D2B48C] text-black border-b-2 border-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6e1919] text-white border-2 border-black text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Utensils className="w-3.5 h-3.5 text-white" />
          <span>Καθημερινά Μαγειρευτά Φαγητά</span>
        </div>

        {/* Title */}
        <h2 className="font-serif-title text-3xl sm:text-5xl font-black tracking-tight text-black mb-4">
          Το Μενού της Εβδομάδας
        </h2>
        
        {/* Statement replacing the previous paragraph */}
        <p className="font-body text-black text-lg sm:text-2xl font-black leading-relaxed max-w-3xl mx-auto mb-8">
          Τα πιάτα μας αναρτώνται στην σελίδα μας στο Facebook &amp; Instagram
        </p>

        {/* Direct Action Links to Facebook & Instagram */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/ntomatini_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FDF6EC] hover:bg-[#6e1919] text-black hover:text-white border-2 border-black font-extrabold text-sm sm:text-base rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 group cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram @ntomatini_</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/p/%CE%9D%CF%84%CE%BF%CE%BC%CE%B1%CF%84%CE%AF%CE%BD%CE%B9-%CE%A6%CE%B1%CE%90-%CE%A3%CF%84%CE%BF-%CE%9A%CE%BF%CF%85%CF%84%CE%AF-61552134661993/?locale=el_GR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FDF6EC] hover:bg-[#6e1919] text-black hover:text-white border-2 border-black font-extrabold text-sm sm:text-base rounded shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 group cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
            </svg>
            <span>Facebook Ντοματίνι</span>
            <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
          </a>
        </div>

      </div>
    </section>
  );
};
