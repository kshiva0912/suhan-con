import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg'; // Update the path to your logo image

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const homeTimeout = useRef();
  const projectsTimeout = useRef();

  const handleMobileToggle = () => {
    setMobileOpen((prev) => !prev);
    setHomeOpen(false);
    setProjectsOpen(false);
  };

  return (
    <nav className="bg-[#FAF9F6] shadow-md sticky top-0 z-50"> {/* Off-white background */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Suhan Constructions Logo" className="h-20 w-auto" />
          <span
  className="text-[#5C4033] text-xl hidden sm:block"
  style={{ fontFamily: 'Charlesworth', fontWeight: 'bold' }}
>
  Suhan Constructions
</span> {/* Dark brown text */}
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded text-[#5C4033] hover:bg-[#D2B48C] focus:outline-none"
          onClick={handleMobileToggle}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-[#5C4033] items-center">
          {/* Home Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => {
              clearTimeout(homeTimeout.current);
              setHomeOpen(true);
            }}
            onMouseLeave={() => {
              homeTimeout.current = setTimeout(() => setHomeOpen(false), 120);
            }}
          >
            <button className="hover:text-[#FAF9F6] hover:bg-[#5C4033] px-3 py-2 rounded transition">
              Home ↓
            </button>
            {homeOpen && (
              <ul className="absolute top-12 left-0 bg-[#FAF9F6] shadow-lg rounded-md w-40 z-50">
                <li>
                  <Link to="/gallery" className="block hover:bg-[#D2B48C] px-4 py-2 transition text-[#5C4033]">Gallery</Link>
                </li>
                <li>
                  <Link to="/career" className="block hover:bg-[#D2B48C] px-4 py-2 transition text-[#5C4033]">Career</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Projects Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => {
              clearTimeout(projectsTimeout.current);
              setProjectsOpen(true);
            }}
            onMouseLeave={() => {
              projectsTimeout.current = setTimeout(() => setProjectsOpen(false), 120);
            }}
          >
            <button className="hover:text-[#FAF9F6] hover:bg-[#5C4033] px-3 py-2 rounded transition">
              Projects ↓
            </button>
            {projectsOpen && (
              <ul className="absolute top-12 left-0 bg-[#FAF9F6] shadow-lg rounded-md w-48 z-50">
                <li>
                  <Link to="/projects" className="block hover:bg-[#D2B48C] px-4 py-2 transition text-[#5C4033]">Projects</Link>
                </li>
                <li>
                  <Link to="/happyclients" className="block hover:bg-[#D2B48C] px-4 py-2 transition text-[#5C4033]">Happy Client</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Blogs */}
          <li>
            <Link
              to="/blogs"
              className="hover:text-[#FAF9F6] hover:bg-[#5C4033] px-3 py-2 rounded transition block"
            >
              Blogs
            </Link>
          </li>

          {/* Testimonial */}
          <li>
            <Link
              to="/testimonial"
              className="hover:text-[#FAF9F6] hover:bg-[#5C4033] px-3 py-2 rounded transition block"
            >
              Testimonial
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <Link
              to="/contact"
              className="hover:text-[#FAF9F6] hover:bg-[#5C4033] px-3 py-2 rounded transition block"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAF9F6] shadow-lg"> {/* Off-white background */}
          <ul className="flex flex-col font-medium text-[#5C4033]">
            {/* Home Dropdown (Mobile) */}
            <li className="relative">
              <button
                className="w-full text-left px-5 py-3 hover:bg-[#D2B48C] transition flex justify-between items-center"
                onClick={() => setHomeOpen((prev) => !prev)}
              >
                Home
                <span>{homeOpen ? '▲' : '▼'}</span>
              </button>
              {homeOpen && (
                <ul className="bg-[#FAF9F6]">
                  <li>
                    <Link to="/gallery" className="block px-7 py-2 hover:bg-[#D2B48C]" onClick={() => setMobileOpen(false)}>Gallery</Link>
                  </li>
                  <li>
                    <Link to="/career" className="block px-7 py-2 hover:bg-[#D2B48C]" onClick={() => setMobileOpen(false)}>Career</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Projects Dropdown (Mobile) */}
            <li className="relative">
              <button
                className="w-full text-left px-5 py-3 hover:bg-[#D2B48C] transition flex justify-between items-center"
                onClick={() => setProjectsOpen((prev) => !prev)}
              >
                Projects
                <span>{projectsOpen ? '▲' : '▼'}</span>
              </button>
              {projectsOpen && (
                <ul className="bg-[#FAF9F6]">
                  <li>
                    <Link to="/projects" className="block px-7 py-2 hover:bg-[#D2B48C]" onClick={() => setMobileOpen(false)}>Projects</Link>
                  </li>
                  <li>
                    <Link to="/clients" className="block px-7 py-2 hover:bg-[#D2B48C]" onClick={() => setMobileOpen(false)}>Happy Client</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Blogs */}
            <li>
              <Link
                to="/blogs"
                className="w-full text-left px-5 py-3 hover:bg-[#D2B48C] transition block"
                onClick={() => setMobileOpen(false)}
              >
                Blogs
              </Link>
            </li>

            {/* Testimonial */}
            <li>
              <Link
                to="/testimonial"
                className="w-full text-left px-5 py-3 hover:bg-[#D2B48C] transition block"
                onClick={() => setMobileOpen(false)}
              >
                Testimonial
              </Link>
            </li>

            {/* Contact Us */}
            <li>
              <Link
                to="/contact"
                className="w-full text-left px-5 py-3 hover:bg-[#D2B48C] transition block"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
