import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  ArrowRight,
  ArrowLeft,
  X,
  Share2,
  Phone,
  Award,
  ShieldCheck,
  Heart,
  Quote,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Home,
  Feather,
  Flame,
} from 'lucide-react';
import { BusinessConfig, BlogPost } from '../types';
import { blogData } from '../data/blogData';
import { buildWhatsAppUrl } from '../config/siteConfig';
import juliePortrait from '../assets/images/regenerated_image_1789478696564.jpg';

interface FounderBlogSectionProps {
  config: BusinessConfig;
  onBackToHome?: () => void;
  isStandalonePage?: boolean;
}

const founderInfo = {
  name: 'Ms. Julie Bengi',
  clan: 'Timalke Clan',
  tribe: 'Prandaka Tribe',
  district: 'Dei District',
  province: 'Western Highlands Province',
  bioSummary:
    'Ms. Julie Bengi is from the Timalke Clan of the Prandaka Tribe and stands as one of the few high-profile educated women leaders of Dei District. Having dedicated over 40 years of her most productive years to public service and another decade gaining senior executive experience in the private sector, Julie is a celebrated career woman and passionate advocate for community development and women’s empowerment. Parakaruti Eco Lodge represents the fulfillment of her 40-year dream to give back to the tribal community that nurtured and educated her.',
  visionQuote:
    'Cloudy Range Adventure was born out of a passion to contribute to the community that raised and educated me. Parakaruti Eco Lodge is a 40-year-old dream realized. I believe with all my heart that what we are doing here will influence the outside world about our rich culture and the beauty of authentic eco-tourism in Papua New Guinea.',
  highlights: [
    'Educated elite of the Timalke Clan and Prandaka Tribe',
    'Pioneering high-profile educated woman of Dei District',
    '40+ years of dedicated service to Papua New Guinea public administration',
    '10 years of executive private sector experience and governance',
    'Lifelong advocate for rural women empowerment and village livelihoods',
    'FOUNDER of the 40-year vision behind Parakaruti Eco Lodge',
  ],
};

