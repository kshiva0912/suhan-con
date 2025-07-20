import React, { useState } from 'react';

// Social media links and SVG icons
const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.632.771-1.632 1.562v1.877h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.6 8.6 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.09 4.07 7.38 1.64 4.84c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62a4.28 4.28 0 0 1-1.94-.54v.05c0 2.11 1.5 3.87 3.5 4.27-.37.1-.77.16-1.18.16-.29 0-.56-.03-.83-.08.56 1.75 2.19 3.03 4.12 3.06A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0 0 24 4.59a8.7 8.7 0 0 1-2.54.7z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.46-2.17 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
      </svg>
    ),
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-[#f9f6f2]">Subscribe Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          className="border border-[#a1866f] bg-[#f9f6f2] text-[#5C4033] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a1866f]"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#a1866f] text-[#f9f6f2] px-4 py-2 rounded hover:bg-[#5C4033] transition"
        >
          Subscribe
        </button>
      </form>
      {status === 'success' && <p className="text-green-300 mt-2 text-sm">Thank you for subscribing!</p>}
      {status === 'error' && <p className="text-red-300 mt-2 text-sm">Please enter a valid email address.</p>}
      <p className="text-[#f9f6f2] text-xs mt-2">Get our latest updates and offers.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#5C4033] text-[#f9f6f2] pt-10 pb-4 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-base">
              <li><span className="font-medium">Address:</span> plot No-284, Bajaranga Nagar, Jharpada, Bhubaneswar, Odisha-751006</li>
              <li><span className="font-medium">Email:</span> <a href="mailto:constructionsuhan@gmail.com" className="hover:underline text-[#f0e8e0]">constructionsuhan@gmail.com</a></li>
              <li><span className="font-medium">Contact:</span> <a href="tel:+919938728207" className="hover:underline text-[#f0e8e0]">+91 9938728207</a></li>
              <li><span className="font-medium">Web:</span> <a href="https://www.suhanconstruction.com" className="hover:underline text-[#f0e8e0]" target="_blank" rel="noopener noreferrer">www.suhanconstruction.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-base">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/gallery" className="hover:underline">Gallery</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/clients" className="hover:underline">Clients</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-base">
              <li>Building Construction</li>
              <li>Civil Engineering Work</li>
              <li>Renovation & Repair</li>
              <li>Project Planning and Estimation</li>
              <li>HSE (health , safety, environment )</li>
              <li>Quality Control</li>
              <li>Site Supervision</li>
            </ul>
          </div>

          <div>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-[#a1866f] my-8"></div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
          <div className="text-sm">&copy; {new Date().getFullYear()} Suhan Constructions. All rights reserved.</div>
          <div className="flex space-x-4">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="hover:text-[#e8dccc] transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
