import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-border-gray">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
            >
                <span className="font-medium text-primary text-lg group-hover:text-black">{question}</span>
                {isOpen ? <Minus className="text-secondary" size={20} /> : <Plus className="text-secondary" size={20} />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                <p className="text-secondary leading-relaxed max-w-2xl">
                    {answer}
                </p>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is the motor silent?",
      answer: "Yes, absolutely. We engineered the AuraTide with a magnetic drive motor that operates at near 0dB, making it perfect for sleeping environments."
    },
    {
      question: "How do I power it?",
      answer: "The projector comes with a universal USB-C cable. You can power it using any standard phone charger brick, a laptop USB port, or a portable power bank."
    },
    {
        question: "Can I leave it on all night?",
        answer: "Yes. The LED technology is cool-to-the-touch and energy efficient. It is designed for extended use."
    },
    {
        question: "What is the return policy?",
        answer: "We offer a 30-day risk-free guarantee. If you don't love the vibe, simply email us for a return label and a full refund."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-12">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;