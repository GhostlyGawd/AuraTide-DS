import React from 'react';
import { ShoppingBag, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border-gray">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-primary md:hidden cursor-pointer" />
            <span className="text-xl font-bold tracking-tight text-primary">AuraTide™</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
            <a href="#product" className="hover:text-primary transition-colors">Product</a>
            <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">1</span>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;