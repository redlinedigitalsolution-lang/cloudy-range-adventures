import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BusinessConfig } from '../types';
import logoImg from '../assets/images/regenerated_image_1791936197982.jpg';

interface FooterProps {
  config: BusinessConfig;
  onOpenConfig?: () => void;
  onNavigate?: (view: string, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onNavigate }) => {
  const handleNav = (target: string) => {
    if (target === 'about' || target === 'story') {
      if (onNavigate) onNavigate('about');
      else {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (target === 'founder' || target === 'blog') {
      if (onNavigate) onNavigate('blog');
      else {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (target === 'accommodation') {
      if (onNavigate) onNavigate('accommodation');
      else {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (target === 'video' || target === 'video-tours') {
      if (onNavigate) onNavigate('video');
      else {
        const el = document.getElementById(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (onNavigate) {
      onNavigate('home', `#${target}`);
    } else {
      const el = document.getElementById(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#0e2118] text-[#d6dfd9] pt-16 pb-12 border-t border-[#1e4230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b3b2b]">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#52b788] shadow-lg shrink-0 flex items-center justify-center bg-[#0c1f16]">
                <img
                  src={logoImg}
                  alt="Cloudy Range Adventures Inc. Logo"
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="block text-white font-serif font-bold text-lg">
                  {config.businessName}
                </span>
                <span className="block text-[#9edbb4] text-xs font-semibold uppercase tracking-wider">
                  {config.lodgeName}
                </span>
              </div>
            </div>
            <p className="font-serif text-[#74c69d] italic text-lg font-semibold">
              Adventure with Purpose.
            </p>
            <p className="text-sm text-[#b8cbbd] leading-relaxed max-w-md">
              Authentic eco-tourism experiences in the Cloudy Range, Western Highlands, Papua New Guinea — connecting travellers with nature, culture and local communities.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#74c69d]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#c4d6c9]">
              <li>
                <button onClick={() => handleNav('hero')} className="hover:text-white transition cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('video')} className="hover:text-white transition cursor-pointer text-[#86efac]">
                  Video Tours
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('story')} className="hover:text-white transition cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('founder')} className="hover:text-white transition cursor-pointer text-[#74c69d]">
                  Founder's Story & Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('experiences')} className="hover:text-white transition cursor-pointer">
                  Experiences
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('accommodation')} className="hover:text-white transition cursor-pointer">
                  Accommodation (Parakaruti)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('facilities')} className="hover:text-white transition cursor-pointer text-[#86efac]">
                  Facilities (Kitchen & Conference)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('conservation')} className="hover:text-white transition cursor-pointer">
                  Conservation & Purpose
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-white transition cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('location')} className="hover:text-white transition cursor-pointer">
                  Where We Are
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-white transition cursor-pointer">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition cursor-pointer">
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Highlands Base */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#74c69d]">
              Highlands Base
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#b8cbbd]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                <span>Auen Village, Dei Council, Western Highlands Province, Papua New Guinea</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#52b788] shrink-0" />
                <a
                  href={`https://wa.me/${config.whatsappCleanNumber}`}
                  className="text-white hover:text-[#74c69d] font-semibold"
                >
                  {config.whatsappNumber}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#52b788] shrink-0" />
                <a
                  href={`mailto:${config.email}`}
                  className="text-white hover:text-[#74c69d]"
                >
                  {config.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#849f8e] gap-4">
          <p>© 2026 {config.businessName}. All Rights Reserved.</p>
          <p className="text-[11px] text-[#6d8a78]">Build By Redline Digital Solution</p>
        </div>
      </div>
    </footer>
  );
};
