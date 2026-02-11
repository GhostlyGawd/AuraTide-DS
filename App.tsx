import React from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero'; // Now behaves as Product Display
import Identity from './components/Identity'; // Now behaves as Story
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import StickyFooter from './components/StickyFooter';

const App: React.FC = () => {
  // Smooth scroll handler
  const scrollToProduct = () => {
    const productSection = document.getElementById('product');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen text-primary selection:bg-black selection:text-white">
      <AnnouncementBar />
      <Header />
      
      <main>
        <Hero onCtaClick={scrollToProduct} />
        <Identity />
        <Reviews />
        <FAQ />
      </main>

      <StickyFooter onCtaClick={scrollToProduct} />
      
      {/* Minimal Footer */}
      <footer className="py-12 bg-off-white text-center text-secondary text-sm border-t border-border-gray">
        <p className="font-bold text-primary mb-4 tracking-tight">AuraTide™</p>
        <p className="mb-6 opacity-60">© {new Date().getFullYear()} AuraTide. All rights reserved.</p>
        <div className="flex justify-center gap-6 opacity-60">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Shipping Info</a>
        </div>
      </footer>
    </div>
  );
};

export default App;