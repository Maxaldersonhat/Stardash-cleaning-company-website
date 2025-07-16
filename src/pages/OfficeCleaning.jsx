import React, { useState } from "react";
import office1 from "../assets/office-image1.png";
import office2 from "../assets/office-image2.png";

const OfficeCleaning = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold">
            Office <span className="text-blue-600">Cleaning</span> Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Professional commercial cleaning to maintain a productive, healthy
            workspace for your team
          </p>
          <button
            onClick={openForm}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Why It Matters & Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Why a Clean Office <span className="text-blue-600">Matters</span>
            </h2>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Boost Productivity:</strong> A clean workspace helps
                employees stay focused and motivated.
              </li>
              <li>
                <strong>Professional Image:</strong> Make a great first
                impression on clients and visitors.
              </li>
              <li>
                <strong>Healthier Environment:</strong> Reduce sick days with
                proper sanitation and hygiene.
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Services Included</h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Daily office cleaning</li>
              <li>Restroom cleaning & restocking</li>
              <li>Breakroom cleaning</li>
              <li>Trash removal & recycling</li>
              <li>Carpet & floor care</li>
              <li>Window cleaning & dusting</li>
              <li>Disinfection of high-touch areas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
       
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
            <img
              src= {office1}
              alt="Cleaner vacuuming an office floor"
              className="w-full h-full object-cover"
            />
          </div>

         
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
            <img
              src= {office2}
              alt="Sanitizing shared workspaces in an office"
              className="w-full h-full object-cover"
            />
          </div>

       
          <div className="h-64 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
            <img
              src="/images/office-cleaning-3.jpg"
              alt="Disinfecting high-touch surfaces like desks and handles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold">
            Flexible <span className="text-blue-600">Plans</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Choose a schedule that fits your office
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Daily Clean", "Weekly Deep Clean", "Monthly Premium"].map(
            (title) => (
              <div
                key={title}
                className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <ul className="text-gray-700 space-y-2 list-disc list-inside">
                  <li>Restroom cleaning</li>
                  <li>Trash removal</li>
                  <li>Kitchen & common area</li>
                  <li>Floor & surface care</li>
                </ul>
              </div>
            )
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Ready for a Cleaner Workplace?
          </h2>
          <p className="mb-6">
            Contact us to get a custom quote tailored to your office needs.
          </p>
          <button
            onClick={openForm}
            className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition"
          >
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg relative animate-fade-in">
            <button
              onClick={closeForm}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
              Request a Consultation
            </h3>
            <form
              action="https://formspree.io/f/your-form-id"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Select Plan</label>
                <select
                  name="plan"
                  required
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Choose a plan</option>
                  <option value="Daily Clean">Daily Clean</option>
                  <option value="Weekly Deep Clean">Weekly Deep Clean</option>
                  <option value="Monthly Premium">Monthly Premium</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows="3"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeCleaning;
