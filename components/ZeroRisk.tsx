import React from 'react';
import { Package, ShieldCheck, Lock, Headset } from 'lucide-react';
import { IMAGES } from '../constants';

const ZeroRisk: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-midnight border-b border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Box Image */}
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
                    <Package className="text-neon" /> What's in the Box?
                </h3>
                <div className="bg-slate-800 rounded-xl">
                    <img 
                        src={IMAGES.zeroRisk} 
                        alt="Product packaging knolling shot" 
                        className="rounded-xl border border-white/10 w-full"
                    />
                </div>
                <p className="mt-4 text-gray-400 text-sm text-center md:text-left">
                    Includes 1x AuraTide Lamp, 1x Remote Control, 1x USB Cable. Premium packaging suitable for gifting.
                </p>
            </div>

            {/* Guarantees */}
            <div className="w-full md:w-1/2 space-y-8 bg-white/5 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white text-center mb-4">Our "Zero Risk" Promise</h3>
                
                <GuaranteeItem 
                    icon={<ShieldCheck size={32} className="text-neon"/>}
                    title="30-Day Money-Back Guarantee"
                    desc="Don't like the vibe? Send it back for a full refund."
                />
                <GuaranteeItem 
                    icon={<Lock size={32} className="text-neon"/>}
                    title="SSL Secure Checkout"
                    desc="Your data is protected by 256-bit encryption."
                />
                <GuaranteeItem 
                    icon={<Headset size={32} className="text-neon"/>}
                    title="24/7 Support"
                    desc="Real humans ready to help with setup."
                />
            </div>
        </div>
      </div>
    </section>
  );
};

const GuaranteeItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-center space-x-4">
        <div className="bg-black/30 p-3 rounded-full border border-white/10">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-white">{title}</h4>
            <p className="text-sm text-gray-400">{desc}</p>
        </div>
    </div>
);

export default ZeroRisk;