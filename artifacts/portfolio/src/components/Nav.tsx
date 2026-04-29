import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'home', path: '/' },
    { name: 'work', path: '/work' },
    { name: 'projects', path: '/projects' },
    { name: 'blog', path: '/blog' },
    { name: 'resume', path: '/resume' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-border bg-[#F2EDE4]/90 backdrop-blur-sm' : ''}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <Link to="/" className="font-sans uppercase tracking-[0.2em] text-[13px] text-foreground hover:opacity-60 transition-opacity">
          SPHOORTHI MALLADAD
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-sans lowercase text-[14px] transition-opacity hover:opacity-60 text-foreground`
              }
            >
              {({ isActive }) => isActive ? `[${link.name}]` : link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border px-6 py-4 flex flex-col gap-4 shadow-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `font-sans lowercase text-[14px] transition-opacity text-foreground py-2`
              }
            >
              {({ isActive }) => isActive ? `[${link.name}]` : link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}