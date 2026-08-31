'use client';

import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function BlogIndex() {
  const posts = [
    {
      id: 1,
      title: "Bangladesh's Next Economic Opportunity Is Hiding in Its Problems",
      date: "August 26, 2026",
      excerpt: "Why startups, innovation, and digital platforms could turn Bangladesh's everyday problems into global businesses.",
      category: "Startups",
      slug: "bangladesh-next-economic-opportunity"
    },
    {
      id: 2,
      title: "How Automation is Shaping the Future of Marketing",
      date: "September 02, 2026",
      excerpt: "Exploring the intersection of AI tools and authentic community building for modern brands.",
      category: "Marketing",
      slug: "automation-shaping-future-marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Top Navbar */}
      <nav className="bg-[#060913]/90 backdrop-blur-md border-b border-gray-800/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_12px_#2563eb]"></span>
            <Link href="/" className="font-bold text-xl tracking-wider text-white">Faysal</Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/#about" className="hover:text-white transition">About</Link>
            <Link href="/#skills" className="hover:text-white transition">Skills</Link>
            <Link href="/#experience" className="hover:text-white transition">Experience</Link>
            <Link href="/#leadership" className="hover:text-white transition">Leadership</Link>
            <Link href="/#portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link href="/blog" className="text-white font-bold transition">Blog</Link>
            <Link href="/#contact" className="hover:text-white transition">Contact</Link>
          </div>
          <div>
            <Link href="/#contact" className="bg-[#111827] hover:bg-blue-600 border border-gray-800 hover:border-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold transition shadow-sm">
              Hire Me
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <header className="text-center space-y-4">
          <div className="inline-flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-2">Blog & Insights</h1>
            <div className="w-[25%] h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Thoughts on digital marketing, startups, AI, and building engaged communities.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 pt-4">
          {posts.map((post) => (
            <article key={post.id} className="bg-[#0d1322] border border-gray-800 p-8 rounded-3xl shadow-xl hover:border-blue-500/50 transition group flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                  <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 font-mono">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{post.excerpt}</p>
              </div>
              <div className="pt-2">
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:underline">
                  Read full article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-[#060913] border-t border-gray-800/60 mt-16">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to My Newsletter</h3>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Get the latest articles, tech insights, and project updates directly in your inbox. No spam, unsubscribe anytime.
          </p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex flex-col sm:flex-row gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 flex-1 max-w-md"
            />
            <button 
              type="submit" 
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#03050a] border-t border-gray-800/80 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Faysal Ibne Safir Shanto.</p>
      </footer>
    </div>
  );
}
