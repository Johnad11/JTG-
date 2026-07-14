import React, { useState, useEffect } from 'react';

export default function Proof() {
  const payoutImages = [
    { src: '/photo_5886744698192775994_y.jpg', alt: 'FundedNext Payout Proof' },
    { src: '/photo_5886744698192775995_y.jpg', alt: 'My Forex Funds Payout Proof' }
  ];

  const certificateImages = [
    { src: '/photo_5886744698192775992_y.jpg', alt: 'MyForexFunds Certificate' },
    { src: '/photo_5886744698192775996_y.jpg', alt: 'FundedNext Crown Trader Certificate' }
  ];

  const [currentPayout, setCurrentPayout] = useState(0);
  const [currentCertificate, setCurrentCertificate] = useState(0);

  useEffect(() => {
    const payoutTimer = setInterval(() => {
      setCurrentPayout((prev) => (prev + 1) % payoutImages.length);
    }, 4000);
    return () => clearInterval(payoutTimer);
  }, []);

  useEffect(() => {
    const certTimer = setInterval(() => {
      setCurrentCertificate((prev) => (prev + 1) % certificateImages.length);
    }, 4500);
    return () => clearInterval(certTimer);
  }, []);

  return (
    <section id="proof" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest">Our Track Record</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 uppercase">Credibility You Can Trust</h3>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">We believe in full transparency. Here are some of our verified results from leading prop firms.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Payout Proof Card with Slider */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden proof-card">
            <div className="relative w-full h-48 bg-gray-900">
              {payoutImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${idx === currentPayout ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white uppercase">Successful Payouts</h4>
              <p className="text-gray-400 mt-2">Consistent profit withdrawals from our managed accounts. Real, verified results.</p>
            </div>
          </div>
          {/* Certificate Proof Card with Slider */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden proof-card">
            <div className="relative w-full h-48 bg-gray-900">
              {certificateImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-contain absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${idx === currentCertificate ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white uppercase">Funded Certificates</h4>
              <p className="text-gray-400 mt-2">Official certificates confirming successful completion of prop firm challenges.</p>
            </div>
          </div>
          {/* VIP/Scale Proof Card */}
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden proof-card">
            <div className="relative w-full h-48 bg-gray-900">
              <img src="/photo_5886744698192775993_x.jpg" alt="My Forex Funds VIP Account Status" className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-white uppercase">VIP Badges & Scaling</h4>
              <p className="text-gray-400 mt-2">Proof of our ability to not just pass, but to scale accounts to higher capital levels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
