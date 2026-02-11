import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-midnight relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Why Choose <span className="text-neon">AuraTide™</span>?</h2>
            <p className="text-gray-400 text-lg">Don't settle for cheap knockoffs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* AuraTide Column - Glassmorphism */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-neon relative transform md:scale-105 z-10">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-neon text-black font-black px-6 py-2 rounded-full text-sm uppercase tracking-wider shadow-lg">
                    The Original
                </div>
                <h3 className="font-display text-2xl font-black text-white text-center mb-8 mt-4 tracking-wider">AuraTide™</h3>
                <div className="space-y-6">
                     <ComparisonRow icon={<Check className="text-neon" size={24} />} text="Crystal Acrylic Lens" />
                     <ComparisonRow icon={<Check className="text-neon" size={24} />} text="16-Color RGB" />
                     <ComparisonRow icon={<Check className="text-neon" size={24} />} text="Silent Magnetic Drive" />
                     <ComparisonRow icon={<Check className="text-neon" size={24} />} text="1-Year Warranty" />
                </div>
            </div>

            {/* Competitors Column - Recessed */}
            <div className="bg-white/5 border border-white/5 rounded-3xl p-8 grayscale opacity-60 hover:opacity-100 transition duration-500">
                <h3 className="font-display text-2xl font-bold text-gray-400 text-center mb-8 mt-4 tracking-wider">Generic Knockoffs</h3>
                 <div className="space-y-6">
                     <ComparisonRow icon={<X className="text-red-400" size={24} />} text="Cheap Plastic Case" isBad />
                     <ComparisonRow icon={<X className="text-red-400" size={24} />} text="3 Colors Only" isBad />
                     <ComparisonRow icon={<X className="text-red-400" size={24} />} text="Noisy Grinding Sound" isBad />
                     <ComparisonRow icon={<X className="text-red-400" size={24} />} text="No Warranty" isBad />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ComparisonRow = ({ icon, text, isBad = false }: { icon: React.ReactNode, text: string, isBad?: boolean }) => (
    <div className={`flex items-center space-x-4 p-3 rounded-xl ${isBad ? 'bg-red-500/5' : 'bg-neon/5'}`}>
        <div className={`p-1 rounded-full ${isBad ? 'bg-red-500/10' : 'bg-neon/10'}`}>{icon}</div>
        <span className={`font-semibold ${isBad ? 'text-gray-400' : 'text-white'}`}>{text}</span>
    </div>
);

export default ComparisonTable;