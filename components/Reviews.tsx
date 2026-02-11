import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Reviews: React.FC = () => {
    const reviews = [
        {
            name: "Sarah J.",
            date: "2 days ago",
            title: "Literally changed my room",
            text: "I was skeptical because of TikTok ads, but this is legit. The quality is so much better than the cheap plastic ones on Amazon. The crystal lens makes the light look like actual water.",
        },
        {
            name: "Michael T.",
            date: "1 week ago",
            title: "Perfect for gaming setup",
            text: "Adds such a nice depth to my background without blinding me. The USB power is convenient, I just plugged it into my PC.",
        },
        {
            name: "Emily R.",
            date: "3 weeks ago",
            title: "So relaxing",
            text: "My anxiety has been bad lately and just watching the ripples on the ceiling helps me fall asleep. Highly recommend the warm amber setting.",
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-off-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary">Customer Reviews</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">4.9</span>
                        <div className="flex text-primary">
                            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor"/>)}
                        </div>
                        <span className="text-sm text-secondary underline">Based on 12,400+ reviews</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-border-gray">
                            <div className="flex text-yellow-500 mb-4">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor"/>)}
                            </div>
                            <h3 className="font-bold text-primary mb-2">{review.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed mb-6">"{review.text}"</p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-primary">{review.name}</span>
                                    <span className="text-[10px] text-gray-400">{review.date}</span>
                                </div>
                                <div className="flex items-center gap-1 text-[10px] text-green-600 font-medium uppercase bg-green-50 px-2 py-1 rounded">
                                    <CheckCircle size={10} /> Verified Buyer
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;