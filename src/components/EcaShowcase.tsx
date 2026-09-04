'use client';

import React from 'react';
import Link from 'next/link';
import { ecaData } from '@/data/eca';
import { ArrowRight, Award, ExternalLink } from 'lucide-react';

export default function EcaShowcase() {
  return (
    <section id="business-club" className="space-y-8">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-2">BUBT Business Club & Leadership ECAs</h2>
          <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
        </div>
        <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2">
          Extracurricular Activities, Student Clubs & Media Leadership
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecaData.map((eca) => (
          <div
            key={eca.slug}
            className="glass-panel glow-border p-6 rounded-3xl flex flex-col justify-between space-y-5 relative overflow-hidden group hover:border-blue-500/50 transition duration-300"
          >
            {/* Card Content */}
            <div className="space-y-4">
              {/* Category Pill */}
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full">
                  {eca.category}
                </span>
              </div>

              {/* Title & Teaser */}
              <div className="space-y-2">
                <h3 className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  {eca.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {eca.teaser}
                </p>
              </div>
            </div>

            {/* Link to detail page */}
            <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">View Case Study</span>
              <Link
                href={`/eca/${eca.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition group-hover:translate-x-0.5"
              >
                <span>Read Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
