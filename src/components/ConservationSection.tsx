import React from 'react';
import { Trees, Droplet, Feather, Sparkles } from 'lucide-react';
import { BusinessConfig } from '../types';
import forestBg from '../assets/images/forest_conservation_bg_1789400127205.jpg';

interface ConservationSectionProps {
  config: BusinessConfig;
}

export const ConservationSection: React.FC<ConservationSectionProps> = ({ config: _config }) => {
  return (
    <section id="conservation" className="py-24 relative overflow-hidden">
      {/* Background Image - Shown Clear */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={forestBg}
          alt="Cloudy Range primary rainforest canopy in Western Highlands"
          className="w-full h-full object-cover object-center filter brightness-100 contrast-100"
          loading="lazy"
        />
        {/* Minimal Clear Tint for Legibility without obscuring the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/20 text-[#86efac] text-xs font-semibold uppercase tracking-wider mb-4 border border-white/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Community Forest Reserve</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight drop-shadow-md">
            Protecting the Sacred Cloud Forest
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#e4f3ea] leading-relaxed drop-shadow-xs">
            The Cloudy Range is an ecological treasure holding rare montane flora, pristine spring water headwaters, and critical breeding grounds for Papua New Guinea’s national symbol: the Bird of Paradise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/92 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-2xl hover:bg-white/98 hover:border-[#52b788] hover:-translate-y-1 transition-all duration-300">
            <Trees className="w-8 h-8 text-[#2d5a3f] mb-4" />
            <h3 className="font-serif font-bold text-lg text-[#12281e] mb-2">Zero Logging Zone</h3>
            <p className="text-xs text-[#3f574a] leading-relaxed">
              Customary clans have legally banded together to preserve primary mountain forests from commercial felling.
            </p>
          </div>

          <div className="bg-white/92 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-2xl hover:bg-white/98 hover:border-[#52b788] hover:-translate-y-1 transition-all duration-300">
            <Feather className="w-8 h-8 text-[#2d5a3f] mb-4" />
            <h3 className="font-serif font-bold text-lg text-[#12281e] mb-2">Avian Sanctuaries</h3>
            <p className="text-xs text-[#3f574a] leading-relaxed">
              Village forest wardens patrol and document mating display leks to prevent hunting and habitat destruction.
            </p>
          </div>

          <div className="bg-white/92 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-2xl hover:bg-white/98 hover:border-[#52b788] hover:-translate-y-1 transition-all duration-300">
            <Droplet className="w-8 h-8 text-[#2d5a3f] mb-4" />
            <h3 className="font-serif font-bold text-lg text-[#12281e] mb-2">Spring Water</h3>
            <p className="text-xs text-[#3f574a] leading-relaxed">
              Pristine headwaters supply natural clean drinking water straight to the lodge without modern chemical treatment.
            </p>
          </div>

          <div className="bg-white/92 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-2xl hover:bg-white/98 hover:border-[#52b788] hover:-translate-y-1 transition-all duration-300">
            <Sparkles className="w-8 h-8 text-[#2d5a3f] mb-4" />
            <h3 className="font-serif font-bold text-lg text-[#12281e] mb-2">Community Wardens</h3>
            <p className="text-xs text-[#3f574a] leading-relaxed">
              Direct tourism revenue finances village youth to become accredited eco-tourism forest guides and conservation scouts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
