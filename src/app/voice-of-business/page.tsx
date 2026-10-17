import type { Metadata } from 'next';
import VoiceOfBusinessClient from './VoiceOfBusinessClient';

export const metadata: Metadata = {
  title: 'Voice of Business — Complete Visual Identity & Campaign Design | Faysal Ibne Safir Shanto',
  description:
    'Spearheaded by Faysal Ibne Safir Shanto as Media & Publication Secretary, serving as the Lead Visual Strategist & Brand Identity Designer. Voice of Business (VOB) is BUBT Business Club’s flagship campus platform dedicated to public speaking, anchoring, and corporate communication—transforming classroom intellect into real-world professional confidence and career readiness aligned with global SDGs.',
  keywords: [
    'Voice of Business',
    'BUBT Business Club',
    'Faysal Ibne Safir Shanto',
    'Visual Identity',
    'Graphic Design',
    'Stage Branding',
    'Digital Marketing Campaign',
    'Public Speaking Competition',
    'Corporate Communication',
    'Media and Publication Secretary',
    'Lead Visual Strategist',
    'Brand Identity Designer',
    'Event Branding',
    'Print Collaterals',
  ],
  authors: [{ name: 'Faysal Ibne Safir Shanto' }],
  openGraph: {
    title: 'Voice of Business — Complete Visual Identity & Campaign Design',
    description:
      'Voice of Business (VOB) is BUBT Business Club’s flagship campus platform dedicated to public speaking, anchoring, and corporate communication—transforming classroom intellect into real-world professional confidence and career readiness aligned with global SDGs. Complete visual identity and 27 production creatives designed by Faysal Ibne Safir Shanto.',
    url: 'https://faysalshanto.vercel.app/voice-of-business',
    siteName: 'Faysal Ibne Safir Shanto Portfolio',
    images: [
      {
        url: '/voice-of-business/Grand Finale.png',
        width: 1200,
        height: 675,
        alt: 'Voice of Business Grand Finale Visual Identity by Faysal Ibne Safir Shanto',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice of Business — Complete Visual Identity & Campaign Design',
    description:
      '27 production assets including stage backdrops, posters, standees, and digital campaigns designed by Faysal Ibne Safir Shanto.',
    images: ['/voice-of-business/Grand Finale.png'],
  },
};

export default function VoiceOfBusinessPage() {
  return <VoiceOfBusinessClient />;
}
