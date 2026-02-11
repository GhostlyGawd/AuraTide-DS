import React, { useState } from 'react';
import { Truck, Lock, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../constants';

interface OfferProps {
  id?: string;
}

const Offer: React.FC<OfferProps> = ({ id }) => {
  const [selectedOption, setSelectedOption] = useState<'single' | 'bundle'>('bundle');

  return (
    <section id={id} className="py-20 px-4 bg-midnight relative overflow-hidden">
        {/* Background Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-midnight pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-purple-900/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-black mb-4 text-white uppercase tracking-tight">
            Secure Your <span className="text-neon">Aura.</span>
          </h2>
          <p className="text-gray-400">Limited stock available for this drop.</p>
        </div>

        {/* Visual Buying Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
            
            {/* Card 1: Solo Pack */}
            <div 
                onClick={() => setSelectedOption('single')}
                className={`relative cursor-pointer rounded-3xl border-2 overflow-hidden transition-all duration-300 group ${
                    selectedOption === 'single' 
                    ? 'border-neon bg-white/5 shadow-glass' 
                    : 'border-white/10 bg-black/40 opacity-70 hover:opacity-100'
                }`}
            >
                {/* Visual Header */}
                <div className="h-48 overflow-hidden relative">
                     <img src={IMAGES.offer} alt="Single Lamp" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                     <div className="absolute inset-0 bg-black/40"></div>
                     <div className="absolute bottom-4 left-6">
                        <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10">Starter Kit</span>
                     </div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-end mb-2">
                        <h3 className="text-2xl font-black font-display text-white uppercase">Solo Pack</h3>
                        <div className="text-right">
                             <p className="text-2xl font-bold text-white">$39.95</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        1x AuraTide Lamp. Perfect for small spaces or bedside tables.
                    </p>
                    <div className={`w-6 h-6 rounded-full border-2 border-neon ml-auto flex items-center justify-center ${selectedOption === 'single' ? 'bg-neon' : 'bg-transparent'}`}>
                        {selectedOption === 'single' && <div className="w-2 h-2 bg-black rounded-full"></div>}
                    </div>
                </div>
            </div>

            {/* Card 2: Sanctuary Bundle (Highlighted) */}
            <div 
                onClick={() => setSelectedOption('bundle')}
                className={`relative cursor-pointer rounded-3xl border-2 overflow-hidden transition-all duration-300 transform ${
                    selectedOption === 'bundle' 
                    ? 'border-neon bg-white/5 scale-[1.02] shadow-neon-strong z-10' 
                    : 'border-white/10 bg-black/40 opacity-70 hover:opacity-100'
                }`}
            >
                {/* Badges */}
                <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                     <span className="bg-neon text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">Most Popular</span>
                     <span className="bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg animate-pulse">Save $10</span>
                </div>

                {/* Visual Header */}
                <div className="h-48 overflow-hidden relative">
                     <img src={IMAGES.features} alt="Bundle Pack" className="w-full h-full object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                    <div className="flex justify-between items-end mb-2">
                        <h3 className="text-2xl font-black font-display text-white uppercase text-neon drop-shadow-sm">Sanctuary Bundle</h3>
                        <div className="text-right">
                             <p className="text-sm text-gray-500 line-through decoration-red-500">$79.95</p>
                             <p className="text-3xl font-bold text-white">$69.95</p>
                        </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        2x Lamps + 2 Remotes. Create a complete surround-light experience.
                    </p>
                    <div className="flex items-center justify-between mt-4">
                         <span className="flex items-center gap-1 text-xs font-bold text-neon uppercase tracking-wide">
                             <Truck size={14} /> Free Priority Shipping
                         </span>
                        <div className={`w-6 h-6 rounded-full border-2 border-neon flex items-center justify-center ${selectedOption === 'bundle' ? 'bg-neon' : 'bg-transparent'}`}>
                            {selectedOption === 'bundle' && <div className="w-2 h-2 bg-black rounded-full"></div>}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Action Area */}
        <div className="max-w-2xl mx-auto">
            <button className="w-full bg-neon text-black font-display font-black text-2xl py-6 rounded-2xl uppercase tracking-widest hover:bg-white hover:shadow-neon-strong transition-all duration-300 shadow-neon flex items-center justify-center gap-4 group relative overflow-hidden">
              <span className="relative z-10">Add to Cart</span>
              <span className="w-1 h-6 bg-black/20 mx-1 relative z-10"></span>
              <span className="relative z-10">{selectedOption === 'bundle' ? '$69.95' : '$39.95'}</span>
              <div className="absolute inset-0 bg-white/40 transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
            
            {/* Trust Micro-Copy */}
            <div className="flex items-center justify-center gap-6 mt-6 text-gray-500 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Lock size={12} className="text-neon" /> SSL Secure Checkout</span>
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-neon" /> 30-Day Guarantee</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Offer;