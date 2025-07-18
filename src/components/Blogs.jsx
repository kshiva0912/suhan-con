// src/components/Blogs.jsx
import React from 'react';

const dummyBlogs = [
  {
    id: 1,
    title: "5 Tips to Make Your Home Renovation Smooth",
    date: "July 2, 2025",
    summary: "Planning a renovation? Here's how to make the process seamless and stress-free, from budgeting to choosing the right materials.",
    image: "https://source.unsplash.com/800x600/?home,renovation",
  },
  {
    id: 2,
    title: "Why Sustainable Construction Matters in 2025",
    date: "June 25, 2025",
    summary: "Eco-friendly building isn't just a trend—it's a necessity. Learn how sustainable materials and designs are shaping the future.",
    image: "https://source.unsplash.com/800x600/?sustainable,construction",
  },
  {
    id: 3,
    title: "Inside Suhan's Latest Residential Project",
    date: "June 18, 2025",
    summary: "We walk you through our recent residential project, including client feedback, innovative design, and delivery timeline.",
    image: "https://source.unsplash.com/800x600/?interior,house",
  },
  {
    id: 4,
    title: "Top 10 Mistakes to Avoid When Building a Home",
    date: "June 10, 2025",
    summary: "Avoid these common mistakes to ensure your home construction project stays on track and within budget.",
    image: "https://source.unsplash.com/800x600/?construction,mistakes",
  },
];

function Blogs() {
  return (
    <div className="bg-[#f9f6f2] min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#5C4033]">Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-[#e2d9d2] hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#6b4c3b] mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-[#a1866f] mb-3">{blog.date}</p>
                <p className="text-[#5C4033] text-base line-clamp-3">{blog.summary}</p>
                <button className="mt-4 inline-block text-[#6b4c3b] border border-[#6b4c3b] px-4 py-2 rounded hover:bg-[#6b4c3b] hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
