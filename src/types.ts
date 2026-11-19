export interface BusinessConfig {
  businessName: string;
  lodgeName: string;
  tagline: string;
  email: string;
  whatsappNumber: string;
  whatsappCleanNumber: string;
  locationAddress: string;
  locationDetails: string;
  accessNote: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  social: {
    facebook: string;
    instagram: string;
    whatsapp: string;
  };
}

export interface ExperienceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  category: string;
  duration?: string;
  intensity?: string;
  highlights: string[];
}

export interface FaqItem {
  id: string;
  category: "trekking" | "logistics" | "requirements" | "health_safety" | "lodge";
  question: string;
  badge: string;
  answer: string;
  highlights?: string[];
}

export interface FaqCategory {
  id: "all" | "trekking" | "logistics" | "requirements" | "health_safety" | "lodge";
  label: string;
}

export type GalleryCategoryId =
  | 'all'
  | 'paraka-ruti-eco-lodge'
  | 'village-guest-house'
  | 'cloudy-range'
  | 'mountain-trails'
  | 'birds'
  | 'bird-of-paradise'
  | 'forest'
  | 'waterfalls'
  | 'village-life'
  | 'local-food'
  | 'culture'
  | 'agriculture'
  | 'conservation'
  | 'local-guides';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategoryId;
  categoryLabel: string;
  image: string;
  alt: string;
  caption: string;
  folderPath: string;
  isPlaceholderNotice?: boolean;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
}

export interface Author {
  name: string;
  role: string;
  clan: string;
  tribe: string;
  district: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  author: Author;
  summary: string;
  pullQuote: string;
  paragraphs: string[];
  tags: string[];
  image: string;
  imageAlt: string;
}
