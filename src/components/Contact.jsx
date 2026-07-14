import React from 'react';

const InstagramIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className = 'h-6 w-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Ready to Elevate Your Trading Journey?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Whether you need expert management or professional advice, we are here to help you succeed. Let's talk about your goals.
        </p>
        <div className="mt-8">
          <a href="https://wa.me/2349154688258" target="_blank" rel="noopener noreferrer" className="bg-brand-green text-white font-bold py-4 px-10 rounded-full shadow-lg text-lg hover:bg-brand-green-dark cta-button inline-block">
            Start a Conversation on WhatsApp
          </a>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="https://www.instagram.com/johnad_trades" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition" aria-label="Instagram">
            <InstagramIcon className="h-8 w-8" />
          </a>
          <a href="https://youtube.com/@johnad_trades" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-green transition" aria-label="YouTube">
            <YoutubeIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
