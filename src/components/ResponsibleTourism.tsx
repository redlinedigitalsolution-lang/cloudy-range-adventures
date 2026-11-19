import React from 'react';
import { ShieldCheck, Trees, HeartHandshake, Compass } from 'lucide-react';

export const ResponsibleTourism: React.FC = () => {
  const principles = [
    {
      title: 'Respect Customary Land & Cultural Protocol',
      icon: ShieldCheck,
      description:
        'All trails, streams, and vantage points are owned customary lands of the Timalke Clan. We enter as humble guests and observe tribal etiquette.',
    },
    {
      title: 'Minimize Ecological Footprint',
      icon: Trees,
      description:
        'Leave no trace along forest paths, avoid plastic waste, protect pristine water sources, and utilize renewable solar energy.',
    },
    {
      title: 'Direct Economic Equity',
      icon: HeartHandshake,
      description:
        'Every guest dollar remains inside the local valley to fund school fees, health posts, and sustainable agrarian livelihoods.',
    },
    {
      title: 'Wildlife Ethics & Bird Protocol',
      icon: Compass,
      description:
        'Observe Birds of Paradise from respectful perimeters without disruptive flash photography, noise, or habitat disturbance.',
    },
  ];

  return (
    <section id="responsible-tourism" className="py-20 bg-[#faf8f5] text-[#1c2820] border-b border-[#e2dcd4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Our Code of Conduct</span>
          </span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#12281e]">
            Responsible Tourism Principles
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4d5e53]">
            Preserving ancestral heritage and natural montane cloud forests for generations to come.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#ded5c7] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#edf6f0] text-[#2d5a3f] flex items-center justify-center mb-5 border border-[#d6e8dc]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#12281e] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#526458] leading-relaxed">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
