'use client';

import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2 } from 'lucide-react';
import Lightbox, { LightboxImage } from './Lightbox';

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  tag?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'maglyn-cover-1',
    src: '/maglyn-new-cover.png',
    alt: 'Maglyn Custom Print Edition',
    tag: 'Startup & Design',
  },
  {
    id: 'maglyn-cover-puspo',
    src: '/maglyn-cover-puspo.png',
    alt: 'Maglyn Puspo Special Edition',
    tag: 'Special Print',
  },
  {
    id: 'maglyn-memories',
    src: '/maglyn-2.jpg',
    alt: 'Maglyn Stories & Memories',
    tag: 'Personalized Keepsake',
  },
  {
    id: 'maglyn-collection',
    src: '/maglyn-1.jpg',
    alt: 'Maglyn Print Collection',
    tag: 'Product Line',
  },
  {
    id: 'faysal-leadership',
    src: '/faysal.jpg',
    alt: 'Faysal Ibne Safir Shanto - Student Leadership & Event Management',
    tag: 'Leadership',
  },
  {
    id: 'faysal-profile',
    src: '/profile.jpg',
    alt: 'Faysal Ibne Safir Shanto - Portfolio Portrait',
    tag: 'Executive Profile',
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages: LightboxImage[] = galleryItems.map((item) => ({
    src: item.src,
    alt: item.alt,
    title: item.alt,
    caption: item.tag ? `Category: ${item.tag}` : undefined,
  }));

  return (
    <section id="gallery" className="space-y-8">
      <div className="text-center">
        <div className="inline-flex flex-col items-center">
          <h2 className="text-2xl font-bold text-white mb-2">Work & Event Photo Gallery</h2>
          <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
        </div>
        <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mt-2">
          Visual Showcase of Projects, Events & Leadership
        </p>
      </div>

      {/* Masonry / Responsive Grid Layout */}
      <div className="columns-2 sm:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid glass-panel glow-border rounded-2xl overflow-hidden cursor-pointer group relative transition-all duration-500 hover:border-blue-400"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Dark Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
              {item.tag && (
                <span className="text-[10px] font-mono text-blue-400 bg-blue-500/20 border border-blue-500/30 px-2.5 py-0.5 rounded-full w-fit mb-1">
                  {item.tag}
                </span>
              )}
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white line-clamp-1">{item.alt}</p>
                <Maximize2 size={14} className="text-blue-400 shrink-0 ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Shared Lightbox */}
      <Lightbox
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIndex) => setCurrentIndex(newIndex)}
      />
    </section>
  );
}
