import { ExperienceItem } from '../types';

import bungalowImg from '../assets/images/parakaruti_actual_lodge_IMG_WA0056.jpg';
import birdWatchingImg from '../assets/images/regenerated_image_1789475915168.jpg';
import trekkingImg from '../assets/images/regenerated_image_1789476125769.jpg';
import culturalImg from '../assets/images/regenerated_image_1790740265933.png';
import wellnessImg from '../assets/images/regenerated_image_1789776770735.jpg';
import conservationImg from '../assets/images/regenerated_image_1789778959308.jpg';
import guidedTourImg from '../assets/images/regenerated_image_1789777799899.jpg';
import agroImg from '../assets/images/regenerated_image_1789559215231.jpg';

export const experiencesData: ExperienceItem[] = [
  {
    id: 'village-accommodation',
    number: '01',
    title: 'Eco Lodge Huts (8 Single Bungalows)',
    shortDescription:
      '8 single bungalows handcrafted from locally harvested native hardwoods and bamboo, featuring stone fireplaces, private viewing decks overlooking tropical forest valleys, and clean mountain spring water.',
    fullDescription:
      'Immerse yourself in authentic Papua New Guinea highland living at Parakaruti Eco Lodge. We provide 8 private single bungalows handcrafted by local village carpenters from sustainably harvested native hardwoods and woven bamboo. Each bungalow features an indoor stone fireplace to keep you warm through the cool mountain nights, private viewing decks perched high over tropical forest valleys, and clean mountain spring water. Enjoy home-cooked meals prepared with garden-fresh highland produce and wake up to mountain mist and birdsong.',
    image: bungalowImg,
    imageAlt: '8 handcrafted single bungalow eco lodge cabins in Auen Village, Western Highlands Papua New Guinea',
    category: 'Village Living',
    duration: 'Overnight / Multi-day',
    intensity: 'Relaxed & Immersive',
    highlights: [
      '8 private single bungalows built from native hardwoods & bamboo',
      'Indoor stone fireplaces for cool mountain evenings',
      'Private viewing decks overlooking tropical forest valleys',
      'Clean gravity-fed mountain spring water',
      'Direct contribution to Auen village conservation livelihoods',
    ],
  },
  {
    id: 'bird-watching',
    number: '02',
    title: 'Bird Watching',
    shortDescription:
      'Discover the remarkable birdlife of the Cloudy Range, including the possibility of seeing Papua New Guinea’s famous Bird of Paradise in its natural habitat.',
    fullDescription:
      'The Western Highlands of Papua New Guinea are globally celebrated for their unique montane avifauna. In the misty cloud canopy of the Cloudy Range, patient birders have the rare opportunity to observe species such as the Raggiana and Ribbon-tailed Bird of Paradise, vibrant honeyeaters, and montane parrots. Our outings are led by local trackers who know mating display perches and calling trees while respecting wildlife ethics.',
    image: birdWatchingImg,
    imageAlt: 'Bird watching in the cloudy highland rainforest canopy of Papua New Guinea',
    category: 'Wildlife & Nature',
    duration: 'Dawn / Half-day / Full-day',
    intensity: 'Gentle to Moderate',
    highlights: [
      'Opportunity to spot Papua New Guinea Birds of Paradise',
      'Guided by knowledgeable village forest trackers',
      'Low-impact, ethical wildlife observation protocols',
      'Breathtaking early morning mist viewing stations',
    ],
  },
  {
    id: 'trekking-hiking',
    number: '03',
    title: 'Trekking & Hiking',
    shortDescription:
      'Explore mountain trails through pristine forests, grasslands, freshwater streams and scenic ridges. Guided walks suitable for different fitness levels.',
    fullDescription:
      'Traverse traditional ridge trails that have connected highland clans for generations. From leisurely gentle walks through mossy primary cloud forests and crystalline mountain streams, to challenging ascents offering panoramic vistas across Dei Council and the Waghi Valley, our trails provide an intimate encounter with the untamed biodiversity of Western Highlands.',
    image: trekkingImg,
    imagePosition: 'center 22%',
    imageAlt: 'Trekking trail through the misty Cloudy Range mountains Western Highlands PNG',
    category: 'Mountain Adventure',
    duration: '2 Hours to Full Day',
    intensity: 'Customizable (Easy to Strenuous)',
    highlights: [
      'Mossy ancient cloud forests and fern gullies',
      'High vantage points overlooking Dei Council valleys',
      'Crossing natural mountain streams and bamboo bridges',
      'Guides tailored to your personal pacing and fitness',
    ],
  },
  {
    id: 'cultural-activities',
    number: '04',
    title: 'Cultural Activities',
    shortDescription:
      'Experience local culture through village visits, traditional stories, food preparation, music, customs, crafts and community-led activities.',
    fullDescription:
      'Culture in the Western Highlands is vibrant, deeply meaningful, and woven into daily life. Our cultural exchanges are community-governed and respectful: sit with elders to hear oral histories, observe traditional bilum string-bag weaving, witness ancestral song and pipe playing, and learn the significance of clan heritage and kinship ties.',
    image: culturalImg,
    imageAlt: 'Traditional Papua New Guinea cultural traditions and village community life',
    category: 'Cultural Heritage',
    duration: 'Half-day / Evening',
    intensity: 'Interactive & Respectful',
    highlights: [
      'Community-led and respectful cultural storytelling',
      'Traditional highland craft demonstrations (weaving, bilum)',
      'Highland earth-oven food preparation and sharing',
      'Meaningful dialogue with village youth and elders',
    ],
  },
  {
    id: 'health-wellness',
    number: '05',
    title: 'Health & Wellness',
    shortDescription:
      'Slow down and reconnect with nature. Offer peaceful walking, forest bathing, fresh mountain air, pure relaxation and traditional highland wellness.',
    fullDescription:
      'Escape digital saturation and constant urban hurry. The high-altitude air of the Cloudy Range, cool mountain breezes, and rhythmic soundscapes of natural streamwater provide natural restorative wellness. Unwind with meditative forest strolls, clean mineral water, gentle stretches overlooking green valleys, and peaceful village quietude.',
    image: wellnessImg,
    imageAlt: 'Highland wellness, forest relaxation and local hospitality in Cloudy Range',
    imagePosition: 'center 10%',
    category: 'Nature & Wellness',
    duration: 'Flexible & Self-Paced',
    intensity: 'Gentle & Restorative',
    highlights: [
      'Clean, cool mountain highland air',
      'Digital detox and serene natural soundscapes',
      'Meditative walking through quiet moss forests',
      'Nourishing organic highland foods and herbal infusions',
    ],
  },
  {
    id: 'conservation-projects',
    number: '06',
    title: 'Conservation Projects',
    shortDescription:
      'Learn about local conservation efforts and how community eco-tourism directly protects ancient highland forests, wildlife and natural water catchments.',
    fullDescription:
      'Cloudy Range Adventure Inc. was founded on the principle that conservation succeed when communities prosper. Learn firsthand how village landholders protect native cloud forests from deforestation, preserve critical nesting habitats for endangered birds, and monitor biodiversity. Every visitor contributes directly to village-led conservation stipends.',
    image: conservationImg,
    imageAlt: 'Community forest conservation stewardship and native tree preservation in Cloudy Range PNG',
    imagePosition: 'center center',
    category: 'Conservation & Ecology',
    duration: '2 to 4 Hours',
    intensity: 'Informative & Educational',
    highlights: [
      'Understanding customary landholder conservation systems',
      'Visiting community-designated forest protection zones',
      'Tree planting and native habitat preservation efforts',
      'Direct contribution of your tour fees to forest wardens',
    ],
  },
  {
    id: 'guided-tours',
    number: '07',
    title: 'Guided Tours',
    shortDescription:
      'Explore the Cloudy Range with knowledgeable local guides who share botanical knowledge, wildlife tracking, local history, oral lore and village wisdom.',
    fullDescription:
      'Walk alongside resident guides whose ancestors have traversed the Cloudy Range for generations. They identify medicinal plants in the understory, interpret bird calls across the ridge, share historical folklore about landmarks, and explain customary boundary markings. With local guides, you travel as an honored guest rather than a bystander.',
    image: guidedTourImg,
    imageAlt: 'Experienced local guides leading nature and mountain exploration in Western Highlands',
    imagePosition: 'center 20%',
    category: 'Expert Local Guidance',
    duration: 'Half-day / Full-day',
    intensity: 'Tailored to Group',
    highlights: [
      'Indigenous botanical and medicinal plant insights',
      'Fascinating folklore and oral history of Dei Council',
      'Personal safety, navigation, and terrain expertise',
      'Warm camaraderie and cross-cultural friendship',
    ],
  },
  {
    id: 'agro-tours',
    number: '08',
    title: 'Agro Tours & Livelihood',
    shortDescription:
      'Discover how local families grow food and support their livelihoods. Experience traditional highland gardens, crops, farming methods and community enterprises.',
    fullDescription:
      'The Western Highlands has some of the world’s most ancient agricultural heritage, dating back over 9,000 years (Kuk Swamp). Explore lush family food gardens cultivating sweet potatoes (kaukau), mountain greens, ginger, sugarcane, and high-grade organic Arabica coffee. Understand how sustainable agriculture sustains village livelihoods and pairs with conservation.',
    image: agroImg,
    imageAlt: 'Traditional organic highland agricultural garden and sustainable farming in PNG',
    category: 'Agriculture & Livelihood',
    duration: '2 to 3 Hours',
    intensity: 'Easy & Engaging',
    highlights: [
      'Visit traditional highland kaukau (sweet potato) gardens',
      'Learn organic highland farming and soil stewardship',
      'Sample garden-fresh highland crops and mountain fruits',
      'Support community enterprise and agricultural families',
    ],
  },
];
