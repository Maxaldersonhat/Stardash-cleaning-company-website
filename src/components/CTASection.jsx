import React from 'react';

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-4xl font-bold">
          Ready for a <span className="text-blue-400">Spotless</span> Home?
        </h2>
        <p className="text-lg">
          Let’s get started! Experience the Stardash difference with our professional
          cleaning services.
        </p>
        <button className="mt-4 inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition">
          Get My Free Quote
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
        <div className="mt-4 text-sm space-x-4">
          <span>📞 +254 700 000 000</span>
          <span>✉️ hello@stardashservices.co.ke</span>
        </div>
      </div>
    </section>
  );
}
