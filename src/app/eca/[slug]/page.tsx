import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import SceneCanvas from '@/components/SceneCanvas';
import { ecaData } from '@/data/eca';
import { ArrowLeft, Sparkles, Image as ImageIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return ecaData.map((eca) => ({
    slug: eca.slug,
  }));
}

export default async function EcaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const eca = ecaData.find((item) => item.slug === slug);

  if (!eca) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      {/* Global 3D Background */}
      <SceneCanvas />

      {/* Responsive Header Component */}
      <Header isHome={false} />

      {/* Detail Container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-12 space-y-10">
        {/* Back Link */}
        <div className="flex justify-between items-center">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <span className="text-xs font-mono text-gray-400 bg-gray-900/90 border border-gray-800 px-3 py-1 rounded-full uppercase tracking-wider">
            {eca.category}
          </span>
        </div>

        {/* Page Header */}
        <header className="space-y-6 pt-2 border-b border-gray-800/80 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Sparkles size={13} /> Extracurricular Activity
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            {eca.title}
          </h1>

          <div className="bg-[#0d1322]/90 backdrop-blur-sm border-l-4 border-blue-500 p-5 rounded-r-2xl border-y border-r border-gray-800/80">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed italic">
              "{eca.teaser}"
            </p>
          </div>
        </header>

        {/* Activity Photos Section */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            <ImageIcon className="text-blue-400" size={22} /> Event & Activity Gallery
          </h2>

          {eca.photos && eca.photos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {eca.photos.map((photo, idx) => (
                <figure key={idx} className="glass-panel glow-border rounded-2xl overflow-hidden p-3 space-y-3">
                  <div className="overflow-hidden rounded-xl bg-gray-900 aspect-video">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <figcaption className="text-xs font-semibold text-gray-300 px-1 text-center">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="bg-[#0d1322]/60 border border-gray-800/80 p-8 rounded-2xl text-center space-y-2">
              <ImageIcon size={32} className="mx-auto text-gray-500/60" />
              <p className="text-sm font-medium text-gray-400">Photos are being added soon</p>
            </div>
          )}
        </section>
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
