export interface EcaEntry {
  slug: string;
  title: string;
  category: string;
  teaser: string;
  coverImage: string;
  photos: { src: string; title: string }[];
}

export const ecaData: EcaEntry[] = [
  {
    slug: 'bubt-business-club',
    title: 'BUBT Business Club (BUBTBC)',
    category: 'Media & Publication Leadership',
    teaser: 'Leading media outreach, publication design, digital branding, and event promotions as Media & Publication Secretary.',
    coverImage: '/maglyn-new-cover.png',
    photos: [
      { src: '/maglyn-new-cover.png', title: 'Business Club Publication & Design' },
      { src: '/maglyn-cover-puspo.png', title: 'Special Event Branding & Media' },
    ],
  },
  {
    slug: 'ai-community-bubt',
    title: 'AI Community BUBT',
    category: 'Executive & Pitch Champion',
    teaser: 'Organizing BAIC 2025 workshops, AI competitions, and winning the Pitch Battle with Team Elite.',
    coverImage: '/maglyn-2.jpg',
    photos: [
      { src: '/maglyn-2.jpg', title: 'Pitch Battle Championship & Team Elite' },
    ],
  },
  {
    slug: 'hult-prize-bubt',
    title: 'Hult Prize at BUBT',
    category: 'Social Entrepreneurship Executive',
    teaser: 'Driving student social entrepreneurship initiatives, campus outreach, and startup pitch event execution.',
    coverImage: '/maglyn-1.jpg',
    photos: [],
  },
  {
    slug: 'leo-club-dhaka',
    title: 'Leo Club of Dhaka Century Plus',
    category: 'Treasurer & Social Service',
    teaser: 'Directing financial administration, health awareness seminars, and community welfare campaigns.',
    coverImage: '/maglyn-2.jpg',
    photos: [],
  },
  {
    slug: 'space-innovation-camp',
    title: 'Space Innovation Camp',
    category: 'Crew Facilitator',
    teaser: 'Facilitating crew logistics, STEM activity coordination, and youth participant mentorship.',
    coverImage: '/maglyn-1.jpg',
    photos: [],
  },
  {
    slug: 'bncc-cadet',
    title: 'Bangladesh National Cadet Corps (BNCC)',
    category: 'Cadet Sergeant & Drill 2IC',
    teaser: 'Leading drill instructions, tactical training camps, discipline building, and leadership development.',
    coverImage: '/maglyn-new-cover.png',
    photos: [],
  },
];
