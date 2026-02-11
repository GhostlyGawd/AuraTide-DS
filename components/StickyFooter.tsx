import React, { useState, useEffect } from 'react';

interface StickyFooterProps {
  onCtaClick: () => void;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the main hero area (approx 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 md:top-0 md:bottom-auto left-0 right-0 bg-white/95 backdrop-blur-xl border-t md:border-b border-border-gray p-4 z-50 shadow-soft transition-transform duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex flex-col">
           <span className="font-bold text-primary text-sm">AuraTide™ Crystal Projector</span>
           <div className="flex items-center gap-2 text-xs">
               <span className="text-green-600 font-medium">In Stock</span>
               <span className="text-secondary">Free Shipping</span>
           </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
             <div className="flex flex-col md:hidden">
                <span className="font-bold text-primary text-sm">AuraTide™</span>
                <span className="text-xs text-secondary">$39.95</span>
             </div>
             <button 
                onClick={onCtaClick}
                className="ml-auto bg-primary text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-black/80 transition-colors w-auto md:w-48"
            >
                Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;