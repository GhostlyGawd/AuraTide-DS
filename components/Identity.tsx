import React from 'react';
import { IMAGES } from '../constants';
import { Check } from 'lucide-react';

const Identity: React.FC = () => {
  return (
    <div id="story">
        {/* Story Section 1: The Viral Effect */}
        <section className="py-20 bg-off-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="relative rounded-[2rem] overflow-hidden shadow-floating border-[8px] border-white bg-black">
                            {/* Simulating TikTok Video Frame */}
                            <img src={IMAGES.aesthetic} alt="Viral on TikTok" className="w-full h-auto opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-secondary mb-2 block">As Seen On TikTok</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">The Viral Effect.</h2>
                        <p className="text-secondary text-lg leading-relaxed mb-6">
                            It started with a single video. Now, over 100,000 spaces have been transformed. The AuraTide isn't just a lamp—it's the quickest way to change the entire feeling of a room without painting a single wall.
                        </p>
                        <div className="h-1 w-20 bg-primary"></div>
                    </div>
                </div>
            </div>
        </section>

        {/* Story Section 2: Set Your Mood */}
        <section className="py-20 bg-white">
             <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Set Your Mood.</h2>
                        <p className="text-secondary text-lg leading-relaxed mb-8">
                            Whether you need a calm blue for sleeping, a warm amber for reading, or a vibrant purple for gaming, the AuraTide adapts to you.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-off-white p-1 rounded-full"><Check size={14} className="text-primary"/></div>
                                <div>
                                    <h4 className="font-bold text-primary">16 Dynamic Colors</h4>
                                    <p className="text-sm text-secondary">Full RGB spectrum at your fingertips.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-off-white p-1 rounded-full"><Check size={14} className="text-primary"/></div>
                                <div>
                                    <h4 className="font-bold text-primary">Whisper Quiet</h4>
                                    <p className="text-sm text-secondary">0dB magnetic motor for silent operation.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 bg-off-white p-1 rounded-full"><Check size={14} className="text-primary"/></div>
                                <div>
                                    <h4 className="font-bold text-primary">Remote Controlled</h4>
                                    <p className="text-sm text-secondary">Adjust brightness and speed from bed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={IMAGES.features} alt="Three different lighting moods" className="rounded-2xl shadow-soft" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Identity;