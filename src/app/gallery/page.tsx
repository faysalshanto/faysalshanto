import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import SceneCanvas from '@/components/SceneCanvas';
import { galleryPhotos } from '@/data/gallery';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';

export const metadata = {
  title: 'Work & Event Photo Gallery | Faysal Ibne Safir Shanto',
  description: 'Visual showcase of projects, print designs, startup collection, and leadership events.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Global 3D Background */}
      <SceneCanvas />

      {/* Header */}
      <Header isHome={false} />

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 space-y-10">
        
        {/* Back Link */}
        <div className="flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="text-xs font-mono text-gray-400 bg-gray-900/90 border border-gray-800 px-3 py-1 rounded-full uppercase tracking-wider">
            {galleryPhotos.length} Items
          </span>
        </div>

        {/* Page Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-2">Work & Event Photo Gallery</h1>
            <div className="w-24 h-0.5 bg-blue-600 mx-auto rounded-full shadow-[0_0_10px_#2f5fb8]"></div>
          </div>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-blue-400 uppercase">
            Visual Showcase of Projects, Startup Products & Design Work
          </p>
        </div>

        {/* Photo Grid with Always-Visible Captions and Hover Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {galleryPhotos.map((item) => (
            <figure
              key={item.id}
              className="glass-panel glow-border p-4 rounded-3xl flex flex-col justify-between space-y-4 group transition-all duration-300 hover:border-blue-500/50"
            >
              {/* Image Container with Overflow Hidden for Hover Zoom */}
              <div className="overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3] relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Caption & Category */}
              <figcaption className="space-y-1 px-1">
                {item.category && (
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    {item.category}
                  </span>
                )}
                <h3 className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </figcaption>
            </figure>
          ))}
        </div>

      </main>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <footer className="relative z-10 bg-[#03050a] border-t border-gray-800/80 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Faysal Ibne Safir Shanto.</p>
      </footer>
    </div>
  );
}
