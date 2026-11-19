import React, { useState, useEffect } from 'react';
import {
  UtensilsCrossed,
  Building2,
  Users,
  Sun,
  Flame,
  Coffee,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Upload,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Phone,
  ShieldCheck,
  Layers,
  Heart,
  Trash2,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/siteConfig';

// Default images for Facilities
import kitchenHeroImg from '../assets/images/eco_lodge_kitchen_1791203292148.jpg';
import lodgeBungalowImg from '../assets/images/parakaruti_lodge_original_WA0056.jpg';
import conferenceHeroImg from '../assets/images/conference_building_1791203307057.jpg';
import mumuOvenImg from '../assets/images/mumu_earth_oven_1791208269423.jpg';
import breakfastImg from '../assets/images/highland_breakfast_1791208280780.jpg';
import cabinFireplaceImg from '../assets/images/cabin_interior_fire_1789389780153.jpg';
import produceHarvestImg from '../assets/images/create_livelihoods_1789468629324.jpg';
import diningVerandaImg from '../assets/images/regenerated_image_1791611006626.jpg';
import coffeeHighlandImg from '../assets/images/togoba_highland_coffee_1791617467072.jpg';
import feastCultureImg from '../assets/images/celebrate_culture_1789468612341.jpg';
import mountainVerandaDiningImg from '../assets/images/bungalow_valley_deck_1789389797973.jpg';

export interface KitchenImageSlot {
  id: number;
  title: string;
  category: string;
  description: string;
  defaultSrc: string;
}

export const DEFAULT_KITCHEN_SLOTS: KitchenImageSlot[] = [
  {
    id: 1,
    title: 'Main Timber Prep Counter & Open Kitchen',
    category: 'Food Preparation',
    description:
      'Handcrafted native hardwood prep benches where fresh garden produce, local ingredients, and home-cooked meals are prepared daily.',
    defaultSrc: kitchenHeroImg,
  },
  {
    id: 2,
    title: 'Traditional Mumu Earth Oven & River Stone Pit',
    category: 'Cultural Cooking',
    description:
      'Authentic Papua New Guinea earth oven steamed beneath fragrant banana leaves over glowing hot river stones for ceremonial feasts.',
    defaultSrc: mumuOvenImg,
  },
  {
    id: 3,
    title: 'Fresh Valley Organic Garden Harvest',
    category: 'Farm to Table',
    description:
      'Freshly harvested kaukau (sweet potatoes), highland cabbage, pumpkin, greens, and herbs sourced directly from Auen Village family gardens.',
    defaultSrc: produceHarvestImg,
  },
  {
    id: 4,
    title: 'Highland Wood-Fired Hearth & Open Fireplace',
    category: 'Hearth & Warmth',
    description:
      'Cozy stone fireplace where fresh mountain kettle tea brews and the evening fires warm lodge guests in the cool mountain climate.',
    defaultSrc: cabinFireplaceImg,
  },
  {
    id: 5,
    title: 'Hearty Farm Breakfast Spread',
    category: 'Breakfast Service',
    description:
      'Fresh creamy avocado, fried eggs, sweet potato kaukau, garden greens, and hot brewed coffee served every morning for guests.',
    defaultSrc: breakfastImg,
  },
  {
    id: 6,
    title: 'Delicious Home-Cooked Evening Dinners',
    category: 'Lodge Dinners',
    description:
      'Wholesome evening dinners featuring local steaks, organic vegetables, golden potato chips, and traditional highland sides.',
    defaultSrc: diningVerandaImg,
  },
  {
    id: 7,
    title: 'Conference & Dining Hall (K350 Client Hire)',
    category: 'Conference Hall',
    description:
      'Spacious indoor meeting and gathering space available for client hire at K350, with workshop seating and timber tables for up to 50 delegates.',
    defaultSrc: conferenceHeroImg,
  },
  {
    id: 8,
    title: 'Highland Arabica Coffee & Fireside Brewing',
    category: 'Coffee & Tea',
    description:
      'Locally grown Togoba organic Arabica coffee roasted and brewed fresh each morning alongside native herbal mountain tea infusions.',
    defaultSrc: coffeeHighlandImg,
  },
  {
    id: 9,
    title: 'Celebration Feasting & Clan Hospitality',
    category: 'Customary Feasts',
    description:
      'Shared communal dining tables celebrating traditional highland hospitality with roasted meats, garden greens, and village songs.',
    defaultSrc: feastCultureImg,
  },
  {
    id: 10,
    title: 'Sunset Mountain Veranda & Outdoor Valley Dining',
    category: 'Alfresco Dining',
    description:
      'Scenic open-air timber deck dining where guests enjoy warm morning tea and sunset dinners overlooking misty tropical rainforest valleys.',
    defaultSrc: mountainVerandaDiningImg,
  },
];

interface FacilitiesSectionProps {
  config: BusinessConfig;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'kitchen' | 'conference'>('kitchen');
  const [customImages, setCustomImages] = useState<{ [key: number]: string }>({});
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [uploadNotice, setUploadNotice] = useState<string>('');

  // Load saved custom kitchen images from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cloudy_range_kitchen_images');
      if (saved) {
        setCustomImages(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveCustomImages = (updated: { [key: number]: string }) => {
    setCustomImages(updated);
    try {
      localStorage.setItem('cloudy_range_kitchen_images', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleImageUpload = (slotId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadNotice('Please select a valid image file (.jpg, .png, .webp).');
      setTimeout(() => setUploadNotice(''), 3500);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        const updated = { ...customImages, [slotId]: reader.result };
        saveCustomImages(updated);
        setUploadNotice(`Updated image slot #${slotId}!`);
        setTimeout(() => setUploadNotice(''), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = (slotId: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = { ...customImages, [slotId]: '' };
    saveCustomImages(updated);
    setUploadNotice(`Photo removed from Space #${slotId < 10 ? `0${slotId}` : slotId}.`);
    setTimeout(() => setUploadNotice(''), 3000);
  };

  const handleResetSlot = (slotId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = { ...customImages };
    delete updated[slotId];
    saveCustomImages(updated);
    setUploadNotice(`Reset image slot #${slotId} to default photo.`);
    setTimeout(() => setUploadNotice(''), 3000);
  };

  const getImageSrc = (slot: KitchenImageSlot) => {
    if (customImages[slot.id] !== undefined) {
      return customImages[slot.id];
    }
    return slot.defaultSrc;
  };

  const whatsappKitchenUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    `Hello Julie, I am interested in dining options and traditional Mumu feast experiences at Parakaruti Eco Lodge. Could you please provide details on meals and catering?`
  );

  const whatsappConferenceUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    `Hello Julie, I would like to enquire about hiring the Cloudy Range Conference Room at K350 for client hire. Could you please confirm availability, setup, and catering options?`
  );

  const currentLightboxSlot = lightboxIdx !== null ? DEFAULT_KITCHEN_SLOTS[lightboxIdx] : null;

  return (
    <section id="facilities" className="py-20 bg-[#f7f4ed] text-[#1c2820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold uppercase tracking-wider border border-[#cbe0d3] mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Lodge Amenities & Facilities</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            Our Lodge Facilities
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4a5f52] leading-relaxed max-w-2xl mx-auto">
            From our authentic highland eco-kitchen serving fresh organic farm meals and traditional feasts to our scenic timber conference hall for retreats and meetings.
          </p>

          {/* Interactive Facilities Tabs */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#e6e1d5] border border-[#d6cfbe] shadow-inner">
              <button
                onClick={() => setActiveTab('kitchen')}
                className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  activeTab === 'kitchen'
                    ? 'bg-[#1e4832] text-white shadow-md'
                    : 'text-[#415548] hover:text-[#12281e] hover:bg-[#ded8cc]'
                }`}
              >
                <UtensilsCrossed className="w-4 h-4 text-[#86efac]" />
                <span>Eco Lodge Kitchen & Dining</span>
              </button>

              <button
                onClick={() => setActiveTab('conference')}
                className={`inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                  activeTab === 'conference'
                    ? 'bg-[#1e4832] text-white shadow-md'
                    : 'text-[#415548] hover:text-[#12281e] hover:bg-[#ded8cc]'
                }`}
              >
                <Building2 className="w-4 h-4 text-[#86efac]" />
                <span>Conference Room • K350 Hire</span>
              </button>
            </div>
          </div>
        </div>

        {uploadNotice && (
          <div className="max-w-3xl mx-auto mb-6 p-3 rounded-xl bg-[#e8f5e9] border border-[#a5d6a7] text-[#1b5e20] text-xs font-semibold flex items-center justify-center space-x-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-[#2e7d32]" />
            <span>{uploadNotice}</span>
          </div>
        )}

        {/* TAB 1: KITCHEN & DINING */}
        {activeTab === 'kitchen' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Kitchen Overview Spotlight Card */}
            <div className="rounded-3xl bg-white border border-[#dfd7ca] overflow-hidden shadow-sm p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#f0f6f2] text-[#2d5a3f] text-xs font-semibold border border-[#d2e5d7]">
                    <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                    <span>Farm-to-Table & Traditional Hearth</span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#12281e]">
                    Parakaruti Eco Lodge Kitchen & Dining
                  </h3>
                  <p className="text-sm sm:text-base text-[#465a4e] leading-relaxed">
                    At Parakaruti Eco Lodge, food is an essential connection to the land and customary highland culture. All meals are prepared with love using organic vegetables harvested daily from Auen Village clan gardens, free-range local meats, and sweet potatoes (kaukau).
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#2d5a3f]">
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#f7faf8] border border-[#e2ede5]">
                      <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                      <span>Daily Organic Breakfast Included</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#f7faf8] border border-[#e2ede5]">
                      <Flame className="w-4 h-4 text-[#ef4444] shrink-0" />
                      <span>Traditional Mumu Feast on Request</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#f7faf8] border border-[#e2ede5]">
                      <Coffee className="w-4 h-4 text-[#b45309] shrink-0" />
                      <span>Highland Arabica Coffee & Teas</span>
                    </div>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#f7faf8] border border-[#e2ede5]">
                      <ShieldCheck className="w-4 h-4 text-[#0284c7] shrink-0" />
                      <span>Filtered Mountain Spring Water</span>
                    </div>
                  </div>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappKitchenUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#1e4832] hover:bg-[#133222] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Enquire About Meals & Catering on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#d6cfc4] group">
                  <img
                    src={lodgeBungalowImg}
                    alt="Parakaruti Eco Lodge handcrafted highland bungalow building in Auen Village"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-5">
                    <div>
                      <span className="px-2.5 py-1 rounded bg-[#2d5a3f] text-white text-[11px] font-bold">
                        Parakaruti Eco Lodge
                      </span>
                      <h4 className="text-white font-bold text-base mt-1">
                        Handcrafted Village Lodge & Facilities
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Culinary Highlights Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-[#dfd7ca] p-6 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] text-[#2d5a3f] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-[#ef4444]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#12281e]">Traditional Mumu Earth Oven</h4>
                <p className="text-xs sm:text-sm text-[#465a4e] leading-relaxed">
                  Experience ancient Highlands culinary heritage with slow-cooked meats, bananas, and root vegetables steamed over hot river stones beneath fragrant banana leaves.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#dfd7ca] p-6 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] text-[#2d5a3f] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#2d5a3f]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#12281e]">Auen Village Organic Harvest</h4>
                <p className="text-xs sm:text-sm text-[#465a4e] leading-relaxed">
                  From crisp garden greens and sweet potato kaukau to fresh tropical fruits, all our meals are sourced directly from our village family gardens each morning.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#dfd7ca] p-6 space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#e8f5e9] text-[#2d5a3f] flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#b45309]" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#12281e]">Highland Coffee & Hearth Nights</h4>
                <p className="text-xs sm:text-sm text-[#465a4e] leading-relaxed">
                  Gather around the stone fireplace with freshly brewed local Arabica coffee, artisan mountain teas, and authentic fireside acoustic guitar storytelling.
                </p>
              </div>
            </div>

            {/* 10 Image Space Gallery Grid */}
            <div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#12281e]">
                    Kitchen Photo Showcase ({DEFAULT_KITCHEN_SLOTS.length} Dedicated Spaces)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5a7061]">
                    Browse our kitchen, meal preparation, traditional ovens, and dining spaces. You can also upload your own photos into each slot!
                  </p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] border border-[#cbe0d3]">
                  {DEFAULT_KITCHEN_SLOTS.filter((s) => Boolean(getImageSrc(s))).length} of {DEFAULT_KITCHEN_SLOTS.length} Spaces Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {DEFAULT_KITCHEN_SLOTS.map((slot, idx) => {
                  const currentImg = getImageSrc(slot);
                  const isCustom = Boolean(customImages[slot.id]);

                  return (
                    <div
                      key={slot.id}
                      className="group bg-white rounded-2xl border border-[#dfd7ca] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
                    >
                      {/* Image Thumbnail or Empty Placeholder */}
                      <div className="relative aspect-[4/3] bg-[#e8e4dc] overflow-hidden">
                        {currentImg ? (
                          <div
                            onClick={() => setLightboxIdx(idx)}
                            className="w-full h-full cursor-pointer relative"
                          >
                            <img
                              src={currentImg}
                              alt={slot.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              referrerPolicy="no-referrer"
                            />

                            {/* Top badge */}
                            {isCustom && (
                              <div className="absolute top-2 left-2 flex items-center space-x-1.5">
                                <span className="px-1.5 py-0.5 rounded bg-[#2e7d32] text-white text-[9px] font-bold">
                                  Custom
                                </span>
                              </div>
                            )}

                            {/* Hover Lightbox Indicator */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="p-2 rounded-full bg-white/90 text-[#12281e] shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                                <Maximize2 className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        ) : (
                          <label
                            className="w-full h-full flex flex-col items-center justify-center p-4 bg-[#f2ede4] border-2 border-dashed border-[#d3cbbe] hover:border-[#2d5a3f] text-[#55695c] hover:text-[#183925] transition-all cursor-pointer"
                            title={`Upload photo for Space #${slot.id}`}
                          >
                            <div className="absolute top-2 left-2 flex items-center space-x-1.5">
                              <span className="px-1.5 py-0.5 rounded bg-[#854d0e] text-white text-[9px] font-bold">
                                No Photo
                              </span>
                            </div>
                            <Upload className="w-6 h-6 mb-1 text-[#2d5a3f] group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-bold text-[#2d5a3f]">Upload Photo</span>
                            <span className="text-[10px] text-[#788a7e] mt-0.5 text-center">
                              Click to select an image
                            </span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(slot.id, e)}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>

                      {/* Content Card Body */}
                      <div className="p-3.5 flex-1 flex flex-col">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#52b788]">
                            {slot.category}
                          </span>
                          <h4 className="font-serif font-bold text-sm text-[#12281e] mt-0.5 line-clamp-1">
                            {slot.title}
                          </h4>
                          <p className="text-[11px] text-[#55695c] mt-1 line-clamp-2 leading-relaxed">
                            {slot.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CONFERENCE BUILDING */}
        {activeTab === 'conference' && (
          <div className="space-y-10 animate-fadeIn">
            {/* Conference Hero Showcase Card */}
            <div className="rounded-3xl bg-white border border-[#dfd7ca] overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold border border-[#cbe0d3]">
                      <Building2 className="w-3.5 h-3.5 text-[#52b788]" />
                      <span>Cloudy Range Mountain Facility</span>
                    </div>

                    <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#12281e] tracking-tight">
                      Highland Conference & Gathering Hall
                    </h3>

                    <p className="text-sm sm:text-base text-[#465a4e] leading-relaxed">
                      A modern, timber-crafted conference facility set among the tranquil gardens and mountain breezes of Auen Village. Designed specifically for corporate strategic planning, non-profit eco-summits, academic research groups, leadership workshops, and clan gatherings away from city distractions.
                    </p>

                    {/* Client Hire Pricing Callout Card */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#eef7f1] border border-[#a3d4b2] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#86efac] text-[10px] font-extrabold uppercase tracking-wider">
                            Client Hire
                          </span>
                          <span className="text-xs text-[#28573c] font-semibold">Standard Day Hire</span>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-serif font-extrabold text-3xl sm:text-4xl text-[#0d281a]">K350</span>
                          <span className="text-xs sm:text-sm text-[#46604e] font-medium">per client hire / event</span>
                        </div>
                        <p className="text-xs text-[#3f5a4a] leading-relaxed">
                          Includes complete access to the 50-seat conference room, timber workshop tables, chairs, and solar 240V power outlets.
                        </p>
                      </div>
                      <a
                        href={whatsappConferenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-[#1b4332] hover:bg-[#122e22] text-white font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 cursor-pointer"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Hire for K350</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                      <div className="p-3 rounded-xl bg-[#f7f5ef] border border-[#e4ded0] text-center">
                        <Users className="w-5 h-5 text-[#2d5a3f] mx-auto mb-1" />
                        <span className="block font-bold text-base text-[#12281e]">Up to 50</span>
                        <span className="text-[11px] text-[#5e7265]">Delegates</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#f7f5ef] border border-[#e4ded0] text-center">
                        <Sun className="w-5 h-5 text-[#f59e0b] mx-auto mb-1" />
                        <span className="block font-bold text-base text-[#12281e]">Solar 240V</span>
                        <span className="text-[11px] text-[#5e7265]">Clean Power</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#f7f5ef] border border-[#e4ded0] text-center">
                        <Coffee className="w-5 h-5 text-[#b45309] mx-auto mb-1" />
                        <span className="block font-bold text-base text-[#12281e]">Catering</span>
                        <span className="text-[11px] text-[#5e7265]">Kitchen Service</span>
                      </div>

                      <div className="p-3 rounded-xl bg-[#eef8f2] border border-[#a8d7b7] text-center">
                        <span className="block font-serif font-extrabold text-base text-[#1b4332]">K350</span>
                        <span className="text-[11px] font-bold text-[#2d5a3f]">Client Hire</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={whatsappConferenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#1e4832] hover:bg-[#133222] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book Conference Room (K350) on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-black overflow-hidden">
                  <img
                    src={conferenceHeroImg}
                    alt="Spacious timber eco conference and meeting hall overlooking mountain ranges"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/20 text-white">
                    <p className="text-xs font-semibold flex items-center">
                      <Sparkles className="w-3.5 h-3.5 text-[#52b788] mr-1.5" />
                      Timber Architecture with Panoramic Valley Views
                    </p>
                    <p className="text-[11px] text-[#cce2d4] mt-0.5">
                      Natural cross-ventilation mountain air keeps sessions cool without loud air conditioning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conference Features & Seating Formats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Seating Layouts */}
              <div className="bg-white rounded-3xl border border-[#dfd7ca] p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-[#2d5a3f]">
                  <Layers className="w-5 h-5 text-[#52b788]" />
                  <h4 className="font-serif font-bold text-xl text-[#12281e]">
                    Flexible Seating Configurations
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5f52]">
                  We arrange the conference hall tables and chairs according to your group size and meeting format:
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3 rounded-xl bg-[#f8f6f0] border border-[#e6e1d5] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-[#12281e] block">U-Shape / Workshop</span>
                      <span className="text-xs text-[#5e7265]">Best for interactive discussions and strategic reviews</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] font-bold text-xs">
                      Up to 30 pax
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#f8f6f0] border border-[#e6e1d5] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-[#12281e] block">Theater / Seminar</span>
                      <span className="text-xs text-[#5e7265]">Ideal for presentations, video screenings, and speeches</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] font-bold text-xs">
                      Up to 50 pax
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#f8f6f0] border border-[#e6e1d5] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-[#12281e] block">Boardroom Style</span>
                      <span className="text-xs text-[#5e7265]">Centrally arranged timber tables for executive sessions</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] font-bold text-xs">
                      Up to 24 pax
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#f8f6f0] border border-[#e6e1d5] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-sm text-[#12281e] block">Clan Talanoa / Circle</span>
                      <span className="text-xs text-[#5e7265]">Open circular seating for community dialogues and storytelling</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] font-bold text-xs">
                      Up to 45 pax
                    </span>
                  </div>
                </div>
              </div>

              {/* Equipment & Catering Package */}
              <div className="bg-white rounded-3xl border border-[#dfd7ca] p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-[#2d5a3f]">
                  <CheckCircle2 className="w-5 h-5 text-[#52b788]" />
                  <h4 className="font-serif font-bold text-xl text-[#12281e]">
                    Meeting Equipment & Kitchen Packages
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4a5f52]">
                  Everything needed for productive highland retreats, supported directly by the lodge kitchen:
                </p>

                <div className="space-y-2.5 pt-1 text-xs text-[#3d5144]">
                  <div className="flex items-start space-x-2.5 p-2.5 rounded-lg bg-[#eef7f1] border border-[#b8dfc4]">
                    <CheckCircle2 className="w-4 h-4 text-[#1e4832] shrink-0 mt-0.5" />
                    <span><strong>Client Hire Rate (K350):</strong> Standard flat rate of K350 for client hire covering full-day access to the 50-seat conference hall, workshop tables, chairs, and solar power support.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#f8f6f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span><strong>Solar Power Battery System:</strong> 240V outlets for charging laptops, mobile devices, and camera gear.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#f8f6f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span><strong>Presentation Setup:</strong> Portable projector screen, whiteboard with markers, and flipchart stands available.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#f8f6f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span><strong>Highland Coffee & Tea Breaks:</strong> Continuous hot Western Highlands Arabica coffee, mountain tea, and fresh baked scones.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#f8f6f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span><strong>Buffet Lunch by Village Kitchen:</strong> Wholesome hot lunches featuring organic valley garden greens, sweet potato, and proteins.</span>
                  </div>
                  <div className="flex items-start space-x-2.5 p-2 rounded-lg bg-[#f8f6f0]">
                    <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                    <span><strong>Combine with Accommodation:</strong> Overnight workshop packages with single bungalows and dormitories in Auen Village.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={whatsappConferenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#1e4832] hover:text-[#12281e] group"
                  >
                    <span>Request Full Delegate Rates & Package Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for 10 Kitchen Images */}
      {lightboxIdx !== null && currentLightboxSlot && (
        <div
          onClick={() => setLightboxIdx(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#12281e] rounded-3xl overflow-hidden border border-white/10 shadow-2xl text-white"
          >
            {/* Top Bar */}
            <div className="p-4 bg-black/40 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-[#2d5a3f] text-[#86efac] text-xs font-bold">
                  Space #{currentLightboxSlot.id} of {DEFAULT_KITCHEN_SLOTS.length}
                </span>
                <span className="text-xs text-[#a3c9b1]">
                  {currentLightboxSlot.category}
                </span>
              </div>
              <button
                onClick={() => setLightboxIdx(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Preview with Next / Prev */}
            <div className="relative aspect-video max-h-[65vh] bg-black/60 flex items-center justify-center overflow-hidden">
              {getImageSrc(currentLightboxSlot) ? (
                <img
                  src={getImageSrc(currentLightboxSlot)}
                  alt={currentLightboxSlot.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 text-[#86efac]">
                    <Upload className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    No Photo Uploaded Yet
                  </h4>
                  <p className="text-xs text-[#a0c5b0] max-w-sm">
                    Upload a custom picture below to display here for Space #{currentLightboxSlot.id}.
                  </p>
                </div>
              )}

              <button
                onClick={() =>
                  setLightboxIdx((prev) =>
                    prev !== null ? (prev === 0 ? DEFAULT_KITCHEN_SLOTS.length - 1 : prev - 1) : 0
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() =>
                  setLightboxIdx((prev) =>
                    prev !== null ? (prev === DEFAULT_KITCHEN_SLOTS.length - 1 ? 0 : prev + 1) : 0
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center border border-white/20 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Upload Slot */}
            <div className="p-5 bg-[#0e2118] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-lg text-white">
                  {currentLightboxSlot.title}
                </h4>
                <p className="text-xs text-[#a0c5b0] mt-1 max-w-xl">
                  {currentLightboxSlot.description}
                </p>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <label className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#2d5a3f] hover:bg-[#386e4e] text-white text-xs font-semibold cursor-pointer shadow-sm">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{getImageSrc(currentLightboxSlot) ? 'Replace Photo' : 'Upload Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(currentLightboxSlot.id, e)}
                    className="hidden"
                  />
                </label>

                {getImageSrc(currentLightboxSlot) && (
                  <button
                    onClick={(e) => handleRemovePhoto(currentLightboxSlot.id, e)}
                    className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 text-xs font-semibold cursor-pointer shadow-sm transition-colors"
                    title="Delete photo from this space"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete Photo</span>
                  </button>
                )}

                {customImages[currentLightboxSlot.id] && currentLightboxSlot.defaultSrc && (
                  <button
                    onClick={(e) => handleResetSlot(currentLightboxSlot.id, e)}
                    className="px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-[#fca5a5] text-xs font-medium cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
