import React, { useState, useEffect } from 'react';
import { X, HelpCircle, RotateCcw, Save, Check } from 'lucide-react';
import { BusinessConfig } from '../types';
import { DEFAULT_BUSINESS_CONFIG, saveSiteConfig } from '../config/siteConfig';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentConfig: BusinessConfig;
  onSave: (config: BusinessConfig) => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  currentConfig,
  onSave,
}) => {
  const [draft, setDraft] = useState<BusinessConfig>({ ...currentConfig });
  const [isSaved, setIsSaved] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    setDraft({ ...currentConfig });
    setConfirmReset(false);
  }, [currentConfig, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanWhatsApp = draft.whatsappNumber.replace(/[^0-9]/g, '');
    const updated: BusinessConfig = {
      ...draft,
      whatsappCleanNumber: cleanWhatsApp || DEFAULT_BUSINESS_CONFIG.whatsappCleanNumber,
    };
    saveSiteConfig(updated);
    onSave(updated);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    saveSiteConfig(DEFAULT_BUSINESS_CONFIG);
    onSave(DEFAULT_BUSINESS_CONFIG);
    setDraft({ ...DEFAULT_BUSINESS_CONFIG });
    setConfirmReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#d6ded8]"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-6 border-b border-[#e5dfd7] flex items-center justify-between bg-[#fbf9f6] rounded-t-2xl">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#2d5a3f]">
              Lodge Owner & Admin Panel
            </span>
            <h3 className="font-serif font-bold text-xl text-[#12281e]">
              Business & Contact Configuration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#617467] hover:text-[#12281e] hover:bg-[#eae4dc] transition cursor-pointer"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="p-3.5 rounded-xl bg-[#eef5f0] border border-[#cbdcd0] text-xs text-[#2b4c37] flex items-start space-x-2">
            <HelpCircle className="w-4 h-4 shrink-0 text-[#2d5a3f] mt-0.5" />
            <div>
              <strong>Instant Updates:</strong> Updating these fields changes all WhatsApp buttons, email links, location notices, and embedded maps across the entire website immediately.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2f4035] mb-1">
                Business Name
              </label>
              <input
                type="text"
                value={draft.businessName}
                onChange={(e) => setDraft({ ...draft, businessName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-sm focus:border-[#2d5a3f] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2f4035] mb-1">
                Lodge Name
              </label>
              <input
                type="text"
                value={draft.lodgeName}
                onChange={(e) => setDraft({ ...draft, lodgeName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-sm focus:border-[#2d5a3f] outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2f4035] mb-1">
                WhatsApp Phone Number
              </label>
              <input
                type="text"
                value={draft.whatsappNumber}
                onChange={(e) => setDraft({ ...draft, whatsappNumber: e.target.value })}
                placeholder="+675 70143943"
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-sm focus:border-[#2d5a3f] outline-none"
              />
              <span className="text-[10px] text-[#6d8274] block mt-0.5">
                Current confirmed: +675 70143943
              </span>
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#2f4035] mb-1">
                Official Email
              </label>
              <input
                type="email"
                value={draft.email}
                onChange={(e) => setDraft({ ...draft, email: e.target.value })}
                placeholder="juliebengi4@gmail.com"
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-sm focus:border-[#2d5a3f] outline-none"
              />
              <span className="text-[10px] text-[#6d8274] block mt-0.5">
                Current confirmed: juliebengi4@gmail.com
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2f4035] mb-1">
              Location Address
            </label>
            <input
              type="text"
              value={draft.locationAddress}
              onChange={(e) => setDraft({ ...draft, locationAddress: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-sm focus:border-[#2d5a3f] outline-none"
            />
          </div>

          <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#e5dfd5] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#12281e]">
              Google Maps Configuration
            </h4>
            <p className="text-xs text-[#5f7466]">
              Per policy, placeholder “LOCATION PIN TO BE CONFIRMED” is shown until you paste an official map embed URL here.
            </p>
            <div>
              <label className="block text-xs font-medium text-[#2f4035] mb-1">
                Paste Google Maps Embed URL (iframe src)
              </label>
              <input
                type="text"
                value={draft.googleMapsEmbedUrl || ''}
                onChange={(e) => setDraft({ ...draft, googleMapsEmbedUrl: e.target.value })}
                placeholder="https://www.google.com/maps/embed?pb=..."
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-xs focus:border-[#2d5a3f] outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#2f4035] mb-1">
                Paste Google Maps Link (for “Get Directions” button)
              </label>
              <input
                type="text"
                value={draft.googleMapsUrl || ''}
                onChange={(e) => setDraft({ ...draft, googleMapsUrl: e.target.value })}
                placeholder="https://maps.app.goo.gl/..."
                className="w-full px-3 py-2 rounded-lg border border-[#cbd5ce] text-xs focus:border-[#2d5a3f] outline-none"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#eee8e0] flex flex-wrap items-center justify-between gap-3">
            {confirmReset ? (
              <div className="flex items-center space-x-2 text-xs">
                <span className="font-semibold text-[#9e2a2b]">Reset defaults?</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1 rounded-md bg-[#9e2a2b] hover:bg-[#7f1d1d] text-white font-bold transition cursor-pointer"
                >
                  Yes, Reset
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmReset(false)}
                  className="px-2.5 py-1 rounded-md bg-[#f0ece5] hover:bg-[#e4ded4] text-[#526658] font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setConfirmReset(true)}
                className="inline-flex items-center text-xs text-[#718778] hover:text-[#9e2a2b] transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                Reset to Confirmed Defaults
              </button>
            )}
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#526658] hover:bg-[#f0ece5] rounded-lg transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#2d5a3f] hover:bg-[#204430] text-white text-xs sm:text-sm font-bold shadow transition cursor-pointer"
              >
                {isSaved ? (
                  <>
                    <Check className="w-4 h-4 mr-1.5" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-1.5" />
                    Save & Apply
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
