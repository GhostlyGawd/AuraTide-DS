import React, { useState, useEffect } from 'react';
import { Star, Truck, ShieldCheck, Flame, AlertTriangle } from 'lucide-react';
import { PDP_GALLERY } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedOption, setSelectedOption] = useState<1 | 2 | 3>(2);
  const [viewerCount, setViewerCount] = useState(14);
  
  // Use the ordered gallery from constants
  const gallery = PDP_GALLERY;

  // Fake live viewer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(8, Math.min(42, prev + change));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPrice = () => {
      switch(selectedOption) {
          case 1: return { current: '$39.95', original: '$79.95' };
          case 2: return { current: '$69.95', original: '$139.95' };
          case 3: return { current: '$99.95', original: '$199.95' };
      }
  };
  const price = getPrice();

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
                     <span className="text-3xl font-bold text-primary">{price.current}</span>
                     <span className="text-lg text-secondary line-through">{price.original}</span>
                     <span className="bg-[#FF4D00] text-white text-xs font-bold px-2 py-1 rounded">50% OFF</span>
                 </div>
             </div>

             {/* Live Counter */}
             <div className="flex items-center gap-2 text-sm font-medium text-red-500 mb-6 bg-red-50 w-fit px-3 py-1 rounded-full animate-pulse">
                <Flame size={16} fill="currentColor" />
                <span>{viewerCount} people are viewing this offer</span>
             </div>

             <p className="text-secondary leading-relaxed mb-6 border-b border-border-gray pb-6">
                 Transform your space instantly. The AuraTide™ uses a precision-cut crystal lens to project a rotating, organic water-ripple effect. Select from 16 colors to match your mood.
             </p>

             {/* INSTANT UPGRADE TOGGLE (Stack & Save) */}
             <div className="flex flex-col gap-3 mb-6">
                 
                 {/* Option 1 */}
                 <div 
                    onClick={() => setSelectedOption(1)}
                    className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedOption === 1 ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                 >
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 1 ? 'border-black' : 'border-gray-300'}`}>
                            {selectedOption === 1 && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                        </div>
                        <div>
                            <span className="font-bold text-primary block text-sm md:text-base">1x AuraTide</span>
                            <span className="text-xs text-gray-500 font-medium">Standard Price</span>
                        </div>
                    </div>
                    <span className="font-bold text-primary text-lg">$39.95</span>
                 </div>

                 {/* Option 2 (Hero - Pre-selected) */}
                 <div 
                    onClick={() => setSelectedOption(2)}
                    className={`relative flex flex-col p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedOption === 2 ? 'border-yellow-400 bg-yellow-50/20 shadow-lg ring-1 ring-yellow-400' : 'border-gray-200 hover:border-gray-300'}`}
                 >
                    <div className="flex items-center justify-between w-full mb-1">
                        <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 2 ? 'border-black' : 'border-gray-300'}`}>
                                {selectedOption === 2 && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                            </div>
                            <span className="font-bold text-primary text-sm md:text-base">2x AuraTide <span className="text-xs font-normal text-secondary hidden sm:inline">(Sanctuary Bundle)</span></span>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary text-lg">$69.95</span>
                                <span className="bg-red-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded uppercase tracking-wide">SAVE $10</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 mt-1 pl-8">
                         <Flame size={12} className="text-orange-500 fill-orange-500" />
                         Most Popular - 84% of customers choose this.
                    </div>
                 </div>

                 {/* Option 3 */}
                 <div 
                    onClick={() => setSelectedOption(3)}
                    className={`relative flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${selectedOption === 3 ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}
                 >
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedOption === 3 ? 'border-black' : 'border-gray-300'}`}>
                            {selectedOption === 3 && <div className="w-2.5 h-2.5 bg-black rounded-full" />}
                        </div>
                        <div>
                            <span className="font-bold text-primary block text-sm md:text-base">3x AuraTide <span className="text-xs font-normal text-secondary hidden sm:inline">(Gift Pack)</span></span>
                            <span className="text-[10px] font-bold text-brand-purple uppercase">Save $20 + Free Priority Shipping</span>
                        </div>
                    </div>
                    <span className="font-bold text-primary text-lg">$99.95</span>
                 </div>
             </div>

             {/* MAIN CTA */}
             <button 
                onClick={onCtaClick}
                className="w-full bg-[#FF4D00] text-white font-black text-xl py-5 rounded-full shadow-lg hover:bg-[#E64500] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 relative overflow-hidden group animate-pulse-slow mb-3"
             >
                <span className="relative z-10 uppercase tracking-wide">GET MINE NOW - 50% OFF</span>
             </button>

             {/* Scarcity */}
             <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm mb-6">
                <AlertTriangle size={16} fill="currentColor" className="text-red-600" />
                <span>Warning: Low Stock. Selling fast.</span>
             </div>

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