import React from 'react';
import { ShieldCheck, Lightbulb } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 uppercase">What We Offer</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Service 1: Account Management */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full mb-6" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <ShieldCheck className="text-brand-green h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3 uppercase">Prop Firm Account Management</h4>
            <p className="text-gray-400 mb-4">Hands-on management of your prop firm accounts. We focus on consistent profitability, strict risk management, and scaling strategies for long-term growth.</p>
            <div className="text-left bg-gray-700 p-4 rounded-lg">
              <p className="text-white font-semibold">Revenue Model:</p>
              <ul className="list-disc list-inside list-disc-brand-green mt-2 text-gray-300">
                <li>50% Profit Share of every payout</li>
                <li>Account Fee Refund upon first payout</li>
              </ul>
            </div>
          </div>
          {/* Service 2: Advisory */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full mb-6" style={{ backgroundColor: 'rgba(27, 166, 87, 0.1)' }}>
              <Lightbulb className="text-brand-green h-8 w-8" />
            </div>
            <h4 className="text-2xl font-bold text-white mb-3 uppercase">Prop Firm Advisory Services</h4>
            <p className="text-gray-400 mb-4">Expert guidance to help you navigate the prop firm landscape. We ensure you choose a firm that aligns perfectly with your trading style and financial goals.</p>
            <div className="text-left bg-gray-700 p-4 rounded-lg">
              <p className="text-white font-semibold">Revenue Model:</p>
              <ul className="list-disc list-inside list-disc-brand-green mt-2 text-gray-300">
                <li>Starting at ₦10,000 per session</li>
                <li>Custom packages available for groups</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
