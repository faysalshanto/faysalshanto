'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import SceneCanvas from '@/components/SceneCanvas';
import { ArrowLeft, Calendar, Tag, Share2, Sparkles, CheckCircle2, Lightbulb, Rocket, Target, ShieldCheck, TrendingUp, Globe, BookOpen, Layers } from 'lucide-react';

interface FrameworkStep {
  step: number;
  title: string;
  desc: string;
}

interface SectorHighlight {
  name: string;
  icon: string;
  points: string[];
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const frameworkSteps: FrameworkStep[] = [
    { step: 1, title: "Identify the Real Problem", desc: "Look for daily operational friction, fragmentation, or informal workarounds rather than just 'building an app'." },
    { step: 2, title: "Validate Market Demand", desc: "Verify that users or business owners are experiencing real pain and are willing to pay for a solution." },
    { step: 3, title: "Map the Local Landscape", desc: "Understand informal middlemen, existing habits, and regulatory or cultural realities on the ground." },
    { step: 4, title: "Start Hyper-Narrow", desc: "Focus on a single geographic hub, customer segment, or specific product category before expanding." },
    { step: 5, title: "Build a Lean MVP", desc: "Create a functional Minimum Viable Product that solves the core bottleneck without feature bloat." },
    { step: 6, title: "Run Ground Pilots", desc: "Test directly with real users in markets, shops, or communities to gather honest feedback." },
    { step: 7, title: "Measure What Matters", desc: "Track retention, unit economics, and user satisfaction over vanity metrics like download counts." },
    { step: 8, title: "Solve Key Bottlenecks", desc: "Identify what holds back growth—whether it is supply quality, payment friction, or user onboarding." },
    { step: 9, title: "Build Trust Before Scaling", desc: "In Bangladesh, trust is harder to earn and more valuable than software. Ensure reliability early." },
    { step: 10, title: "Automate Repeated Work", desc: "Streamline manual operations into automated software systems as transaction volumes grow." },
    { step: 11, title: "Scale Sustainably", desc: "Expand strategically into adjacent cities or categories while protecting unit economics." },
    { step: 12, title: "Export to Global Markets", desc: "Take battle-tested hyper-local solutions and adapt them for other emerging markets worldwide." }
  ];

