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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#04060a]/95 backdrop-blur-md border-b border-[#b49f6e]/15 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo & Name */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group cursor-pointer">
          <span className="w-2.5 h-2.5 bg-[#b49f6e] rounded-full shadow-[0_0_10px_#b49f6e] group-hover:scale-125 transition-transform"></span>
          <span className="font-serif font-bold text-xl tracking-wider text-white group-hover:text-[#b49f6e] transition-colors">Faysal</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider text-slate-400">
          <Link href="/" onClick={handleLogoClick} className="hover:text-[#b49f6e] transition">Home</Link>
          <Link href={getHref("about")} className="hover:text-[#b49f6e] transition">About</Link>
          <Link href={getHref("skills")} className="hover:text-[#b49f6e] transition">Skills</Link>
          <Link href={getHref("experience")} className="hover:text-[#b49f6e] transition">Experience</Link>
          <Link href={getHref("leadership")} className="hover:text-[#b49f6e] transition">Leadership</Link>
          <Link href={getHref("volunteering")} className="hover:text-[#b49f6e] transition">Volunteering</Link>
          <Link href="/gallery" className="hover:text-[#b49f6e] transition">Gallery</Link>
          <Link href={getHref("portfolio")} className="hover:text-[#b49f6e] transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-[#b49f6e] transition">Blog</Link>
          <Link href={getHref("contact")} className="hover:text-[#b49f6e] transition">Contact</Link>
        </div>

        {/* Desktop Hire Me Action Button */}
        <div className="hidden lg:block">
          <a
            href={getHref("contact")}
            className="bg-[#0b1329] hover:bg-[#b49f6e] border border-[#b49f6e]/30 hover:border-[#b49f6e] text-slate-200 hover:text-black px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={getHref("contact")}
            onClick={closeMenu}
            className="bg-[#0b1329] hover:bg-[#b49f6e] border border-[#b49f6e]/30 hover:border-[#b49f6e] text-slate-200 hover:text-black px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition"
          >
            Hire Me
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 text-slate-300 hover:text-white bg-[#0b1329] border border-[#b49f6e]/20 rounded-xl focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} className="text-[#b49f6e]" /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="lg:hidden bg-[#060913]/98 border-b border-gray-800/80 px-6 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Home
          </Link>
          <Link
            href={getHref("about")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            About
          </Link>
          <Link
            href={getHref("skills")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Skills
          </Link>
          <Link
            href={getHref("experience")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Experience
          </Link>
          <Link
            href={getHref("leadership")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Leadership
          </Link>
          <Link
            href={getHref("volunteering")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Volunteering
          </Link>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Gallery
          </Link>
          <Link
            href={getHref("portfolio")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e] border-b border-gray-800/40"
          >
            Blog
          </Link>
          <Link
            href={getHref("contact")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-[#b49f6e]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
