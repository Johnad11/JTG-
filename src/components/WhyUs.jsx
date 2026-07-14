import React from 'react';
import { Eye, BarChart2, Umbrella, Globe } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest">Why Choose JTG</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 uppercase">Your Professional Partner in Trading</h3>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <Eye className="text-brand-green" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white uppercase">Transparency</h4>
              <p className="text-gray-400 mt-1">Verified results and clear, structured profit-sharing agreements. No hidden fees.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <BarChart2 className="text-brand-green" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white uppercase">Proven Expertise</h4>
              <p className="text-gray-400 mt-1">Our traders have a proven track record of passing and managing prop firm accounts successfully.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <Umbrella className="text-brand-green" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white uppercase">Strict Risk Management</h4>
              <p className="text-gray-400 mt-1">We prioritize account protection and long-term capital growth over reckless, short-term gains.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <Globe className="text-brand-green" />
            </div>
            <div>
              <h4 className="font-bold text-lg text-white uppercase">Nigeria-Rooted, Global-Minded</h4>
              <p className="text-gray-400 mt-1">We understand the unique challenges of Nigerian traders while operating with global standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
