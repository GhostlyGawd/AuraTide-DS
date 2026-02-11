import React from 'react';
import { VolumeX, Aperture, Palette, BatteryCharging } from 'lucide-react';

const TechSpecs: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-midnight relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Engineering.</span>
            </h2>
        </div>

        {/* Compact 2x2 Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
            <SpecCard 
                icon={<VolumeX size={24} strokeWidth={1} className="text-neon" />}
                title="Silent Drive"
                desc="0dB Motor Noise"
            />
            <SpecCard 
                icon={<Aperture size={24} strokeWidth={1} className="text-neon" />}
                title="Crystal Lens"
                desc="Refractive Acrylic"
            />
             <SpecCard 
                icon={<Palette size={24} strokeWidth={1} className="text-neon" />}
                title="Infinite Color"
                desc="16M RGB Spectrum"
            />
             <SpecCard 
                icon={<BatteryCharging size={24} strokeWidth={1} className="text-neon" />}
                title="All-Day Power"
                desc="Universal USB-C"
            />
        </div>
      </div>
    </section>
  );
};

interface SpecCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const SpecCard: React.FC<SpecCardProps> = ({ icon, title, desc }) => (
    <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl hover:bg-white/5 transition-colors duration-300 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
        <div className="mb-4 p-3 bg-white/5 rounded-full border border-white/5">
            {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">{title}</h3>
        <p className="text-gray-400 font-mono text-xs md:text-sm uppercase tracking-wider">
            {desc}
        </p>
    </div>
);

export default TechSpecs;