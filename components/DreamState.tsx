import React from 'react';
import { IMAGES } from '../constants';

const DreamState: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <img 
           src={IMAGES.dreamState} 
           alt="Spa like atmosphere with AuraTide lamp" 
           className="w-full h-full object-cover"
         />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/20 via-black/60 to-midnight"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="font-display text-4xl md:text-6xl font-black leading-none mb-6 text-white drop-shadow-lg uppercase">
          Escape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-purple-400 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">Chaos.</span>
        </h2>
        <p className="text-gray-100 text-lg md:text-2xl leading-relaxed font-light max-w-2xl mx-auto drop-shadow-md">
          Your room should be your escape. Whether you need to decompress after a long day, set the mood for a movie, or drift into a deep sleep, the AuraTide creates a dynamic, rotating water-ripple effect that washes stress away.
        </p>
      </div>
    </section>
  );
};

export default DreamState;