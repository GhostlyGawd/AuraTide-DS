import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';

interface StickyFooterProps {
  onCtaClick: () => void;
}

const StickyFooter: React.FC<StickyFooterProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the main hero area
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only render if visible (slide up effect can be added via CSS classes)
  const containerClasses = isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0';

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-border-gray p-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 md:hidden ${containerClasses}`}>
      <div className="flex items-center justify-between gap-3">
        
        {/* Thumb & Price */}
        <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
                <img src={IMAGES.hero} alt="Product Thumb" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-medium text-secondary">AuraTide™</span>
                <span className="text-lg font-black text-primary">$39.95</span>
            </div>
        </div>

        {/* CTA */}
        <button 
            onClick={onCtaClick}
            className="flex-1 bg-primary text-white font-bold text-sm py-3 rounded-full shadow-lg active:scale-95 transition-transform"
        >
            ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default StickyFooter;