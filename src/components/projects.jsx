// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    name: "KHUSI VEGA",
    description: "A luxury residential complex with state-of-the-art amenities and eco-friendly design.",
    status: "Ongoing",
    image: "/assets/project/khusivega.jpg",
  },
  {
    name: "ASHINAN REGAL",
    description: "A modern shopping mall featuring international brands and food courts.",
    status: "Upcoming",
    image: "/assets/project/AshianaRegal.jpg",
  },
  {
    name: "METRO SAHEED-NAGAR",
    description: "Premium villas along the riverbank, blending nature with modern architecture.",
    status: "Ongoing",
    image: "/assets/project/metrosaheednagar.jpg",
  },
  {
    name: "KHUSI NOVA",
    description: "A high-rise office building with smart infrastructure and green certification.",
    status: "Upcoming",
    image: "/assets/project/khusinova.jpg",
  },
  {
    name: "EVOS-AMORA",
    description: "A K-12 campus with advanced learning facilities and sports complexes.",
    status: "Ongoing",
    image: "/assets/project/Evos-Amani.webp",
  },
  {
    name: "METRO HAPPY HOME",
    description: "A multi-specialty hospital with cutting-edge medical technology.",
    status: "Upcoming",
    image: "/assets/project/metrohappyhome.jpg",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-[#f9f6f2] py-14 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5C4033] mb-4 text-center drop-shadow">
          Our Projects
        </h1>
        <p className="text-center text-[#6b4c3b] mb-12 max-w-2xl mx-auto text-lg">
          Discover our diverse portfolio of ongoing and completed projects, each crafted with quality and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={proj.name}
              className="bg-white rounded-2xl shadow-lg border border-[#e8e0d8] hover:border-[#a1866f] overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <img
                src={proj.image}
                alt={proj.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-[#6b4c3b]">{proj.name}</h2>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium border 
                      ${proj.status === "Completed"
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "bg-yellow-100 text-yellow-700 border-yellow-300"
                      }`}
                  >
                    {proj.status}
                  </span>
                </div>
                <p className="text-[#5C4033] text-sm flex-1">{proj.description}</p>

                <div className="mt-4">
                  <div className="h-1 w-full bg-[#e8e0d8] rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-700 
                        ${proj.status === "Completed" ? "bg-green-400 w-full" : "bg-[#a1866f] w-2/3 animate-pulse"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(40px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in-up {
            animation: fade-in-up 0.7s ease-out both;
          }
        `}
      </style>
    </section>
  );
}

export default Projects;
