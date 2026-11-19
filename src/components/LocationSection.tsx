import React from 'react';
import { MapPin, Car, AlertTriangle, Calendar } from 'lucide-react';
import { BusinessConfig } from '../types';

interface LocationSectionProps {
  config: BusinessConfig;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ config }) => {
  return (
    <section id="location" className="py-20 bg-[#faf8f5] text-[#1c2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold tracking-wider uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Where We Are</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            In the Heart of the Western Highlands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#465a4e] leading-relaxed max-w-2xl mx-auto">
            {config.locationDetails}
          </p>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-6 rounded-full" />
        </div>

        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Address Card */}
          <div className="bg-white rounded-2xl border border-[#e2dcd4] shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#e8efe9] text-[#2d5a3f] flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#2d5a3f]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                Official Address & Territory
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#12281e] mt-1">
                {config.lodgeName}
              </h3>
              <div className="mt-4 p-5 rounded-xl bg-[#f7f5f0] border border-[#e8e2d8] text-sm text-[#2d3e34] leading-relaxed space-y-1.5">
                <p className="font-semibold text-base text-[#12281e]">Auen Village</p>
                <p>Dei Council District</p>
                <p>Western Highlands Province</p>
                <p className="font-semibold text-[#2d5a3f]">Papua New Guinea</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#ece6de] text-xs text-[#526658] flex items-center">
              <span className="w-2 h-2 rounded-full bg-[#52b788] mr-2" />
              <span>Customary Landowner Territory — Timalke Clan</span>
            </div>
          </div>

          {/* Getting Here Card */}
          <div className="bg-white rounded-2xl border border-[#e2dcd4] shadow-sm p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#e8efe9] text-[#2d5a3f] flex items-center justify-center">
                <Car className="w-6 h-6 text-[#2d5a3f]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                  Getting Here
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#12281e] mt-1">
                  Airport & Road Access
                </h3>
              </div>
              <div className="text-sm text-[#465a4e] leading-relaxed space-y-3">
                <p>
                  <strong>Gateway:</strong> Fly into{' '}
                  <strong>Mount Hagen (Kagamuga Airport - HGU)</strong> via scheduled domestic flights from Port Moresby.
                </p>
                <p>
                  <strong>Scenic 4WD Overland:</strong> Approximately 1 to 1.5 hours drive from Mt. Hagen town through scenic mountain passes and coffee-growing valleys into Dei Council.
                </p>
                <div className="p-3.5 rounded-xl bg-[#fff9ea] border border-[#f3e5be] text-xs text-[#826019] flex items-start space-x-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-[#b58b29] mt-0.5" />
                  <span>
                    <strong>Travel Advisory:</strong> Mountain conditions and river crossings vary with weather. Pre-arranged lodge 4WD transfers and local guides ensure a smooth, secure arrival.
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-[#ece6de]">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#2d5a3f] hover:bg-[#204430] text-white font-semibold text-sm shadow transition"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Arrange Airport Transfer / Inquire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
