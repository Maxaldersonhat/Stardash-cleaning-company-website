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
        <div className="mt-4 text-sm space-x-4">
          <span>📞 +254 716 533 478</span>
          <span>✉️ info@stardash.co.ke</span>
        </div>
      </div>
    </section>
  );
}
