import { FaqItem, FaqCategory } from '../types';

export const faqCategories: FaqCategory[] = [
  { id: 'all', label: 'All Questions' },
  { id: 'trekking', label: 'Trekking & Fitness' },
  { id: 'logistics', label: 'Getting Here & Flights' },
  { id: 'requirements', label: 'Visas & Permits' },
  { id: 'health_safety', label: 'Health, Safety & Packing' },
  { id: 'lodge', label: 'Lodge & Village Life' },
];

export const faqData: FaqItem[] = [
  {
    id: 'trek-difficulty-fitness',
    category: 'trekking',
    question: 'How difficult are the Cloudy Range treks and what fitness level is required?',
    badge: 'Trail Difficulty',
    answer:
      'Our treks range from gentle 2-hour nature walks to full-day ridge climbs. Trails follow indigenous mountain footpaths through primary cloud forest, bamboo groves, and grassy ridges. A moderate level of general cardiovascular fitness and stability on uneven natural terrain is recommended. Every group is accompanied by resident village guides who adjust the pacing to your comfort and safety.',
    highlights: [
      'Customized pacing from gentle strolls to challenging ascents',
      'Accompanied by resident landowner guides and trail escorts',
      'Rest stops at scenic valley viewpoints and natural spring stations',
    ],
  },
  {
    id: 'trekking-gear-packing',
    category: 'trekking',
    question: 'What footwear, clothing, and gear should I pack for highland trekking?',
    badge: 'Packing Essentials',
    answer:
      'Highland trails can be muddy and steep following mountain mist or rain. Sturdy, waterproof hiking boots with deep tread and ankle support are essential. Lightweight rain gear, quick-drying layers, a warm fleece jacket for cool evenings (temperatures drop to 12°C–16°C at night), a headlamp, insect repellent, and dry bags for cameras/phones are strongly advised.',
    highlights: [
      'Sturdy waterproof hiking boots with deep tread',
      'Lightweight waterproof rain jacket or poncho & dry-bags for electronics',
      'Moisture-wicking base layers, long lightweight hiking pants, and a warm fleece for evenings',
      'Headlamp or flashlight, sunscreen, insect repellent, and reusable water bottle',
      'Hiking poles (local hand-carved bamboo walking sticks are also provided)',
    ],
  },
  {
    id: 'porters-assistance',
    category: 'trekking',
    question: 'Can I hire local porters to assist with daypacks and camera gear?',
    badge: 'Community Porters',
    answer:
      'Yes! We encourage hiring local community porters from Auen Village. Porters are strong, sure-footed young men and women from the landowner clan who carry heavier daypacks, camera tripods, and extra water. Hiring a porter provides direct, dignified income to local families while allowing you to trek light and take photos freely.',
    highlights: [
      'Direct community benefit supporting village families',
      'Assistance with heavy camera gear, tripods, and daypacks',
      'Warm local companionship and trail navigation help',
    ],
  },
  {
    id: 'logistics-how-to-get-here',
    category: 'logistics',
    question: 'How do I travel to Cloudy Range Adventures and Parakaruti Eco Lodge?',
    badge: 'Flight & Road Route',
    answer:
      'Most visitors fly into Port Moresby (Jackson’s International Airport - POM) and take a scheduled 55-minute domestic flight to Mount Hagen (Kagamuga International Airport - HGU) with Air Niugini or PNG Air. From Mount Hagen, our team provides pre-arranged private 4WD overland transport directly to Auen Village, Dei Council (~1.5 to 2 hours drive along scenic mountain and coffee valley roads).',
    highlights: [
      'Step 1: International arrival at Port Moresby (POM)',
      'Step 2: 55-min domestic flight to Mount Hagen (HGU)',
      'Step 3: 1.5–2 hr scenic 4WD escort to Auen Village, Dei Council',
    ],
  },
  {
    id: 'logistics-airport-transfers',
    category: 'logistics',
    question: 'Are airport transfers provided from Mount Hagen (Kagamuga Airport)?',
    badge: 'Airport Pickup',
    answer:
      'Yes. We arrange private, secure 4WD transfers between Mount Hagen (either Kagamuga Airport or central Mount Hagen hotels like Highlander Hotel or McRoyal) and Parakaruti Eco Lodge. Our driver greets you upon baggage collection, assists with luggage, and provides a safe, guided journey through the Dei district.',
    highlights: [
      'Door-to-door 4WD pickup & return transfer service',
      'Airport greeting upon arrival at Mount Hagen (HGU)',
      'Flexibility for grocery or ATM stops in town before driving up',
    ],
  },
  {
    id: 'logistics-best-time-to-visit',
    category: 'logistics',
    question: 'When is the best time of year to visit the Cloudy Range?',
    badge: 'Weather & Seasons',
    answer:
      'Cloudy Range Adventure is open and welcoming guests year-round. The Western Highlands has a temperate tropical climate with daytime highs of 20°C–25°C (68°F–77°F). The period from May through October tends to have drier mornings and crisp summit vistas, coinciding with prime bird of paradise mating displays and cultural festivals like the Mount Hagen Cultural Show (mid-August). The greener months (November to April) offer magnificent flowering wild orchids, rushing forest streams, and dramatic rolling cloudscapes.',
    highlights: [
      'May – October: Crisper visibility, less rain, cultural festival season',
      'November – April: Vibrant orchids, lush moss forest, dramatic cloud rivers',
      'Birdwatching: Superb year-round with morning leks active all seasons',
    ],
  },
  {
    id: 'requirements-visas-permits',
    category: 'requirements',
    question: 'What visas and entry permits are required for Papua New Guinea?',
    badge: 'PNG Entry Requirements',
    answer:
      'All international visitors require a passport with at least 6 months validity. Most nationalities are eligible to obtain an online Tourist e-Visa before traveling through the official Papua New Guinea Immigration and Citizenship Authority portal (ica.gov.pg). Visas are typically valid for 30 or 60 days. No special independent trekking permits are needed for the Cloudy Range because our project is operated directly by the customary landowners of Auen Village, so all traditional clan access is handled for you.',
    highlights: [
      'Tourist e-Visa available online at official PNG ICA portal',
      'Passport must have at least 6 months remaining validity',
      'Customary tribal land access is fully arranged by Cloudy Range Adventure',
    ],
  },
  {
    id: 'health-safety-security',
    category: 'health_safety',
    question: 'Is it safe to travel in the Western Highlands and Auen Village?',
    badge: 'Community Security',
    answer:
      'Yes. When you travel with Cloudy Range Adventure, you are received as personal guests (wantoks) of Julie Bengi and the Auen landowner community. Unlike traveling independently, our visitors are accompanied by trusted clan guides, lodge staff, and local elders throughout all road transfers, treks, and village activities. Dei Council rural communities take immense pride in eco-tourism, treating guests with legendary highland hospitality and protective care.',
    highlights: [
      'Hosted directly by indigenous clan landowners and village elders',
      'Experienced local guides accompany you during all transfers and trails',
      'Calm, peaceful rural mountain community away from urban traffic',
    ],
  },
  {
    id: 'health-malaria-water',
    category: 'health_safety',
    question: 'What health precautions, malaria advice, and drinking water guidelines apply?',
    badge: 'Health & Wellness',
    answer:
      'Because Parakaruti Eco Lodge sits high in the mountains (~2,000m), mosquito activity is minimal compared to coastal regions. However, malaria prophylaxis is still strongly recommended for your transit through Port Moresby or lowlands. We provide safe boiled, gravity-fed mountain spring water and bottled drinking water at the lodge. We also recommend traveling with personal prescriptions, insect repellent, blister care, and comprehensive travel insurance that includes emergency medical evacuation.',
    highlights: [
      'High altitude (~2,000m) significantly reduces mosquito presence',
      'Malaria prophylaxis advised for Port Moresby & low-altitude transit',
      'Safe pure mountain spring water & wholesome meals provided daily',
      'Comprehensive travel & evacuation insurance strongly advised',
    ],
  },
  {
    id: 'lodge-amenities-power',
    category: 'lodge',
    question: 'What amenities, electricity, and mobile phone coverage are available at Parakaruti Eco Lodge?',
    badge: 'Lodge Facilities',
    answer:
      'Parakaruti Eco Lodge features 8 private single bungalows built from native hardwoods and woven bamboo. Each bungalow accommodates 1 to 3 guests and includes warm highland bedding, a private scenic balcony, and a cozy indoor wood-burning fireplace. The lodge uses solar electricity with evening generator power to charge cameras, phones, and power banks. Digicel 3G/4G cellular coverage is available at key mountain viewpoints and village ridge spots.',
    highlights: [
      '8 private timber bungalows with indoor fireplaces & private decks',
      'Accommodates 1 to 3 guests per bungalow (up to 24 guests total)',
      'Solar power & evening generator charging station for batteries & phones',
      'Digicel mobile connectivity accessible on ridge lookouts',
    ],
  },
  {
    id: 'lodge-food-dietary',
    category: 'lodge',
    question: 'What type of food is served and can special diets be accommodated?',
    badge: 'Highland Farm-to-Table',
    answer:
      'We serve wholesome, locally grown highland meals cooked fresh each day. Meals feature traditional roasted sweet potato (kaukau), fresh garden vegetables, organic highland greens, tropical seasonal fruits, eggs, free-range poultry, and rich Mount Hagen Arabica coffee and tea. We gladly cater to vegetarian, vegan, gluten-free, or special dietary requirements with advance notice during booking.',
    highlights: [
      'Organic village garden produce & sweet potatoes (kaukau)',
      'Fresh local chicken, eggs, and freshly brewed Western Highlands coffee',
      'Vegetarian and special dietary preferences accommodated with prior notice',
    ],
  },
  {
    id: 'conference-room-hire-cost',
    category: 'lodge',
    question: 'Can clients or organisations hire the Conference Room and what is the cost?',
    badge: 'Conference Room • K350',
    answer:
      'Yes, our 50-seat timber Conference Room is available for client hire at a flat rate of K350. It is ideal for strategic planning workshops, corporate retreats, research seminars, and community gatherings away from urban noise. The hire includes full access to timber meeting tables, chairs, solar 240V power, and mountain breeze ventilation, with optional fresh farm-to-table kitchen catering.',
    highlights: [
      'Standard client hire rate: K350 per event/day',
      'Accommodates up to 50 delegates in flexible table/seating configurations',
      'Solar 240V electricity for laptops, presentation screens, and devices',
      'Optional village kitchen catering & hot Togoba Arabica coffee packages',
    ],
  },
];
