import React from 'react';

const Marquee: React.FC = () => {
  const text = "AS SEEN ON TIKTOK • 30-DAY MONEY BACK GUARANTEE • 10,000+ VIBES SHIFTED • AS SEEN ON TIKTOK • FREE SHIPPING WORLDWIDE • ";
  
  return (
    <div className="bg-primary text-white overflow-hidden py-4 border-y border-white/10 relative z-10">
      <div className="whitespace-nowrap flex animate-marquee">
        <span className="text-sm md:text-base font-bold tracking-widest uppercase px-4">{text}</span>
        <span className="text-sm md:text-base font-bold tracking-widest uppercase px-4">{text}</span>
        <span className="text-sm md:text-base font-bold tracking-widest uppercase px-4">{text}</span>
        <span className="text-sm md:text-base font-bold tracking-widest uppercase px-4">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;