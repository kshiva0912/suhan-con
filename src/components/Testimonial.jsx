// src/components/Testimonial.jsx
import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    title: "Homeowner, Bhubaneswar",
    message:
      "Suhan Constructions transformed my dream into reality. The quality, transparency, and professionalism were top-notch. I highly recommend them!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Architect",
    message:
      "Working with Suhan was smooth and inspiring. They delivered ahead of schedule with zero compromise on quality.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    title: "Corporate Client",
    message:
      "From planning to execution, the Suhan team was flawless. They handled our commercial project efficiently and with great care.",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 4,
    name: "Neha Sinha",
    title: "Interior Designer",
    message:
      "Their attention to detail and commitment to sustainability makes them a top-tier construction partner. Will collaborate again!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Testimonial() {
  return (
    <div className="bg-[#f9f6f2] min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#5C4033]">Testimonials</h1>
        <p className="text-[#6b4c3b] text-lg mb-12">
          Hear what our happy clients have to say about us.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-md border border-[#e2d9d2] hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#a1866f]"
                />
                <h3 className="text-xl font-semibold text-[#6b4c3b]">{testimonial.name}</h3>
                <p className="text-sm text-[#a1866f] mb-4 italic">{testimonial.title}</p>
                <p className="text-[#5C4033] text-base">{testimonial.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
