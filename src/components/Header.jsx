// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // ✅ Make sure this path is correct

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Career', path: '/career' },
  { label: 'Projects', path: '/projects' },
  { label: 'Happy Client', path: '/clients' },
  { label: 'Contact Us', path: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#f9f6f2] border-b border-[#6b4c3b] z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Suhan Constructions Logo" className="h-10 w-auto object-contain" />
          <span
            className="text-[#5C4033] text-2xl hidden sm:block"
            style={{ fontFamily: 'Charlesworth', fontWeight: 'bold' }}
          >
            Suhan Constructions
          </span>
        </Link>

        {/* Right: Menu icon */}
        <button
          className="text-[#6b4c3b] text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Full Screen Overlay Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-full bg-[#f9f6f2] text-[#6b4c3b] flex flex-col items-center justify-center space-y-12 text-4xl font-semibold transition-transform duration-500 z-40
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            onClick={closeMenu}
            className="hover:text-[#a1866f] transition"
            style={{ fontFamily: 'Charlesworth' }} // Custom font applied here
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