export const FounderBlogSection: React.FC<FounderBlogSectionProps> = ({
  config,
  onBackToHome,
  isStandalonePage = false,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedNotice, setCopiedNotice] = useState(false);
  const [isUltraWide, setIsUltraWide] = useState(false);

  const currentPostIndex = selectedPost ? blogData.findIndex((p) => p.id === selectedPost.id) : -1;
  const prevPost = currentPostIndex > 0 ? blogData[currentPostIndex - 1] : null;
  const nextPost =
    currentPostIndex >= 0 && currentPostIndex < blogData.length - 1
      ? blogData[currentPostIndex + 1]
      : null;

  const insideHighlandsPost = blogData.find(
    (p) => p.id === 'inside-the-highlands-the-stories-people-and-traditions-of-our-culture'
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPost]);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'Nature, Culture & Connection', label: 'Nature, Culture & Connection' },
    { id: 'Beyond the Tourist Trail', label: 'Beyond the Tourist Trail' },
    { id: 'Founder’s Vision', label: 'Founder’s Vision' },
    { id: 'Highland Living & Culture', label: 'Highland Living & Culture' },
    { id: 'Founder’s Journey', label: 'Founder’s Journey' },
    { id: 'Women & Community', label: 'Women & Community' },
    { id: 'Culture & Vision', label: 'Culture & Vision' },
  ];

  const filteredPosts =
    activeCategory === 'all'
      ? blogData
      : blogData.filter((post) => post.category === activeCategory);

  const handleShare = async (post: BlogPost) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.summary,
          url: window.location.href,
        });
      } catch {
        // Share cancelled or unsupported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotice(true);
      setTimeout(() => setCopiedNotice(false), 2000);
    }
  };

  const getArticleWhatsAppUrl = (title: string) => {
    const msg = `Hello Ms. Julie Bengi and Cloudy Range Adventure team, I just read your article "${title}" on the Founder's Journal. I am inspired by your vision for Parakaruti Eco Lodge and would love to learn more.`;
    return buildWhatsAppUrl(config.whatsappCleanNumber, msg);
  };

  return (
    <section id="founder" className="py-24 bg-[#f8f5f0] text-[#1c2820] relative scroll-mt-16">
      <span id="blog" className="absolute -top-16 left-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Standalone Back Banner */}
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
              <span className="font-medium">Cloudy Range Adventure • Founder's Blog & Journal</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#dbe8de] text-[#1d4c33] text-xs font-semibold tracking-wider uppercase mb-4 border border-[#bad1bf]">
            <Sparkles className="w-3.5 h-3.5 text-[#2d5a3f]" />
            <span>FOUNDER</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight leading-tight">
            Meet Ms. Julie Bengi & Her 40-Year Dream
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#44564b] leading-relaxed max-w-2xl mx-auto">
            From rural roots in Dei District to senior public service and private sector leadership, discovering the heartbeat, heritage, and conviction behind Cloudy Range Adventure Inc.
          </p>
          <div className="w-16 h-1 bg-[#52b788] mx-auto mt-6 rounded-full" />
        </div>

        {/* Founder Feature Profile Card */}
        <div className="mt-16 bg-white rounded-3xl border border-[#e2dcd3] shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Column: Portrait & Highlights */}
            <div
              className="lg:col-span-5 relative bg-white flex flex-col justify-between p-6 sm:p-8 text-[#1c2820] min-h-[360px] lg:min-h-[500px] border-b lg:border-b-0 lg:border-r border-[#e2dcd3]"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="flex flex-col items-center justify-center my-auto">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#2d5a3f] ring-4 ring-[#52b788]/40 bg-[#0c1f16] group shrink-0">
                  <img
                    src={juliePortrait}
                    alt="Ms. Julie Bengi, FOUNDER of Cloudy Range Adventure Inc. and Parakaruti Eco Lodge"
                    className="w-full h-full rounded-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      borderRadius: '9999px',
                      aspectRatio: '1 / 1',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%',
                      display: 'block',
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-5 text-center">
                  <p className="font-serif text-xl font-bold leading-tight text-[#12281e]">
                    {founderInfo.name}
                  </p>
                  <p className="text-xs font-bold text-[#2d5a3f] uppercase tracking-wider mt-1">
                    FOUNDER & VISIONARY
                  </p>
                  <p className="text-xs text-[#526b5c] mt-0.5">
                    {founderInfo.district}, {founderInfo.province}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#d8e4dc] space-y-2.5">
                <div className="flex items-center text-xs text-[#204933]">
                  <Award className="w-4 h-4 mr-2 text-[#2d5a3f] shrink-0" />
                  <span>Educated elite leader from Dei District & Prandaka Tribe</span>
                </div>
                <div className="flex items-center text-xs text-[#204933]">
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#2d5a3f] shrink-0" />
                  <span>40+ Years Papua New Guinea Public Service</span>
                </div>
                <div className="flex items-center text-xs text-[#204933]">
                  <Heart className="w-4 h-4 mr-2 text-[#2d5a3f] shrink-0" />
                  <span>10 Years Executive Private Sector Leadership</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative, Quote & WhatsApp CTA */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#e8efe9] text-[#204933] text-xs font-bold uppercase tracking-wider">
                    FOUNDER
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#fceddf] text-[#934714] text-xs font-semibold">
                    40-Year Sacred Vision
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#12281e] leading-snug">
                  A Promise Kept to the Community That Raised Her
                </h3>
                <p className="mt-4 text-[#374c3e] text-base sm:text-lg leading-relaxed">
                  {founderInfo.bioSummary}
                </p>
                <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#eef4ef] border-l-4 border-[#2d5a3f] relative">
                  <Quote className="w-7 h-7 text-[#85ba99] absolute top-3 right-4 opacity-40" />
                  <p className="font-serif text-base sm:text-lg text-[#132c20] italic font-medium leading-relaxed">
                    "{founderInfo.visionQuote}"
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#ede7df] flex flex-wrap items-center justify-between gap-4">
                <a
                  href={buildWhatsAppUrl(
                    config.whatsappCleanNumber,
                    `Hello Ms. Julie Bengi, I read your inspiring founder story for Parakaruti Eco Lodge and Cloudy Range Adventure Inc. I would love to connect and learn more.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow hover:shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Connect with Julie on WhatsApp
                </a>
                <span className="text-xs text-[#6e8576] font-medium">
                  Direct Clan Initiative • Timalke Clan, Dei District
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Feature Card: Inside the Highlands */}
        <div className="mt-14 bg-gradient-to-br from-white via-[#fcfbf9] to-[#f4f8f5] rounded-3xl border border-[#d6e3da] shadow-lg p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#52b788]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            {/* Header Badge & Title */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5eee8] pb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-bold uppercase tracking-wider border border-[#cbe0d3]">
                  <Sparkles className="w-3.5 h-3.5 text-[#52b788]" />
                  <span>Founder's Narrative Feature</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-[#12281e] tracking-tight leading-tight">
                  Inside the Highlands: The Stories, People and Traditions of our Culture
                </h3>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white border border-[#d2e2d7] text-[#2c4e3a] shadow-xs">
                Western Highlands • Living Culture
              </span>
            </div>

            {/* Lead & Core Premise */}
            <div className="space-y-4">
              <p className="font-serif italic text-lg sm:text-xl text-[#1a3828] leading-relaxed font-medium">
                “To understand the Highlands of Papua New Guinea, you must look beyond the mountains. You must listen to its people.”
              </p>
              <p className="text-base sm:text-lg text-[#3d5144] leading-relaxed">
                For generations, our culture has been carried not only in ceremonial gatherings and traditional performances, but in the stories told around the fire, the food prepared in village kitchens, the gardens carefully tended by families, the bilums woven by hand and the knowledge passed from one generation to the next. This is the living heart of the Western Highlands of Papua New Guinea.
              </p>
            </div>

            {/* 3 Thematic Pillar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Pillar 1: Our Stories Are Our History */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#d8e5dc] shadow-xs space-y-3 hover:border-[#9ec6aa] transition-all">
                <div className="flex items-center space-x-2.5 text-[#1e4b33]">
                  <div className="w-9 h-9 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#2d5a3f]">
                    <Flame className="w-4 h-4 text-[#e65100]" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#12281e]">
                    Our Stories Are Our History
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4c6053] leading-relaxed">
                  Before books and written records, grandparents and elders shared history around the fire. Storytelling was a way of remembering, teaching, and reminding the next generation: <em>this is where we came from</em>.
                </p>
              </div>

              {/* Pillar 2: The Bilum Carries More Than Colour */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#d8e5dc] shadow-xs space-y-3 hover:border-[#9ec6aa] transition-all">
                <div className="flex items-center space-x-2.5 text-[#1e4b33]">
                  <div className="w-9 h-9 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#2d5a3f]">
                    <Feather className="w-4 h-4 text-[#2d5a3f]" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#12281e]">
                    The Bilum Carries More Than Colour
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4c6053] leading-relaxed">
                  Woven patiently by hand, each bilum holds living memory. A mother teaches her daughter, passing down generational skill, tribal patterns, and a connection to place that outlasts time.
                </p>
              </div>

              {/* Pillar 3: The House as a Classroom */}
              <div className="p-6 rounded-2xl bg-white/90 border border-[#d8e5dc] shadow-xs space-y-3 hover:border-[#9ec6aa] transition-all">
                <div className="flex items-center space-x-2.5 text-[#1e4b33]">
                  <div className="w-9 h-9 rounded-xl bg-[#eef5f1] flex items-center justify-center text-[#2d5a3f]">
                    <Home className="w-4 h-4 text-[#2d5a3f]" />
                  </div>
                  <h4 className="font-serif font-bold text-base sm:text-lg text-[#12281e]">
                    The House as a Classroom
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#4c6053] leading-relaxed">
                  Our planned Parakaruti Cultural Centre is inspired by this: sitting in a circle without stages or barriers. Simply a shared space to talk, listen, prepare food, and learn together.
                </p>
              </div>
            </div>

            {/* Cultural Respect Quote Banner & Action */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#143224] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
              <div className="space-y-1.5 text-center md:text-left">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#86efac]">
                  A Culture Shared with Respect
                </span>
                <p className="font-serif italic text-sm sm:text-base text-[#d2e8db] leading-relaxed">
                  “The greatest cultural experience is not the biggest performance. It is a quiet conversation with an elder, a child learning from a grandmother, a woman weaving, and a story told beside a fire.”
                </p>
              </div>
              {insideHighlandsPost && (
                <button
                  onClick={() => setSelectedPost(insideHighlandsPost)}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#52b788] hover:bg-[#409b70] text-[#0d2319] font-bold text-sm shadow hover:shadow-lg transition-all shrink-0 cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Full Essay &amp; Stories</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2d5a3f] text-white shadow-sm'
                  : 'bg-white text-[#486353] hover:bg-[#eef4ef] border border-[#d8d2c8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Article Grid - All 4 Articles */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl border border-[#e2ddd5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
            >
              <div>
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#11241a] flex items-center justify-center">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f16]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center space-x-3 text-xs text-[#627768] mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-[#2d5a3f]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1 text-[#2d5a3f]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-lg sm:text-xl text-[#12281e] group-hover:text-[#2d5a3f] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-xs font-medium text-[#657d6e] line-clamp-2">
                    {post.subtitle}
                  </p>
                  <p className="mt-3 text-sm text-[#44584a] leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#f2eee8] flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#2d5a3f] text-[#a4deb9] flex items-center justify-center font-serif text-xs font-bold shrink-0">
                      JB
                    </div>
                    <div className="text-xs">
                      <p className="font-semibold text-[#163323]">{post.author.name}</p>
                      <p className="text-[#657c6e] text-[11px]">
                        {post.author.role} • {post.author.clan}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPost(post);
                  }}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-[#2d5a3f] hover:bg-[#1f422e] text-white font-semibold text-xs transition-colors shadow-xs group-hover:shadow cursor-pointer"
                >
                  <span>Read Story (Wide View)</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Standalone Return to Home Footer */}
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
              Discover our 8 highland adventure itineraries, Parakaruti Eco Lodge, conservation projects and booking process.
            </p>
          </div>
        )}
      </div>

      {/* Modal for Article Reading - Wide Screen Fit */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
        >
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl w-full flex flex-col shadow-2xl overflow-hidden relative border border-[#e2dcd4] transition-all duration-300 ${
              isUltraWide
                ? 'max-w-[98vw] h-[98vh]'
                : 'max-w-6xl xl:max-w-7xl h-[94vh]'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-4 sm:px-8 py-3.5 border-b border-[#eee8e0] bg-[#faf8f5] flex items-center justify-between sticky top-0 z-20 shrink-0">
              <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
                <span className="px-2.5 py-0.5 rounded-full bg-[#e3ede5] text-[#224832] text-xs font-bold uppercase tracking-wider shrink-0">
                  {selectedPost.category}
                </span>
                <span className="text-xs text-[#6e8274] hidden sm:inline truncate">
                  {selectedPost.date} • {selectedPost.readTime}
                </span>
                {copiedNotice && (
                  <span className="text-xs text-[#1e4832] bg-[#dbe8de] px-2 py-0.5 rounded animate-pulse">
                    Link copied!
                  </span>
                )}
              </div>

              {/* Controls: Prev/Next story, Wide toggle, Share, Close */}
              <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                {/* Previous Story */}
                <button
                  onClick={() => prevPost && setSelectedPost(prevPost)}
                  disabled={!prevPost}
                  className={`p-2 rounded-full transition flex items-center text-xs font-medium ${
                    prevPost
                      ? 'hover:bg-[#eae3d9] text-[#2d5a3f] cursor-pointer'
                      : 'opacity-30 text-[#9bb0a2] cursor-not-allowed'
                  }`}
                  title={prevPost ? `Previous Story: ${prevPost.title}` : 'No previous story'}
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-4 h-4 sm:mr-0.5" />
                  <span className="hidden md:inline text-[11px]">Prev</span>
                </button>

                {/* Article Counter */}
                <span className="text-[11px] font-semibold text-[#5a7363] px-1 hidden sm:inline">
                  {currentPostIndex + 1} of {blogData.length}
                </span>

                {/* Next Story */}
                <button
                  onClick={() => nextPost && setSelectedPost(nextPost)}
                  disabled={!nextPost}
                  className={`p-2 rounded-full transition flex items-center text-xs font-medium ${
                    nextPost
                      ? 'hover:bg-[#eae3d9] text-[#2d5a3f] cursor-pointer'
                      : 'opacity-30 text-[#9bb0a2] cursor-not-allowed'
                  }`}
                  title={nextPost ? `Next Story: ${nextPost.title}` : 'No next story'}
                  aria-label="Next story"
                >
                  <span className="hidden md:inline text-[11px]">Next</span>
                  <ChevronRight className="w-4 h-4 sm:ml-0.5" />
                </button>

                <div className="h-4 w-px bg-[#ddd5c8] mx-1" />

                {/* Toggle Wide / Screen-fit mode */}
                <button
                  onClick={() => setIsUltraWide(!isUltraWide)}
                  className="p-2 rounded-full hover:bg-[#eae3d9] text-[#2d5a3f] transition cursor-pointer"
                  title={isUltraWide ? 'Restore standard wide view' : 'Expand full screen'}
                  aria-label={isUltraWide ? 'Restore standard wide view' : 'Expand full screen'}
                >
                  {isUltraWide ? (
                    <Minimize2 className="w-4 h-4" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </button>

                {/* Share */}
                <button
                  onClick={() => handleShare(selectedPost)}
                  className="p-2 rounded-full hover:bg-[#eae3d9] text-[#4d6353] transition cursor-pointer"
                  title="Share Article"
                  aria-label="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </button>

                {/* Close */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-2 rounded-full hover:bg-[#eae3d9] text-[#4d6353] hover:text-[#183925] transition cursor-pointer"
                  title="Close Reader"
                  aria-label="Close article modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body - Wide Screen Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 space-y-8 bg-gradient-to-b from-[#faf9f6] to-[#f4f0e8]">
              {/* Header Titles */}
              <div className="max-w-4xl mx-auto text-center space-y-3">
                <span className="inline-flex items-center text-xs font-bold text-[#2d5a3f] uppercase tracking-widest px-3 py-1 bg-[#e3ede5] rounded-full">
                  Parakaruti Eco Lodge • Highlands Story {currentPostIndex + 1}
                </span>
                <h2
                  id="modal-article-title"
                  className="font-serif font-bold text-2xl sm:text-3xl md:text-5xl text-[#12281e] leading-tight"
                >
                  {selectedPost.title}
                </h2>
                <p className="text-base sm:text-xl text-[#4a6352] font-medium leading-relaxed max-w-3xl mx-auto">
                  {selectedPost.subtitle}
                </p>
                <div className="flex items-center justify-center space-x-3 text-xs sm:text-sm text-[#6f8476] pt-1">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                  <span>•</span>
                  <span>{selectedPost.category}</span>
                </div>
              </div>

              {/* Wide Hero Image - Fits the Screen */}
              <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ded8cf] shadow-xl bg-[#122a1f] relative">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.imageAlt}
                  className={`w-full ${
                    isUltraWide
                      ? 'h-80 sm:h-[460px] md:h-[540px] lg:h-[600px]'
                      : 'h-72 sm:h-96 md:h-[440px] lg:h-[480px]'
                  } object-contain bg-[#0e2118] object-center transition-all duration-300`}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="p-3 sm:p-4 bg-[#142f22]/95 backdrop-blur-md text-xs sm:text-sm text-[#c8ded0] text-center italic border-t border-[#265339]">
                  {selectedPost.imageAlt}
                </div>
              </div>

              {/* Author & Clan Credit Card */}
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#e2dcd3] shadow-sm gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#214a34] text-[#93dcaf] flex items-center justify-center font-serif font-bold text-base shadow-sm shrink-0">
                    JB
                  </div>
                  <div>
                    <p className="text-base font-bold text-[#142d20]">
                      {selectedPost.author.name}
                    </p>
                    <p className="text-xs text-[#5e7466]">
                      {selectedPost.author.role} • Daughter of the {selectedPost.author.clan}, {selectedPost.author.tribe} ({selectedPost.author.district})
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-[#3d5a47] bg-[#edf4ef] px-3.5 py-2 rounded-xl border border-[#d5e5da]">
                  <Award className="w-4 h-4 text-[#2d5a3f]" />
                  <span className="font-semibold">Western Highlands Province, PNG</span>
                </div>
              </div>

              {/* Pull Quote */}
              {selectedPost.pullQuote && (
                <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#eaf3ec] border-l-4 sm:border-l-8 border-[#2d5a3f] shadow-sm my-4">
                  <Quote className="w-8 h-8 text-[#52b788] mb-3 opacity-60" />
                  <p className="font-serif text-lg sm:text-2xl text-[#12281e] font-semibold italic leading-relaxed">
                    "{selectedPost.pullQuote}"
                  </p>
                </div>
              )}

              {/* Main Reading Flow */}
              <div className="max-w-4xl mx-auto space-y-6 text-[#293d30] text-base sm:text-lg lg:text-xl leading-relaxed font-normal bg-white/70 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#e8e2d9] shadow-xs">
                {selectedPost.paragraphs.map((p, idx) => {
                  // Check if paragraph starts with a header prefix (e.g. "Coffee country:")
                  const colonIndex = p.indexOf(':');
                  if (colonIndex > 0 && colonIndex < 35 && p.slice(0, colonIndex).indexOf(' ') >= 0) {
                    const sectionTitle = p.slice(0, colonIndex);
                    const sectionRest = p.slice(colonIndex + 1);
                    return (
                      <div key={idx} className="pt-2">
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#163827] mb-2">
                          {sectionTitle}
                        </h3>
                        <p className="text-[#304437] leading-relaxed whitespace-pre-line">
                          {sectionRest.trim()}
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="whitespace-pre-line">
                      {p}
                    </p>
                  );
                })}
              </div>

              {/* Tags Section */}
              <div className="max-w-4xl mx-auto pt-6 border-t border-[#ded6cc]">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#5f7566] mb-3">
                  Highlands Journal Topics
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-white text-[#244d36] text-xs font-semibold border border-[#d5cfc4] shadow-2xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Next/Prev Story Switcher Inside Body */}
              <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {prevPost ? (
                  <button
                    onClick={() => setSelectedPost(prevPost)}
                    className="p-4 rounded-2xl bg-white border border-[#ded7ce] hover:border-[#2d5a3f] text-left transition-all hover:shadow-md cursor-pointer group"
                  >
                    <span className="text-[11px] font-bold uppercase text-[#698071] flex items-center mb-1">
                      <ChevronLeft className="w-3.5 h-3.5 mr-1 group-hover:-translate-x-1 transition-transform" />
                      Previous Story
                    </span>
                    <p className="font-serif font-bold text-sm sm:text-base text-[#153423] line-clamp-1 group-hover:text-[#2d5a3f]">
                      {prevPost.title}
                    </p>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-transparent border border-dashed border-[#ddd5ca] text-center text-xs text-[#8c9e92] flex items-center justify-center">
                    First Article in Journal
                  </div>
                )}

                {nextPost ? (
                  <button
                    onClick={() => setSelectedPost(nextPost)}
                    className="p-4 rounded-2xl bg-white border border-[#ded7ce] hover:border-[#2d5a3f] text-right transition-all hover:shadow-md cursor-pointer group"
                  >
                    <span className="text-[11px] font-bold uppercase text-[#698071] flex items-center justify-end mb-1">
                      Next Story
                      <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <p className="font-serif font-bold text-sm sm:text-base text-[#153423] line-clamp-1 group-hover:text-[#2d5a3f]">
                      {nextPost.title}
                    </p>
                  </button>
                ) : (
                  <div className="p-4 rounded-2xl bg-transparent border border-dashed border-[#ddd5ca] text-center text-xs text-[#8c9e92] flex items-center justify-center">
                    Latest Article in Journal
                  </div>
                )}
              </div>

              {/* WhatsApp Action Box */}
              <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#143023] text-white space-y-4 shadow-lg border border-[#234e38]">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-[#85cca1]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#85cca1]">
                    Direct Connection with Ms. Julie Bengi & Team
                  </span>
                </div>
                <h4 className="font-serif text-xl sm:text-2xl font-bold">
                  Inspired by this story from the Western Highlands?
                </h4>
                <p className="text-sm sm:text-base text-[#cbdccf] leading-relaxed">
                  Ms. Julie Bengi and the Auen Village hosts welcome personal messages, travel inquiries, cultural exchanges, and research collaborations.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={getArticleWhatsAppUrl(selectedPost.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Message Ms. Julie Bengi on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-[#eee8e0] bg-[#faf8f5] flex items-center justify-between shrink-0">
              <span className="text-xs text-[#6e8274]">
                Parakaruti Eco Lodge • Cloudy Range Adventure Inc.
              </span>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsUltraWide(!isUltraWide)}
                  className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-lg border border-[#d6cfc4] hover:bg-[#eae3d9] text-[#2d5a3f] text-xs font-semibold transition cursor-pointer"
                >
                  {isUltraWide ? (
                    <>
                      <Minimize2 className="w-3.5 h-3.5 mr-1" />
                      Standard Wide View
                    </>
                  ) : (
                    <>
                      <Maximize2 className="w-3.5 h-3.5 mr-1" />
                      Full Screen Width
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-5 py-2 rounded-xl bg-[#2d5a3f] hover:bg-[#1a3827] text-white text-xs font-semibold transition cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
