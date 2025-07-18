import React from 'react';

const testimonials = [
  {
    name: 'Mr. Ramesh Das',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review: 'Absolutely wonderful work by the team. Our home turned out better than we imagined!',
  },
  {
    name: 'Mrs. Priya Mishra',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    review: 'Very professional and dedicated. They delivered on time and kept us updated regularly.',
  },
  {
    name: 'Mr. Ajay Kumar',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    review: 'The quality of construction and attention to detail is top-notch. Highly recommend.',
  },
];

export default function HappyClients() {
  return (
    <section className="bg-gradient-to-b from-[#E9E4D4] to-[#FAF9F6] min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#5C4033] mb-6 drop-shadow-md">
          Happy Clients
        </h1>
        <p className="text-[#5C4033] text-lg font-light mb-14 max-w-2xl mx-auto">
          We take pride in our clients' satisfaction. Here's what some of them had to say about working with us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((client, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-[#5C4033] object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-[#5C4033]">{client.name}</h3>
              <p className="text-gray-600 mt-3 text-sm">"{client.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
