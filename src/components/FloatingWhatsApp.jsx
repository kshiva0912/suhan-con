import React from 'react';

const FloatingWhatsApp = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/919938728207"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] hover:bg-[#1ebe5b] p-4 rounded-full shadow-lg transition-colors transform hover:scale-110 animate-pulse"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="#A8E6CF"  // lighter green fill
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.52 3.48A11.84 11.84 0 0012 .66 11.93 11.93 0 000 12c0 2.11.55 4.17 1.59 5.99L0 24l6.23-1.63a12 12 0 0017.15-10.3c0-3.17-1.23-6.15-3.47-8.39zM12 22a10.12 10.12 0 01-5.11-1.4l-.36-.22-3.69.97.99-3.59-.23-.37A10.09 10.09 0 1122 12 10.1 10.1 0 0112 22zm5.25-7.55c-.28-.14-1.64-.81-1.89-.9s-.44-.14-.62.14-.71.89-.87 1.08-.32.21-.59.07a8.42 8.42 0 01-2.47-1.53 9.23 9.23 0 01-1.71-2.12c-.18-.31 0-.48.13-.63.13-.13.28-.34.42-.51a2.13 2.13 0 00.28-.47.58.58 0 000-.54c-.07-.14-.62-1.5-.85-2.06s-.45-.49-.62-.5a1.43 1.43 0 00-.46.07c-.14.07-.54.2-.82.49a3.18 3.18 0 00-1 2.39c0 1.4 1 2.76 1.15 2.95a11.67 11.67 0 004.73 4.05 9.89 9.89 0 003.06.9 2.61 2.61 0 001.65-.71 2.14 2.14 0 00.49-1.52c-.07-.14-.27-.2-.56-.34z" />
        </svg>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
