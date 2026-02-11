import React from 'react';
import { IMAGES } from '../constants';
import { Heart, MessageCircle, Share2, Play } from 'lucide-react';

const ViralFeed: React.FC = () => {
    // Duplicate images to simulate a feed
    const feedItems = [
        { img: IMAGES.aesthetic, likes: "124K", user: "@gamer_den" },
        { img: IMAGES.features, likes: "89K", user: "@cozy_vibes" },
        { img: IMAGES.hero, likes: "205K", user: "@interior_daily" },
        { img: IMAGES.dreamState, likes: "45K", user: "@chill_pill" },
    ];

  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
         <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            The <span className="text-neon">Viral</span> Feed.
         </h2>
         <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <span>Scroll to explore</span> <span className="animate-pulse">→</span>
         </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-12 px-6 gap-6 snap-x snap-mandatory hide-scrollbar">
          {feedItems.map((item, idx) => (
              <div key={idx} className="flex-none snap-center w-[300px] md:w-[350px] relative group">
                  {/* Phone Frame Mockup */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-surface shadow-2xl bg-gray-900 aspect-[9/16]">
                      <img 
                        src={item.img} 
                        alt="Viral content" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
                      
                      {/* UI Elements */}
                      <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-2 mb-4">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon to-purple-500"></div>
                              <span className="font-bold text-white text-sm shadow-black drop-shadow-md">{item.user}</span>
                          </div>
                          <p className="text-white/90 text-sm font-light leading-snug mb-4">
                              POV: You finally bought the AuraTide lamp and your room looks like this... 🌊✨ #aesthetic
                          </p>
                          <div className="flex items-center justify-between text-white">
                               <div className="flex flex-col items-center gap-1">
                                  <Heart fill="white" size={24} />
                                  <span className="text-xs font-bold">{item.likes}</span>
                               </div>
                               <div className="flex flex-col items-center gap-1">
                                  <MessageCircle size={24} />
                                  <span className="text-xs font-bold">1.2k</span>
                               </div>
                               <div className="flex flex-col items-center gap-1">
                                  <Share2 size={24} />
                                  <span className="text-xs font-bold">Share</span>
                               </div>
                          </div>
                      </div>
                      
                      {/* Play Button */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center pointer-events-none">
                          <Play fill="white" className="ml-1" />
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </section>
  );
};

export default ViralFeed;