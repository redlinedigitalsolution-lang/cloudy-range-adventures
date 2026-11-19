import React, { useState } from 'react';
import { Compass, Clock, Activity, Check, Phone, X, ArrowRight, Sparkles } from 'lucide-react';
import { BusinessConfig, ExperienceItem } from '../types';
import { experiencesData } from '../data/experiencesData';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface ExperiencesProps {
  config: BusinessConfig;
}

export const Experiences: React.FC<ExperiencesProps> = ({ config }) => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  const openExperienceModal = (item: ExperienceItem) => {
    setSelectedExperience(item);
  };

  const closeExperienceModal = () => {
    setSelectedExperience(null);
  };

  const getWhatsAppExperienceUrl = (title: string) => {
    const text = `Hello Cloudy Range Adventure Inc., I am interested in experiencing "${title}" at Parakaruti Eco Lodge in the Cloudy Range. Could you please share more details, schedule and pricing?`;
    return buildWhatsAppUrl(config.whatsappCleanNumber, text);
  };

  return (
    <section id="experiences" className="py-20 bg-[#f4f0ea] text-[#1c2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#d8e6dc] text-[#1e4731] text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5 text-[#2d5a3f]" />
            <span>Curated Authentic Journeys</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            8 Ways to Experience the Cloudy Range
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#415347] max-w-2xl mx-auto leading-relaxed">
            From misty mountain walks to nights in the village guest house, every experience with us supports local families and forest conservation.
          </p>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-5 rounded-full" />
        </div>

        {/* 8 Experiences Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {experiencesData.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#e2dcd4] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-60 overflow-hidden bg-[#16382b]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2118]/85 via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#12281e] group-hover:text-[#2d5a3f] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#4d5e53] leading-relaxed line-clamp-3">
                    {item.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0ece5] flex items-center justify-between">
                  <button
                    onClick={() => openExperienceModal(item)}
                    className="inline-flex items-center text-sm font-semibold text-[#2d5a3f] hover:text-[#183925] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </button>

                  <a
                    href={getWhatsAppExperienceUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Quick WhatsApp enquiry for ${item.title}`}
                    className="p-2 rounded-lg bg-[#f0f6f2] hover:bg-[#25D366] text-[#2d5a3f] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Itinerary Box */}
        <div className="mt-14 p-6 rounded-2xl bg-[#e6ede8] border border-[#cbd9cf] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-[#2d5a3f] text-white shrink-0">
              <Sparkles className="w-5 h-5 text-[#a2e3bd]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-[#12281e] text-lg">
                Custom itineraries available
              </h4>
              <p className="text-sm text-[#465a4e]">
                Combine birdwatching, mountain hiking, village accommodation, and agro tours into a multi-day trip.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(
              config.whatsappCleanNumber,
              'Hello Cloudy Range Adventure Inc., I would like to design a customized multi-day itinerary combining several activities.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#16382b] hover:bg-[#204a39] text-white font-medium text-sm transition shadow shrink-0"
          >
            <Phone className="w-4 h-4 mr-2 text-[#25D366]" />
            Discuss Itinerary on WhatsApp
          </a>
        </div>
      </div>

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#d6ded8] relative"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-72 w-full bg-[#16382b]">
              <img
                src={selectedExperience.image}
                alt={selectedExperience.imageAlt}
                className="w-full h-full object-cover"
                style={selectedExperience.imagePosition ? { objectPosition: selectedExperience.imagePosition } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2118] via-black/30 to-transparent" />

              <button
                onClick={closeExperienceModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2d5a3f] text-xs font-semibold uppercase tracking-wider mb-2 text-[#b0e8c7]">
                  {parseInt(selectedExperience.number, 10) > 7
                    ? `Card ${selectedExperience.number} • `
                    : ''}
                  {selectedExperience.category}
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl">
                  {selectedExperience.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Meta stats */}
              <div className="flex flex-wrap gap-4 p-3.5 bg-[#f6f4f0] rounded-xl border border-[#e4ded5] text-xs sm:text-sm text-[#35483c]">
                {selectedExperience.duration && (
                  <div className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-[#2d5a3f]" />
                    <span>
                      Duration: <strong>{selectedExperience.duration}</strong>
                    </span>
                  </div>
                )}
                {selectedExperience.intensity && (
                  <div className="flex items-center space-x-1.5">
                    <Activity className="w-4 h-4 text-[#2d5a3f]" />
                    <span>
                      Pace: <strong>{selectedExperience.intensity}</strong>
                    </span>
                  </div>
                )}
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#63796c] mb-2">
                  Experience Overview
                </h4>
                <p className="text-base text-[#304136] leading-relaxed">
                  {selectedExperience.fullDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#63796c] mb-3">
                  What You Will Experience
                </h4>
                <ul className="space-y-2.5">
                  {selectedExperience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#24372c]">
                      <Check className="w-4 h-4 text-[#2d5a3f] mr-2.5 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purpose statement */}
              <div className="p-4 rounded-xl bg-[#eef5f0] border-l-4 border-[#2d5a3f] text-xs text-[#355340]">
                <strong>Adventure with Purpose:</strong> This activity directly employs village guides, respects wildlife perimeters, and funds community development in Dei Council, Western Highlands.
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#e8e2d8] flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={closeExperienceModal}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#cfd6d1] text-[#425549] text-sm font-semibold hover:bg-[#f5f3ef] transition cursor-pointer"
                >
                  Close
                </button>
                <a
                  href={getWhatsAppExperienceUrl(selectedExperience.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow transition"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Enquire via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
