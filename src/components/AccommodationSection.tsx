import React, { useState, useEffect } from 'react';
import {
  Home,
  Sparkles,
  Phone,
  Trees,
  Flame,
  Mountain,
  Droplet,
  Bed,
  Users,
  Eye,
  Check,
  Sun,
  Calendar,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/siteConfig';

import bungalowBedroom from '../assets/images/regenerated_image_1792045379170.jpg';
import bungalowExterior from '../assets/images/parakaruti_actual_lodge_IMG_WA0056.jpg';
import valleyDeck from '../assets/images/bungalow_valley_deck_1789389797973.jpg';
import lodgeSurroundings from '../assets/images/regenerated_image_1789389134319.jpg';
import cottageBlueRoofs from '../assets/images/cottage_blue_roofs_1789470237450.jpg';

interface AccommodationSectionProps {
  config: BusinessConfig;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({
  config,
  onBackToHome,
  isStandalonePage = false,
}) => {
  const [selectedViewIdx, setSelectedViewIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [currency, setCurrency] = useState<'PGK' | 'USD'>('PGK');

  const accommodationWhatsAppUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    `Hello Julie, I would like to check accommodation availability for the 8 Eco Lodge Single Bungalows at Parakaruti Eco Lodge.\n\nDates of stay:\nNumber of bungalows / guests (1–3 guests per bungalow):\n\nPlease let me know current rates and availability.`
  );

  const roomCards = [
    {
      id: 'auen-valley-double',
      name: 'Auen Valley Double',
      badge: 'Featured • Garden View',
      badgeBg: 'bg-[#2d5a3f]',
      badgeText: 'text-white',
      priceKina: 'K150',
      priceUsd: '$40',
      priceLabel: 'K150',
      priceSub: 'approx. $40 USD / night',
      roomType: 'Double',
      guests: '2 Guests',
      bed: '1 Queen Bed',
      view: 'Garden View (Terraced gardens of Auen Village)',
      tagline:
        'Overlooking the terraced gardens of Auen Village. A spacious double room with traditional woven décor.',
      description:
        'Overlooking the terraced gardens of Auen Village. A spacious double room with traditional woven décor and evening Solar lighting and generator power supply.',
      features: [
        'Overlooking the terraced gardens of Auen Village',
        'Spacious double room with traditional woven décor',
        '1 Queen Bed with crisp highland linens',
        'Evening Solar lighting & generator power supply',
        'Mosquito net protection',
        'Refreshing rainwater shower & gravity spring water',
        'Fresh organic highland breakfast included daily',
        'Garden-view private veranda seating',
      ],
      isPopular: true,
    },
    {
      id: 'bungalow-eco-hut',
      name: 'Bungalow Eco Traditional Hut',
      badge: 'Authentic Traditional Living',
      badgeBg: 'bg-[#b45309]',
      badgeText: 'text-white',
      priceKina: 'K200',
      priceUsd: '$53',
      priceLabel: 'K200',
      priceSub: 'approx. $53 USD / night',
      roomType: 'Eco Traditional Hut',
      guests: '1–3 Guests',
      bed: '1 Double Bed + 1 Single Bed',
      view: 'Forest Valley & Cloud Mountain View',
      tagline:
        'Handcrafted highland hut built with native timber, stone fireplace, 1 double bed, and 1 single bed.',
      description:
        'Built by Dei Council artisans from native hardwoods and woven bamboo. Features 1 double bed and 1 single bed, an indoor stone fireplace to warm misty mountain evenings, pure spring water, and traditional motifs.',
      features: [
        'Native hardwoods and traditional woven bamboo',
        'Built-in stone fireplace for cool highland nights',
        '1 Double Bed + 1 Single Bed with mosquito nets',
        'Evening Solar lighting & generator power supply',
        'Rainwater shower & clean mountain spring water',
        'Traditional woven highland wall textures',
        'Fresh organic highland breakfast included daily',
        'Private forest valley viewing deck',
      ],
      isPopular: false,
    },
    {
      id: 'family-traditional-hut',
      name: 'Family Traditional Bungalow',
      badge: 'Best for Families & Groups',
      badgeBg: 'bg-[#1e4832]',
      badgeText: 'text-white',
      priceKina: 'K250',
      priceUsd: '$66',
      priceLabel: 'K250',
      priceSub: 'approx. $66 USD / night',
      roomType: 'Family Bungalow',
      guests: '3–6 Guests',
      bed: '1 Queen Bed + 2 Single Bed',
      view: 'Panoramic Terraced Gardens & Valley View',
      tagline:
        'Spacious family lodge overlooking terraced gardens with ample room for children and hiking groups.',
      description:
        'Generous family layout overlooking the terraced gardens of Auen Village. Includes 1 Queen Bed plus twin single beds, mosquito nets, stone fireplace, and full breakfast.',
      features: [
        'Overlooking the terraced gardens of Auen Village',
        'Spacious family accommodation for 3 to 6 guests',
        '1 Queen Bed + 2 Single Bed with mosquito nets',
        'Evening Solar lighting & generator power supply',
        'Refreshing rainwater shower & gravity spring water',
        'Indoor stone fireplace for family gatherings',
        'Full family organic highland breakfast included daily',
        'Expansive private veranda with garden vistas',
      ],
      isPopular: false,
    },
  ];

  const bungalowViews = [
    {
      src: bungalowBedroom,
      title: 'Eco Lodge Guest Room',
      subtitle: 'Comfortable Twin Bedding & Woven Interiors',
      description:
        'Authentic highland guest room featuring comfortable twin beds, clean mountain linens, woven bamboo wall textures, and peaceful forest breezes.',
    },
    {
      src: bungalowExterior,
      title: 'Eco Lodge Huts',
      subtitle: '8 Single Bungalows Nestled in the Cloud Forest',
      description:
        'Handcrafted from locally harvested native hardwoods and bamboo. Nestled quietly on the mountain slopes of Auen Village overlooking tropical forest valleys.',
    },
    {
      src: valleyDeck,
      title: 'Private Forest Viewing Deck',
      subtitle: 'Panoramic Tropical Forest Valley Vistas',
      description:
        'Each of the 8 single bungalows features a secluded private timber viewing deck perched high above tropical rainforest valleys and bird habitats.',
    },
    {
      src: lodgeSurroundings,
      title: 'Village & Spring Grounds',
      subtitle: 'Clean Mountain Spring Water',
      description:
        'Powered by natural mountain spring water from pristine highland streams, surrounded by organic village gardens and tranquil walking paths.',
    },
  ];

  const highlights = [
    {
      icon: Trees,
      iconColor: 'text-[#4ade80]',
      bgColor: 'bg-[#1b4332]/10',
      title: 'Native Hardwood & Bamboo',
      description:
        'Handcrafted entirely from locally harvested native timber and traditional woven bamboo by Western Highlands carpenters.',
    },
    {
      icon: Flame,
      iconColor: 'text-[#f87171]',
      bgColor: 'bg-[#b91c1c]/10',
      title: 'Stone Fireplaces',
      description:
        'Built-in rustic indoor fireplaces keep each cabin warm and comfortable during misty, cool mountain nights.',
    },
    {
      icon: Mountain,
      iconColor: 'text-[#38bdf8]',
      bgColor: 'bg-[#0369a1]/10',
      title: 'Private Viewing Decks',
      description:
        'Step out onto your private veranda perched high above tropical forest valleys for birdwatching and misty sunrises.',
    },
    {
      icon: Droplet,
      iconColor: 'text-[#60a5fa]',
      bgColor: 'bg-[#2563eb]/10',
      title: 'Spring Water',
      description:
        'Pristine, clean drinking and washing water piped straight from high mountain springs.',
    },
  ];

  const beforeYouBookDetails = [
    { label: 'Auen Valley Double Rate', value: 'K150 / night (~$40 USD)', highlight: true },
    { label: 'Eco Traditional Hut Rate', value: 'K200 / night (~$53 USD)', highlight: true },
    { label: 'Family Traditional Bungalow', value: 'K250 / night (~$66 USD)', highlight: true },
    { label: 'Breakfast Included', value: 'Included daily (Garden-fresh highland produce)', highlight: false },
    { label: 'Power & Lighting', value: 'Evening Solar + Generator power supply', highlight: false },
    { label: 'Water & Showers', value: 'Rainwater shower & mountain spring water', highlight: false },
    { label: 'Total Bungalows Available', value: '8 Private Handcrafted Bungalows', highlight: false },
    { label: 'Check-in / Check-out', value: 'Flexible village arrival coordination', highlight: false },
    { label: 'Transport from Mt. Hagen', value: 'Approx. 1 hour (arrange via lodge)', highlight: false },
    { label: 'Payment Methods', value: 'Direct bank transfer / cash on arrival', highlight: false },
  ];

  // Auto-slide effect for bungalow views (advances every 4.5 seconds)
  useEffect(() => {
    if (!isAutoPlaying || isUserInteracting) return;

    const interval = setInterval(() => {
      setSelectedViewIdx((prev) => (prev + 1) % bungalowViews.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isUserInteracting, bungalowViews.length]);

  const handleNextSlide = () => {
    setSelectedViewIdx((prev) => (prev + 1) % bungalowViews.length);
  };

  const handlePrevSlide = () => {
    setSelectedViewIdx((prev) => (prev - 1 + bungalowViews.length) % bungalowViews.length);
  };

  return (
    <section id="accommodation" className="py-20 bg-[#faf8f5] text-[#1c2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standalone navigation back banner */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#dce6df] shadow-xs">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1f4a33] hover:text-[#11281c] bg-[#eef5f1] hover:bg-[#dfeee5] px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Adventures (Home)</span>
            </button>
            <div className="text-xs text-[#526b5c] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#52b788]" />
              <span className="font-medium">Cloudy Range Adventure • Parakaruti Eco Lodge</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#cbe0d3]">
            <Home className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Eco Lodge Huts</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            Stay at Parakaruti Eco Lodge
          </h2>
          <p className="mt-3 text-lg sm:text-xl font-medium text-[#2d5a3f]">
            8 Handcrafted Single Bungalows in Auen Village
          </p>
          <p className="mt-4 text-base sm:text-lg text-[#465a4e] leading-relaxed max-w-2xl mx-auto">
            Handcrafted from locally harvested native hardwoods and bamboo. Features stone fireplaces, private viewing decks overlooking tropical forest valleys, and clean mountain spring water.
          </p>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-6 rounded-full" />
        </div>

        {/* Visual Gallery / View Selector Card */}
        <div
          className="mt-12 bg-white rounded-3xl border border-[#e2dcd4] shadow-sm overflow-hidden p-4 sm:p-6 lg:p-8"
          onMouseEnter={() => setIsUserInteracting(true)}
          onMouseLeave={() => setIsUserInteracting(false)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Main Image Stage */}
            <div className="lg:col-span-8">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#162a20] shadow-md group">
                <img
                  key={selectedViewIdx}
                  src={bungalowViews[selectedViewIdx].src}
                  alt={bungalowViews[selectedViewIdx].title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/20 z-10">
                  <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                  <span>8 Single Bungalows</span>
                </div>

                {/* Slide indicator dots */}
                <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/20 z-10">
                  {bungalowViews.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setSelectedViewIdx(dotIdx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        selectedViewIdx === dotIdx
                          ? 'w-5 bg-[#52b788]'
                          : 'w-1.5 bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to view ${dotIdx + 1}`}
                      title={`View ${dotIdx + 1}: ${bungalowViews[dotIdx].title}`}
                    />
                  ))}
                </div>

                {/* Previous & Next arrows */}
                <button
                  type="button"
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer border border-white/25 shadow-md z-10"
                  aria-label="Previous view"
                  title="Previous view"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-80 group-hover:opacity-100 hover:scale-105 cursor-pointer border border-white/25 shadow-md z-10"
                  aria-label="Next view"
                  title="Next view"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {bungalowViews[selectedViewIdx].subtitle && (
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                    <span className="text-xs font-medium uppercase tracking-wider text-[#9ee3bc] inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15">
                      {bungalowViews[selectedViewIdx].subtitle}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* View Selector List */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-3 sm:space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                      Select Bungalow View
                    </span>
                    {isAutoPlaying && (
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#e0f2e6] text-[#1b4d32] border border-[#a8d5b8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a3f] animate-pulse mr-1" />
                        Auto Slide
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="text-[11px] font-semibold text-[#2d5a3f] hover:text-[#132c1e] bg-[#edf5f0] hover:bg-[#e0eee5] px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer border border-[#cbe0d3]"
                    title={isAutoPlaying ? 'Pause automatic slideshow' : 'Start automatic slideshow'}
                  >
                    {isAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 text-[#2d5a3f]" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 text-[#2d5a3f]" />
                        <span>Auto Slide</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-[#526658] mb-3">
                  Click any view below to preview the architectural details and landscape setting:
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {bungalowViews.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedViewIdx(idx)}
                    className={`relative flex items-center space-x-3 p-2 rounded-xl text-left transition-all border cursor-pointer overflow-hidden ${
                      selectedViewIdx === idx
                        ? 'bg-[#edf6f0] border-[#2d5a3f] shadow-sm ring-1 ring-[#2d5a3f]'
                        : 'bg-[#faf8f5] border-[#e6dfd6] hover:bg-[#f2ece3] hover:border-[#c8bfb3]'
                    }`}
                  >
                    {selectedViewIdx === idx && isAutoPlaying && !isUserInteracting && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d5a3f]/20 overflow-hidden">
                        <div
                          key={`progress-${selectedViewIdx}`}
                          className="h-full bg-[#2d5a3f] animate-slide-progress"
                        />
                      </div>
                    )}
                    <div className="w-14 h-14 sm:w-16 sm:h-14 rounded-lg overflow-hidden shrink-0 bg-gray-200">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-[#14291f] truncate">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#55695c] truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={accommodationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow hover:shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Reserve Bungalow on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Highlights Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#e2dcd4] shadow-sm hover:shadow-md transition-all flex flex-col items-start"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-4 border border-[#e2ece5]`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#12281e]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4d5e53] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Featured Landscape Perspective: Authentic Blue-Roofed Highland Huts */}
        <div className="mt-14 bg-gradient-to-br from-[#12281e] via-[#1a382a] to-[#0f2319] text-white rounded-3xl overflow-hidden shadow-xl border border-[#2d5a3f]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Image Container with Best-Viewing Aspect & Subtle Zoom Effect */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px] overflow-hidden group">
              <img
                src={cottageBlueRoofs}
                alt="Highland eco lodge huts with blue roofs nestled in tropical foliage, Auen Village Papua New Guinea"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12281e]/90 via-transparent to-black/20 lg:bg-gradient-to-r lg:from-transparent lg:via-[#12281e]/30 lg:to-[#12281e] pointer-events-none" />

              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#86efac]">
                <Mountain className="w-3.5 h-3.5 text-[#52b788]" />
                <span>Authentic Ridge Landscape</span>
              </div>
            </div>

            {/* Attached Text Story & Viewing Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#52b788]/20 text-[#86efac] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#52b788]/30">
                  <Trees className="w-3.5 h-3.5" />
                  <span>Auen Village Highland Setting</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  Eco Lodge Huts Nestled in the Cloud Forest
                </h3>
                <p className="mt-3.5 text-sm sm:text-base text-[#d1e5d8] leading-relaxed">
                  Perched amidst tropical mountain ginger, fern gullies, and virgin highland rainforest, Parakaruti Eco Lodge offers a serene sanctuary where traditional village craftsmanship meets the dramatic ridges of the Cloudy Range.
                </p>

                {/* Key feature checkmarks */}
                <div className="mt-6 space-y-2.5">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#e3eee7]">
                    <span className="w-5 h-5 rounded-full bg-[#52b788]/25 flex items-center justify-center shrink-0 mt-0.5 text-[#86efac]">
                      ✓
                    </span>
                    <span>8 private handcrafted single bungalows with gabled roofs</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#e3eee7]">
                    <span className="w-5 h-5 rounded-full bg-[#52b788]/25 flex items-center justify-center shrink-0 mt-0.5 text-[#86efac]">
                      ✓
                    </span>
                    <span>Surrounded by organic highland flora & bird habitats</span>
                  </div>
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-[#e3eee7]">
                    <span className="w-5 h-5 rounded-full bg-[#52b788]/25 flex items-center justify-center shrink-0 mt-0.5 text-[#86efac]">
                      ✓
                    </span>
                    <span>Panoramic ridge vistas across Dei Council valleys</span>
                  </div>
                </div>
              </div>

              {/* Action Link to WhatsApp */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div>
                  <span className="block text-[11px] text-[#9dc9ae] uppercase tracking-wider font-semibold">Experience this view</span>
                  <span className="text-white font-bold text-sm">Stay in Auen Village</span>
                </div>
                <a
                  href={accommodationWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-[#52b788] hover:bg-[#40916c] text-[#0d2116] hover:text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5" />
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Rates & Bungalow Options */}
        <div id="accommodation-rates" className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold uppercase tracking-wider border border-[#cbe0d3] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                <span>Nightly Rates & Bungalow Options</span>
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#12281e] tracking-tight">
                Accommodation Rates Per Night
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#465a4e] max-w-2xl leading-relaxed">
                Choose between double rooms overlooking terraced village gardens, authentic traditional huts with stone fireplaces, or spacious family lodges. All stays include home-cooked highland breakfast, evening solar lighting, and generator power supply.
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center space-x-2 bg-white p-1.5 rounded-xl border border-[#d8d2c8] shadow-xs self-start md:self-auto shrink-0">
              <span className="text-xs font-medium text-[#526658] px-2">Currency:</span>
              <button
                type="button"
                onClick={() => setCurrency('PGK')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'PGK'
                    ? 'bg-[#1e4832] text-white shadow-xs'
                    : 'text-[#485e50] hover:bg-[#f0ece4]'
                }`}
              >
                PGK (Kina)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-[#1e4832] text-white shadow-xs'
                    : 'text-[#485e50] hover:bg-[#f0ece4]'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>

          {/* 3 Room Rate Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {roomCards.map((room) => {
              const cardWhatsAppUrl = buildWhatsAppUrl(
                config.whatsappCleanNumber,
                `Hello Julie, I would like to book the ${room.name} (${room.priceLabel} / night) at Parakaruti Eco Lodge.\n\nDates of stay:\nNumber of guests (${room.guests}):\n\nPlease let me know availability!`
              );

              return (
                <div
                  key={room.id}
                  className={`bg-white rounded-3xl border transition-all duration-200 flex flex-col justify-between overflow-hidden ${
                    room.isPopular
                      ? 'border-[#2d5a3f] shadow-md ring-2 ring-[#2d5a3f]/15'
                      : 'border-[#dfd8cc] shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${room.badgeBg} ${room.badgeText}`}
                      >
                        {room.badge}
                      </span>
                      {room.isPopular && (
                        <span className="text-[11px] font-semibold text-[#1e4832] bg-[#eef7f1] px-2.5 py-0.5 rounded-md border border-[#cbe0d3]">
                          Most Requested
                        </span>
                      )}
                    </div>

                    <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#12281e] tracking-tight">
                      {room.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4d6153] mt-2 line-clamp-2 leading-relaxed">
                      {room.tagline}
                    </p>

                    <div className="my-5 p-4 rounded-2xl bg-[#faf7f2] border border-[#eee7dc]">
                      <div className="flex items-baseline space-x-1.5">
                        <span
                          key={`price-span-${room.id}-${currency}-${room.priceKina}`}
                          data-price={room.priceKina}
                          className="font-serif font-extrabold text-3xl sm:text-4xl text-[#12281e]"
                        >
                          {currency === 'PGK' ? room.priceKina : room.priceUsd}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-[#5a6e60]">
                          {currency === 'PGK' ? 'PGK / night' : 'USD / night'}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#718578] mt-1 font-medium">
                        {currency === 'PGK'
                          ? room.priceSub
                          : `approx. ${room.priceKina} PGK / night`}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs mb-5">
                      <div className="flex items-center space-x-1.5 p-2 rounded-xl bg-[#f4f8f5] text-[#224832] border border-[#dce8e0]">
                        <Bed className="w-3.5 h-3.5 text-[#2d5a3f] shrink-0" />
                        <span className="font-medium truncate">{room.bed}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 p-2 rounded-xl bg-[#f4f8f5] text-[#224832] border border-[#dce8e0]">
                        <Users className="w-3.5 h-3.5 text-[#2d5a3f] shrink-0" />
                        <span className="font-medium truncate">{room.guests}</span>
                      </div>
                      <div className="col-span-2 flex items-center space-x-1.5 p-2 rounded-xl bg-[#f4f8f5] text-[#224832] border border-[#dce8e0]">
                        <Eye className="w-3.5 h-3.5 text-[#2d5a3f] shrink-0" />
                        <span className="font-medium truncate">{room.view}</span>
                      </div>
                    </div>

                    <div className="border-t border-[#f0ebe3] pt-4 mt-auto">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f] mb-3">
                        Included Features & Amenities:
                      </p>
                      <ul className="space-y-2.5 text-xs text-[#3d5044]">
                        {room.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start space-x-2 leading-snug">
                            <Check className="w-3.5 h-3.5 text-[#2d5a3f] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 bg-[#fbf9f6] border-t border-[#eee7dc]">
                    <a
                      href={cardWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>Book {room.name} via WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Village Hospitality & Power Guarantee Banner */}
          <div className="mt-8 p-5 bg-[#f5fbf7] rounded-2xl border border-[#cbe6d4] text-[#1c482f] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <Sun className="w-5 h-5 text-[#2d5a3f] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <strong>Village Hospitality & Power Guarantee:</strong> All bungalows are equipped with evening solar lighting and generator power supply. Rainwater showers and clean mountain spring water are gravity-fed directly from highland catchments. Stays include home-cooked breakfast prepared with sweet potatoes, fresh greens, and seasonal fruits from Auen Village gardens.
              </div>
            </div>
            <a
              href={accommodationWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-xs font-bold text-[#1e4832] hover:text-[#0f281b] underline underline-offset-4 decoration-[#52b788]"
            >
              Ask Julie about custom group packages →
            </a>
          </div>
        </div>

        {/* Before You Book Card */}
        <div className="mt-14 max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-2xl border border-[#e2dcd4] shadow-sm p-6 sm:p-8">
            <div className="flex items-center space-x-2.5 mb-5 pb-3 border-b border-[#ece6de]">
              <Calendar className="w-5 h-5 text-[#2d5a3f]" />
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#12281e]">
                Before You Book
              </h3>
            </div>
            <div className="space-y-3">
              {beforeYouBookDetails.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-sm py-2 border-b border-[#f6f2ec] last:border-b-0"
                >
                  <span className="text-[#4b5d52]">{item.label}</span>
                  <span
                    className={`font-semibold text-right ${
                      item.highlight ? 'text-[#1c5535]' : 'text-[#687a70]'
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#ece6de]">
              <a
                id="accommodation-whatsapp-cta"
                href={accommodationWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                Inquire & Book Bungalow on WhatsApp
              </a>
              <p className="mt-3 text-center text-xs text-[#627568]">
                Directly contact Julie Bengi (+675 70143943) with your arrival dates and guest count.
              </p>
            </div>
          </div>

          {/* Host Contact Box */}
          <div className="bg-[#eef4ef] rounded-2xl p-6 border border-[#cfe0d5] flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#2d5a3f] text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
              JB
            </div>
            <div>
              <p className="text-xs text-[#2d5a3f] font-bold uppercase tracking-wider">
                Direct Inquiries & Booking
              </p>
              <p className="text-base font-bold text-[#12281e]">
                Julie Bengi • Lodge Host
              </p>
              <p className="text-xs text-[#4b6153]">
                {config.email} • {config.whatsappNumber}
              </p>
            </div>
          </div>
        </div>

        {/* Standalone return to home footer button */}
        {isStandalonePage && onBackToHome && (
          <div className="mt-16 pt-10 border-t border-[#dfd7cc] text-center">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#183928] hover:bg-[#0f251a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Home & Explore Experiences</span>
            </button>
            <p className="mt-3 text-xs text-[#63776b]">
              Discover our 8 highland adventure itineraries, conservation projects, cultural tours and booking process.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
