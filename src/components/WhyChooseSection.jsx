import React from 'react';
import { FaLeaf, FaShieldAlt, FaSmile, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: FaLeaf,
    title: 'Eco-Friendly Products',
    text:
      'We use only environmentally safe cleaning products that are gentle on your family and the planet.',
  },
  {
    icon: FaShieldAlt,
    title: 'Insured & Bonded Staff',
    text:
      'All our team members are thoroughly vetted, insured, and bonded for your peace of mind.',
  },
  {
    icon: FaSmile,
    title: 'Satisfaction Guarantee',
    text:
      "We’re not satisfied until you are. If you're not happy, we’ll return to make it right at no extra cost.",
  },
  {
    icon: FaClock,
    title: 'Reliable & Punctual',
    text:
      'Count on us to arrive on time, every time. We respect your schedule and value your time.',
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-blue-600">Stardash?</span>
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Founded in 2020, Stardash Services began with a simple mission: to bring
            professional, reliable cleaning services to every corner of Nairobi. Our
            founders, Jane and Michael, recognized the need for trustworthy cleaning
            services that busy families and businesses could depend on.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Today, we’re proud to serve hundreds of satisfied customers across Nairobi,
            from residential homes in Karen and Westlands to bustling offices in the CBD.
            Our commitment to excellence, attention to detail, and use of eco-friendly
            products has made us the trusted choice for discerning clients.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At Stardash, we don’t just clean—we care. Every surface we touch, every room
            we enter, receives the same meticulous attention we’d give our own homes.
          </p>
        </div>

        {/* Right side */}
        <div className="space-y-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-50 p-3 rounded-full">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
}
