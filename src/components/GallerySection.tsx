import React, { useState, useEffect, useCallback } from 'react';
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Folder,
  AlertCircle,
  CheckCircle2,
  Phone,
  ZoomIn,
  ZoomOut,
  Trash2,
} from 'lucide-react';
import { galleryData } from '../data/galleryData';
import { GalleryItem } from '../types';

const STORAGE_KEY = 'cloudy_range_custom_gallery_photos';

export const GallerySection: React.FC = () => {
  // Photos state loaded from default galleryData + local storage custom uploads
  const [photos, setPhotos] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: GalleryItem[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...parsed, ...galleryData];
        }
      }
    } catch {
      // ignore JSON parse error
    }
    return galleryData;
  });

  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const filteredPhotos = photos;

  const openLightbox = (idx: number) => {
    setActivePhotoIdx(idx);
    setIsZoomed(false);
    setConfirmDeleteId(null);
  };

  const closeLightbox = useCallback(() => {
    setActivePhotoIdx(null);
    setIsZoomed(false);
    setConfirmDeleteId(null);
  }, []);

  const prevPhoto = useCallback(() => {
    if (activePhotoIdx !== null) {
      setIsZoomed(false);
      setConfirmDeleteId(null);
      setActivePhotoIdx((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
    }
  }, [activePhotoIdx, filteredPhotos.length]);

  const nextPhoto = useCallback(() => {
    if (activePhotoIdx !== null) {
      setIsZoomed(false);
      setConfirmDeleteId(null);
      setActivePhotoIdx((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
    }
  }, [activePhotoIdx, filteredPhotos.length]);

  // Keyboard navigation & body overflow lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    };

    if (activePhotoIdx !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhotoIdx, closeLightbox, prevPhoto, nextPhoto]);

  // Delete a custom uploaded photo
  const handleDeleteCustomPhoto = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const updated = photos.filter((p) => p.id !== id);
    setPhotos(updated);
    setConfirmDeleteId(null);

    try {
      const remainingCustom = updated.filter((p) => p.id.startsWith('custom-upload-'));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(remainingCustom));
    } catch {
      // ignore
    }

    if (activePhotoIdx !== null) {
      closeLightbox();
    }
  };

  const currentPhoto: GalleryItem | undefined =
    activePhotoIdx !== null ? filteredPhotos[activePhotoIdx] : undefined;

  return (
    <section id="gallery" className="py-24 bg-[#f8f5f0] text-[#1c2820] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#e8efe9] text-[#2d5a3f] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#cbe0d3]">
            <Camera className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Highland Visual Showcase • Masonry Gallery</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#12281e] tracking-tight">
            Photo Gallery
          </h2>
          <p className="mt-3 text-base text-[#465a4e] leading-relaxed">
            A visual journey through Parakaruti Eco Lodge, the Cloudy Range, village culture, ancient mountain trails, and rich highland biodiversity.
          </p>
        </div>

        {/* Dynamic Masonry-Style Photo Gallery */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 [column-fill:_balance]">
          {filteredPhotos.map((photo, idx) => {
            // Apply varied aspect ratios for authentic masonry flow
            const aspectClass =
              photo.aspectRatio === 'tall'
                ? 'aspect-[3/4]'
                : photo.aspectRatio === 'wide'
                ? 'aspect-[16/10]'
                : 'aspect-square';

            const isCustom = photo.id.startsWith('custom-upload-');

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid mb-5 inline-block w-full group relative rounded-2xl overflow-hidden bg-[#16382b] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#d6cfc4]"
              >
                {/* Photo Image */}
                <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-600 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
                    <span className="bg-[#132c20]/90 backdrop-blur-md text-[#86efac] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#2b5941] shadow-xs">
                      {photo.categoryLabel}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {isCustom && (
                        <span className="bg-[#0284c7]/90 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Owner Upload
                        </span>
                      )}

                      {photo.isPlaceholderNotice ? (
                        <span className="bg-[#b45309]/90 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1 border border-amber-300/40">
                          <AlertCircle className="w-2.5 h-2.5" />
                          Placeholder
                        </span>
                      ) : !isCustom ? (
                        <span className="bg-[#15803d]/85 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          Authentic
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/* Expand Icon Hover Reveal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal with Full Details & Keyboard Controls */}
        {activePhotoIdx !== null && currentPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/92 backdrop-blur-md animate-fade-in"
            onClick={closeLightbox}
          >
            {/* Top Bar Controls */}
            <div
              className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-2">
                <span className="bg-white/10 backdrop-blur-md text-[#86efac] text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {currentPhoto.categoryLabel}
                </span>

                {currentPhoto.id.startsWith('custom-upload-') ? (
                  <span className="bg-[#0284c7]/90 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Owner Upload
                  </span>
                ) : currentPhoto.isPlaceholderNotice ? (
                  <span className="bg-[#b45309]/90 text-white text-xs font-bold px-2.5 py-1 rounded-full border border-amber-300/30 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    Placeholder (Awaiting Owner Photo)
                  </span>
                ) : (
                  <span className="bg-[#15803d]/80 text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Authentic Photograph
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {currentPhoto.id.startsWith('custom-upload-') &&
                  (confirmDeleteId === currentPhoto.id ? (
                    <div className="flex items-center space-x-1.5 bg-black/75 border border-red-400/40 rounded-full px-3 py-1 text-xs">
                      <span className="text-red-200 font-semibold hidden sm:inline">Delete photo?</span>
                      <button
                        onClick={(e) => handleDeleteCustomPhoto(currentPhoto.id, e)}
                        className="px-2.5 py-0.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold transition cursor-pointer"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setConfirmDeleteId(null);
                        }}
                        className="px-2 py-0.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium transition cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setConfirmDeleteId(currentPhoto.id);
                      }}
                      className="p-2.5 rounded-full bg-red-600/80 hover:bg-red-600 text-white transition cursor-pointer"
                      title="Delete this uploaded photo"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ))}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                  title={isZoomed ? 'Zoom Out' : 'Zoom In'}
                >
                  {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                </button>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer"
                  aria-label="Close photo"
                  title="Close (Esc)"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Prev Photo Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer z-20"
              aria-label="Previous photo (Left Arrow)"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Next Photo Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer z-20"
              aria-label="Next photo (Right Arrow)"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Main Lightbox Content Box */}
            <div
              className="max-w-5xl w-full max-h-[92vh] flex flex-col items-center z-10 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Frame */}
              <div
                className={`relative flex items-center justify-center overflow-auto max-h-[64vh] sm:max-h-[68vh] transition-all duration-300 ${
                  isZoomed ? 'cursor-zoom-out scale-125' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={currentPhoto.image}
                  alt={currentPhoto.alt}
                  className="max-h-[64vh] sm:max-h-[68vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Information & Captions Bar */}
              <div className="mt-4 w-full bg-[#11241a]/95 backdrop-blur-md rounded-2xl border border-white/15 p-4 sm:p-5 text-white shadow-xl space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-serif font-bold text-lg sm:text-xl text-[#86efac]">
                    {currentPhoto.title}
                  </h4>
                  <span className="text-xs text-[#a2c9b1] font-mono">
                    Photo {activePhotoIdx + 1} of {filteredPhotos.length}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#e0efe6] leading-relaxed">
                  {currentPhoto.caption}
                </p>

                {/* ALT Description & Folder Upload Info */}
                <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#93c7a7]">
                  <div className="flex items-center space-x-2">
                    <Folder className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                    <span className="font-mono">{currentPhoto.folderPath}</span>
                  </div>

                  <a
                    href={`https://wa.me/67571761899?text=${encodeURIComponent(
                      `Hello Ms. Julie Bengi, I saw "${currentPhoto.title}" in the Cloudy Range photo gallery and would love to ask about visiting this location.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                {/* ALT accessibility detail */}
                <p className="text-[10px] text-[#8aa996] italic pt-1 line-clamp-1">
                  ALT Text: {currentPhoto.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
