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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#060913]/95 backdrop-blur-md border-b border-gray-800/60 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Brand Logo & Name */}
        <Link href="/" onClick={handleLogoClick} className="flex items-center gap-2 group cursor-pointer">
          <span className="w-3 h-3 bg-blue-600 rounded-full shadow-[0_0_12px_#2563eb] group-hover:scale-110 transition-transform"></span>
          <span className="font-bold text-xl tracking-wider text-white font-sans group-hover:text-blue-400 transition-colors">Faysal</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/" onClick={handleLogoClick} className="hover:text-white transition">Home</Link>
          <Link href={getHref("about")} className="hover:text-white transition">About</Link>
          <Link href={getHref("skills")} className="hover:text-white transition">Skills</Link>
          <Link href={getHref("experience")} className="hover:text-white transition">Experience</Link>
          <Link href={getHref("leadership")} className="hover:text-white transition">Leadership</Link>
          <Link href={getHref("business-club")} className="hover:text-white transition">Business Club</Link>
          <Link href={getHref("volunteering")} className="hover:text-white transition">Volunteering</Link>
          <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
          <Link href={getHref("portfolio")} className="hover:text-white transition">Portfolio</Link>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <Link href={getHref("contact")} className="hover:text-white transition">Contact</Link>
        </div>

        {/* Desktop Hire Me Action Button */}
        <div className="hidden lg:block">
          <a
            href={getHref("contact")}
            className="bg-[#111827] hover:bg-blue-600 border border-gray-800 hover:border-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold transition shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={getHref("contact")}
            onClick={closeMenu}
            className="bg-[#111827] hover:bg-blue-600 border border-gray-800 hover:border-blue-500 text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition"
          >
            Hire Me
          </a>
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-300 hover:text-white bg-[#0d1322] border border-gray-800 rounded-xl focus:outline-none cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} className="text-blue-400" /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu Container */}
      {isOpen && (
        <div className="lg:hidden bg-[#060913]/98 border-b border-gray-800/80 px-6 pt-3 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Home
          </Link>
          <Link
            href={getHref("about")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            About
          </Link>
          <Link
            href={getHref("skills")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Skills
          </Link>
          <Link
            href={getHref("experience")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Experience
          </Link>
          <Link
            href={getHref("leadership")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Leadership
          </Link>
          <Link
            href={getHref("business-club")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Business Club
          </Link>
          <Link
            href={getHref("volunteering")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Volunteering
          </Link>
          <Link
            href="/gallery"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Gallery
          </Link>
          <Link
            href={getHref("portfolio")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Portfolio
          </Link>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400 border-b border-gray-800/40"
          >
            Blog
          </Link>
          <Link
            href={getHref("contact")}
            onClick={closeMenu}
            className="block py-2 text-base font-semibold text-gray-300 hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
