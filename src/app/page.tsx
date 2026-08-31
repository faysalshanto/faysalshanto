'use client';

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Newsletter from '@/components/Newsletter';
import { Briefcase, Award, ExternalLink, MapPin, TrendingUp, Users, Calendar, Megaphone, ShieldCheck, HeartHandshake, Sparkles, Crown, Palette, Globe, Rocket, Terminal, Flag, CheckCircle2, Image as ImageIcon, ArrowUp } from 'lucide-react';
import "@designcodeio/threeui/style.css";

const SylvaHero = dynamic(
  () => import('@designcodeio/threeui').then((mod) => mod.SylvaHero),
  { ssr: false }
) as any;

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Bangladesh's Next Economic Opportunity Is Hiding in Its Problems",
      date: "August 26, 2026",
      excerpt: "Why startups, innovation, and digital platforms could turn Bangladesh's everyday problems into global businesses.",
      category: "Startups",
      slug: "bangladesh-next-economic-opportunity"
    }
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white relative">

      {/* Top Navbar */}
      <nav className="bg-[#060913]/90 backdrop-blur-md border-b border-gray-800/60 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_12px_#2563eb]"></span>
            <span className="font-bold text-xl tracking-wider text-white">Faysal</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="#about" className="hover:text-white transition">About</Link>
            <Link href="#skills" className="hover:text-white transition">Skills</Link>
            <Link href="#experience" className="hover:text-white transition">Experience</Link>
            <Link href="#leadership" className="hover:text-white transition">Leadership</Link>
            <Link href="#portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link href="/blog" className="hover:text-white transition">Blog</Link>
            <Link href="#contact" className="hover:text-white transition">Contact</Link>
          </div>
          <div>
            <a href="#contact" className="bg-[#111827] hover:bg-blue-600 border border-gray-800 hover:border-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold transition shadow-sm">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* 3D SylvaHero Living Green Shader Container */}
      <section className="w-full relative border-b border-gray-800/60">
        <div className="shader-frame w-full h-screen relative overflow-hidden">
          <SylvaHero
            variant="living-green"
            headingFont="lexend"
            bodyFont="lexend"
            headingWeight="300"
            bodyWeight="300"
            primaryColor="#ffffff"
            headingSize={63}
            bodySize={16.5}
            headingLetterSpacing={-0.006}
          />
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-28">

        {/* Personal Intro Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-4">
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                I'm Faysal <span className="text-blue-300">Ibne</span> <span className="text-blue-400">Safir</span> <span className="text-blue-500">Shanto</span>
              </h1>
              <p className="text-blue-500 font-bold text-2xl md:text-3xl tracking-wide">
                Digital Marketer
              </p>
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed text-sm md:text-base">
              Passionate about exploring AI, Startups, and Innovation to transform everyday problems into scalable global businesses. Building brands and communities.
            </p>

            <div className="flex gap-4 justify-center md:justify-start pt-2">
              <a href="#skills" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-bold transition text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Explore Skills
              </a>
              <a href="#contact" className="bg-[#111827] hover:bg-gray-800 border border-gray-800 text-gray-300 px-7 py-3 rounded-xl font-bold transition text-sm">
                Contact
              </a>
            </div>

            {/* Original Brand Social Media Icons */}
            <div className="flex gap-3 justify-center md:justify-start pt-2 items-center">

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/faysal-ibne-safir-shanto/" target="_blank" rel="noreferrer" className="p-3 bg-[#111827] border border-gray-800 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-xl transition shadow-sm flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com/faysalshanto" target="_blank" rel="noreferrer" className="p-3 bg-[#111827] border border-gray-800 hover:border-blue-500 text-gray-300 hover:text-white rounded-xl transition shadow-sm flex items-center justify-center" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/faysal.ibne.safir.shanto" target="_blank" rel="noreferrer" className="p-3 bg-[#111827] border border-gray-800 hover:border-blue-500 text-gray-300 hover:text-blue-500 rounded-xl transition shadow-sm flex items-center justify-center" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/faysal_shanto_16/" target="_blank" rel="noreferrer" className="p-3 bg-[#111827] border border-gray-800 hover:border-pink-500 text-gray-300 hover:text-pink-400 rounded-xl transition shadow-sm flex items-center justify-center" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Profile Picture (1:1 Size with Top Alignment & Hover Glow/Zoom) */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-[#0d1322] rounded-3xl border border-gray-800 shadow-[0_0_30px_rgba(37,99,235,0.15)] overflow-hidden flex items-center justify-center relative group cursor-pointer transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]">
            <img
              src="/profile.jpg"
              alt="Faysal Ibne Safir Shanto"
              className="w-full h-full object-cover object-[center_top] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="bg-[#0d1322] border border-gray-800/80 p-8 md:p-10 rounded-3xl shadow-lg space-y-4 text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line text-center md:text-left">
            <p>
              I am a Finance enthusiast and BBA student at Bangladesh University of Business and Technology (BUBT), passionate about financial analysis, corporate finance, investment, and business strategy. My goal is to build a career where analytical thinking, data-driven decision-making, and leadership create meaningful business impact.
            </p>
            <p>
              Beyond academics, I actively contribute to student organizations and professional communities, where I have gained hands-on experience in marketing, social media strategy, event management, and cross-functional collaboration. These experiences have strengthened my communication, project management, and problem-solving skills while allowing me to work with diverse teams in fast-paced environments.
            </p>
            <p>
              Currently, I serve as a Media & Marketing Intern at Elevetr AI, where I contribute to digital marketing initiatives, content strategy, and brand growth. Alongside this, I hold leadership roles in several university organizations, enabling me to develop strong organizational and stakeholder management skills.
            </p>
            <p>
              I am continuously expanding my knowledge of finance through academic learning, practical experiences, and industry insights. My long-term objective is to specialize in Corporate Finance and Investment Management while pursuing globally recognized professional qualifications such as the CFA and an MBA.
            </p>
            <p>
              I am always open to connecting with professionals, mentors, and organizations to exchange ideas, explore opportunities, and contribute to impactful projects in finance, business, and innovation.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-800/80">
              <div className="text-center"><h3 className="text-2xl font-black text-blue-500">3+</h3><p className="text-xs text-gray-400 mt-1">Years Experience</p></div>
              <div className="text-center"><h3 className="text-2xl font-black text-indigo-500">10+</h3><p className="text-xs text-gray-400 mt-1">Campaigns Handled</p></div>
              <div className="text-center"><h3 className="text-2xl font-black text-purple-500">Maglyn</h3><p className="text-xs text-gray-400 mt-1">Startup Founder</p></div>
              <div className="text-center"><h3 className="text-2xl font-black text-blue-500">BUBT</h3><p className="text-xs text-gray-400 mt-1">BBA Student</p></div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Skills & Technologies</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Digital Marketing", pct: "90%", icon: <TrendingUp size={22} className="text-blue-400" /> },
              { name: "Graphic & Content Design", pct: "95%", icon: <Palette size={22} className="text-pink-400" /> },
              { name: "Social Media Strategy", pct: "85%", icon: <Megaphone size={22} className="text-indigo-400" /> },
              { name: "Community Building", pct: "95%", icon: <Users size={22} className="text-purple-400" /> },
              { name: "Event Management", pct: "88%", icon: <Calendar size={22} className="text-blue-400" /> },
              { name: "Brand Positioning", pct: "85%", icon: <ShieldCheck size={22} className="text-emerald-400" /> },
              { name: "AI Tools & Automation", pct: "75%", icon: <Sparkles size={22} className="text-amber-400" /> },
              { name: "Public Relations", pct: "82%", icon: <HeartHandshake size={22} className="text-cyan-400" /> }
            ].map((skill, i) => (
              <div key={i} className="bg-[#0d1322] border border-gray-800 p-5 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full">{skill.pct}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-bold text-white block">{skill.name}</span>
                  <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full" style={{ width: skill.pct }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Professional Experience</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { role: "Sales Growth Business Partner", org: "Flowmingo AI", date: "Jun 2026 - Present", desc: "Driving adoption of AI-native interview platforms and sales growth strategies across regions.", icon: <Rocket className="text-blue-400" size={18} /> },
              { role: "Social Media & Marketing Intern", org: "Elevetr AI", date: "Jun 2026 - Dec 2026", desc: "Managing user growth strategies, digital marketing campaigns, and community engagement.", icon: <TrendingUp className="text-indigo-400" size={18} /> },
              { role: "Core Campus Ambassador Manager", org: "10 Minute School", date: "Aug 2022 - Present", desc: "Managed ambassador networks nationwide, driving student acquisition and product awareness.", icon: <Users className="text-blue-400" size={18} /> },
              { role: "Media & Marketing Coordinator", org: "BUBT Career Guidance Office", date: "Feb 2026 - Present", desc: "Handled media promotion, content creation, digital marketing, and promotional activities for office events.", icon: <Megaphone className="text-cyan-400" size={18} /> },
              { role: "Head of Marketing", org: "Global Pathway Hub", date: "2025 – 2026", desc: "Executed end-to-end digital marketing strategies driving student recruitment and brand growth.", icon: <Rocket className="text-emerald-400" size={18} /> }
            ].map((exp, i) => (
              <div key={i} className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-700 transition">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl mt-0.5 flex-shrink-0">
                    {exp.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">{exp.role}</h3>
                    <p className="text-xs text-blue-400 font-semibold">{exp.org}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 px-3 py-1 rounded-lg whitespace-nowrap">{exp.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Activities Section */}
        <section id="leadership" className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Leadership & Activities</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { role: "Executive Member", org: "AI Community BUBT", date: "2025 – Present", desc: "Involved in BAIC 2025, AI-focused workshops, competitions, and community activities. Worked as part of the organizing team and was also a member of Team Elite, the Champion of the Pitch Battle.", icon: <Sparkles className="text-indigo-400" size={18} /> },
              { role: "Executive", org: "Hult Prize at BUBT", date: "2025 – 2026", desc: "Involved in Hult Prize 2025–26, including entrepreneurship programs, team activities, campus events, and various program execution activities.", icon: <Crown className="text-amber-400" size={18} /> },
              { role: "Media & Publication Secretary", org: "BUBT Business Club (BUBTBC)", date: "2026 – Present", desc: "Involved in various business, career, networking, and student engagement events organized by the club, contributing to media, publication, and promotional activities.", icon: <Palette className="text-pink-400" size={18} /> },
              { role: "Volunteer", org: "BASIS Students’ Forum", date: "2025 – Present", desc: "Volunteered at the ICPC Asia Dhaka Regional Contest 2025 and participated in various technology-focused programs and student activities.", icon: <Terminal className="text-emerald-400" size={18} /> },
              { role: "Treasurer", org: "Leo Club of Dhaka Century Plus", date: "2026 – Present", desc: "Currently involved in various community service, awareness, and social welfare initiatives, including a Women’s Reproductive Health & Infertility Awareness Seminar.", icon: <HeartHandshake className="text-red-400" size={18} /> },
              { role: "Crew Facilitator", org: "Space Innovation Camp", date: "2026 – Present", desc: "Currently working as a Crew Facilitator at Space Innovation Camp, involved in participant management, crew coordination, activity facilitation, and overall event execution.", icon: <Globe className="text-purple-400" size={18} /> },
              { role: "Cadet Sergeant", org: "Bangladesh National Cadet Corps (BNCC)", date: "2023 – 2024", desc: "Served during 2023–2024, participating in regular military-style training, drills, leadership activities, discipline development, and team-based cadet programs.", icon: <Flag className="text-amber-500" size={18} /> }
            ].map((lead, i) => (
              <div key={i} className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gray-700 transition">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-gray-900 border border-gray-800 rounded-xl mt-0.5 flex-shrink-0">
                    {lead.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-base">{lead.role}</h3>
                    <p className="text-xs text-blue-400 font-semibold">{lead.org}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{lead.desc}</p>
                  </div>
                </div>
                <span className="text-xs font-mono bg-gray-900 border border-gray-800 text-gray-400 px-3 py-1 rounded-lg whitespace-nowrap">{lead.date}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects & Graphic Design Works */}
        <section id="portfolio" className="space-y-8">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Featured Projects & Design Works</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full mb-3"></div>
            </div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase">Maglyn Startup & Creative Work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Startup Card: Maglyn with Image Placeholders */}
            <div className="bg-[#0d1322] border-2 border-indigo-500/40 p-8 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full inline-block">My Startup</span>
                <h3 className="text-2xl font-extrabold text-white">Maglyn</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A personalized magazine-printing brand that transforms your favorite photos, memories, and stories into beautifully designed physical magazines for special moments.
                </p>

                {/* Maglyn Work / Product Photos */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="aspect-square bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group-hover:border-indigo-500/50 transition">
                    <img
                      src="/maglyn-1.jpg"
                      alt="Maglyn Product 1"
                      className="w-full h-full object-cover object-[center_top]"
                    />
                  </div>
                  <div className="aspect-square bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden group-hover:border-indigo-500/50 transition">
                    <img
                      src="/maglyn-2.jpg"
                      alt="Maglyn Product 2"
                      className="w-full h-full object-cover object-[center_top]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-800/80">
                <a href="https://www.facebook.com/maglyn.official/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-sm">
                  Facebook <ExternalLink size={12} />
                </a>
                <a href="https://www.instagram.com/maglyn.official" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl text-xs font-bold transition">
                  Instagram <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Graphic Design & Creative Works Card */}
            <div className="bg-[#0d1322] border border-gray-800 p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-pink-500/10 text-pink-400 rounded-2xl border border-pink-500/20"><Palette size={22} /></div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Creative & Graphic Design Work</h3>
                    <p className="text-xs text-gray-400 mt-0.5">Visual Content & Brand Promotional Design</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed pt-2">
                  I work as a Graphic Designer and Creative Content Designer for various organizations, clubs, and brands, creating high-impact visual content for events, campaigns, social media, and promotional activities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { org: "BUBT Business Club", desc: "Social media creatives, event posters, promotional materials." },
                  { org: "Career Guidance Office, BUBT", desc: "Event graphics, flyers, and visual communication materials." },
                  { org: "Hult Prize at BUBT", desc: "Event promotions, campaign creatives, and brand assets." },
                  { org: "Elevetr AI", desc: "Social media graphics, marketing creatives, and campaign visuals." },
                  { org: "Zero Production", desc: "Promotional graphics, event visuals, and branding materials." },
                  { org: "BASIS Students’ Forum", desc: "Event posters, social creatives, and organizational graphics." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-900/60 border border-gray-800/80 p-3.5 rounded-xl space-y-1 hover:border-gray-700 transition">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
                      <CheckCircle2 size={13} className="flex-shrink-0" />
                      <span className="truncate">{item.org}</span>
                    </div>
                    <p className="text-[11px] text-gray-400 leading-snug line-clamp-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Achievements */}
        <section className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Achievements</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex items-start gap-4">
              <Award className="text-amber-400 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white">Pitch Battle Champion</h4>
                <p className="text-xs text-gray-400 mt-1">National pitch competition winner (Team Elite).</p>
              </div>
            </div>
            <div className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex items-start gap-4">
              <Award className="text-amber-400 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white">2nd Runner Up</h4>
                <p className="text-xs text-gray-400 mt-1">Ad Making Challenge, Tech Fusion Fest.</p>
              </div>
            </div>
            <div className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl flex items-start gap-4">
              <Award className="text-amber-400 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-white">Drill Champion & 2IC</h4>
                <p className="text-xs text-gray-400 mt-1">BNCC Training Camps.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Snippets */}
        <section className="space-y-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Latest Articles</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>
          <div className="flex justify-end -mt-2 mb-2">
            <Link href="/blog" className="text-sm font-bold text-blue-400 hover:underline">View All Posts →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="bg-[#0d1322] border border-gray-800 p-6 rounded-2xl hover:border-blue-500/50 transition group">
                <p className="text-xs text-blue-400 font-bold uppercase mb-2">{post.date} • {post.category}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition">{post.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                <span className="text-sm font-bold text-blue-400 group-hover:underline">Read Article »</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Get in Touch & Map Section */}
        <section id="contact" className="space-y-8 pt-6">
          <div className="text-center">
            <div className="inline-flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
              <div className="w-[25%] h-0.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0d1322] border border-gray-800 p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold text-white">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
                  <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
                </div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 bg-[#060913] border border-gray-800 rounded-xl text-sm text-gray-200 focus:outline-none focus:border-blue-500" required></textarea>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  Submit Message 🚀
                </button>
              </form>
            </div>

            <div className="bg-[#0d1322] border border-gray-800 p-8 rounded-3xl flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="text-blue-500" size={20} /> Location & Info
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Bangladesh University of Business and Technology (BUBT), Rupnagar, Mirpur-2, Dhaka-1216.
                </p>
                <p className="text-xs text-blue-400 font-mono">Email: faysal.shanto.official@gmail.com</p>
              </div>

              <div className="relative w-full h-[300px] rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                <iframe
                  title="BUBT Location Map"
                  src="https://maps.google.com/maps?q=Bangladesh+University+of+Business+and+Technology+BUBT+Dhaka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert hue-rotate-180 contrast-125 grayscale-20"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Floating Smooth Animated Scroll to Top Button */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 p-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transition z-50 flex items-center justify-center group cursor-pointer" aria-label="Scroll to top">
        <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <footer className="bg-[#03050a] border-t border-gray-800/80 py-8 text-center text-sm text-gray-500 mt-20">
        <p>© 2026 Faysal Ibne Safir Shanto.</p>
      </footer>
    </div>
  );
}