import React from 'react';
import {
  Home,
  Flame,
  Mountain,
  Feather,
  HeartHandshake,
  UtensilsCrossed,
  Building2,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import heroBg from '../assets/images/cloudy_range_sky_live_1789775076379.jpg';
import cabinImg from '../assets/images/paraka_ruti_bungalow_1789772562932.jpg';
import kitchenThumb from '../assets/images/eco_lodge_kitchen_1791203292148.jpg';
import conferenceThumb from '../assets/images/conference_building_1791203307057.jpg';

interface HeroProps {
  config: BusinessConfig;
  onNavigateToAccommodation?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToFacilities?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateToAccommodation,
}) => {

  const handleAccommodationClick = () => {
    if (onNavigateToAccommodation) {
      onNavigateToAccommodation();
    } else {
      const el = document.getElementById('accommodation');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c1a13]">
      {/* Background Hero Image with Live Sky & Mountain Drift */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Live moving sky and misty mountain ranges of the Cloudy Range in Western Highlands Papua New Guinea"
          className="w-full h-full object-cover object-center animate-mountain-video scale-105 origin-center filter-none will-change-transform"
          referrerPolicy="no-referrer"
        />

        {/* Live Sky Stream Upper Layer */}
        <div className="absolute inset-x-0 top-0 h-3/5 overflow-hidden pointer-events-none opacity-45 mix-blend-screen">
          <div className="w-[200%] h-full flex animate-live-sky-stream">
            <div className="w-1/2 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(255,255,255,0.7),transparent_70%)]" />
            <div className="w-1/2 h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_20%,rgba(255,255,255,0.7),transparent_70%)]" />
          </div>
        </div>

        {/* Live Sky Stream Reverse Mid Layer */}
        <div className="absolute inset-x-0 top-1/4 h-1/2 overflow-hidden pointer-events-none opacity-35 mix-blend-screen">
          <div className="w-[200%] h-full flex animate-live-sky-stream-reverse">
            <div className="w-1/2 h-full bg-[radial-gradient(ellipse_90%_40%_at_40%_50%,rgba(255,255,255,0.6),transparent_65%)]" />
            <div className="w-1/2 h-full bg-[radial-gradient(ellipse_90%_40%_at_40%_50%,rgba(255,255,255,0.6),transparent_65%)]" />
          </div>
        </div>

        {/* Cloud Atmosphere Pulse */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_70%)] animate-cloud-pulse pointer-events-none" />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1a13]/90 via-[#0c1a13]/35 to-black/25 pointer-events-none" />
      </div>

      {/* Live Sky • Cloudy Range Atmosphere Badge */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20 flex items-center space-x-2 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-[11px] font-medium text-white/90 shadow-sm pointer-events-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52b788] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52b788]" />
        </span>
        <span>Live Sky • Cloudy Range Atmosphere</span>
      </div>

      {/* Bottom Subtle Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] to-transparent z-10 pointer-events-none opacity-20" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Main Title */}
        <h1 className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl text-balance">
          Authentic Eco-Tourism in the Dei Council, Western Highlands
        </h1>

        {/* Slogan */}
        <div className="mt-4 sm:mt-6">
          <span
            className="inline-block font-serif italic tracking-wide"
            style={{
              color: '#06e975',
              fontWeight: 'bold',
              fontSize: '34px',
            }}
          >
            Adventure with Purpose.
          </span>
        </div>

        {/* Subtitle Description */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-[#d4e2d8] max-w-3xl leading-relaxed text-balance font-normal">
          Stay in the village. Trek the mountain range. See the Bird of Paradise. Experience authentic Papua New Guinea culture while helping protect PNG forests and giving back to local communities.
        </p>

        {/* Dual Featured Cards: Accommodation & Facilities Showcase in Hero Header */}
        <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 1. Featured Accommodation Card */}
          <div
            onClick={handleAccommodationClick}
            className="rounded-2xl bg-[#142c20]/85 border border-[#346a4d]/80 p-4 sm:p-5 text-left backdrop-blur-md shadow-2xl hover:border-[#52b788] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-36 rounded-xl overflow-hidden shadow-lg border border-[#3e7e59] mb-3">
                <img
                  src={cabinImg}
                  alt="Parakaruti Eco Lodge handcrafted bungalows in Auen Village"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[#86efac] text-[10px] font-semibold tracking-wide backdrop-blur-xs border border-[#346a4d]/60">
                  Parakaruti • Auen Village
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#225039] text-[#7ee787] border border-[#3f885e]">
                  Accommodation
                </span>
                <span className="text-[11px] font-semibold text-[#86efac] group-hover:translate-x-1 transition-transform inline-flex items-center">
                  8 Bungalows &rarr;
                </span>
              </div>
              <h3 className="font-serif font-bold text-white text-base mt-1 group-hover:text-[#a7f3d0] transition-colors">
                Handcrafted Eco Bungalows
              </h3>
              <p className="text-xs text-[#c3dac9] mt-1 line-clamp-2 leading-relaxed">
                Native hardwoods, stone fireplaces, private valley verandas & clean spring water.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-[#234533] text-[10px] text-[#93c5a8]">
              <span className="inline-flex items-center">
                <Flame className="w-3 h-3 mr-1 text-[#f87171]" /> Stone Fireplaces
              </span>
              <span className="inline-flex items-center">
                <Mountain className="w-3 h-3 mr-1 text-[#38bdf8]" /> Forest Decks
              </span>
            </div>
          </div>

          {/* 2. Featured Facilities Card (Kitchen 10-Image Space & Conference Building) */}
          <div
            onClick={() => scrollToSection('facilities')}
            className="rounded-2xl bg-[#142c20]/85 border border-[#346a4d]/80 p-4 sm:p-5 text-left backdrop-blur-md shadow-2xl hover:border-[#52b788] transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="relative h-36 rounded-xl overflow-hidden border border-[#3e7e59]">
                  <img
                    src={kitchenThumb}
                    alt="Eco Lodge Kitchen prep counter"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 text-[#86efac] text-[9px] font-bold">
                    Kitchen • 10 Images
                  </span>
                </div>
                <div className="relative h-36 rounded-xl overflow-hidden border border-[#3e7e59]">
                  <img
                    src={conferenceThumb}
                    alt="Conference Building hall"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/75 text-[#86efac] text-[9px] font-bold">
                    Conference Room • K350 Hire
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#225039] text-[#7ee787] border border-[#3f885e]">
                  Facilities
                </span>
                <span className="text-[11px] font-semibold text-[#86efac] group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Explore Facilities &rarr;
                </span>
              </div>
              <h3 className="font-serif font-bold text-white text-base mt-1 group-hover:text-[#a7f3d0] transition-colors">
                Kitchen & Conference Room (K350)
              </h3>
              <p className="text-xs text-[#c3dac9] mt-1 line-clamp-2 leading-relaxed">
                Village kitchen with 10 photo spaces (Mumu ovens & organic produce) + 50-seat conference hall for client hire at K350.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-[#234533] text-[10px] text-[#93c5a8]">
              <span className="inline-flex items-center">
                <UtensilsCrossed className="w-3 h-3 mr-1 text-[#f59e0b]" /> 10-Image Kitchen
              </span>
              <span className="inline-flex items-center">
                <Building2 className="w-3 h-3 mr-1 text-[#38bdf8]" /> 50-Seat Room • K350 Hire
              </span>
            </div>
          </div>
        </div>

        {/* 4 Bottom Feature Badges */}
        <div className="mt-10 pt-6 border-t border-[#234533]/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left w-full">
          <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-[#142c20]/60 border border-[#234533]/50">
            <Mountain className="w-5 h-5 text-[#52b788] shrink-0" />
            <div>
              <span className="block text-white font-semibold text-xs sm:text-sm">Cloud Forest</span>
              <span className="block text-[#a0b9a9] text-[11px]">Misty Highland Peaks</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-[#142c20]/60 border border-[#234533]/50">
            <Feather className="w-5 h-5 text-[#52b788] shrink-0" />
            <div>
              <span className="block text-white font-semibold text-xs sm:text-sm">Bird of Paradise</span>
              <span className="block text-[#a0b9a9] text-[11px]">Rare Montane Birdlife</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-[#142c20]/60 border border-[#234533]/50">
            <Home className="w-5 h-5 text-[#52b788] shrink-0" />
            <div>
              <span className="block text-white font-semibold text-xs sm:text-sm">Accommodation</span>
              <span className="block text-[#a0b9a9] text-[11px]">Auen Village Stay</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-2.5 rounded-lg bg-[#142c20]/60 border border-[#234533]/50">
            <HeartHandshake className="w-5 h-5 text-[#52b788] shrink-0" />
            <div>
              <span className="block text-white font-semibold text-xs sm:text-sm">Conservation</span>
              <span className="block text-[#a0b9a9] text-[11px]">Community Livelihoods</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
