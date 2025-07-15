import React from 'react';

const STAR_POSITIONS = [
  { style: { top: '10%', left: '15%', animationDelay: '0s' } },
  { style: { top: '20%', right:'20%', animationDelay: '0.5s' } },
  { style: { top: '40%', left: '25%', animationDelay: '1s' } },
  { style: { bottom:'15%', left: '30%', animationDelay: '1.5s' } },
  { style: { bottom:'10%', right:'15%', animationDelay: '0.8s' } },
];

const Hero = () => (
  <section className="relative overflow-hidden min-h-[70vh] w-full">
    {/* Background image with opacity */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/src/assets/hero-bg.png')`,
      }}
    >
      {/* Opacity overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/80 to-blue-100/80"></div>
    </div>

    {/* Animated stars */}
    {STAR_POSITIONS.map((star, i) => (
      <svg
        key={i}
        viewBox="0 0 24 24"
        className="absolute w-8 h-8 text-blue-500 fill-current animate-bounce z-20 drop-shadow-lg"
        style={star.style}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}

    {/* Centered hero content */}
    <div className="relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-0 py-16 sm:py-20 lg:py-24 min-h-[70vh] flex flex-col justify-center">
      <div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
          Shine Every Corner<br/>
          <span className="text-blue-600">with Stardash</span>
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-gray-700">
          Premium cleaning services — Nairobi-wide.
        </p>
        <div className="mt-8 flex flex-col justify-center items-center gap-4">
          {/* Primary CTA */}
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium transform transition duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-pulse">
            Book Now
          </button>
          {/* Secondary CTA */}
          <div className="px-6 py-3 text-blue-600 font-medium transform transition duration-200 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 border-b-2 border-blue-600 animate-pulse">
            See All Services
          </div>
        </div>
        {/* Down‐arrow bounce */}
        <div className="mt-12">
          <span className="block w-1 h-8 mx-auto bg-blue-300 animate-bounce rounded"></span>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => (
  <div className="min-h-screen">
    <Hero />
  </div>
);

export default Home;