import React from 'react';

const stats = [
  { label: 'Happy Clients', value: '500+' },
  { label: 'Years Experience', value: '3' },
  { label: 'Cleaning Sessions', value: '10,000+' },
  { label: 'Satisfaction Rate', value: '98%' },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map(({ label, value }) => (
          <div key={label}>
            <div className="text-3xl font-bold text-blue-600">{value}</div>
            <div className="mt-1 text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
