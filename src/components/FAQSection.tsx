import React, { useState, useMemo } from 'react';
import { HelpCircle, Search, X, ChevronDown, Mountain, Compass, FileCheck, ShieldAlert, Home, Phone } from 'lucide-react';
import { BusinessConfig } from '../types';
import { faqCategories, faqData } from '../data/faqData';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface FAQSectionProps {
  config: BusinessConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    'trek-difficulty-fitness': true,
    'logistics-how-to-get-here': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen: { [key: string]: boolean } = {};
    filteredFaqs.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const filteredFaqs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        (item.badge && item.badge.toLowerCase().includes(query)) ||
        (item.highlights && item.highlights.some((h) => h.toLowerCase().includes(query)));
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const whatsappFaqUrl = buildWhatsAppUrl(
    config.whatsappCleanNumber,
    `Hello Julie, I was reading the Cloudy Range Adventure FAQ and have a question regarding travel logistics and trekking:`
  );

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case 'trekking':
        return <Mountain className="w-4 h-4" />;
      case 'logistics':
        return <Compass className="w-4 h-4" />;
      case 'requirements':
        return <FileCheck className="w-4 h-4" />;
      case 'health_safety':
        return <ShieldAlert className="w-4 h-4" />;
      case 'lodge':
        return <Home className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#faf8f5] text-[#1c2820] relative overflow-hidden border-t border-[#e8e4dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#eef5f0] text-[#1c5434] text-xs font-bold tracking-wider uppercase mb-4 border border-[#cbe2d3]">
            <HelpCircle className="w-3.5 h-3.5 text-[#2d734a]" />
            <span>Traveler Guide & Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#11261a] mb-5">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#4a5f52] leading-relaxed">
            Essential information regarding trekking difficulty, travel logistics, entry requirements, and what to expect during your stay in the Western Highlands.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mb-10 space-y-4 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#758a7d]">
              <Search className="w-4 h-4" />
            </div>
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. trekking boots, 4WD transfer, visa, fitness, malaria, food)..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-[#d3ded6] rounded-2xl shadow-sm text-sm text-[#193223] placeholder-[#7d9285] focus:outline-none focus:ring-2 focus:ring-[#2d734a] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#758a7d] hover:text-[#193223] transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {faqCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`faq-category-${cat.id}`}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`inline-flex items-center space-x-1.5 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#153a25] text-white shadow-md scale-[1.02]'
                        : 'bg-white hover:bg-[#f0f5f2] text-[#3e5648] border border-[#d6e2db] hover:border-[#adc5b8]'
                    }`}
                  >
                    {getCategoryIcon(cat.id)}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center space-x-2 text-xs text-[#50695c] ml-auto">
              <button
                type="button"
                onClick={expandAll}
                className="hover:text-[#153a25] hover:underline font-medium cursor-pointer"
              >
                Expand all
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={collapseAll}
                className="hover:text-[#153a25] hover:underline font-medium cursor-pointer"
              >
                Collapse all
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5 mb-14">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#dbe6df] shadow-xs">
              <Compass className="w-10 h-10 text-[#8aa395] mx-auto mb-3" />
              <h3 className="text-base font-bold text-[#1a3325] mb-1">No questions matched your search</h3>
              <p className="text-sm text-[#5d7366] mb-4">
                We couldn't find any results for "{searchQuery}". Try a different term or reach out directly to Julie Bengi.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 bg-[#1b4332] text-white rounded-lg text-xs font-semibold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-xs ${
                    isOpen ? 'border-[#2d734a] shadow-md ring-1 ring-[#2d734a]/20' : 'border-[#ded5c7] hover:border-[#b8c9bf]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8a5b18] block mb-1">
                        {faq.badge}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#13281c] leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 mt-1 ${
                        isOpen ? 'bg-[#eaf4ee] text-[#1c5535] rotate-180' : 'bg-[#f4f2ec] text-[#6d7e73]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#3e5246] leading-relaxed border-t border-[#f2ede6]">
                      <p className="mt-2">{faq.answer}</p>

                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="mt-4 p-3.5 bg-[#f6fbf8] rounded-xl border border-[#d2e8db]">
                          <span className="text-xs font-bold text-[#1a4a2f] uppercase tracking-wider block mb-2">
                            Key Takeaways:
                          </span>
                          <ul className="space-y-1.5">
                            {faq.highlights.map((h, hIdx) => (
                              <li key={hIdx} className="text-xs text-[#2b4d3a] flex items-start">
                                <span className="text-[#52b788] mr-2">•</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="max-w-2xl mx-auto p-6 bg-[#edf6f0] rounded-2xl border border-[#cfe2d6] text-center">
          <h4 className="font-serif font-bold text-lg text-[#12281e]">Have a specific travel question?</h4>
          <p className="text-xs text-[#4d6355] mt-1 mb-4">
            Julie Bengi and the Auen landowner team are happy to answer any questions about flights, packing, group bookings, or weather.
          </p>
          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow transition"
          >
            <Phone className="w-4 h-4 mr-1.5" />
            <span>Ask Julie on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
