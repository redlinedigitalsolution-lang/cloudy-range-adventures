import React, { useState, useEffect } from 'react';
import { VolumeX, Trees, Phone, X } from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/siteConfig';
import { ambientForestAudio } from '../utils/ambientForestAudio';

interface AudioPlayerProps {
  config: BusinessConfig;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const whatsappUrl = buildWhatsAppUrl(config.whatsappCleanNumber, DEFAULT_WHATSAPP_MESSAGE);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer') || document.querySelector('footer');
      if (footer) {
        const nearBottom = footer.getBoundingClientRect().top <= window.innerHeight + 150;
        setIsVisible(nearBottom);
      } else {
        const scrollPosition = window.innerHeight + window.scrollY;
        const totalHeight = document.documentElement.scrollHeight;
        setIsVisible(scrollPosition >= totalHeight - 900);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ambientForestAudio.stop();
    };
  }, []);

  const handleAudioToggle = () => {
    const active = ambientForestAudio.toggle();
    setIsPlaying(active);
  };

  if (!isVisible) return null;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end transition-all duration-300"
    >
      {showTooltip && (
        <div className="mb-2.5 bg-white text-[#12281e] p-3 rounded-2xl shadow-xl border border-[#d6ded7] text-xs max-w-[240px] relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 bg-[#405448] text-white rounded-full p-0.5 hover:bg-[#12281e] cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center space-x-1.5 text-[#1e5836] font-bold mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat with Julie Bengi</span>
          </div>
          <p className="text-[11px] text-[#465a4e] leading-tight">
            Ask questions about accommodation, birdwatching & village treks!
          </p>
        </div>
      )}

      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Ambient forest audio button */}
        <button
          id="ambient-forest-toggle-btn"
          type="button"
          onClick={handleAudioToggle}
          className={`flex items-center space-x-2 px-3.5 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md border cursor-pointer ${
            isPlaying
              ? 'bg-[#102d1d]/95 border-[#52b788] text-[#8ce0b0] shadow-[0_10px_25px_-5px_rgba(82,183,136,0.4)]'
              : 'bg-[#0f241a]/90 hover:bg-[#163826] border-[#29563e] text-[#cbdad0]'
          }`}
          aria-label={isPlaying ? 'Mute ambient forest sound' : 'Play ambient forest sound'}
          title={
            isPlaying
              ? 'Ambient Forest: Playing (Click to mute)'
              : 'Ambient Forest: Off (Click to play gentle mountain breeze & birdsong)'
          }
        >
          <div className="relative flex items-center justify-center">
            {isPlaying ? (
              <div className="flex items-end space-x-0.5 h-3.5 w-3.5 pb-0.5">
                <span className="w-1 bg-[#52b788] rounded-full animate-pulse h-3" />
                <span className="w-1 bg-[#52b788] rounded-full animate-pulse h-2" />
                <span className="w-1 bg-[#52b788] rounded-full animate-pulse h-3.5" />
              </div>
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#8ea598]" />
            )}
          </div>
          <div className="flex items-center space-x-1.5 text-xs sm:text-sm font-semibold tracking-tight">
            <Trees className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#52b788]' : 'text-[#8ea598]'}`} />
            <span>Ambient Forest</span>
          </div>
          {isPlaying && (
            <span className="relative flex h-2 w-2 ml-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#52b788] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52b788]" />
            </span>
          )}
        </button>

        {/* WhatsApp Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl hover:shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 group"
          aria-label={`Chat on WhatsApp (${config.whatsappNumber})`}
        >
          <div className="relative">
            <Phone className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight">
            Book on WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};