  const sectors: SectorHighlight[] = [
    {
      name: "SMEs & Merchants",
      icon: "🏪",
      points: ["Accounting & Digital Ledger", "Inventory & Stock Tracking", "Micro-Financing Access", "Digital Marketing Tools"]
    },
    {
      name: "Agriculture & Fisheries",
      icon: "🌾",
      points: ["Farm-to-Table Disintermediation", "Cold-Chain Logistics", "Fair Price Discovery", "Data-Driven Yield Advice"]
    },
    {
      name: "Healthcare & Education",
      icon: "🩺",
      points: ["Last-Mile Telemedicine", "Localized Skill Training", "Diagnostic Sample Delivery", "Accessible E-Learning"]
    },
    {
      name: "Logistics & Employment",
      icon: "🚛",
      points: ["Freight & Truck Matching", "Gig Worker Verification", "Hyper-Local Delivery", "Skill-Based Job Matching"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden">
      
      {/* Global 3D Background */}
      <SceneCanvas />

      {/* Responsive Header Component */}
      <Header isHome={false} />

      {/* Article Container */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-12 space-y-10">
        
        {/* Back Link */}
        <div className="flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <span className="text-xs font-mono text-gray-400 bg-gray-900/90 border border-gray-800 px-3 py-1 rounded-full">
            6 Min Read
          </span>
        </div>

        {/* Article Header */}
        <header className="space-y-6 pt-2 border-b border-gray-800/80 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
            <span className="text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Rocket size={13} /> Startups & Innovation
            </span>
            <span className="text-gray-400 font-mono flex items-center gap-1.5">
              <Calendar size={13} /> August 26, 2026
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Bangladesh's Next Economic Opportunity Is Hiding in Its Problems
          </h1>

          <div className="bg-[#0d1322]/90 backdrop-blur-sm border-l-4 border-blue-500 p-5 rounded-r-2xl border-y border-r border-gray-800/80">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed italic">
              "Every day in Bangladesh, millions of citizens navigate systemic friction—from fragmented SME supply chains to digital access gaps. Instead of viewing these as mere obstacles, the country's next era of economic growth lies in transforming these inefficiencies into high-impact, scalable business platforms."
            </p>
            <p className="text-xs font-bold text-blue-400 mt-3 font-mono uppercase tracking-wider">
              — Core Thesis by Faysal Ibne Safir Shanto
            </p>
          </div>
        </header>

        {/* Article Main Body */}
        <article className="space-y-10 text-gray-300 leading-relaxed text-base md:text-lg">

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <TrendingUp className="text-blue-500" size={26} />
              1. A New Era of Growth Beyond Traditional Pillars
            </h2>
            <p>
              For decades, Bangladesh's economic narrative has centered around ready-made garments (RMG), agricultural output, and overseas remittances. While these sectors remain crucial foundations, the next leap forward requires a fundamental mindset shift toward <strong>tech-enabled platform economics</strong> and <strong>information assets</strong>.
            </p>
            <p>
              With rapid smartphone adoption, widespread mobile financial service (MFS) integration like bKash and Nagad, and an expanding internet footprint, Bangladesh possesses a fertile ground for digital transformation. However, true value creation will not come from copying Silicon Valley apps—it will come from tackling hyper-local challenges unique to our economy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Lightbulb className="text-amber-400" size={26} />
              2. Problem-First Approach: Start with Inefficiency, Not Technology
            </h2>
            <p>
              One of the most common reasons early-stage startups fail is building shiny technology in search of a problem. Innovation is not simply writing code or publishing an app on the Play Store; innovation is deeply understanding an existing real-world bottleneck and creating a reliable mechanism to solve it.
            </p>
            <div className="bg-[#0d1322]/90 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl space-y-3">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                <Target size={18} className="text-blue-400" /> The Problem-First Mindset:
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>Identify Operational Inefficiencies:</strong> Look for manual record-keeping, high middleman markups, or fragmented logistics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>Connect Existing Resources:</strong> Connect small business owners directly with suppliers, financing, and end consumers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span><strong>Focus on Sustainable Unit Economics:</strong> Build a clear monetization strategy via transaction fees, subscriptions, or value-added services.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: High-Impact Sectors */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="text-indigo-400" size={26} />
              3. Key Sectors Ripe for Startup Disruption
            </h2>
            <p>
              Multiple traditional industries across Bangladesh operate with severe fragmentation, representing massive opportunities for founders who build targeted digital platforms:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sectors.map((sec, idx) => (
                <div key={idx} className="bg-[#0d1322]/90 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-blue-500/40 transition">
                  <div className="text-3xl mb-3">{sec.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{sec.name}</h3>
                  <ul className="space-y-1.5 text-xs text-gray-400">
                    {sec.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: The 12-Step Framework */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <BookOpen className="text-emerald-400" size={26} />
              4. The 12-Step Execution Framework for Founders
            </h2>
            <p>
              To systematically turn local problems into scalable businesses, founders can follow a disciplined 12-step roadmap designed for emerging market realities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {frameworkSteps.map((item) => (
                <div key={item.step} className="bg-[#0d1322]/90 backdrop-blur-sm border border-gray-800 p-5 rounded-2xl space-y-2 relative group hover:border-blue-500/50 transition">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                      Step {item.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Building Trust */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <ShieldCheck className="text-pink-400" size={26} />
              5. Building Deep Trust Before Scaling
            </h2>
            <p>
              In Bangladesh's market landscape, software code is only half the equation. The real world does not run on software alone—it runs on human relationships, customer support, and credibility. 
            </p>
            <p>
              Building a successful platform requires establishing immense trust with non-tech-savvy users, merchant partners, and consumers. Platforms that offer clear customer service, transparent pricing, and reliable offline-to-online assistance will consistently outperform pure-play digital apps.
            </p>
          </section>

          {/* Section 6: Global Ambition */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
              <Globe className="text-cyan-400" size={26} />
              6. Conclusion: Build from Bangladesh for the World
            </h2>
            <p>
              The problems we face in Bangladesh—high density, logistics constraints, fragmented retail, and digital transition challenges—are shared by developing economies across South Asia, Southeast Asia, Africa, and Latin America.
            </p>
            <p>
              By solving these complex friction points at home and building battle-tested models, Bangladeshi entrepreneurs have the opportunity to export digital solutions globally as "invisible exports." The future of Bangladesh's economy belongs to those who look at every day problems not with frustration, but as their next major business venture.
            </p>
          </section>

        </article>

        {/* Author Bio Card (Updated with /faysal.jpg) */}
        <div className="bg-[#0d1322]/90 backdrop-blur-sm border border-gray-800 p-8 rounded-3xl flex flex-col sm:flex-row items-center gap-6 mt-12 shadow-xl">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex-shrink-0">
            <img
              src="/faysal.jpg"
              alt="Faysal Ibne Safir Shanto"
              className="w-full h-full object-cover object-[center_top]"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <h4 className="font-bold text-white text-xl">Faysal Ibne Safir Shanto</h4>
              <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2.5 py-0.5 rounded-full font-mono w-fit mx-auto sm:mx-0">Author & Founder</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Digital Marketer, Startup Founder & Student Leader. Founder at Maglyn, Sales Growth Partner at Flowmingo AI, and BBA Student at BUBT.
            </p>
            <div className="flex gap-4 pt-1 justify-center sm:justify-start text-xs text-blue-400 font-medium">
              <a href="https://www.linkedin.com/in/faysal-ibne-safir-shanto/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <span>•</span>
              <a href="https://github.com/faysalshanto" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              <span>•</span>
              <a href="https://www.facebook.com/faysal.ibne.safir.shanto" target="_blank" rel="noreferrer" className="hover:underline">Facebook</a>
            </div>
          </div>
        </div>

      </main>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="relative z-10 bg-[#03050a] border-t border-gray-800/80 py-8 text-center text-sm text-gray-500">
        <p>© 2026 Faysal Ibne Safir Shanto.</p>
      </footer>
    </div>
  );
}
