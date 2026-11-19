import { BusinessConfig } from '../types';

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  businessName: 'Cloudy Range Adventures Inc.',
  lodgeName: 'Parakaruti Eco Lodge',
  tagline: 'Adventure with Purpose.',
  email: 'juliebengi4@gmail.com',
  whatsappNumber: '+675 70143943',
  whatsappCleanNumber: '67570143943',
  locationAddress: 'Auen Village, Dei Council, Western Highlands Province, Papua New Guinea',
  locationDetails:
    "We're based in the Auen Village area of the Dei Council in the Western Highlands Province. Visitors can travel from the Mt. Hagen area toward the Cloudy Range and experience village life, mountain landscapes, forests, wildlife and local culture.",
  accessNote:
    'Approximately 1 hour from Mt. Hagen Airport, depending on road and travel conditions. Travel times may vary depending on weather and road conditions.',
  googleMapsUrl: '',
  googleMapsEmbedUrl: '',
  social: {
    facebook: 'https://www.facebook.com/ParakarutiEcoLodge',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/67570143943',
  },
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Cloudy Range Adventures Inc., I am interested in visiting Parakaruti Eco Lodge. I would like to know about accommodation, activities, availability, pricing and how to travel to the Cloudy Range.';

export function loadSiteConfig(): BusinessConfig {
  if (typeof window === 'undefined') return DEFAULT_BUSINESS_CONFIG;
  try {
    const saved = localStorage.getItem('cloudy_range_site_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.email === 'juliebengi@gmail.com') {
        parsed.email = 'juliebengi4@gmail.com';
      }
      if (parsed.lodgeName && parsed.lodgeName.includes('Paraka Ruti')) {
        parsed.lodgeName = parsed.lodgeName.replace(/Paraka Ruti/g, 'Parakaruti');
      }
      if (parsed.businessName && parsed.businessName.includes('Adventure Inc.')) {
        parsed.businessName = parsed.businessName.replace(/Adventure Inc\./g, 'Adventures Inc.');
      }
      if (!parsed.social?.facebook || parsed.social.facebook === 'https://facebook.com') {
        parsed.social = { ...parsed.social, facebook: 'https://www.facebook.com/ParakarutiEcoLodge' };
      }
      return { ...DEFAULT_BUSINESS_CONFIG, ...parsed };
    }
  } catch {
    // fallback
  }
  return DEFAULT_BUSINESS_CONFIG;
}

export function saveSiteConfig(config: BusinessConfig): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cloudy_range_site_config', JSON.stringify(config));
  }
}

export function buildWhatsAppUrl(cleanNumber: string, message: string): string {
  const encoded = encodeURIComponent(message);
  const clean = cleanNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${clean}?text=${encoded}`;
}

export function buildMailtoUrl(email: string, subject: string, body: string): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
