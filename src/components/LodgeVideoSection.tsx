import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  Upload,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  CheckCircle2,
  Phone,
  ArrowLeft,
  Loader2,
  Sparkles,
  Compass,
  Coffee,
  Home,
  Flame,
  UtensilsCrossed,
  Trees,
  X,
  Key,
  ShieldCheck,
} from 'lucide-react';
import { BusinessConfig } from '../types';
import {
  saveVideoBlob,
  loadSavedVideo,
  parseYouTubeEmbed,
  VideoMetadata,
} from '../utils/videoStorage';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE } from '../config/siteConfig';
import officialLogoImg from '../assets/images/cloudy_range_official_logo_1791587527654.jpg';

interface LodgeVideoSectionProps {
  config: BusinessConfig;
  isStandalonePage?: boolean;
  onBackToHome?: () => void;
}

// Converted high-definition web stream with +faststart moov atom at beginning of file
const DEFAULT_VIDEO_URL = '/assets/video/parakaruti_lodge_tour.mp4';
// Unified compact stream for mobile, tablet, and desktop live streaming
const MOBILE_VIDEO_URL = '/assets/video/parakaruti_lodge_tour.mp4';
// Direct authentic video opening poster
const DEFAULT_POSTER_URL = '/assets/video/parakaruti_lodge_tour_poster.jpg';

// Real Paraka Ruti Eco Lodge Video Tour Chapters with exact second timestamps
const TOUR_CHAPTERS = [
  {
    title: 'Cloudy Range Vista',
    timeLabel: '0:00',
    seconds: 0,
    desc: 'Misty montane mountain ranges rolling across Dei Council, Western Highlands.',
    icon: Compass,
  },
  {
    title: 'Welcome Sign & Gardens',
    timeLabel: '0:10',
    seconds: 10,
    desc: 'Entrance welcome board, tropical foliage, manicured paths & fresh flowers.',
    icon: Home,
  },
  {
    title: 'Bungalow Walkway & Lawns',
    timeLabel: '0:23',
    seconds: 23,
    desc: 'Lodge grounds tour, garden greenery, and peaceful mountain atmosphere.',
    icon: Trees,
  },
  {
    title: 'Key Handover & Check-in',
    timeLabel: '0:42',
    seconds: 42,
    desc: 'Personal welcome by village hosts, room key handover & veranda access.',
    icon: Key,
  },
  {
    title: 'Handcrafted Bungalow Interior',
    timeLabel: '0:56',
    seconds: 56,
    desc: 'Handmade timber beds, warm blankets, native bamboo woven walls & curtains.',
    icon: Home,
  },
  {
    title: 'Home-Cooked Highland Meals',
    timeLabel: '1:07',
    seconds: 67,
    desc: 'Fresh steak, farm broccoli, crisp fries, and organic valley garden greens.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Guitar Nights & Fireside Coffee',
    timeLabel: '1:18',
    seconds: 78,
    desc: 'Acoustic songs & steaming Mount Hagen Arabica coffee by the glowing hearth.',
    icon: Flame,
  },
  {
    title: 'Farm-Fresh Morning Breakfast',
    timeLabel: '1:34',
    seconds: 94,
    desc: 'Highland avocado, sweet potato kaukau, farm eggs & morning mountain tea.',
    icon: Coffee,
  },
  {
    title: 'Lush Stream & Forest Canopy',
    timeLabel: '1:40',
    seconds: 100,
    desc: 'Crystal pure mountain stream, wild orchids & canopy Bird of Paradise calls.',
    icon: Trees,
  },
];

