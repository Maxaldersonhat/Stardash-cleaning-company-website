import React from 'react';

export default function QuoteSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-4xl font-bold">
          Get Your <span className="text-blue-600">Free Quote</span>
        </h2>
        <p className="text-gray-600 mt-2">Questions? We're here to help—reach out anytime!</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <form className="space-y-4 bg-white shadow-lg rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
          />
          <textarea
            rows="4"
            placeholder="Tell us about your cleaning needs..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          >
            Get My Free Quote
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">📞</span>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-gray-600">+254 700 000 000</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">✉️</span>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-gray-600">hello@stardashservices.co.ke</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">📍</span>
                <div>
                  <div className="font-medium">Service Area</div>
                  <div className="text-gray-600">Nairobi County</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl">⏰</span>
                <div>
                  <div className="font-medium">Business Hours</div>
                  <div className="text-gray-600">
                    Mon–Sat: 7:00 AM – 7:00 PM<br />
                    Sunday: Emergency calls only
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 h-48 rounded-2xl flex items-center justify-center text-gray-500">
            Interactive Map<br/>Serving all of Nairobi County
          </div>
        </div>
      </div>
    </section>
  );
}
