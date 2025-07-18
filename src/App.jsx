// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Career from './components/Career';
import HappyClients from './components/HappyClients';
import Galary from './components/Galary';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Testimonial from './components/Testimonial';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function LayoutWrapper() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage ? <Header /> : <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Galary />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/happyclients" element={<HappyClients />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
