import React from 'react';

export const IngredientsSection: React.FC = () => {
  return (
    <section id="ingredients" className="bg-[#D2B48C] border-b-2 border-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      {/* Narrative Intro Card: Pure & Fresh Ingredients Statement */}
      <div className="max-w-4xl mx-auto text-center bg-[#FDF6EC] border-2 border-black rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 sm:p-12 md:p-14">
        <span className="text-xs uppercase tracking-widest text-black font-black block mb-2">
          Η Δική μας Δέσμευση
        </span>

        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
          Αγνά & Φρέσκα Υλικά χωρίς Συμβιβασμούς
        </h2>

        <div className="space-y-4 text-black text-base sm:text-lg leading-relaxed font-semibold">
          <p>
            Στο <strong className="text-black font-black">Ντοματίνι</strong> δεν θα βρείτε έτοιμες σκόνες, 
            συντηρητικά ή τεχνητά ενισχυτικά γεύσης. Κάθε σταγόνα λαδιού είναι{' '}
            <strong className="text-black font-black">100% εξαιρετικό παρθένο ελαιόλαδο</strong>, 
            τα κρέατα μας είναι αποκλειστικά νωπά από ελεγμένες φάρμες και τα λαχανικά μας 
            φτάνουν καθημερινά από ντόπιους παραγωγούς των Ιωαννίνων και της Ηπείρου.
          </p>

          <p className="font-menu-serif text-lg sm:text-xl text-black italic font-extrabold pt-2">
            «Μαγειρεύουμε για εσάς με την ίδια ακριβώς φροντίδα και καθαριότητα που μαγειρεύουμε 
            για τα παιδιά και την οικογένειά μας.»
          </p>
        </div>
      </div>
    </section>
  );
};
