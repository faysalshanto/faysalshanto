'use client';

import React from 'react';
import { Palette, ExternalLink, Megaphone, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function BusinessClub() {
  return (
    <section id="business-club" className="space-y-8">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-2">BUBT Business Club (BUBTBC)</h2>
          <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
        </div>
        <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2">
          Media & Publication Leadership
        </p>
      </div>

      <div className="glass-panel glow-border p-8 rounded-3xl relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-gray-800/80">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded-2xl">
              <Palette size={28} />
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-0.5 rounded-full inline-block">
                Executive Body
              </span>
              <h3 className="text-xl font-extrabold text-white">Media & Publication Secretary</h3>
              <p className="text-xs text-blue-400 font-semibold">BUBT Business Club (BUBTBC)</p>
            </div>
          </div>
          <span className="text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 px-4 py-1.5 rounded-xl whitespace-nowrap">
            2026 – Present
          </span>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed">
          Leading media outreach, publication design, digital branding, and promotion for BUBT Business Club's flagship career, networking, and student engagement events. Collaborating with cross-functional committees to create high-impact graphics and drive student participation.
        </p>

        {/* Highlighted Activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {[
            { title: 'Event Media Strategy', desc: 'Promotional planning and social media content scheduling.' },
            { title: 'Creative Content Design', desc: 'Posters, banners, and digital graphics for club initiatives.' },
            { title: 'Networking Campaigns', desc: 'Publication materials for business seminars & alumni meets.' },
          ].map((act, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-800/80 p-4 rounded-xl space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
                <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                <span>{act.title}</span>
              </div>
              <p className="text-[11px] text-gray-400 leading-snug">{act.desc}</p>
            </div>
          ))}
        </div>

        {/* Link Footer */}
        <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
          <p className="text-xs text-gray-400">Official BUBT Business Club Updates</p>
          <a
            href="https://www.facebook.com/faysal.ibne.safir.shanto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
          >
            <span>View Post ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
