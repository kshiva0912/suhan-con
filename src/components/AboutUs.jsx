// src/components/AboutUs.jsx
import React from 'react';
import ceoPhoto from '../assets/Logo.jpg'; // Update with your actual image path

function AboutUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-16">
        {/* Left: About the Company */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-sky-700">About Suhan Constructions</h1>
          <p className="mb-3 text-base md:text-lg leading-relaxed">
            Suhan Constructions is committed to delivering top-quality construction services with a focus on innovation, sustainability, and client satisfaction.
            Our experienced team ensures every project is completed on time and exceeds expectations.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Founded with a vision to transform the construction industry, we value integrity, excellence, and teamwork. Join us on our journey to build a better future.
          </p>
        </div>
        {/* Right: CEO Photo */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <img
            src={ceoPhoto}
            alt="CEO of Suhan Constructions"
            className="rounded-lg shadow-lg w-40 h-40 md:w-72 md:h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
