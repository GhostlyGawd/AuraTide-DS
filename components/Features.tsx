import React from 'react';
import { IMAGES } from '../constants';
import { Waves, Palette, Smartphone, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-midnight border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">One Lamp. Infinite Moods.</h2>
          <div className="h-1 w-20 bg-neon mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          {/* Visual: 3-Lamp Split Photo */}
          <div className="order-2 md:order-1">
             <div className="h-80 md:h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group relative">
                <img 
                    src={IMAGES.features} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                    alt="AuraTide showing 3 different color moods" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8 text-xs font-bold tracking-widest text-white/80">
                    <span>SLEEP</span>
                    <span>FOCUS</span>
                    <span>ROMANCE</span>
                </div>
             </div>
          </div>

          {/* Feature List */}
          <div className="order-1 md:order-2 space-y-8">
            <FeatureItem 
              icon={<Waves className="text-neon" size={28} />}
              title="Dynamic Ripple Effect"
              desc="Rotating crystal lens creates a realistic water movement."
            />
            <FeatureItem 
              icon={<Palette className="text-purple-400" size={28} />}
              title="16 RGB Colors"
              desc="Choose from Warm Amber, Deep Ocean Blue, Sunset Red, and more."
            />
            <FeatureItem 
              icon={<Smartphone className="text-pink-400" size={28} />}
              title="Remote Controlled"
              desc="Change modes, brightness, and colors from your bed."
            />
            <FeatureItem 
              icon={<Zap className="text-yellow-400" size={28} />}
              title="USB Powered"
              desc="Plug into any phone charger, laptop, or power bank."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition duration-300 border border-transparent hover:border-white/5">
    <div className="bg-white/5 p-3 rounded-lg flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default Features;