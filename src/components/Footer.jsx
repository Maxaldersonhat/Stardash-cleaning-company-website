import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <div className="text-white font-bold text-2xl">Stardash<br/>Services</div>
          <p className="text-sm">
            Kenya's new standard in sparkling clean. Professional cleaning services
            across Nairobi with eco-friendly products and guaranteed satisfaction.
          </p>
          <div className="flex space-x-3">
            <FaFacebookF className="w-5 h-5 hover:text-white transition" />
            <FaTwitter className="w-5 h-5 hover:text-white transition" />
            <FaInstagram className="w-5 h-5 hover:text-white transition" />
            <FaLinkedinIn className="w-5 h-5 hover:text-white transition" />
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/homecleaning" className="hover:text-white transition">Home Cleaning</Link></li>
            <li><Link to="/OfficeCleaning" className="hover:text-white transition">Office Cleaning</Link></li>
            <li><Link to="/Deepcleaning"className="hover:text-white transition">Deep Cleaning</Link></li>
            <li><Link to="/postconstruction"className="hover:text-white transition">Post Construction</Link></li>
            <li><Link to="/Move-in/Move-out"className="hover:text-white transition">Move-in/Move-out</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>How It Works</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li>📞 +254 716 533 478</li>
            <li>✉️ info@stardash.co.ke</li>
            <li>📍 Nairobi County, Kenya</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800 text-center py-4 text-xs text-gray-500">
        © 2025 Stardash Services. All rights reserved.   Privacy Policy  |  Terms of Service  |  Cookie Policy
      </div>
    </footer>
  );
}