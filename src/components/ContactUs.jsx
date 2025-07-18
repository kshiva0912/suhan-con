import React from 'react';

function ContactUs() {
  return (
    <section className="min-h-screen bg-[#FAF9F6] text-[#5C4033] flex flex-col">
      {/* Contact Info Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row py-20 px-8 gap-16">
        {/* Left Side - Address */}
        <div className="md:w-1/2 flex flex-col justify-center border-r border-[#D7C9B6] pr-10">
          <h2 className="text-5xl font-extrabold mb-8">Our Address</h2>
          <p className="text-lg leading-relaxed mb-6">
            <svg
              className="inline-block w-6 h-6 mr-3 text-[#7B5E3C] align-middle"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Plot No-284, Bajaranga Nagar,<br />
            Jharpada, Bhubaneswar,<br />
            Odisha-751006
          </p>
        </div>

        {/* Right Side - Contact Details */}
        <div className="md:w-1/2 flex flex-col justify-center pl-10 space-y-8">
          <h2 className="text-5xl font-extrabold mb-6">Get in Touch</h2>

          <p className="text-lg flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-[#7B5E3C]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 12v4a4 4 0 01-8 0v-4" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <a
              href="mailto:constructionsuhan@gmail.com"
              className="underline hover:text-[#A67C52]"
            >
              constructionsuhan@gmail.com
            </a>
          </p>

          <p className="text-lg flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-[#7B5E3C]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.05 12.05 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.05 12.05 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <a
              href="tel:+919064010416"
              className="underline hover:text-[#A67C52]"
            >
              +91 9064010416
            </a>
          </p>

          <p className="text-lg flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-[#7B5E3C]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8v13h18V8M16 3H8v5h8V3z" />
            </svg>
            <a
              href="https://www.suhanconstruction.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#A67C52]"
            >
              www.suhanconstruction.com
            </a>
          </p>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] md:h-[500px] shadow-inner">
        <iframe
          title="Suhan Construction Location"
          src="https://www.google.com/maps?q=Plot+No-284,+Bajaranga+Nagar,+jharpada,+Bhubaneswar,+Odisha-751006&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactUs;
