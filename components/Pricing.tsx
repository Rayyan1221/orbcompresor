import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const plans = [
    {
      name: 'Monthly',
      price: '₹1,999',
      duration: '/ month',
      features: ['Unlimited Compression', 'All Video Formats', 'Priority Support', 'Cancel Anytime'],
      highlight: false
    },
    {
      name: '6 Months',
      price: '₹9,999',
      duration: '/ 6 months',
      savings: 'Save ₹2,000',
      features: ['Unlimited Compression', 'All Video Formats', 'Priority Support', 'Batch Folder Processing'],
      highlight: true
    },
    {
      name: 'Annual',
      price: '₹17,999',
      duration: '/ year',
      savings: 'Best Value',
      features: ['Unlimited Compression', 'All Video Formats', 'VIP 24/7 Support', 'Early Access to Features'],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orb-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400">Professional tools at a fraction of the cost of cloud storage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.highlight 
                  ? 'bg-zinc-900 border-orb-500 shadow-[0_0_30px_rgba(14,165,233,0.15)] z-10 scale-105' 
                  : 'bg-black border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.savings && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orb-600 to-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  {plan.savings}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">{plan.duration}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                plan.highlight
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-zinc-800 text-white hover:bg-zinc-700'
              }`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};