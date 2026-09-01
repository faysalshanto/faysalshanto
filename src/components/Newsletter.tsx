'use client';

import React from 'react';

export default function Newsletter() {
  return (
    <section className="relative z-10 py-16 px-4 bg-transparent border-t border-gray-800/40">
      <div className="max-w-3xl mx-auto text-center bg-[#060913]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to My Newsletter</h3>
        <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
          Get the latest articles, tech insights, and project updates directly in your inbox. No spam, unsubscribe anytime.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
          className="flex flex-col sm:flex-row gap-3 justify-center relative z-20"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="px-4 py-3 rounded-xl bg-gray-950/60 backdrop-blur-sm border border-gray-700/60 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 flex-1 max-w-md relative z-20 text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30 cursor-pointer relative z-20 text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
