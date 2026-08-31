'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2, Sparkles } from 'lucide-react';

interface PostData {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string[];
}

const postsData: Record<string, PostData> = {
  "bangladesh-next-economic-opportunity": {
    title: "Bangladesh's Next Economic Opportunity Is Hiding in Its Problems",
    date: "August 26, 2026",
    category: "Startups",
    excerpt: "Why startups, innovation, and digital platforms could turn Bangladesh's everyday problems into global businesses.",
    content: [
      "Every everyday obstacle in Bangladesh—from traffic congestion and supply chain friction to educational accessibility and financial inclusion—represents a untapped startup opportunity waiting for a digital solution.",
      "As internet penetration grows and mobile financial services become omnipresent, young innovators and founders have an unprecedented canvas to build tech-enabled platforms tailored to hyper-local challenges.",
      "Rather than attempting to clone Silicon Valley models, the most successful ventures in emerging markets like Bangladesh will be those that deeply understand local consumer behavior and solve real operational bottlenecks.",
      "By combining strategic digital marketing, artificial intelligence, and grassroots community building, startups can turn domestic inefficiencies into high-growth, scalable businesses that attract international venture capital."
    ]
  },
  "automation-shaping-future-marketing": {
    title: "How Automation is Shaping the Future of Marketing",
    date: "September 02, 2026",
    category: "Marketing",
    excerpt: "Exploring the intersection of AI tools and authentic community building for modern brands.",
    content: [
      "Marketing is undergoing its biggest structural transformation in decades. AI automation is no longer just about auto-responders; it is about hyper-personalized consumer journeys at scale.",
      "Modern marketing teams that succeed are those that pair data-driven automation tools with authentic human narrative and community building.",
      "Automation frees up creative energy, allowing marketers to focus on brand positioning, high-impact campaign strategy, and building genuine trust with their audience."
    ]
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;
  const post = postsData[slug] || {
    title: "Bangladesh's Next Economic Opportunity Is Hiding in Its Problems",
    date: "August 26, 2026",
    category: "Startups",
    excerpt: "Why startups, innovation, and digital platforms could turn Bangladesh's everyday problems into global businesses.",
    content: [
      "Every everyday obstacle in Bangladesh—from traffic congestion and supply chain friction to educational accessibility and financial inclusion—represents an untapped startup opportunity waiting for a digital solution.",
      "As internet penetration grows and mobile financial services become omnipresent, young innovators and founders have an unprecedented canvas to build tech-enabled platforms tailored to hyper-local challenges.",
      "Rather than attempting to clone Silicon Valley models, the most successful ventures in emerging markets like Bangladesh will be those that deeply understand local consumer behavior and solve real operational bottlenecks.",
      "By combining strategic digital marketing, artificial intelligence, and grassroots community building, startups can turn domestic inefficiencies into high-growth, scalable businesses that attract international venture capital."
    ]
  };

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

      {/* Article Container */}
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Article Header */}
        <header className="space-y-4 pt-4 border-b border-gray-800 pb-8">
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-400 font-mono flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed pt-2 italic border-l-2 border-blue-500 pl-4 bg-gray-900/40 py-2 rounded-r-xl">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="space-y-6 text-gray-300 leading-relaxed text-base md:text-lg">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-gray-300">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Author Bio Card */}
        <div className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex items-center gap-4 mt-12">
          <div className="w-14 h-14 bg-blue-600/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl flex-shrink-0">
            FS
          </div>
          <div>
            <h4 className="font-bold text-white text-base">Written by Faysal Ibne Safir Shanto</h4>
            <p className="text-xs text-gray-400 mt-1">Digital Marketer, Startup Founder & Student Leader.</p>
          </div>
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
