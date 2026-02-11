import React, { useState } from 'react';
import { Star, Truck, ShieldCheck, ChevronRight, Check } from 'lucide-react';
import { PDP_GALLERY } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const [activeImage, setActiveImage] = useState(0);
  
  // Use the ordered gallery from constants
  const gallery = PDP_GALLERY;

  return (
    <section id="product" className="pt-8 pb-16 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
          
          {/* LEFT: Product Gallery */}
          <div className="w-full md:w-3/5 lg:w-1/2">
            {/* Main Image */}
            <div className="relative aspect-square md:aspect-[4/3] bg-off-white rounded-2xl overflow-hidden mb-4 border border-border-gray group">
                <img 
                    src={gallery[activeImage]} 
                    alt="AuraTide Crystal Projector" 
                    className="w-full h-full object-cover object-center mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                    Best Seller
                </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
                {gallery.map((img, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => setActiveImage(idx)}
                        className={`cursor-pointer aspect-square rounded-lg border overflow-hidden ${activeImage === idx ? 'border-primary ring-1 ring-primary' : 'border-transparent hover:border-gray-300'}`}
                    >
                        <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
          </div>

          {/* RIGHT: Buy Box */}
          <div className="w-full md:w-2/5 lg:w-1/2 flex flex-col justify-center">
             <div className="mb-2 flex items-center gap-2">
                 <div className="flex text-yellow-500">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <a href="#reviews" className="text-xs font-medium text-secondary underline decoration-gray-300 underline-offset-2 hover:text-primary">
                    4.9 (12,400+ Reviews)
                 </a>
             </div>
             
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight mb-4">
                AuraTide™ Crystal Projector
             </h1>
             
             <div className="flex items-center gap-4 mb-6">
                 <span className="text-3xl font-bold text-primary">$39.95</span>
                 <span className="text-lg text-secondary line-through">$79.95</span>
                 <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded">50% OFF</span>
             </div>

             <p className="text-secondary leading-relaxed mb-8 border-b border-border-gray pb-8">
                 Transform your space instantly. The AuraTide™ uses a precision-cut crystal lens to project a rotating, organic water-ripple effect. Select from 16 colors to match your mood.
             </p>

             {/* Color Selector Mockup */}
             <div className="mb-8">
                 <span className="text-sm font-bold text-primary block mb-3">Color: <span className="font-normal text-secondary">Crystal Clear</span></span>
                 <div className="flex gap-3">
                     <div className="w-10 h-10 rounded-full border border-gray-300 bg-white shadow-sm ring-1 ring-primary ring-offset-2 cursor-pointer"></div>
                     {/* Just visuals for other options */}
                     <div className="w-10 h-10 rounded-full border border-gray-300 bg-gray-100 cursor-pointer hover:ring-2 hover:ring-gray-200"></div>
                 </div>
             </div>

             {/* Main CTA */}
             <button 
                onClick={onCtaClick}
                className="w-full bg-primary text-white font-bold text-lg py-5 rounded-full hover:bg-black/90 transition-transform active:scale-[0.98] shadow-soft mb-4 flex items-center justify-center gap-2"
             >
                <span>Add to Cart</span>
                <ChevronRight size={18} />
             </button>

             {/* Trust Badges */}
             <div className="grid grid-cols-2 gap-4 text-xs font-medium text-secondary">
                 <div className="flex items-center gap-2 justify-center bg-off-white py-2 rounded-lg">
                     <Truck size={14} /> Free Shipping
                 </div>
                 <div className="flex items-center gap-2 justify-center bg-off-white py-2 rounded-lg">
                     <ShieldCheck size={14} /> 30-Day Returns
                 </div>
             </div>

             {/* Micro-Trust */}
             <div className="mt-6 flex items-center gap-2 text-[10px] text-gray-400 justify-center">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                 In stock, ready to ship.
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;