import React from 'react';
import { Phone, Mail, Compass } from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/siteConfig';

interface BookingCTAProps {
  config: BusinessConfig;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ config }) => {
  const whatsappUrl = buildWhatsAppUrl(config.whatsappCleanNumber, DEFAULT_WHATSAPP_MESSAGE);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#12281e] via-[#16382b] to-[#0c1b14] text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#2d5a3f]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#52b788]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#1e4634] text-[#8ed8ab] text-xs font-semibold tracking-wider uppercase mb-5 border border-[#347454]">
          <Compass className="w-3.5 h-3.5 text-[#52b788]" />
          <span>Plan Your Adventure</span>
        </div>

        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
          Ready for an Adventure with Purpose?
        </h2>

        <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#86efac] font-semibold">
          “Sleep under the stars, wake to Bird songs” &bull; “Where simplicity meets Serenity”
        </p>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#d1e2d7] max-w-2xl mx-auto leading-relaxed">
          Spots in our 8 traditional style huts at Parakaruti Ecolodge are limited to keep experiences intimate, personal and authentic.
        </p>

        <div className="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/10 max-w-xl mx-auto backdrop-blur-sm">
          <p className="text-xs sm:text-sm text-[#e6f4ec] italic">
            <strong>Parakaruti Promise:</strong> “You’ll arrive as a guest, and leave as family – refreshed by the land, the people, and the peace.”
          </p>
        </div>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="cta-bottom-whatsapp-btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 mr-2.5" />
            BOOK ON WHATSAPP (+675 70143943)
          </a>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-5 h-5 mr-2.5" />
            Send Email Message
          </button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#a3c9b3]">
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#52b788] mr-2" />
            Hosted by Julie Bengi
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#52b788] mr-2" />
            Customary Timalke Clan Land
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#52b788] mr-2" />
            Western Highlands Province, PNG
          </span>
        </div>
      </div>
    </section>
  );
};
