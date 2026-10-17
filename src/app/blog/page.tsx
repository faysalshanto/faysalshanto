'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import SceneCanvas from '@/components/SceneCanvas';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { blogPosts } from '@/data/blog';

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* Global 3D Background */}
      <SceneCanvas />

      {/* Responsive Header Component */}
      <Header isHome={false} />

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-12">
        <header className="text-center space-y-4">
          <div className="inline-flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">Blog & Insights</h1>
            <div className="w-[25%] h-0.5 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Thoughts on digital marketing, startups, AI, and building engaged communities.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 pt-4">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-[#0d1322]/90 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl shadow-xl hover:border-blue-500/50 transition group flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 font-mono">{post.date}</span>
                  <span className="text-gray-500 font-mono">• {post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
              </div>
              <div className="pt-4 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-3">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 hover:underline">
                  Read full article <ArrowRight size={16} />
                </Link>
                {post.mediumUrl && (
                  <a
                    href={post.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider transition shadow-sm hover:scale-102"
                  >
                    <span>Read on Medium ↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="relative z-10 bg-[#03050a] border-t border-gray-800/80 py-8 text-center text-sm text-gray-500 space-y-2">
        <p>© 2026 Faysal Ibne Safir Shanto. All Rights Reserved.</p>
        <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
          <a href="https://www.linkedin.com/in/faysal-ibne-safir-shanto/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <span>•</span>
          <a href="https://medium.com/@faysalshanto/bangladeshs-next-economic-opportunity-is-hiding-in-its-problems-f365d31768db" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">Medium</a>
          <span>•</span>
          <a href="https://github.com/faysalshanto" target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
