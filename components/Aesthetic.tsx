import React from 'react';
import { IMAGES } from '../constants';

const Aesthetic: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-end">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.aesthetic} 
          alt="Gaming setup with purple lighting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-16 md:pb-24">
        <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase italic tracking-tighter">
                Level Up <br/> <span className="text-neon">Your Setup.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 border-l-4 border-neon pl-4">
                Say goodbye to boring lighting. With 16 dynamic colors and adjustable brightness, curate the perfect backdrop for your streams, your gaming sessions, or your late-night vibes.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Aesthetic;