import React from 'react';
import img1 from '/assets/galimg1.jpg';
import img2 from '/assets/galimg2.jpg';
import img3 from '/assets/galimg3.jpg';
import img4 from '/assets/galimg4.jpg';
import img5 from '/assets/galimg5.jpg';
import img6 from '/assets/galimg6.jpg';
import img7 from '/assets/galimg7.jpg';
import img8 from '/assets/galimg8.jpg';
import img9 from '/assets/galimg.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Gallery() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FAF9F6] to-[#E9E4D4] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5C4033] mb-6 text-center drop-shadow-md">
          Our Gallery
        </h1>
        <p className="text-center text-[#5C4033] mb-14 max-w-3xl mx-auto text-lg font-light">
          Explore our recent construction projects and proud moments. We take pride in our work and love sharing it with you!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((src, idx) => {
            const randomSpan =
              idx % 7 === 0
                ? 'row-span-2 col-span-2'
                : idx % 5 === 0
                ? 'row-span-2'
                : 'row-span-1';
            return (
              <div
                key={idx}
                className={`relative ${randomSpan} overflow-hidden rounded-xl shadow-md group`}
              >
                <img
                  src={src}
                  alt={`Project ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 rounded-xl">
                  <h3 className="text-white font-semibold text-lg">
                    Image {idx + 1}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
