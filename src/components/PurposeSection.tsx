import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { BusinessConfig } from '../types';
import fireStoryBg from '../assets/images/fire_story_bg_1790757392528.jpg';

interface PurposeSectionProps {
  config: BusinessConfig;
}

export const PurposeSection: React.FC<PurposeSectionProps> = ({ config: _config }) => {
  const scrollToResponsibleTourism = () => {
    const el = document.getElementById('responsible-tourism');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="purpose" className="py-24 bg-[#0c1f16] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1b4332]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1b4332]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1b4332] text-[#86efac] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#2d5f44]">
            <Compass className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Our Founding Philosophy</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Adventure with Purpose
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#cce2d4] leading-relaxed max-w-2xl mx-auto">
            Every step on the trail and every night spent in our village bungalows directly funds indigenous forest conservation, clan-level education, and women’s economic independence.
          </p>
        </div>

        {/* Campfire Photography Showcase - Taking Over All Cards Space */}
        <div className="w-full mb-10">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#2b5941] bg-[#12281d] group">
            <img
              src={fireStoryBg}
              alt="Traditional Papua New Guinea highland village evening campfire outside thatched roundhouse with misty mountain ridges"
              className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[860px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#1b4332]/90 text-[#86efac] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#3e7858]/80 backdrop-blur-sm shadow-md">
                  Evening Fireside Gathering • Auen Village
                </span>
                <h3 className="text-white font-serif font-bold text-xl sm:text-2xl md:text-3xl drop-shadow-md">
                  Highland Hearth & Living Clan Wisdom
                </h3>
                <p className="text-sm sm:text-base text-[#cce2d4] mt-1.5 max-w-2xl drop-shadow-xs">
                  Elders, village youth, and travellers gather around the glowing fire outside traditional thatched roundhouses beneath the twilight mountain ridge of Cloudy Range.
                </p>
              </div>
              <div className="hidden sm:flex items-center space-x-2 shrink-0">
                <span className="px-3.5 py-2 rounded-xl bg-black/60 backdrop-blur-md text-[#86efac] text-xs font-semibold border border-white/20">
                  Authentic Fireside Tradition
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Tourism Callout */}
        <div className="mt-8 text-center">
          <button
            onClick={scrollToResponsibleTourism}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#1b4332] hover:bg-[#25573e] text-white font-semibold text-sm border border-[#3e7858] shadow-lg transition-all cursor-pointer group"
          >
            <span>Learn about our 4 Responsible Tourism Principles</span>
            <ArrowRight className="w-4 h-4 text-[#86efac] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
