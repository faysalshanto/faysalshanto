'use client';

import React from 'react';
import { HeartHandshake, ExternalLink, Flag, Terminal, Globe, Crown } from 'lucide-react';

export interface VolunteerProgram {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
  postUrl?: string;
  photos?: string[];
  icon?: React.ReactNode;
}

const volunteerData: VolunteerProgram[] = [
  {
    id: 'basis-forum',
    title: "BASIS Students' Forum",
    role: 'Volunteer & Coordinator',
    year: '2025 – Present',
    description: 'Volunteered at the ICPC Asia Dhaka Regional Contest 2025 and participated in technology-focused programs and industry engagement workshops.',
    postUrl: 'https://www.facebook.com/faysal.ibne.safir.shanto',
    icon: <Terminal className="text-blue-400" size={20} />,
  },
  {
    id: 'leo-club',
    title: 'Leo Club of Dhaka Century Plus',
    role: 'Treasurer & Social Service Volunteer',
    year: '2026 – Present',
    description: 'Involved in community welfare campaigns, including organizing the Women’s Reproductive Health & Infertility Awareness Seminar.',
    postUrl: 'https://www.facebook.com/faysal.ibne.safir.shanto',
    icon: <HeartHandshake className="text-pink-400" size={20} />,
  },
  {
    id: 'space-camp',
    title: 'Space Innovation Camp',
    role: 'Crew Facilitator',
    year: '2026 – Present',
    description: 'Worked as a Crew Facilitator managing participant team activities, event logistics, and youth STEM workshop sessions.',
    postUrl: 'https://www.facebook.com/faysal.ibne.safir.shanto',
    icon: <Globe className="text-cyan-400" size={20} />,
  },
  {
    id: 'bncc-cadet',
    title: 'Bangladesh National Cadet Corps (BNCC)',
    role: 'Cadet Sergeant & Drill 2IC',
    year: '2023 – 2024',
    description: 'Participated in regular military-style training, leadership drills, discipline building, and campus safety leadership.',
    postUrl: 'https://www.facebook.com/faysal.ibne.safir.shanto',
    icon: <Flag className="text-amber-400" size={20} />,
  },
  {
    id: 'hult-prize',
    title: 'Hult Prize at BUBT',
    role: 'Executive & Event Volunteer',
    year: '2025 – 2026',
    description: 'Supported social entrepreneurship pitch competitions, participant outreach, and on-campus program execution.',
    postUrl: 'https://www.facebook.com/faysal.ibne.safir.shanto',
    icon: <Crown className="text-indigo-400" size={20} />,
  },
];

export default function VolunteeringLeadership() {
  return (
    <section id="volunteering" className="space-y-8">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-2">Volunteering & Community Service</h2>
          <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
        </div>
        <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2">
          Impactful Social Engagement & Leadership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteerData.map((item) => (
          <div
            key={item.id}
            className="glass-panel glow-border p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-blue-500/40 transition duration-300"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-gray-900/80 border border-gray-800 rounded-xl">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-1 rounded-full">
                  {item.year}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-white text-base leading-snug">{item.title}</h3>
                <p className="text-xs text-blue-400 font-semibold mt-0.5">{item.role}</p>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
            </div>

            {item.postUrl && (
              <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
                <a
                  href={item.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  <span>View Post ↗</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
