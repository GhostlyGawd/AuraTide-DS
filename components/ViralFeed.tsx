import React from 'react';
import { IMAGES } from '../constants';
import { Play, Heart } from 'lucide-react';

const ViralFeed: React.FC = () => {
    // Duplicate images to simulate a feed
    const feedItems = [
        { img: IMAGES.aesthetic, likes: "124K", user: "@gamer_den" },
        { img: IMAGES.features, likes: "89K", user: "@cozy_vibes" },
        { img: IMAGES.hero, likes: "205K", user: "@interior_daily" },
        { img: IMAGES.dreamState, likes: "45K", user: "@chill_pill" },
    ];

  return (
    <section className="py-20 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center md:text-left">
         <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight mb-2">
            The Internet is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Obsessed.</span>
         </h2>
         <p className="text-secondary font-medium">Join 100,000+ others shifting their vibe.</p>
      </div>

      {/* Horizontal Scroll Snap Container */}
      <div className="flex overflow-x-auto pb-8 px-6 gap-4 snap-x snap-mandatory hide-scrollbar">
          {feedItems.map((item, idx) => (
              <div key={idx} className="flex-none snap-center w-[220px] md:w-[280px] relative group cursor-pointer">
                  {/* Phone Frame Mockup */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[9/16] bg-black">
                      <img 
                        src={item.img} 
                        alt="Viral content" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                      
                      {/* TikTok Style Overlay */}
                      <div className="absolute top-4 right-4">
                          {/* TikTok Logo Placeholder */}
                          <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                          </div>
                      </div>

                      {/* Center Play Button */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play fill="white" className="text-white ml-1 w-5 h-5" />
                      </div>

                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="text-xs font-bold mb-1 shadow-black drop-shadow-md">{item.user}</div>
                          <div className="flex items-center gap-1">
                              <Heart fill="white" size={12} />
                              <span className="text-xs font-medium">{item.likes}</span>
                          </div>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </section>
  );
};

export default ViralFeed;