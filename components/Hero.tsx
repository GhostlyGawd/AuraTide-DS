import React, { useState, useEffect } from 'react';
import { Star, Truck, ShieldCheck, ChevronRight, Check, Flame } from 'lucide-react';
import { PDP_GALLERY, IMAGES } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedBundle, setSelectedBundle] = useState<'solo' | 'sanctuary'>('solo');
  const [viewerCount, setViewerCount] = useState(14);
  
  // Use the ordered gallery from constants
  const gallery = PDP_GALLERY;

  // Fake live viewer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(8, Math.min(24, prev + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product" className="pt-4 pb-12 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start">
          
          {/* LEFT: Product Gallery (Sticky on Desktop) */}
          <div className="w-full md:w-3/5 lg:w-1/2 md:sticky md:top-24">
            {/* Main Image */}
            <div className="relative aspect-square bg-off-white rounded-3xl overflow-hidden mb-4 border border-border-gray group shadow-sm">
                <img 
                    src={gallery[activeImage]} 
                    alt="AuraTide Crystal Projector" 
                    className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide z-10">
                    Best Seller
                </div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {gallery.map((img, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`cursor-pointer flex-shrink-0 w-20 h-20 rounded-xl border-2 overflow-hidden transition-all duration-200 ${activeImage === idx ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                        <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
          </div>

          {/* RIGHT: Buy Box */}
          <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col">
             
             {/* Title Block */}
             <div className="mb-4">
                 <div className="flex items-center gap-2 mb-2">
                     <div className="flex text-yellow-500">
                         {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                     </div>
                     <span className="text-xs font-bold text-secondary">4.9/5.0 (12,400+ Reviews)</span>
                 </div>
                 <h1 className="text-3xl md:text-5xl font-black text-primary tracking-tight leading-tight mb-2">
                    AuraTide™ Crystal Projector
                 </h1>
                 <div className="flex items-center gap-3">
                     <span className="text-2xl font-bold text-primary">{selectedBundle === 'solo' ? '$39.95' : '$69.95'}</span>
                     <span className="text-lg text-secondary line-through">{selectedBundle === 'solo' ? '$79.95' : '$139.95'}</span>
                     <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">50% OFF</span>
                 </div>
             </div>

             {/* Live Counter */}
             <div className="flex items-center gap-2 text-sm font-medium text-red-500 mb-6 bg-red-50 w-fit px-3 py-1 rounded-full animate-pulse">
                <Flame size={16} fill="currentColor" />
                <span>{viewerCount} people are viewing this offer</span>
             </div>

             <p className="text-secondary leading-relaxed mb-8 border-b border-border-gray pb-8">
                 Transform your space instantly. The AuraTide™ uses a precision-cut crystal lens to project a rotating, organic water-ripple effect. Select from 16 colors to match your mood.
             </p>

             {/* VISUAL BUNDLE SELECTOR */}
             <div className="mb-8">
                 <span className="text-sm font-bold text-primary block mb-3 uppercase tracking-wider">Select Your Vibe</span>
                 <div className="grid grid-cols-2 gap-4">
                     
                     {/* Option 1: Solo Vibe */}
                     <div 
                        onClick={() => setSelectedBundle('solo')}
                        className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-200 flex flex-col aspect-[3/4] ${
                            selectedBundle === 'solo' 
                            ? 'border-2 border-black bg-white ring-1 ring-black/5 shadow-xl scale-[1.02]' 
                            : 'border border-gray-200 bg-white hover:border-gray-300'
                        }`}
                     >
                         <div className="h-[55%] w-full bg-gray-50 p-4 flex items-center justify-center">
                            <img src={IMAGES.hero} alt="Solo Lamp" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                         </div>
                         <div className="flex-1 p-3 flex flex-col items-center justify-center text-center">
                            <span className="font-bold text-primary text-sm">Solo Vibe</span>
                            <span className="text-xs text-secondary mt-1">1 Lamp</span>
                            <span className="font-bold text-primary mt-auto pt-2">$39.95</span>
                         </div>
                     </div>

                     {/* Option 2: Sanctuary Bundle */}
                     <div 
                        onClick={() => setSelectedBundle('sanctuary')}
                        className={`relative cursor-pointer rounded-xl transition-all duration-200 aspect-[3/4] group ${
                            selectedBundle === 'sanctuary' 
                            ? 'border-2 border-black bg-[#F5F5F7] shadow-xl scale-[1.02]' 
                            : 'p-[2px] bg-gradient-to-r from-brand-cyan to-brand-purple hover:shadow-glow hover:scale-[1.01]'
                        }`}
                     >
                         <div className={`w-full h-full rounded-[10px] overflow-hidden flex flex-col relative ${selectedBundle === 'sanctuary' ? '' : 'bg-[#F5F5F7]'}`}>
                             {/* Badge */}
                             <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full z-10 whitespace-nowrap shadow-sm">
                                BEST VALUE
                             </div>

                             <div className="h-[55%] w-full bg-gray-100/50 p-4 flex items-center justify-center">
                                <img src={IMAGES.offer} alt="Sanctuary Bundle" className="max-w-full max-h-full object-cover rounded-md" />
                             </div>
                             
                             <div className="flex-1 p-3 flex flex-col items-center justify-center text-center">
                                <span className="font-bold text-primary text-sm">Sanctuary Bundle</span>
                                <span className="text-xs text-secondary mt-1">2 Lamps + Remote</span>
                                <span className="font-bold text-primary mt-auto pt-2">$69.95</span>
                             </div>
                         </div>
                     </div>

                 </div>
             </div>

             {/* MAIN CTA */}
             <button 
                onClick={onCtaClick}
                className="w-full bg-primary text-white font-black text-lg py-5 rounded-full hover:scale-[1.02] transition-transform shadow-lg mb-4 flex items-center justify-center gap-2 relative overflow-hidden group"
             >
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20"></div>
                
                <span className="relative z-10 uppercase tracking-wide">
                    {selectedBundle === 'solo' ? 'ADD TO CART - $39.95' : 'ADD TO CART - $69.95 (Save $20)'}
                </span>
                <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
             </button>

             {/* Trust Badges */}
             <div className="flex items-center justify-center gap-6 text-xs font-medium text-secondary">
                 <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500"></div> In Stock
                 </div>
                 <div className="flex items-center gap-2">
                     <Truck size={14} /> Free Shipping
                 </div>
                 <div className="flex items-center gap-2">
                     <ShieldCheck size={14} /> 30-Day Returns
                 </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;