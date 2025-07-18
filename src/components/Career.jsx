import React from 'react';

export default function Career() {
  return (
    <section className="bg-gradient-to-b from-[#FAF9F6] to-[#E9E4D4] min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-6 text-center drop-shadow-md">
          Careers at Our Company
        </h1>
        <p className="text-center text-[#5C4033] mb-12 max-w-2xl mx-auto text-lg font-light">
          Join our passionate team dedicated to building a better future. We’re looking for creative minds and committed professionals to grow with us.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Job Cards */}
          {[
            {
              title: 'Site Engineer',
              location: 'Bhubaneswar, Odisha',
              type: 'Full Time',
              desc: 'Manage construction site activities and ensure timely project execution.'
            },
            {
              title: 'Architect Designer',
              location: 'Remote',
              type: 'Contract',
              desc: 'Design floor plans and work with the engineering team to finalize structures.'
            },
            {
              title: 'Project Manager',
              location: 'Ganjam, Odisha',
              type: 'Full Time',
              desc: 'Coordinate project stages and manage team workflows and timelines.'
            },
          ].map((job, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
              <h2 className="text-2xl font-semibold text-[#5C4033]">{job.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{job.location} • {job.type}</p>
              <p className="mt-4 text-gray-700">{job.desc}</p>
              <button className="mt-6 px-4 py-2 bg-[#5C4033] text-white rounded hover:bg-[#3e2d22] transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Culture */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold text-[#5C4033] mb-4">Why Join Us?</h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5C4033]">
            We’re a close-knit team that values creativity, transparency, and growth. You'll get opportunities to lead, innovate, and make a real impact.
          </p>
        </div>
      </div>
    </section>
  );
}
