'use client';

import React, { useState } from 'react';
import { Award, BookOpen, ExternalLink, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import Lightbox, { LightboxImage } from './Lightbox';

export interface Course {
  id: string;
  title: string;
  organization: string;
  year: string;
  featured?: boolean;
  description: string;
  photos?: string[];
}

const coursesData: Course[] = [
  {
    id: 'icpc-2025',
    title: 'ICPC Asia Dhaka Regional Contest 2025',
    organization: "BASIS Students' Forum / ICPC Executive Committee",
    year: '2025',
    featured: true,
    description:
      'Volunteered and participated at the ICPC Asia Dhaka Regional Contest 2025. Supported contest operations, delegate coordination, technical setup, and official event management. Recognized for active contribution to Bangladesh’s premier collegiate programming competition.',
    // TODO: Add future photo increments here
    photos: [
      '/profile.jpg',
      '/maglyn-1.jpg',
      '/maglyn-2.jpg',
    ],
  },
  {
    id: 'digital-marketing-10ms',
    title: 'Advanced Digital Marketing & Brand Strategy',
    organization: '10 Minute School',
    year: '2024',
    featured: false,
    description:
      'Comprehensive certification covering social media marketing, campaign performance analytics, content funnels, brand positioning, and online customer acquisition.',
    photos: [],
  },
  {
    id: 'financial-management-bubt',
    title: 'Corporate Finance & Financial Management Frameworks',
    organization: 'Bangladesh University of Business and Technology (BUBT)',
    year: '2025',
    featured: false,
    description:
      'Academic coursework focusing on corporate valuation, financial analysis, capital budgeting, risk management, and strategic investment decisions.',
    photos: [],
  },
  {
    id: 'ai-tools-automation',
    title: 'AI Tools & Workflow Automation for Growth Marketers',
    organization: 'Elevetr AI Workshop',
    year: '2026',
    featured: false,
    description:
      'Practical training on leveraging LLMs, automated content pipelines, design generation tools, and marketing automation to accelerate startup growth.',
    photos: [],
  },
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const featuredCourse = coursesData.find((c) => c.featured) || coursesData[0];
  const regularCourses = coursesData.filter((c) => c.id !== featuredCourse.id);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages: LightboxImage[] =
    selectedCourse?.photos?.map((src, i) => ({
      src,
      title: selectedCourse.title,
      caption: `Photo ${i + 1} of ${selectedCourse.photos?.length}`,
    })) || [];

  return (
    <section id="courses" className="space-y-8">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-2">Courses & Certifications</h2>
          <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
        </div>
        <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2">
          Technical Certifications & ICPC Recognition
        </p>
      </div>

      {/* Hero Featured Card for ICPC Entry */}
      {featuredCourse && (
        <div
          onClick={() => setSelectedCourse(featuredCourse)}
          className="glass-panel glow-border border-2 border-blue-500/50 p-8 rounded-3xl cursor-pointer hover:border-blue-400 transition-all duration-300 relative overflow-hidden group shadow-glow-blue"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="p-3 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-2xl flex items-center justify-center">
                <Sparkles size={22} />
              </span>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-0.5 rounded-full inline-block">
                  Featured Recognition
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-white mt-1 group-hover:text-blue-300 transition">
                  {featuredCourse.title}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full whitespace-nowrap">
              {featuredCourse.year}
            </span>
          </div>

          <p className="text-xs font-semibold text-blue-400 mb-3">{featuredCourse.organization}</p>
          <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
            {featuredCourse.description}
          </p>

          <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between">
            <span className="text-xs text-blue-400 font-semibold flex items-center gap-1 group-hover:underline">
              Click for details & photos →
            </span>
            {featuredCourse.photos && featuredCourse.photos.length > 0 && (
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <ImageIcon size={14} className="text-blue-400" />
                {featuredCourse.photos.length} Photos
              </span>
            )}
          </div>
        </div>
      )}

      {/* Compact List Items for Other Courses */}
      <div className="space-y-4">
        {regularCourses.map((course) => (
          <div
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-blue-500/40 transition cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl flex-shrink-0 group-hover:border-blue-500/30 transition">
                <BookOpen size={18} className="text-indigo-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-white text-base group-hover:text-blue-400 transition">
                  {course.title}
                </h4>
                <p className="text-xs text-blue-400 font-semibold">{course.organization}</p>
                <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 px-3 py-1 rounded-lg whitespace-nowrap">
              {course.year}
            </span>
          </div>
        ))}
      </div>

      {/* Detail Modal View */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="glass-panel glow-border max-w-2xl w-full p-6 sm:p-8 rounded-3xl relative space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                  {selectedCourse.year}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">{selectedCourse.title}</h3>
                <p className="text-xs text-blue-400 font-semibold mt-0.5">
                  {selectedCourse.organization}
                </p>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="p-2 bg-gray-900 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-full transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
              {selectedCourse.description}
            </p>

            {/* Responsive Photo Grid */}
            {selectedCourse.photos && selectedCourse.photos.length > 0 ? (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5">
                  <ImageIcon size={14} className="text-blue-400" /> Event & Certificate Photos
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedCourse.photos.map((photo, i) => (
                    <div
                      key={i}
                      onClick={() => openLightbox(i)}
                      className="aspect-square bg-gray-900 border border-gray-800 rounded-xl overflow-hidden cursor-pointer group relative hover:border-blue-500/50 transition"
                    >
                      <img
                        src={photo}
                        alt={`${selectedCourse.title} photo ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                        <span className="text-[11px] font-semibold text-white bg-black/60 px-2 py-1 rounded">
                          Expand ↗
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-500 italic">No media attachments uploaded yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Shared Lightbox Component */}
      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
