'use client';

import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 px-4 bg-[#060913] border-t border-gray-800/60">
      <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gray-900 to-gray-950 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-xl">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Subscribe to My Newsletter</h3>
        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Get the latest articles, tech insights, and project updates directly in your inbox. No spam, unsubscribe anytime.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="px-4 py-3 rounded-xl bg-gray-800/80 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 flex-1 max-w-md"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
