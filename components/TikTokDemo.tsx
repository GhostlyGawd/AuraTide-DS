import React from 'react';
import { IMAGES } from '../constants';
import { Play } from 'lucide-react';

const TikTokDemo: React.FC = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-black overflow-hidden group">
        {/* Full Width Background */}
        <div className="absolute inset-0">
            <img 
                src={IMAGES.aesthetic} 
                alt="AuraTide viral tiktok setup" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-[20s] ease-linear" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/50"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
             <div className="inline-block bg-pink-600/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider shadow-[0_0_15px_rgba(219,39,119,0.5)]">
                Trending Now
             </div>
             
             <h2 className="font-display text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
                Viral for a <span className="text-neon drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Reason.</span>
             </h2>
             
             <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 hover:scale-110 transition duration-300 mx-auto mb-8 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <Play fill="white" className="text-white ml-2" size={40} />
             </div>

             <p className="text-xl text-gray-200 mb-8 font-light tracking-wide max-w-2xl mx-auto">
                As seen on <span className="text-neon font-bold">#GamingSetups</span> and <span className="text-neon font-bold">#CozyRoom</span>. The lighting hack that transforms your space instantly.
             </p>
             
             <div className="flex items-center justify-center space-x-4 text-gray-400">
                <div className="flex -space-x-3">
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-500 bg-cover bg-center" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=1)'}}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-400 bg-cover bg-center" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=2)'}}></div>
                    <div className="w-12 h-12 rounded-full border-2 border-black bg-gray-300 bg-cover bg-center" style={{backgroundImage: 'url(https://i.pravatar.cc/100?img=3)'}}></div>
                </div>
                <p className="text-sm font-medium text-white/80">Liked by 150K+ people</p>
             </div>
        </div>
    </section>
  );
};

export default TikTokDemo;