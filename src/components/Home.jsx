import React, { useState, useEffect, useRef } from 'react';

// --- Video Carousel Data (local paths from public/videos) ---
const videoCarouselData = [
  { id: 1, url: '/videos/video1.mp4', title: 'Project Overview' },
  { id: 2, url: '/videos/video2.mp4', title: 'Construction Progress' },
  { id: 3, url: '/videos/video3.mp4', title: 'Client Testimonial' },
  { id: 4, url: '/videos/video4.mp4', title: 'Sustainability Initiatives' },
];

// --- Video Carousel Component ---
function VideoCarousel({ videos }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [current, videos.length]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((current - 1 + videos.length) % videos.length);
  const next = () => setCurrent((current + 1) % videos.length);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-black relative z-30">
      {/* Videos */}
      {videos.map((video, idx) => (
        <video
          key={video.id}
          src={video.url}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${idx === current ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
          autoPlay={idx === current}
          loop
          muted
          playsInline
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-30 flex flex-col items-center justify-end pb-24">
        <h3 className="text-white text-4xl font-bold mb-2 drop-shadow-lg" style={{ fontFamily: "'Vidaloka', serif" }}>
          {videos[current].title}
        </h3>
        {/* Carousel Controls */}
        <div className="flex gap-4 mt-6">
          <button onClick={prev} aria-label="Previous" className="p-3 rounded-full bg-white/30 hover:bg-white/60 text-white text-2xl font-bold shadow-lg">
            ‹
          </button>
          <button onClick={next} aria-label="Next" className="p-3 rounded-full bg-white/30 hover:bg-white/60 text-white text-2xl font-bold shadow-lg">
            ›
          </button>
        </div>
        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-4 h-4 rounded-full border-2 ${current === idx ? 'bg-[#a1866f] border-[#a1866f]' : 'bg-white/40 border-white/60'}`}
              aria-label={`Go to video ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Other Data (as in your original code) ---
const logoUrl = 'https://via.placeholder.com/40x40.png?text=Logo';
const buildingImageUrl = 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80';
const ownerImageUrl = '/assets/Owner.jpg';

const underConstructionProjects = [
  {
    id: 1,
    title: "KHUSI VEGA",
    description: 'Modern residential towers with eco-friendly design and premium amenities.',
    image: "/assets/project/khusivega.jpg",
  },
  {
    id: 2,
    title: "ASHINAN REGAL",
    description: 'A state-of-the-art shopping complex blending retail and entertainment.',
    image: "/assets/project/AshianaRegal.jpg",
  },
  {
    id: 3,
    title: "METRO SAHEED-NAGAR",
    description: 'Luxurious villas offering tranquility and modern comforts.',
    image: "/assets/project/metrosaheednagar.jpg",
  },
  {
    id: 4,
    title: "KHUSI NOVA",
    description: 'An ultra-modern office complex in the city’s commercial hub.',
    image: "/assets/project/khusinova.jpg",
  },
  {
    id: 5,
    title: "EVOS-AMORA",
    description: 'Premium apartments with scenic views and modern architecture.',
    image:  "/assets/project/Evos-Amani.webp",
  },
  {
    id: 6,
    title: "METRO HAPPY HOME",
    description: 'A business park fostering growth and creativity.',
    image: "/assets/project/metrohappyhome.jpg",
  },
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Career', href: '/career' },
  { label: 'Projects', href: '/projects' },
  { label: 'Happy Client', href: '/clients' },
  { label: 'Contact Us', href: '/contact' },
];

// --- Main Home Component ---
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const vidalokaTextStyle = {
    color: '#5C4033',
    display: 'block',
    fontFamily: "'Vidaloka', serif",
    fontWeight: 400,
  };

  const numberStyle = {
    color: '#a1866f',
    fontFamily: "'Vidaloka', serif",
    fontSize: '36px',
    fontWeight: 700,
    lineHeight: 1,
  };

  const labelStyle = {
    color: '#6b4c3b',
    fontFamily: "'Vidaloka', serif",
    fontSize: '20px',
    fontWeight: 400,
    marginTop: '0.25rem',
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#FAF9F6] z-40 flex items-center justify-between px-6 py-4 shadow-sm border-b border-b-[#6b4c3b]">
        <div className="flex items-center space-x-3">
          <img src={logoUrl} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-[#6b4c3b] font-bold text-lg">Suhan Constructions</span>
        </div>
        <button
          onClick={toggleMenu}
          className="text-[#6b4c3b] text-3xl focus:outline-none"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Fullscreen overlay menu */}
      {menuOpen && (
        <nav className="fixed inset-0 bg-[#5C4033] z-50 flex flex-col items-center justify-center gap-10 text-4xl text-[rgb(208, 184, 147)] font-semibold">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className="hover:text-[#a1866f] transition"
              style={{ fontFamily: "'Vidaloka', serif" }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

      {/* Hero Section */}
      <section
  className="relative w-full min-h-screen flex items-center justify-center text-left px-8 md:px-16 py-20 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('/assets/bg.jpg')` }}
>
  {/* Overlay with lighter transparency */}
  <div className="absolute inset-0 bg-black/20 z-10" /> {/* Reduced opacity from /40 to /20 */}

  {/* Content */}
  <div className="relative z-20 max-w-4xl text-white">
    <h1
      style={{
        ...vidalokaTextStyle,
        fontWeight: 700,
        fontSize: '52px',
        lineHeight: 1.2,
        marginBottom: '1.5rem',
        color: '#ffffff', // Ensure text stays white
      }}
    >
      Building Dreams<br />With Integrity & Excellence
    </h1>
    <p
      style={{
        ...vidalokaTextStyle,
        fontSize: '20px',
        color: '#ffffff', // Ensure paragraph text stays white
      }}
      className="mb-8 max-w-xl"
    >
      At Suhan Constructions, we deliver top-notch construction services blending innovation and quality.
    </p>
    <a
      href="/projects"
      className="inline-block bg-[#a1866f] hover:bg-[#6b4c3b] text-white px-8 py-4 rounded-lg font-semibold transition"
      style={{ fontFamily: "'Vidaloka', serif", fontSize: '22px' }}
    >
      Explore Our Projects
    </a>
  </div>
</section>



      {/* Stats Section */}
      <section className="max-w-7xl mx-auto mt-12 px-8 md:px-16 py-12 bg-[#FAF9F6]">
        <div className="flex flex-wrap justify-around text-center gap-y-8">
          <div>
            <span style={numberStyle}>11</span>
            <div style={labelStyle}>Completed Projects</div>
          </div>
          <div>
            <span style={numberStyle}>6</span>
            <div style={labelStyle}>Under Construction</div>
          </div>
          <div>
            <span style={numberStyle}>150+</span>
            <div style={labelStyle}>Happy Customers</div>
          </div>
          <div>
            <span style={numberStyle}>10</span>
            <div style={labelStyle}>Years of Legacy</div>
          </div>
        </div>
      </section>

      {/* About Owner */}
      <section className="flex flex-col md:flex-row min-h-[100vh] max-w-7xl mx-auto bg-[#FAF9F6] mt-12 px-8 md:px-16 py-12 rounded-3xl  overflow-hidden">
  <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
    <div className="rounded-3xl overflow-hidden">
  <img
    src={ownerImageUrl}
    alt="Owner"
    className="object-cover w-full h-full"
    style={{ maxHeight: '400px' }}
  />
</div>

  </div>
  <div className="md:w-1/2 flex flex-col justify-center md:pl-16">
    <h2
      style={{
        ...vidalokaTextStyle,
        fontWeight: 700,
        fontSize: '36px',
        marginBottom: '1.5rem',
      }}
    >
      About Our Owner
    </h2>
    <p style={vidalokaTextStyle} className="max-w-lg">
      Mr. Mukulesh Adhikari (b. 02 May 1980), the dynamic 45-year-old founder and Managing Director of Suhan Construction, brings a rare blend of West Bengal roots and Odisha-based vision to every project his firm undertakes. Completed Civil engineering of 2000, he harnessed his early technical training to launch his own construction company in Odisha, quickly earning a reputation for meticulous planning, uncompromising quality, and on-time delivery. Over two decades later, Mr. Adhikari still personally oversees each venture—whether it’s large-scale infrastructure, industrial facilities, or bespoke commercial spaces—ensuring that every structure stands as a testament to safety, sustainability, and craftsmanship. Known for leading from the front, he cultivates a workplace culture that prizes continuous learning, ethical practices, and community upliftment, turning Suhan Construction into a trusted partner for clients across easternIndia.
    </p>
  </div>
</section>


      {/* --- Fullscreen Video Carousel --- */}
      <VideoCarousel videos={videoCarouselData} />

      {/* Under Construction Projects */}
      <section className="max-w-7xl mx-auto mt-16 px-8 md:px-16">
        <h2
          style={{
            ...vidalokaTextStyle,
            fontWeight: 700,
            fontSize: '36px',
            marginBottom: '2rem',
            color: '#5C4033',
          }}
          className="text-center"
        >
          Our Under Construction Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {underConstructionProjects.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3
                  style={{
                    ...vidalokaTextStyle,
                    fontWeight: 700,
                    fontSize: '24px',
                    marginBottom: '0.5rem',
                    color: '#6B4C3B',
                  }}
                >
                  {title}
                </h3>
                <p style={{ ...vidalokaTextStyle, fontSize: '18px', color: '#5C4033' }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Visionary */}
      <section className="max-w-7xl mx-auto mt-16 px-8 md:px-16 py-20 bg-[#E9E4D4] rounded-4xl shadow-inner flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <img
            src={ownerImageUrl}
            alt="Owner Visionary"
            className="rounded-3xl  object-cover max-h-[400px] w-full"
          />
        </div>
        <div className="md:w-2/3 text-[#5C4033] font-['Vidaloka']">
          <h2
            style={{
              fontWeight: 900,
              fontSize: '48px',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
            className="text-[#5C4033]"
          >
            Our Visionary
          </h2>
          <p
            style={{
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: 1.7,
              color: '#6B4C3B',
            }}
          >
            At the heart of our company's journey is a clear and unwavering vision, shaped by our founder Mr. Mukulesh Adhikari, a dedicated professional born on 02 May 1980 in West Bengal. After earning his diploma in 2000, Mr. Adhikari laid the foundation of his construction company in Odisha with a mission to redefine quality and trust in the construction industry. His vision is to build more than just structures—to build a legacy of integrity, innovation, and long-lasting impact.

Through Suhan Construction, he aims to deliver safe, sustainable, and cost-effective construction solutions that contribute to the growth of local communities and the development of the region. With a strong focus on modern techniques, skilled manpower, and transparent business practices, Mr. Adhikari envisions expanding the company's reach while maintaining its core values. His goal is to create a future where every project reflects excellence, and every client relationship is built on trust. </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
