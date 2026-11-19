import React from 'react';
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Home,
  Trees,
  Feather,
  Users,
  Sun,
  Heart,
  Compass,
  Phone,
  ShieldCheck,
  Droplets,
  Coffee,
  Activity,
  GraduationCap,
  Eye,
  Target,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { buildWhatsAppUrl } from '../config/siteConfig';
import storyImg from '../assets/images/regenerated_image_1789391686983.jpg';
import bungalowsBg from '../assets/images/parakaruti_actual_lodge_IMG_WA0056.jpg';

interface OurStoryProps {
  config: BusinessConfig;
  onNavigateToBlog?: () => void;
  isStandalonePage?: boolean;
  onBackToHome?: () => void;
}

export const OurStory: React.FC<OurStoryProps> = ({
  config,
  onNavigateToBlog,
  isStandalonePage,
  onBackToHome,
}) => {
  const retreatWhatsAppUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    'Hello Julie Bengi & Cloudy Range Adventure Inc., I am interested in learning more about the "Nature & Soul Retreat" at Parakaruti Eco Lodge. Could you please share availability and details?'
  );

  return (
    <section id="story" className="py-20 relative overflow-hidden bg-[#faf8f5]">
      {/* Background Image - Blue-Roofed Bungalows in Auen Village */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bungalowsBg}
          alt="Parakaruti Eco Lodge blue-roofed bungalows in sunny Auen Village"
          className="w-full h-full object-cover object-center filter brightness-[1.04] contrast-[1.02]"
          loading="lazy"
        />
        {/* Soft, clean, luminous gradient overlay that keeps the blue roofs, greenery, and sky visible while ensuring all text is perfectly readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/85 via-[#faf8f5]/65 to-[#faf8f5]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Standalone Back Banner */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-[#dce6df] shadow-xs">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#1f4a33] hover:text-[#11281c] bg-[#eef5f1] hover:bg-[#dfeee5] px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
            <div className="text-xs text-[#526b5c] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#52b788]" />
              <span className="font-medium">Cloudy Range Adventure • About Us</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center bg-white/92 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#d6e3da] shadow-md mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#cbe0d3]">
            <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Community-Owned Social Enterprise • PNGIPA Registered</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            Discover the Wild Highlands of Papua New Guinea
          </h2>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-[#3d5145] max-w-2xl mx-auto leading-relaxed">
            Welcome to Cloudy Range Adventures, an eco-tourism business offering authentic nature, culture, and adventure experiences in the highlands of Papua New Guinea.
          </p>
        </div>

        {/* Narrative & Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative Content Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Primary Narrative Card */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#d6e3da] shadow-lg space-y-6 text-[#37493e]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e6eee8] pb-4">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-bold uppercase tracking-wider border border-[#cce0d3]">
                  <Compass className="w-3.5 h-3.5 text-[#52b788]" />
                  <span>About Us</span>
                </span>
                <span className="text-xs font-semibold text-[#5a7163]">
                  Cloudy Range Adventures Inc.
                </span>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p>
                  Our tours take visitors deep into the forests and mountain landscapes of the{' '}
                  <strong className="text-[#12281e] font-semibold">Dei District</strong> and{' '}
                  <strong className="text-[#12281e] font-semibold">North Waghi</strong> areas, where travelers can experience extraordinary wildlife, rich cultural traditions, and warm local hospitality.
                </p>

                {/* Parakaruti Gateway Box */}
                <div className="p-5 rounded-2xl bg-[#eef5f1] border-l-4 border-[#2d5a3f] shadow-xs space-y-2">
                  <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-xs uppercase tracking-wider">
                    <Home className="w-4 h-4 text-[#52b788]" />
                    <span>The Heart of Our Experience</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#1b3827] font-medium leading-relaxed">
                    At the heart of our experience is <strong className="text-[#12281e]">{config.lodgeName}</strong>, a peaceful forest lodge that serves as the gateway to birdwatching, trekking, and cultural journeys in this unique environment.
                  </p>
                </div>

                <p>
                  Whether you are an international bird watcher searching for the rare Blue Bird of Paradise, a photographer exploring remote landscapes, or a traveler seeking meaningful cultural experiences, Cloudy Range Adventures offers unforgettable journeys into one of the world’s most fascinating natural environments.
                </p>
              </div>

              {/* About Us & Registration Details */}
              <div className="pt-2 border-t border-[#e8efe9] space-y-4">
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#12281e]">
                  Welcome to Cloudy Range Adventures Inc.
                </h3>
                <p className="text-base leading-relaxed">
                  In the heart of the Western Highlands of Papua New Guinea, where mist rolls over the Cloudy Ranges and village life moves with the seasons, we invite you to experience something real.
                </p>
                <p className="text-base leading-relaxed">
                  Cloudy Range Adventures Inc. is a <strong className="text-[#12281e]">community-owned social enterprise</strong>, registered with <strong className="text-[#12281e]">PNGIPA</strong>. We were created by the highlands people, for the highlands people – with a simple belief: tourism should protect the environment, preserve our traditions, and create lasting wealth for our communities.
                </p>
              </div>

              {/* Our Story Callout */}
              <div className="p-6 rounded-2xl bg-[#faf8f5] border border-[#e6dfd5] shadow-xs space-y-3">
                <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#52b788]" />
                  <span>Our Story</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#1b3427] leading-relaxed">
                  “We grew up in those mountains. We learned to read the forest, to welcome guests into our haus kunai, to share food, stories, and song.”
                </p>
                <p className="text-sm sm:text-base text-[#465a4e] leading-relaxed">
                  But we also saw challenges: forests under pressure, young people leaving for the city, lifestyle diseases and water-borne diseases affecting our productive population and children.
                </p>
                <p className="text-sm sm:text-base text-[#1b3827] font-semibold">
                  We asked: How can we share the beauty of our home with the world, while making life better here at home?
                </p>
              </div>

              {onNavigateToBlog && (
                <div className="pt-2">
                  <button
                    onClick={onNavigateToBlog}
                    className="inline-flex items-center space-x-2.5 px-5 py-2.5 rounded-xl bg-[#eef4ef] hover:bg-[#dfeee5] text-[#1c4731] font-semibold text-sm border border-[#bad1bf] transition-colors cursor-pointer group"
                  >
                    <BookOpen className="w-4 h-4 text-[#2d5a3f]" />
                    <span>Read Founder Ms. Julie Bengi&apos;s 40-Year Story</span>
                    <ArrowRight className="w-4 h-4 text-[#2d5a3f] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>

            {/* Vision & Mission Card */}
            <div className="bg-gradient-to-br from-[#f4f8f5] to-[#ebf3ed] p-6 sm:p-8 rounded-3xl border border-[#cbe0d3] shadow-md space-y-6">
              <div className="flex items-center space-x-2 text-[#1c4a32] text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#2d5a3f]" />
                <span>Purpose &amp; Direction</span>
              </div>

              <div className="space-y-6">
                {/* Vision */}
                <div className="p-5 rounded-2xl bg-white/90 border border-[#d2e3d7] shadow-xs">
                  <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-xs uppercase tracking-wider mb-2">
                    <Eye className="w-4 h-4 text-[#52b788]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="font-serif text-lg sm:text-xl font-bold text-[#12281e] leading-snug">
                    Healthy Highlands Communities living in harmony with protected forests and culture, where tourism strengthens wellbeing, conservation, and prosperity.
                  </p>
                </div>

                {/* Mission */}
                <div className="p-5 rounded-2xl bg-white/90 border border-[#d2e3d7] shadow-xs">
                  <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-xs uppercase tracking-wider mb-2">
                    <Target className="w-4 h-4 text-[#52b788]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#304537] leading-relaxed">
                    To create community-owned tourism experiences that invite visitors to come as guests and leave as family. We connect people to our way of life, hospitality, nature and culture, while protecting the environment, preserving traditions, promoting health and wellness, and creating community wealth.
                  </p>
                  <div className="mt-3.5 pt-3.5 border-t border-[#e2ece5] flex items-center space-x-2 text-xs font-semibold text-[#1f4a33]">
                    <Droplets className="w-4 h-4 text-[#0284c7] shrink-0" />
                    <span>A portion of every booking directly supports community health, clean water projects, and forest conservation.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#d6e3da] shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                  Guiding Principles
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#12281e] mt-1">
                  Our Values
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Triple Bottom Line */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <Trees className="w-4 h-4 text-[#2d5a3f]" />
                    <span>1. Triple Bottom Line</span>
                  </div>
                  <p className="text-xs font-bold text-[#2d5a3f] uppercase">
                    People • Planet • Prosperity
                  </p>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    We measure success by healthy communities, healthy forests, and fair economic benefit.
                  </p>
                </div>

                {/* 2. Community Ownership & Health */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <Activity className="w-4 h-4 text-[#2d5a3f]" />
                    <span>2. Community Ownership &amp; Health</span>
                  </div>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    Communities participate in everything we do. They host, guide, decide, and benefit. We also work with communities on health and wellness programs to address lifestyle diseases and environmental health challenges affecting children and families.
                  </p>
                </div>

                {/* 3. Guests Become Family */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <Heart className="w-4 h-4 text-[#2d5a3f]" />
                    <span>3. Guests Become Family</span>
                  </div>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    Hospitality is our way. Visitors are welcomed into homes, stories, and daily life, and they leave with a part of us.
                  </p>
                </div>

                {/* 4. Culture & Nature Protection */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#2d5a3f]" />
                    <span>4. Culture &amp; Nature Protection</span>
                  </div>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    We preserve the Highlands traditions and protect our forests and water sources for future generations.
                  </p>
                </div>

                {/* 5. Learning, Research & Wellness */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <GraduationCap className="w-4 h-4 text-[#2d5a3f]" />
                    <span>5. Learning, Research &amp; Wellness</span>
                  </div>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    We welcome researchers, health partners, and students to learn with us and support conservation, culture, community development, and community health.
                  </p>
                </div>

                {/* 6. Integrity & Transparency */}
                <div className="p-5 rounded-2xl bg-[#f7faf8] border border-[#dfece3] space-y-2">
                  <div className="flex items-center space-x-2 text-[#1c4731] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f]" />
                    <span>6. Integrity &amp; Transparency</span>
                  </div>
                  <p className="text-xs text-[#465a4e] leading-relaxed">
                    As a PNGIPA registered social enterprise, we operate honestly and ensure benefits are shared fairly.
                  </p>
                </div>
              </div>
            </div>

            {/* Governance Approach */}
            <div className="bg-[#143224] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#52b788]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#52b788]/20 text-[#86efac] text-xs font-bold uppercase tracking-widest border border-[#52b788]/30">
                  Our Governance Approach
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Community-Led • Purpose-Driven • Health-Focused
                </h4>
                <p className="text-sm sm:text-base text-[#cce2d3] leading-relaxed">
                  Cloudy Range Adventures Inc. is built on community participation and ownership. Village hosts, guides, and elders are involved in planning experiences, setting prices and deciding how benefits are shared.
                </p>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-2 text-xs sm:text-sm text-[#e0eee5]">
                  <p>
                    <strong className="text-white">Triple Bottom Line:</strong> We measure success by environmental health, social wellbeing, and economic opportunity.
                  </p>
                  <p>
                    A portion of every booking directly funds community health initiatives, clean water projects, and forest conservation.
                  </p>
                </div>
                <p className="text-sm text-[#86efac] font-medium pt-1">
                  Our goal is simple: tourism that protects the environment, preserves our traditions, strengthens community health, and creates lasting wealth for families.
                </p>
              </div>
            </div>

            {/* What We Do: 8 Authentic Experiences */}
            <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#d6e3da] shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#2d5a3f]">
                  Western Highlands Journeys
                </span>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#12281e] mt-1">
                  What We Do
                </h3>
                <p className="mt-2 text-sm text-[#465a4e]">
                  We offer 8 authentic experiences in the Western Highlands:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. Village Stays */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Village Stays</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Live with host families, cook together, and learn daily life.
                    </p>
                  </div>
                </div>

                {/* 2. Cultural Immersion */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Cultural Immersion</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Song, dance, music, bilum weaving, traditional lifestyle demonstrations, and traditional ceremonies.
                    </p>
                  </div>
                </div>

                {/* 3. Birdwatching & Wildlife */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Birdwatching &amp; Wildlife</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Home to Birds of Paradise and unique forest life.
                    </p>
                  </div>
                </div>

                {/* 4. Trekking & Nature Walks */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    4
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Trekking &amp; Nature Walks</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Ancient trails through cloudy range forests and mountains.
                    </p>
                  </div>
                </div>

                {/* 5. Coffee Farm Experience */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    5
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Coffee Farm Experience</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Pick Coffee cherries with farmers, visit local plantations and factories, and taste freshly brewed Highlands Coffee straight from the source.
                    </p>
                  </div>
                </div>

                {/* 6. Conservation Experience */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    6
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Conservation Experience</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Join reforestation and forest protection work.
                    </p>
                  </div>
                </div>

                {/* 7. Health & Wellness Retreats */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    7
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Health &amp; Wellness Retreats</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      Forest bathing, clean food, and community wellbeing.
                    </p>
                  </div>
                </div>

                {/* 8. Research & Learning */}
                <div className="p-4 rounded-xl bg-[#f9fbf9] border border-[#e1ede4] hover:border-[#9dc4a9] transition-all flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#eaf4ed] text-[#2d5a3f] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    8
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#12281e]">Research &amp; Learning</h5>
                    <p className="text-xs text-[#4c6053] mt-0.5 leading-relaxed">
                      We welcome researchers and students to partner with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Key Highlights */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            {/* Visual Feature Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={storyImg}
                alt="Parakaruti Eco Lodge and village life in Auen Village Western Highlands"
                className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2118]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#2d5a3f]/90 text-[11px] font-semibold uppercase tracking-wider mb-1">
                  Auen Village • Dei Council
                </span>
                <p className="font-serif text-xl font-bold">Parakaruti Eco Lodge</p>
                <p className="text-xs text-[#cce2d3] mt-1 leading-relaxed">
                  Gateway to birdwatching, trekking, and cultural journeys in the Western Highlands.
                </p>
              </div>
            </div>

            {/* Quick Fact / Impact Card */}
            <div className="p-6 rounded-3xl bg-white/95 backdrop-blur-md border border-[#d6e3da] shadow-md space-y-4">
              <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#52b788]" />
                <span>Enterprise Credentials</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#3b4e42]">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                  <span><strong>PNGIPA Registered</strong> community-owned social enterprise</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                  <span>Created by Highlands people, for Highlands people</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                  <span>Direct funding for village health and clean water projects</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                  <span>Guiding through Dei District and North Waghi areas</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                  <span>Habitats for the rare Blue Bird of Paradise</span>
                </li>
              </ul>
            </div>

            {/* Coffee & Craft Snippet */}
            <div className="p-5 rounded-2xl bg-[#f8f5f0] border border-[#e5ded4] text-xs space-y-2 text-[#463a2f]">
              <div className="flex items-center space-x-2 font-bold text-[#854d0e] uppercase tracking-wider">
                <Coffee className="w-4 h-4 text-[#b45309]" />
                <span>Highlands Coffee &amp; Bilum Heritage</span>
              </div>
              <p className="leading-relaxed">
                Taste freshly brewed Highlands coffee straight from local volcanic soil, and discover living traditions of bilum weaving, sing-sing, and customary haus kunai hospitality.
              </p>
            </div>
          </div>
        </div>

        {/* PARAKARUTI ECOLODGE - NATURE & SOUL RETREAT */}
        <div className="mt-16 rounded-3xl bg-white/95 backdrop-blur-md border border-[#cde0d4] shadow-xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#143224] via-[#1a4430] to-[#143224] text-white p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#52b788]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#86efac] text-xs font-bold uppercase tracking-widest border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                <span>PARAKARUTI ECOLODGE</span>
              </div>
              <h3 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight">
                Retreat in Nature. Rest for the Soul.
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#d0e5d8] leading-relaxed max-w-2xl mx-auto">
                “Hidden in the calm of village life, Parakaruti Ecolodge offers simple, meaningful retreats where people reconnect — with nature, with each other, and with themselves.”
              </p>
            </div>
          </div>

          {/* Program Card */}
          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            {/* Title & Core Concept */}
            <div className="border-b border-[#e2dcd4] pb-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2d5a3f]">
                    Retreat Program
                  </span>
                  <h4 className="font-serif font-bold text-2xl sm:text-3xl text-[#12281e] mt-1">
                    1. NATURE &amp; SOUL RETREAT
                  </h4>
                </div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#eef5f1] text-[#1e4832] font-serif font-bold text-base sm:text-lg border border-[#cbe0d3]">
                  <span>Rest. Reflect. Renew.</span>
                </div>
              </div>

              {/* Who it's for & What it offers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e5dfd7]">
                  <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-sm uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4 text-[#52b788]" />
                    <span>Who it’s for</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#3d5044] leading-relaxed">
                    Individuals, couples, church groups, professionals, and anyone needing quiet time away from town life.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e5dfd7]">
                  <div className="flex items-center space-x-2 text-[#2d5a3f] font-bold text-sm uppercase tracking-wider mb-2">
                    <Trees className="w-4 h-4 text-[#52b788]" />
                    <span>What this retreat offers</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#3d5044] leading-relaxed">
                    Step away from noise and pressure and enter a peaceful village environment surrounded by fresh air, open skies, and gentle rhythms of nature.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 Detail Columns: Highlights, Optional Activities, Ideal For */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Retreat Highlights */}
              <div className="p-6 rounded-2xl bg-[#f4f8f5] border border-[#d2e4d8] space-y-4">
                <div className="flex items-center space-x-2 text-[#1c4731]">
                  <Compass className="w-5 h-5 text-[#2d5a3f]" />
                  <h5 className="font-serif font-bold text-lg text-[#12281e]">Retreat Highlights</h5>
                </div>
                <ul className="space-y-2.5 text-sm text-[#3b4e42]">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                    <span>Peaceful village-style accommodation</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                    <span>Guided nature walks and reflection trails</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                    <span>Quiet spaces for prayer, journaling, or meditation</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                    <span>Campfire evenings and storytelling</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2d5a3f] shrink-0 mt-0.5" />
                    <span>Home-style village meals using local produce</span>
                  </li>
                </ul>
              </div>

              {/* Optional Activities */}
              <div className="p-6 rounded-2xl bg-[#fefcf8] border border-[#e8dfd3] space-y-4">
                <div className="flex items-center space-x-2 text-[#92400e]">
                  <Sun className="w-5 h-5 text-[#b45309]" />
                  <h5 className="font-serif font-bold text-lg text-[#12281e]">Optional Activities</h5>
                </div>
                <ul className="space-y-2.5 text-sm text-[#463a2f]">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#b45309] mt-1.5 shrink-0" />
                    <span>Sunrise reflection sessions</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#b45309] mt-1.5 shrink-0" />
                    <span>Cultural sharing and village experiences</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#b45309] mt-1.5 shrink-0" />
                    <span>Light gardening or nature connection activities</span>
                  </li>
                </ul>
              </div>

              {/* Ideal for */}
              <div className="p-6 rounded-2xl bg-[#f3f7fa] border border-[#d1e0ea] space-y-4">
                <div className="flex items-center space-x-2 text-[#0369a1]">
                  <Heart className="w-5 h-5 text-[#0284c7]" />
                  <h5 className="font-serif font-bold text-lg text-[#12281e]">Ideal For</h5>
                </div>
                <ul className="space-y-2.5 text-sm text-[#314856]">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Stress recovery</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Spiritual renewal</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Personal reflection</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                    <span>Burnout recovery</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Parakaruti Promise & Action Bar */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#143224] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1 text-center sm:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#52b788]/20 text-[#86efac] text-xs font-bold uppercase tracking-widest border border-[#52b788]/30">
                  Parakaruti Promise
                </span>
                <h5 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mt-2">
                  No rush. No pressure. Just space to breath.
                </h5>
                <p className="text-xs sm:text-sm text-[#b8d6c4]">
                  Reserve a quiet retreat window for yourself, your family, or your church/professional group in Auen Village.
                </p>
              </div>

              <a
                href={retreatWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all shrink-0 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Bottom Highlight Cards */}
        <div className="mt-16 pt-12 border-t border-[#e2dcd4] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#e4ded5] shadow-sm hover:shadow-md hover:border-[#9ec4aa] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#eef4ef] text-[#2d5a3f] flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#12281e]">Village Experience</h3>
            <p className="mt-2 text-sm text-[#465a4e] leading-relaxed">
              Authentic local hospitality directly hosted by Auen Village community families.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e4ded5] shadow-sm hover:shadow-md hover:border-[#9ec4aa] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#eef4ef] text-[#2d5a3f] flex items-center justify-center mb-4">
              <Trees className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#12281e]">Cloud Forest</h3>
            <p className="mt-2 text-sm text-[#465a4e] leading-relaxed">
              Explore unique high-altitude mountain environments, moss forests and fresh streams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e4ded5] shadow-sm hover:shadow-md hover:border-[#9ec4aa] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#eef4ef] text-[#2d5a3f] flex items-center justify-center mb-4">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#12281e]">Birdlife</h3>
            <p className="mt-2 text-sm text-[#465a4e] leading-relaxed">
              Discover Papua New Guinea’s incredible birds, including the renowned Bird of Paradise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#e4ded5] shadow-sm hover:shadow-md hover:border-[#9ec4aa] transition-all">
            <div className="w-12 h-12 rounded-lg bg-[#eef4ef] text-[#2d5a3f] flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#12281e]">Community</h3>
            <p className="mt-2 text-sm text-[#465a4e] leading-relaxed">
              Tourism that directly supports local livelihoods, education, and cultural preservation.
            </p>
          </div>
        </div>

        {isStandalonePage && onBackToHome && (
          <div className="mt-14 pt-8 text-center border-t border-[#e2dcd4]">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#2d5a3f] hover:bg-[#1f402c] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Main Adventures (Home)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
