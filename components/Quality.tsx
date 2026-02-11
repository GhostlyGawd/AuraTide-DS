import React from 'react';
import { IMAGES } from '../constants';

const Quality: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-midnight relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Crafted for Clarity.</h2>
        
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src={IMAGES.quality} 
            alt="Macro shot of crystal texture" 
            className="w-full h-auto transform group-hover:scale-105 transition duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent flex items-end justify-center pb-8 md:pb-12">
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl px-6 leading-relaxed">
              "Unlike standard LEDs, our precision-cut acrylic crystal lens refracts light into a complex, organic web of waves. It looks like a piece of art even when it's turned off."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;