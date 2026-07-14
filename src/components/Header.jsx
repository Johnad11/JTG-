import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          {/* Logo */}
          <img src="/logo.png" alt="JTG Logo" className="h-10 w-auto" />
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-bold tracking-wider text-white uppercase" style={{ fontFamily: "'Oswald', sans-serif" }}>JOHNAD</span>
            <span className="text-xs text-gray-400 font-medium">Traders Group</span>
          </div>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-300 hover:text-brand-green transition">Services</a>
          <a href="#proof" className="text-gray-300 hover:text-brand-green transition">Our Proof</a>
          <a href="#why-us" className="text-gray-300 hover:text-brand-green transition">Why Us</a>
          <a href="#contact" className="text-gray-300 hover:text-brand-green transition">Contact</a>
        </nav>

        <a href="https://wa.me/2349154688258" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-brand-green text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-brand-green-dark cta-button">
          Chat on WhatsApp
        </a>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden px-6 pb-4`}>
        <a href="#services" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-brand-green">Services</a>
        <a href="#proof" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-brand-green">Our Proof</a>
        <a href="#why-us" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-brand-green">Why Us</a>
        <a href="#contact" onClick={closeMenu} className="block py-2 text-gray-300 hover:text-brand-green">Contact</a>
        <a href="https://wa.me/2349154688258" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block w-full text-center bg-brand-green text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-brand-green-dark cta-button">
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
