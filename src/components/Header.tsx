'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isHome?: boolean;
}

export default function Header({ isHome = true }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isCurrentHome = pathname === '/' || isHome;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    }
  };

  const getHref = (anchor: string) => {
    if (anchor === 'gallery') return '/gallery';
    if (anchor === 'blog') return '/blog';
    return isCurrentHome ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07090e]/90 backdrop-blur-xl border-b border-slate-800/60 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo & Name */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group cursor-pointer">
          <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee] group-hover:scale-125 transition-transform"></span>
          <span className="font-sans font-extrabold text-xl tracking-wider text-white group-hover:text-cyan-400 transition-colors">Faysal</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider text-slate-300">
          <Link href="/" onClick={handleLogoClick} className="hover:text-cyan-400 transition">Home</Link>
          <Link href={getHref("about")} className="hover:text-cyan-400 transition">About</Link>
          <Link href={getHref("skills")} className="hover:text-cyan-400 transition">Skills</Link>
          <Link href={getHref("experience")} className="hover:text-cyan-400 transition">Experience</Link>
          <Link href={getHref("leadership")} className="hover:text-cyan-400 transition">Leadership</Link>
          <Link href={getHref("volunteering")} className="hover:text-cyan-400 transition">Volunteering</Link>
          <Link href="/gallery" className="hover:text-cyan-400 transition">Gallery</Link>
          <Link href={getHref("portfolio")} className="hover:text-cyan-400 transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition">Blog</Link>
          <Link href={getHref("contact")} className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Desktop Hire Me Action Button */}
        <div className="hidden lg:block">
          <a
            href={getHref("contact")}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={getHref("contact")}
            onClick={closeMenu}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold px-3.5 py-1.5 rounded-full text-xs tracking-wider transition"
          >
            Hire Me
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white bg-slate-900/80 border border-slate-700/50 rounded-xl focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="lg:hidden bg-[#07090e]/98 border-b border-slate-800 px-6 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Home
          </Link>
          <Link
            href={getHref("about")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            About
          </Link>
          <Link
            href={getHref("skills")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Skills
          </Link>
          <Link
            href={getHref("experience")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Experience
          </Link>
          <Link
            href={getHref("leadership")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Leadership
          </Link>
          <Link
            href={getHref("volunteering")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Volunteering
          </Link>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Gallery
          </Link>
          <Link
            href={getHref("portfolio")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400 border-b border-slate-800/60"
          >
            Blog
          </Link>
          <Link
            href={getHref("contact")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-slate-200 hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

