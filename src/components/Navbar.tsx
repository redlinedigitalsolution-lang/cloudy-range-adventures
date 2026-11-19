import React, { useState, useEffect } from 'react';
import { Mail, Phone, Settings, MapPin, Menu, X } from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/siteConfig';
import logoImg from '../assets/images/cloudy_range_official_logo_1791587527654.jpg';

interface NavbarProps {
  config: BusinessConfig;
  onOpenConfig: () => void;
  currentView?: string;
  onNavigate?: (view: string, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  onOpenConfig,
  currentView = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Video Tours', href: '#video' },
    { label: 'About Us', href: '#about' },
    { label: "Founder's Blog", href: '#founder' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Accommodation', href: '#accommodation' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Purpose & Conservation', href: '#conservation' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#about' || href === '#story') {
      if (onNavigate) {
        onNavigate('about');
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (href === '#founder' || href === '#blog') {
      if (onNavigate) {
        onNavigate('blog');
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (href === '#accommodation') {
      if (onNavigate) {
        onNavigate('accommodation');
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (href === '#video' || href === '#video-tours') {
      if (onNavigate) {
        onNavigate('video');
      } else {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (currentView !== 'home') {
      if (onNavigate) onNavigate('home', href);
      return;
    }
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = buildWhatsAppUrl(config.whatsappCleanNumber, DEFAULT_WHATSAPP_MESSAGE);

  return (
    <>
      <aside aria-label="Announcement" className="bg-[#12281e] text-[#d6dfd8] text-xs py-2 px-4 border-b border-[#214332] z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-[#9edbb4] font-medium">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#52b788]" />
              Auen Village, Dei Council, Western Highlands Province, PNG
            </span>
            <span className="hidden md:inline-block text-[#5b7a67]">|</span>
            <span className="hidden md:inline-flex items-center text-[#cbd5cb]">
              <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse mr-1.5" />
              Adventure with Purpose
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a href={`mailto:${config.email}`} className="flex items-center hover:text-white transition-colors" title="Send email to lodge">
              <Mail className="w-3.5 h-3.5 mr-1 text-[#9edbb4]" />
              <span className="hidden sm:inline">{config.email}</span>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#52b788] hover:text-[#74c69d] font-semibold transition-colors" title="Chat on WhatsApp">
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span>{config.whatsappNumber}</span>
            </a>
            <button id="admin-config-nav-btn" onClick={onOpenConfig} className="p-1 text-[#8fa89b] hover:text-white rounded hover:bg-[#1e3c2e] transition" title="Lodge Owner / Admin Settings">
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#152e22]/95 backdrop-blur-md shadow-lg py-2 border-b border-[#2d523e]' : 'bg-[#16382b] py-2.5 sm:py-3 border-b border-[#244b38]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center space-x-3.5 group"
            title="Parakaruti Eco Lodge"
          >
            <div className={`transition-all duration-300 rounded-full overflow-hidden bg-white/10 p-0.5 border-2 border-[#52b788]/60 shadow-md flex items-center justify-center shrink-0 ${
              isScrolled
                ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px]'
                : 'w-20 h-20 sm:w-24 sm:h-24 md:w-[96px] md:h-[96px]'
            }`}>
              <img
                src={logoImg}
                alt="Cloudy Range Adventures Inc. - Parakaruti Eco Lodge Logo"
                className="w-full h-full object-contain rounded-full transform group-hover:scale-105 transition-transform duration-300"
                loading="eager"
              />
            </div>
            <div>
              <span
                style={{ fontSize: '26px' }}
                className="block font-serif font-bold text-white tracking-tight leading-none group-hover:text-[#86efac] transition-colors"
              >
                Cloudy Range Adventures
              </span>
              <span className="block text-xs sm:text-sm text-[#a0c4ae] tracking-wider uppercase mt-1 group-hover:text-white transition-colors">
                Parakaruti Eco Lodge
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#e2ece4]">
            {navLinks.map((link) => {
              const isAbout = link.href === '#about';
              const isBlog = link.href === '#founder';
              const isAccommodation = link.href === '#accommodation';
              const isActive =
                (currentView === 'about' && isAbout) ||
                (currentView === 'blog' && isBlog) ||
                (currentView === 'accommodation' && isAccommodation);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#52b788] after:transition-all ${
                    isActive
                      ? 'text-[#86efac] font-bold after:opacity-100'
                      : 'hover:text-[#86efac] after:opacity-0 hover:after:opacity-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              id="navbar-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Book on WhatsApp
            </a>
          </div>

          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d6dfd8] hover:text-white rounded-lg hover:bg-[#224b37] transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#12281e] border-b border-[#244b38] px-4 pt-3 pb-5 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2 text-base font-medium text-[#e2ece4] hover:text-white hover:bg-[#1a382a] rounded-lg transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
