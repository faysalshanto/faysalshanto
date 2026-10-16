'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import SceneCanvas from '@/components/SceneCanvas';
import {
  showcaseItems,
  FilterCategory,
} from './data';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Mail,
} from 'lucide-react';

const FILTER_OPTIONS: { label: FilterCategory; countKey: FilterCategory }[] = [
  { label: 'All', countKey: 'All' },
  { label: 'Print & Venue', countKey: 'Print & Venue' },
  { label: 'Social & Campaigns', countKey: 'Social & Campaigns' },
  { label: 'Awards & Speakers', countKey: 'Awards & Speakers' },
];

export default function VoiceOfBusinessClient() {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (selectedFilter === 'All') {
      return showcaseItems;
    }
    return showcaseItems.filter((item) => item.filterGroup === selectedFilter);
  }, [selectedFilter]);

  // Counts per filter category
  const filterCounts = useMemo(() => {
    return {
      All: showcaseItems.length,
      'Print & Venue': showcaseItems.filter((i) => i.filterGroup === 'Print & Venue').length,
      'Social & Campaigns': showcaseItems.filter((i) => i.filterGroup === 'Social & Campaigns').length,
      'Awards & Speakers': showcaseItems.filter((i) => i.filterGroup === 'Awards & Speakers').length,
    };
  }, []);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length <= 1) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null || filteredItems.length <= 1) return;
    setLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, closeLightbox, handlePrev, handleNext]);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Helper for category badge styling
  const getBadgeStyle = (category: string) => {
    switch (category) {
      case 'Core Visual':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Print Asset':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'Promotional':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'Campaign':
      case 'Social Campaign':
      case 'Social Creative':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'Awards':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'Credentials':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Speaker Showcase':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30';
      case 'Competition':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      case 'Theme Asset':
        return 'text-teal-400 bg-teal-500/10 border-teal-500/30';
      default:
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Signature 3D Particle & Shaders Canvas */}
      <SceneCanvas />

      {/* Ambient Radial Glowing Orbs */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-40 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Back to Portfolio Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-cyan-400 transition-colors group cursor-pointer"
          >
            <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-all">
              <ArrowLeft size={16} className="text-cyan-400 group-hover:-translate-x-0.5 transition-transform" />
            </span>
            <span className="tracking-wide">Back to Portfolio</span>
          </Link>

          {/* Center Brand / Event Tag */}
          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>
            <span>BUBT Business Club</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-200 font-semibold">Voice of Business Showcase</span>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_22px_rgba(6,182,212,0.5)]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 space-y-16">
        
        {/* Hero Section */}
        <section className="space-y-8 pt-4">
          <div className="max-w-4xl space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
              <span>BUBT Business Club • Media & Publication</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Voice of Business —{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Complete Visual Identity
              </span>{' '}
              & Campaign Design
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed">
              Spearheaded by <strong className="text-white font-semibold">Faysal Ibne Safir Shanto</strong> as{' '}
              <span className="text-cyan-400 font-medium">Media & Publication Secretary</span>, serving as the{' '}
              <span className="text-cyan-400 font-medium">Lead Visual Strategist & Brand Identity Designer</span>. Directed
              the complete end-to-end visual identity, stage branding, digital promotional campaigns, participant
              recruitment creatives, and high-format print collaterals for BUBT Business Club’s signature intra-university
              public speaking and communication competition.
            </p>
          </div>

          {/* Executive Overview & Role Context Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
            
            <div className="bg-[#0d1117]/70 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6 sm:p-7 rounded-2xl space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Role & Leadership</span>
                <h3 className="text-lg font-bold text-white mt-1">Media & Publication Secretary</h3>
                <p className="text-sm text-cyan-400 font-medium">Lead Visual Strategist & Brand Identity Designer</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Event & Organization</span>
                <h3 className="text-lg font-bold text-white mt-1">Voice of Business (VOB)</h3>
                <p className="text-sm text-slate-300 font-medium">BUBT Business Club (BUBTBC) • Signature Public Speaking & Communication Competition</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Event Overview</span>
                <p className="text-sm text-slate-300 leading-relaxed mt-1 font-light">
                  Voice of Business (VOB) is BUBT Business Club’s flagship campus platform dedicated to public speaking, anchoring, and corporate communication—transforming classroom intellect into real-world professional confidence and career readiness aligned with global SDGs.
                </p>
              </div>
            </div>

            <div className="bg-[#0d1117]/70 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 transition-all duration-300 p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Creative Scope</span>
                <h3 className="text-lg font-bold text-white mt-1">End-to-End Visual Identity System</h3>
                <p className="text-sm text-purple-400 font-medium">Stage Branding, Large-Format Prints, Social Media & Awards</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Deliverables & Impact</span>
                <h3 className="text-lg font-bold text-white mt-1">25+ Production Creatives</h3>
                <p className="text-sm text-emerald-400 font-medium">Complete Design & Delivery Execution</p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Platform Reach</span>
                <h3 className="text-lg font-bold text-white mt-1">Campus-Wide Student Engagement</h3>
                <p className="text-sm text-slate-300 font-light">University-wide participant engagement across workshops, rounds, and grand finale.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Category Filter Section */}
        <section className="space-y-6 pt-4 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Production Assets Gallery</span>
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Click any asset below to view in full resolution lightbox
              </p>
            </div>

            {/* Total count badge */}
            <div className="self-start sm:self-center">
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-1.5 rounded-full">
                Showing {filteredItems.length} of {showcaseItems.length} Designs
              </span>
            </div>

          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2.5">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = selectedFilter === filter.label;
              const count = filterCounts[filter.countKey];

              return (
                <button
                  key={filter.label}
                  onClick={() => setSelectedFilter(filter.label)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105'
                      : 'bg-[#0d1117]/80 text-slate-300 hover:text-white border border-white/10 hover:border-cyan-500/30 hover:bg-[#161b22]'
                  }`}
                >
                  <span>{filter.label}</span>
                  <span
                    className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-black/25 text-black font-black'
                        : 'bg-black/40 text-slate-400 border border-white/10'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Responsive Grid of Design Assets */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => {
              const encodedFilename = encodeURIComponent(item.filename);
              const imageSrc = `/voice-of-business/${encodedFilename}`;

              return (
                <article
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="bg-[#0d1117]/70 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 rounded-3xl p-4 sm:p-5 flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] cursor-pointer"
                >
                  {/* Card Header: Category & Expand Hint */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] sm:text-xs font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${getBadgeStyle(
                        item.category
                      )}`}
                    >
                      {item.category}
                    </span>

                    <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  {/* Image Viewport Container */}
                  <div className="relative overflow-hidden rounded-2xl bg-black/60 border border-white/5 aspect-[4/3] flex items-center justify-center p-2 mb-4 group-hover:border-cyan-500/20 transition-colors">
                    {/* Subtle glow background */}
                    <div className="absolute inset-0 bg-radial from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <img
                      src={imageSrc}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-md"
                    />

                    {/* Hover Overlay Hint */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500 text-black font-extrabold text-xs tracking-wider shadow-lg">
                        <Eye size={13} /> View High-Res
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Metadata & Title */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-cyan-400/90 tracking-wide uppercase">
                      {item.format}
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <span>Click to expand</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="pt-8">
          <div className="bg-[#0d1117]/80 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden space-y-6 shadow-2xl transition-all duration-300">
            {/* Ambient Background Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-indigo-600/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block">
                Creative Portfolio & Leadership
              </span>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Want to explore more of my work?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                From building my personalized magazine startup <strong className="text-white font-medium">Maglyn</strong> to leading digital marketing campaigns,
                organizing university AI initiatives, and designing corporate visual identities — let’s connect and collaborate on impactful projects.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] cursor-pointer"
              >
                <span>Explore Full Portfolio</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-slate-800/80 cursor-pointer"
              >
                <Mail size={16} className="text-cyan-400" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar with Counter, Category & Close */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xs font-mono text-slate-200 bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-full">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>

              <span
                className={`hidden sm:inline-block text-xs font-mono px-3 py-1 rounded-full border ${getBadgeStyle(
                  currentLightboxItem.category
                )}`}
              >
                {currentLightboxItem.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Direct image link */}
              <a
                href={`/voice-of-business/${encodeURIComponent(currentLightboxItem.filename)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 sm:px-3 sm:py-1.5 bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white rounded-full text-xs font-mono inline-flex items-center gap-1.5 transition cursor-pointer"
                title="Open original high-resolution file in new tab"
              >
                <ExternalLink size={15} className="text-cyan-400" />
                <span className="hidden sm:inline">Open Raw</span>
              </a>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="p-2 sm:p-2.5 bg-slate-900/90 border border-slate-700 hover:border-red-400 text-slate-300 hover:text-white rounded-full transition cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Main Image Viewer */}
          <div
            className="relative max-w-6xl max-h-[82vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/60 border border-slate-800 shadow-2xl p-2">
              <img
                src={`/voice-of-business/${encodeURIComponent(currentLightboxItem.filename)}`}
                alt={currentLightboxItem.title}
                className="max-h-[66vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Caption & Title */}
            <div className="mt-4 text-center space-y-1.5 max-w-2xl px-4">
              <div className="flex items-center justify-center gap-2">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">
                  {currentLightboxItem.format}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {currentLightboxItem.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {currentLightboxItem.description}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white rounded-full transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
                aria-label="Previous Asset"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white rounded-full transition-all shadow-xl hover:scale-110 cursor-pointer z-20"
                aria-label="Next Asset"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Bottom Keyboard Shortcut Hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-500">
            <span>Use Left / Right Arrows to navigate</span>
            <span>•</span>
            <span>Esc to close</span>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-[#03050a] border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 font-mono">
        <p>© 2026 Faysal Ibne Safir Shanto. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
