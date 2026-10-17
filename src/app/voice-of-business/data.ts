export type FilterCategory = 'All' | 'Print & Venue' | 'Social & Campaigns' | 'Awards & Speakers';

export interface ShowcaseItem {
  id: string;
  title: string;
  filename: string;
  category: string;
  filterGroup: 'Print & Venue' | 'Social & Campaigns' | 'Awards & Speakers';
  format: string;
  description: string;
}

export const showcaseItems: ShowcaseItem[] = [
  // Phase 1: Brand Reveal & Teaser Announcements
  {
    id: 'announcement-poster',
    title: 'Official Announcement Poster',
    filename: 'VOB ANNOUNCEMENT POSTER - BUBTBC.png',
    category: 'Promotional',
    filterGroup: 'Social & Campaigns',
    format: 'Digital Poster • Launch',
    description: 'Campus-wide promotional release poster announcing competition commencement and team registration guidelines.',
  },
  {
    id: 'vob-brand-logo',
    title: 'Official Brand Logo & Visual Identity',
    filename: 'VOB - LOGO.png',
    category: 'Core Visual',
    filterGroup: 'Social & Campaigns',
    format: 'Brandmark • Identity System',
    description: 'Master corporate emblem featuring the iconic gold microphone sculpture, custom typography, and three-dimensional luster.',
  },
  {
    id: 'event-content-theme-brief',
    title: 'Event Content & Theme Brief',
    filename: 'VOB - Content.png',
    category: 'Social Creative',
    filterGroup: 'Social & Campaigns',
    format: 'Social Carousel Creative',
    description: 'Comprehensive visual brief breaking down competition structure, rounds, submission criteria, and learning outcomes.',
  },
  {
    id: 'official-invitation-card',
    title: 'Official Invitation Card',
    filename: 'VOB - Invitation Card.png',
    category: 'Print Asset',
    filterGroup: 'Print & Venue',
    format: 'VIP Print Invitation',
    description: 'Formal printed invitation card distributed to university deans, department chairs, corporate dignitaries, and guest jury.',
  },

  // Phase 2: Registration & Urgency Campaign
  {
    id: 'urgency-1-hour-left',
    title: 'Urgency: 1 Hour Left',
    filename: 'VOB - Registration 1 Hour Left.png',
    category: 'Social Campaign',
    filterGroup: 'Social & Campaigns',
    format: 'Urgency Campaign',
    description: 'Last-call flash countdown creative published 60 minutes before registration portal close to trigger final participant signups.',
  },
  {
    id: 'registration-closed',
    title: 'Registration Closed Announcement',
    filename: 'VOB - Registration Closed.png',
    category: 'Social Campaign',
    filterGroup: 'Social & Campaigns',
    format: 'Milestone Announcement',
    description: 'Official wrap-up creative announcing registration close, expressing appreciation, and building hype for Round 1.',
  },

  // Phase 3: Grooming & Skill Development
  {
    id: 'grooming-session-poster',
    title: 'Grooming Session Poster',
    filename: 'VOB - Grooming Session Poster.png',
    category: 'Campaign',
    filterGroup: 'Social & Campaigns',
    format: 'Workshop Collateral',
    description: 'Educational promotional poster announcing the strategic public speaking and grooming workshop for registered teams.',
  },
  {
    id: 'grooming-session-banner',
    title: 'Grooming Session Stage Banner',
    filename: 'VOB - Grooming Session Banner.png',
    category: 'Campaign',
    filterGroup: 'Print & Venue',
    format: 'Workshop Hall Backdrop',
    description: 'Training auditorium stage banner maintaining unified event identity during intense participant grooming sessions.',
  },

  // Phase 4: Round 1 & Global SDG Themes
  {
    id: 'round-1-competition',
    title: 'Round 1 Competition: How Hormuz Affects BD Economy',
    filename: 'VOB - Round 1.png',
    category: 'Competition',
    filterGroup: 'Social & Campaigns',
    format: 'Competition Release Poster',
    description: 'Preliminary round case challenge analyzing the geopolitical Strait of Hormuz impact on Bangladesh’s macro economy.',
  },
  {
    id: 'sdg-goal-4',
    title: 'SDG Goal 4 — Quality Education',
    filename: 'VOB - SDG Goal 4.png',
    category: 'Theme Asset',
    filterGroup: 'Social & Campaigns',
    format: 'Thematic Sustainability',
    description: 'Thematic design collateral illustrating United Nations Sustainable Development Goal 4: Quality Education.',
  },
  {
    id: 'sdg-goal-8',
    title: 'SDG Goal 8 — Decent Work & Economic Growth',
    filename: 'VOB - SDG Goal 8.png',
    category: 'Theme Asset',
    filterGroup: 'Social & Campaigns',
    format: 'Thematic Sustainability',
    description: 'Thematic design collateral illustrating UN SDG Goal 8: Decent Work and Sustainable Economic Growth.',
  },
  {
    id: 'sdg-goal-13',
    title: 'SDG Goal 13 — Climate Action',
    filename: 'VOB - SDG Goal 13.png',
    category: 'Theme Asset',
    filterGroup: 'Social & Campaigns',
    format: 'Thematic Sustainability',
    description: 'Thematic design collateral highlighting UN SDG Goal 13: Urgent Climate Action and Environmental Responsibility.',
  },

  // Phase 5: Pre-Finale Build-up
  {
    id: 'countdown-1-day',
    title: 'Countdown: 1 Day To Go',
    filename: 'VOB - Countdown 1 Day.png',
    category: 'Social Campaign',
    filterGroup: 'Social & Campaigns',
    format: 'Countdown Teaser',
    description: 'High-energy 24-hour countdown creative driving peak engagement across club social media channels before the finale.',
  },

  // Phase 6: Panel Discussion & Dignitaries
  {
    id: 'panel-discussion-poster',
    title: 'Panel Discussion Event Poster',
    filename: 'VOB - Panel Discussion Poster.png',
    category: 'Promotional',
    filterGroup: 'Social & Campaigns',
    format: 'Digital & Print Creative',
    description: 'Promotional campaign poster featuring corporate leaders and keynote speakers for the industry panel session.',
  },
  {
    id: 'panel-discussion-stage-banner',
    title: 'Panel Discussion Stage Banner',
    filename: 'VOB - Panel Discussion Banner.png',
    category: 'Print Asset',
    filterGroup: 'Print & Venue',
    format: 'Stage Backdrop • Wide Format',
    description: 'Panoramic wide-format stage banner providing continuous visual branding behind the executive panel speakers.',
  },
  {
    id: 'mubasshir-bhai-speaker',
    title: 'Mubasshir Bhai — Guest Speaker Spotlight',
    filename: 'Mubasshir Bhai.png',
    category: 'Speaker Showcase',
    filterGroup: 'Awards & Speakers',
    format: 'Speaker Profile Card',
    description: 'Dynamic speaker showcase highlighting industry expertise, professional accomplishments, and mentoring insights.',
  },
  {
    id: 'nazmul-bhai-speaker',
    title: 'Nazmul Bhai — Guest Speaker Spotlight',
    filename: 'Nazmul Bhai.png',
    category: 'Speaker Showcase',
    filterGroup: 'Awards & Speakers',
    format: 'Speaker Profile Card',
    description: 'Executive guest profile collateral engaging students with corporate leadership perspectives and jury insights.',
  },
  {
    id: 'chief-guest-recognition',
    title: 'Chief Guest Recognition',
    filename: 'Cheif Guest.png',
    category: 'Credentials',
    filterGroup: 'Awards & Speakers',
    format: 'VIP Protocol Card',
    description: 'Official dignitary spotlight card honoring the presence and leadership of the event Chief Guest.',
  },
  {
    id: 'session-chair-address',
    title: 'Session Chair Address',
    filename: 'Session Chair.png',
    category: 'Credentials',
    filterGroup: 'Awards & Speakers',
    format: 'VIP Protocol Card',
    description: 'Distinguished academic profile card celebrating the university session chair and opening remarks.',
  },
  {
    id: 'welcome-speech-card',
    title: 'Welcome Speech Card',
    filename: 'Welcome Speech.png',
    category: 'Credentials',
    filterGroup: 'Awards & Speakers',
    format: 'Inaugural Dignitary Card',
    description: 'Opening protocol creative introducing the inaugural welcome address by club leadership and faculty advisors.',
  },

  // Phase 7: Grand Finale & Venue Experience
  {
    id: 'grand-finale-kv',
    title: 'Grand Finale Key Visual',
    filename: 'Grand Finale.png',
    category: 'Core Visual',
    filterGroup: 'Social & Campaigns',
    format: 'Key Visual • Master Art',
    description: 'Central thematic visual identity anchoring typography, color grading, and visual hierarchy for the entire event.',
  },
  {
    id: 'grand-finale-stage-poster',
    title: 'Grand Finale Stage Backdrop Poster',
    filename: 'VOB - Grand Finale Poster.png',
    category: 'Print Asset',
    filterGroup: 'Print & Venue',
    format: 'Large Format • Venue Print',
    description: 'Large-scale auditorium entrance and stage backdrop poster welcoming finalists, esteemed judges, and guests.',
  },
  {
    id: 'grand-finale-x-banner',
    title: 'Grand Finale X-Banner',
    filename: 'VOB - Grand Finale X Banner.png',
    category: 'Print Asset',
    filterGroup: 'Print & Venue',
    format: 'Vertical Standee • Print',
    description: 'High-impact floor standee banner greeting attendees at the auditorium foyer and stage perimeter.',
  },
  {
    id: 'venue-standee-x-banner',
    title: 'Venue Standee X-Banner',
    filename: 'VOB - X Banner.png',
    category: 'Print Asset',
    filterGroup: 'Print & Venue',
    format: 'Wayfinding Standee',
    description: 'Campus lobby wayfinding and branding standee guiding participants and audiences directly to the event hall.',
  },

  // Phase 8: Recognition & Champions
  {
    id: 'champion-award-card',
    title: 'Champion Award Card',
    filename: 'VOB - Champion Card.png',
    category: 'Awards',
    filterGroup: 'Awards & Speakers',
    format: 'Championship Card',
    description: 'Gold-accented prestigious award announcement celebrating the overall champion team of Voice of Business.',
  },
  {
    id: 'first-runner-up-award-card',
    title: '1st Runner-Up Award Card',
    filename: 'VOB - 1st Runner-Up.png',
    category: 'Awards',
    filterGroup: 'Awards & Speakers',
    format: 'Podium Award Card',
    description: 'Silver podium recognition card commending the exemplary business strategy of the 1st Runner-Up team.',
  },
  {
    id: 'second-runner-up-award-card',
    title: '2nd Runner-Up Award Card',
    filename: 'VOB - 2nd Runner-Up.png',
    category: 'Awards',
    filterGroup: 'Awards & Speakers',
    format: 'Podium Award Card',
    description: 'Bronze podium award announcement honoring the standout analytical presentation of the 2nd Runner-Up team.',
  },
];