export const LodgeVideoSection: React.FC<LodgeVideoSectionProps> = ({
  config,
  isStandalonePage = false,
  onBackToHome,
}) => {
  const [videoSource, setVideoSource] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      return MOBILE_VIDEO_URL;
    }
    return DEFAULT_VIDEO_URL;
  });
  const [videoMeta, setVideoMeta] = useState<VideoMetadata | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasEnded, setHasEnded] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(120);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [uploadSuccess, setUploadSuccess] = useState<string>('');
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const whatsappUrl = buildWhatsAppUrl(config.whatsappCleanNumber, DEFAULT_WHATSAPP_MESSAGE);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);

  // Load saved custom video on mount from IndexedDB / LocalStorage if user previously uploaded one
  useEffect(() => {
    let isMounted = true;
    loadSavedVideo().then(({ url, meta }) => {
      if (!isMounted) return;
      if (url && meta) {
        setVideoSource(url);
        setVideoMeta(meta);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Autohide controls on inactivity when playing
  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      window.clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3500);
    }
  }, [isPlaying]);

  useEffect(() => {
    resetControlsTimeout();
    return () => {
      if (controlsTimeoutRef.current) {
        window.clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, resetControlsTimeout]);

  // Robust play toggle with native mobile / tablet autoplay-policy fallback
  const handlePlayToggle = async (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (!videoRef.current) return;

    if (hasEnded) {
      handleReplay();
      return;
    }

    if (videoRef.current.paused) {
      setIsBuffering(true);
      try {
        await videoRef.current.play();
        setIsPlaying(true);
        setHasEnded(false);
      } catch (err) {
        console.warn('Direct unmuted play blocked by device browser policy, falling back to muted play:', err);
        // Fallback for mobile devices (Safari iOS / Android Chrome require muted playback on user gesture if unmuted fails)
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          try {
            await videoRef.current.play();
            setIsPlaying(true);
            setHasEnded(false);
          } catch (fallbackErr) {
            console.error('Playback failed:', fallbackErr);
            setIsPlaying(false);
          }
        }
      } finally {
        setIsBuffering(false);
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    resetControlsTimeout();
  };

  const handleReplay = async () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    try {
      await videoRef.current.play();
      setIsPlaying(true);
      setHasEnded(false);
    } catch {
      if (videoRef.current) {
        videoRef.current.muted = true;
        setIsMuted(true);
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
        setHasEnded(false);
      }
    }
  };

  const handleMuteToggle = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
    if (!newMuted && volume === 0) {
      setVolume(0.8);
      videoRef.current.volume = 0.8;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else if (isMuted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    setCurrentTime(targetTime);
    if (videoRef.current) {
      videoRef.current.currentTime = targetTime;
    }
    resetControlsTimeout();
  };

  const handleSkip = (seconds: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const newTime = Math.max(0, Math.min(videoRef.current.currentTime + seconds, duration));
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    resetControlsTimeout();
  };

  // Fullscreen support for iOS Safari, Android Chrome, and Desktop
  const handleFullscreen = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const el = videoRef.current as any;
    try {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.webkitEnterFullscreen) {
        // Native iOS Safari method
        el.webkitEnterFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  // Process user file drag-and-drop if they drop their own file
  const processFile = async (file: File) => {
    if (!file.type.startsWith('video/')) {
      setUploadSuccess('Please select a valid video file (.mp4, .webm, .mov, etc.)');
      setTimeout(() => setUploadSuccess(''), 4500);
      return;
    }

    setIsBuffering(true);
    try {
      const objectUrl = await saveVideoBlob(file);
      setVideoSource(objectUrl);
      const cleanTitle = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      setVideoMeta({
        type: 'blob',
        title: cleanTitle,
        filename: file.name,
        sizeBytes: file.size,
        lastUpdated: Date.now(),
      });
      setUploadSuccess(`Video attached: "${file.name}"! Ready to play smoothly.`);
      setIsPlaying(false);
      setHasEnded(false);
      setTimeout(() => setUploadSuccess(''), 5000);
    } catch (err) {
      console.error('Failed to save uploaded video to IndexedDB, using memory object URL:', err);
      const objectUrl = URL.createObjectURL(file);
      setVideoSource(objectUrl);
      setVideoMeta({
        type: 'blob',
        title: file.name.replace(/\.[^/.]+$/, ''),
        filename: file.name,
        sizeBytes: file.size,
        lastUpdated: Date.now(),
      });
      setUploadSuccess(`Video "${file.name}" loaded for this session!`);
    } finally {
      setIsBuffering(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const jumpToSeconds = (targetSecs: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = targetSecs;
    setCurrentTime(targetSecs);
    if (videoRef.current.paused) {
      handlePlayToggle();
    }
  };

  const youtubeEmbedUrl =
    videoMeta?.type === 'youtube' ? parseYouTubeEmbed(videoSource) : null;

  return (
    <section id="video" className="py-16 sm:py-24 bg-[#0a1811] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2d5a3f]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1b4332]/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Standalone Back Banner */}
        {isStandalonePage && onBackToHome && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#143224] rounded-2xl border border-[#2d5a3f] shadow-md">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-sm font-semibold text-[#86efac] hover:text-white bg-[#1e4a34] hover:bg-[#286043] px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Adventures (Home)</span>
            </button>
            <div className="text-xs text-[#a2c9b1] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse" />
              <span className="font-medium">Cloudy Range Adventure • Video Tours</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1b4332]/90 border border-[#3e7858]/80 text-[#86efac] text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm backdrop-blur-sm">
            <Film className="w-3.5 h-3.5 text-[#52b788]" />
            <span>Virtual Walkthrough &amp; Video Tours</span>
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
            Video Tour: Experience Parakaruti Eco Lodge
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#cce2d4] leading-relaxed max-w-2xl mx-auto">
            Take a visual journey through our handcrafted bungalows, fireside guitar nights, organic highland cuisine, and ancient moss trails in Auen Village.
          </p>
        </div>

        {/* Upload Success Feedback Banner */}
        {uploadSuccess && (
          <div className="max-w-5xl mx-auto mb-4 p-3 rounded-xl bg-[#1b4e33] border border-[#48a16c] text-[#bbf7d0] text-xs font-medium flex items-center justify-between space-x-2 animate-fadeIn">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-[#4ade80] shrink-0" />
              <span>{uploadSuccess}</span>
            </div>
            <button onClick={() => setUploadSuccess('')} className="p-1 hover:text-white">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Cinema Video Player Container (Mobile, Tablet & Live Page Optimized) */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border transition-all duration-300 relative bg-black ${
            isDragging
              ? 'border-[#52b788] ring-4 ring-[#52b788]/40 scale-[1.01]'
              : 'border-[#2d5f43]/80 shadow-[0_20px_60px_rgba(0,0,0,0.7)]'
          }`}
          onMouseMove={resetControlsTimeout}
          onTouchStart={resetControlsTimeout}
        >
          {/* Drag & Drop Prompt Overlay */}
          {isDragging && (
            <div className="absolute inset-0 z-50 bg-[#0e281b]/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-[#52b788]">
              <Upload className="w-14 h-14 text-[#86efac] animate-bounce mb-3" />
              <h3 className="font-serif font-bold text-xl text-white">Drop your video file</h3>
              <p className="text-xs text-[#a0c5b0] mt-1">
                Release to attach your Parakaruti Eco Lodge video footage
              </p>
            </div>
          )}

          {/* YouTube Embed Player */}
          {youtubeEmbedUrl ? (
            <div className="relative aspect-video w-full">
              <iframe
                src={youtubeEmbedUrl}
                title="Parakaruti Eco Lodge Video Footage"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* Native HTML5 Video Player with Faststart MP4 for Live Page Streaming */
            <div
              className="relative aspect-video w-full bg-black group select-none"
              onClick={() => handlePlayToggle()}
            >
              <video
                ref={videoRef}
                src={videoSource}
                poster={DEFAULT_POSTER_URL}
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                preload="auto"
                muted={isMuted}
                onError={(e) => {
                  console.warn('Playback error with current stream, trying mobile stream:', e);
                  if (videoSource !== MOBILE_VIDEO_URL) {
                    setVideoSource(MOBILE_VIDEO_URL);
                  }
                }}
                onPlay={() => {
                  setIsPlaying(true);
                  setHasEnded(false);
                  setIsBuffering(false);
                }}
                onPause={() => setIsPlaying(false)}
                onWaiting={() => setIsBuffering(true)}
                onPlaying={() => setIsBuffering(false)}
                onCanPlay={() => setIsBuffering(false)}
                onTimeUpdate={() => {
                  if (videoRef.current) {
                    setCurrentTime(videoRef.current.currentTime);
                  }
                }}
                onLoadedMetadata={() => {
                  if (videoRef.current && videoRef.current.duration) {
                    setDuration(videoRef.current.duration);
                  }
                }}
                onEnded={() => {
                  setIsPlaying(false);
                  setHasEnded(true);
                  setShowControls(true);
                }}
                className="w-full h-full object-cover cursor-pointer"
              >
                {/* Dual progressive sources for maximum browser and network reliability */}
                <source src={videoSource} type="video/mp4" />
                <source src={MOBILE_VIDEO_URL} type="video/mp4" />
                Your browser does not support HTML5 video playback.
              </video>

              {/* Top Left Official Logo Badge Attached to Video */}
              <div
                className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center space-x-2.5 z-20 pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full p-0.5 bg-black/75 backdrop-blur-md border-2 border-[#52b788] shadow-xl overflow-hidden shrink-0">
                  <img
                    src={officialLogoImg}
                    alt="Cloudy Range Adventures Inc. Official Logo"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white text-xs font-bold leading-tight drop-shadow-md">
                    Cloudy Range Adventures
                  </span>
                  <span className="text-[#86efac] text-[10px] font-medium leading-tight drop-shadow-md">
                    Parakaruti Eco Lodge • PNG
                  </span>
                </div>
              </div>

              {/* Top Right Live Streaming Status Indicator */}
              <div
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 pointer-events-none flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-[#86efac]"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="w-2 h-2 rounded-full bg-[#52b788] animate-pulse" />
                <span className="hidden sm:inline">Converted HD Video Tour</span>
                <span className="sm:hidden">HD Video</span>
              </div>

              {/* Loading / Buffering Spinner */}
              {isBuffering && (
                <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-xs pointer-events-none">
                  <div className="p-3.5 rounded-full bg-black/75 border border-[#52b788] text-[#86efac] flex items-center space-x-2 shadow-2xl animate-pulse">
                    <Loader2 className="w-6 h-6 animate-spin text-[#86efac]" />
                    <span className="text-xs font-semibold">Streaming video tour...</span>
                  </div>
                </div>
              )}

              {/* Center Big Play Button Overlay (When Paused & Not Ended) */}
              {!isPlaying && !hasEnded && !isBuffering && (
                <div
                  onClick={(e) => handlePlayToggle(e)}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all cursor-pointer z-10 p-4"
                >
                  <div className="mb-3 sm:mb-4 flex flex-col items-center animate-fadeIn pointer-events-none">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-black/80 backdrop-blur-md border-2 border-[#52b788] shadow-2xl overflow-hidden mb-2 transform hover:scale-105 transition-transform">
                      <img
                        src={officialLogoImg}
                        alt="Cloudy Range Adventures Official Emblem"
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-white font-serif font-bold text-base sm:text-xl tracking-wide drop-shadow-lg text-center">
                      Discover Parakaruti Eco Lodge
                    </span>
                    <span className="text-[#86efac] text-[11px] sm:text-xs font-semibold tracking-wider uppercase drop-shadow text-center">
                      Click or Tap to Play Live Video Tour
                    </span>
                  </div>

                  <div className="relative flex items-center justify-center mt-1">
                    <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#52b788]/30 animate-ping pointer-events-none" />
                    <button
                      type="button"
                      aria-label="Play Video"
                      onClick={(e) => handlePlayToggle(e)}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2d5a3f] hover:bg-[#386e4e] text-white flex items-center justify-center shadow-2xl transition-transform transform hover:scale-110 border-2 border-[#86efac] cursor-pointer"
                    >
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5 fill-white" />
                    </button>
                  </div>
                </div>
              )}

              {/* End Screen with Replay & Booking Actions */}
              {hasEnded && (
                <div
                  className="absolute inset-0 z-30 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center animate-fadeIn"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-br from-[#52b788] to-[#1e4832] shadow-2xl overflow-hidden mb-3 border-2 border-[#86efac]">
                    <img
                      src={officialLogoImg}
                      alt="Cloudy Range Adventures Official Logo"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[#86efac] text-[11px] font-bold uppercase tracking-widest mb-1">
                    Adventure with Purpose
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
                    Parakaruti Eco Lodge
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8d6c4] max-w-md mt-1 leading-relaxed">
                    Experience authentic village life, montane cloud forests, and rare Birds of Paradise in the Cloudy Range.
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReplay}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#2d5a3f] hover:bg-[#386e4e] text-white font-bold text-xs sm:text-sm shadow-lg transition-transform transform hover:scale-105 cursor-pointer border border-[#52b788]"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Replay Tour</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-lg transition-transform transform hover:scale-105"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Touch-Friendly Playback Controls (Scrubber, Play, Mute, Fullscreen) */}
              <div
                className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/70 to-transparent z-20 transition-opacity duration-300 ${
                  showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Scrubber Progress Bar */}
                <div className="space-y-1 mb-2">
                  <input
                    type="range"
                    min={0}
                    max={duration || 120}
                    step={0.1}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#52b788] hover:h-2 transition-all"
                  />
                  <div className="flex items-center justify-between text-[11px] text-[#a5c7b3] font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Play / Pause Button */}
                    <button
                      onClick={(e) => handlePlayToggle(e)}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-white" />
                      ) : (
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      )}
                    </button>

                    {/* Rewind 10s */}
                    <button
                      onClick={(e) => handleSkip(-10, e)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer text-[10px] font-bold"
                      title="Rewind 10 seconds"
                    >
                      -10s
                    </button>

                    {/* Forward 10s */}
                    <button
                      onClick={(e) => handleSkip(10, e)}
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer text-[10px] font-bold"
                      title="Forward 10 seconds"
                    >
                      +10s
                    </button>

                    {/* Mute / Unmute Button */}
                    <button
                      onClick={(e) => handleMuteToggle(e)}
                      className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                      title={isMuted ? 'Tap to enable sound' : 'Mute audio'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-[#f87171]" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#86efac]" />
                      )}
                    </button>

                    {/* Volume Slider (Tablet / Desktop) */}
                    <div className="hidden sm:flex items-center space-x-1.5 w-20">
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#52b788]"
                      />
                    </div>

                    <span className="text-[11px] text-[#c1decb] font-medium hidden md:inline">
                      {isMuted ? 'Muted (Tap to enable sound)' : 'Audio Playing'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Fullscreen Toggle */}
                    <button
                      onClick={(e) => handleFullscreen(e)}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer"
                      aria-label="Fullscreen"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Tour Highlights & Chapter Navigation */}
        <div className="mt-8 max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-3 border-b border-[#1b3d2b] pb-2">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#86efac]">
              <Sparkles className="w-4 h-4 text-[#52b788]" />
              <span>Tour Scene Highlights &amp; Chapters</span>
            </div>
            <span className="text-xs text-[#9bbca7]">
              Tap any highlight to jump directly to that scene
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 text-left">
            {TOUR_CHAPTERS.map((chapter, idx) => {
              const Icon = chapter.icon;
              return (
                <div
                  key={idx}
                  onClick={() => jumpToSeconds(chapter.seconds)}
                  className="p-3 rounded-2xl bg-[#122e20]/80 border border-[#235339] hover:border-[#52b788] hover:bg-[#183d2b] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-[#1e4a33] text-[#86efac] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-mono text-[10px] text-[#78a98b] bg-black/40 px-1.5 py-0.5 rounded">
                      {chapter.timeLabel}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-xs text-white group-hover:text-[#a7f3d0] transition-colors leading-tight">
                      {chapter.title}
                    </h4>
                    <p className="text-[10px] text-[#b3d3bf] mt-1 line-clamp-2 leading-snug">
                      {chapter.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fast Mobile Playback Guarantee */}
        <div className="mt-8 max-w-5xl mx-auto p-5 rounded-2xl bg-[#132c20]/60 border border-[#234b35] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a9ccb7]">
          <div className="flex items-center space-x-3 text-left">
            <div className="w-9 h-9 rounded-full bg-[#1e4a33] text-[#52b788] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-bold text-white text-sm">
                Optimized Live Page &amp; Mobile Stream
              </span>
              <span>
                Encoded with web-standard H.264 &amp; faststart moov headers for instant start on 3G/4G/5G, iOS, Android, and Desktop.
              </span>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Book Visit on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
