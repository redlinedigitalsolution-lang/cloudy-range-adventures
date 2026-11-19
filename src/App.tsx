import { useState, useEffect } from 'react';
import { Home, Droplet, Flame, Mountain, ArrowRight } from 'lucide-react';
import { BusinessConfig } from './types';
import { loadSiteConfig } from './config/siteConfig';

// Components
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { ResponsibleTourism } from './components/ResponsibleTourism';
import { AccommodationSection } from './components/AccommodationSection';
import { Experiences } from './components/Experiences';
import { ConservationSection } from './components/ConservationSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { BookingCTA } from './components/BookingCTA';
import { BookingProcess } from './components/BookingProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConfigModal } from './components/ConfigModal';
import { FounderBlogSection } from './components/FounderBlogSection';
import { LodgeVideoSection } from './components/LodgeVideoSection';
import { FacilitiesSection } from './components/FacilitiesSection';

// Preview images
import bungalowExterior from './assets/images/parakaruti_actual_lodge_IMG_WA0056.jpg';
import cabinInterior from './assets/images/regenerated_image_1792045379170.jpg';

export function App() {
  const [config, setConfig] = useState<BusinessConfig>(loadSiteConfig);
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'blog' | 'accommodation' | 'video'>(() => {
    const hash = window.location.hash;
    if (hash === '#about' || hash === '#story') return 'about';
    if (hash === '#founder' || hash === '#blog') return 'blog';
    if (hash === '#accommodation') return 'accommodation';
    if (hash === '#video' || hash === '#video-tours') return 'video';
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#about' || hash === '#story') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#founder' || hash === '#blog') {
        setCurrentView('blog');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#accommodation') {
        setCurrentView('accommodation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#video' || hash === '#video-tours') {
        setCurrentView('video');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#hero' || hash === '') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (view: string, hashTarget?: string) => {
    if (view === 'about') {
      setCurrentView('about');
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'blog') {
      setCurrentView('blog');
      window.location.hash = '#blog';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'accommodation') {
      setCurrentView('accommodation');
      window.location.hash = '#accommodation';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'video') {
      setCurrentView('video');
      window.location.hash = '#video';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      if (hashTarget) {
        window.location.hash = hashTarget;
        setTimeout(() => {
          const el = document.querySelector(hashTarget);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.location.hash = '#hero';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#1c2820] font-sans antialiased selection:bg-[#2d5a3f] selection:text-white">
      <ScrollProgress />
      <Navbar
        config={config}
        onOpenConfig={() => setIsConfigOpen(true)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />
      <main className="flex-1">
        {currentView === 'about' ? (
          <OurStory
            config={config}
            isStandalonePage={true}
            onBackToHome={() => handleNavigate('home')}
            onNavigateToBlog={() => handleNavigate('blog')}
          />
        ) : currentView === 'blog' ? (
          <FounderBlogSection
            config={config}
            isStandalonePage={true}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : currentView === 'accommodation' ? (
          <AccommodationSection
            config={config}
            isStandalonePage={true}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : currentView === 'video' ? (
          <LodgeVideoSection
            config={config}
            isStandalonePage={true}
            onBackToHome={() => handleNavigate('home')}
          />
        ) : (
          <>
            <Hero
              config={config}
              onNavigateToAbout={() => handleNavigate('about')}
              onNavigateToAccommodation={() => handleNavigate('accommodation')}
            />
            <ResponsibleTourism />

            {/* Accommodation Preview Banner */}
            <section
              id="accommodation-preview"
              className="py-16 bg-[#f3efe8] text-[#1c2820] border-y border-[#dfd8cc]"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl border border-[#d6cfc4] p-6 sm:p-10 shadow-sm">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold uppercase tracking-wider border border-[#cbe0d3]">
                        <Home className="w-3.5 h-3.5 text-[#52b788]" />
                        <span>Parakaruti Eco Lodge</span>
                      </div>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#12281e] tracking-tight">
                        8 Handcrafted Single Bungalows in Auen Village
                      </h2>
                      <p className="text-sm sm:text-base text-[#465a4e] leading-relaxed">
                        Handcrafted from native hardwoods and bamboo overlooking the terraced gardens of Auen Village. Rates from <strong>K150 / night</strong> (Auen Valley Double) to <strong>K250 / night</strong> (Family Bungalow). Each cabin features a warm stone fireplace, private forest valley deck, clean mountain spring water, evening solar lighting with generator power, and organic highland breakfast included daily.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium text-[#2d5a3f]">
                        <span className="inline-flex items-center bg-[#f0f6f2] px-3 py-1.5 rounded-lg border border-[#d2e5d7]">
                          <Flame className="w-3.5 h-3.5 mr-1.5 text-[#ef4444]" /> Stone Fireplaces
                        </span>
                        <span className="inline-flex items-center bg-[#f0f6f2] px-3 py-1.5 rounded-lg border border-[#d2e5d7]">
                          <Mountain className="w-3.5 h-3.5 mr-1.5 text-[#0284c7]" /> Private Forest Valley Verandas
                        </span>
                        <span className="inline-flex items-center bg-[#f0f6f2] px-3 py-1.5 rounded-lg border border-[#d2e5d7]">
                          <Droplet className="w-3.5 h-3.5 mr-1.5 text-[#3b82f6]" /> Mountain Spring Water
                        </span>
                        <span className="inline-flex items-center bg-[#fef7ee] text-[#b45309] px-3 py-1.5 rounded-lg border border-[#fed7aa]">
                          From K150 to K250 / night
                        </span>
                      </div>
                      <div className="pt-4">
                        <button
                          onClick={() => handleNavigate('accommodation')}
                          className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1e4832] hover:bg-[#133222] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                        >
                          <span>Explore Full Accommodation Page (Photos, Amenities & Rates)</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                    <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
                        <img
                          src={bungalowExterior}
                          alt="Eco Lodge Bungalow Exterior"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-sm">
                        <img
                          src={cabinInterior}
                          alt="Cabin Interior with Cozy Fireplace"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <FacilitiesSection config={config} />
            <Experiences config={config} />
            <ConservationSection config={config} />
            <GallerySection />
            <LocationSection config={config} />
            <FAQSection config={config} />
            <BookingCTA config={config} />
            <BookingProcess config={config} />
            <ContactSection config={config} />
          </>
        )}
      </main>
      <Footer
        config={config}
        onOpenConfig={() => setIsConfigOpen(true)}
        onNavigate={handleNavigate}
      />
      <ConfigModal
        isOpen={isConfigOpen}
        onClose={() => setIsConfigOpen(false)}
        currentConfig={config}
        onSave={(updatedConfig) => setConfig(updatedConfig)}
      />
    </div>
  );
}

export default App;
