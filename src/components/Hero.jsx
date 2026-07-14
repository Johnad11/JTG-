import React from 'react';

export default function Hero() {
  return (
    <section className="hero-bg py-24 sm:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight uppercase">
          Professional Prop Firm Trading, <br className="hidden md:block" /> <span className="text-brand-green">Managed for You.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          We bridge the gap between skilled Nigerian traders and global prop firm success. We manage, advise, and help you grow with transparency and professionalism.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#services" className="w-full sm:w-auto bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green-dark cta-button">Explore Our Services</a>
          <a href="#proof" className="w-full sm:w-auto bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-600 transition">See Our Results</a>
        </div>
      </div>
    </section>
  );
}
