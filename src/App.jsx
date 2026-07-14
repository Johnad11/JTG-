import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Proof from './components/Proof';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Proof />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
