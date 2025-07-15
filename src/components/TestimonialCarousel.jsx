// src/components/TestimonialCarousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Grace Achieng',
    role: 'Restaurant Owner, Karen',
    avatar: '/assets/grace.jpg',
    content:
      '“I needed deep cleaning after renovations, and Stardash exceeded my expectations. They made my space sparkle like new. Highly recommended!”',
  },
  {
    name: 'John Mwangi',
    role: 'CEO, Acme Corp',
    avatar: '/assets/john.jpg',
    content:
      '“Our offices have never looked better. The team was friendly, punctual, and super thorough. Five stars!”',
  },
  {
    name: 'Maria Otieno',
    role: 'Homeowner, Westlands',
    avatar: '/assets/maria.jpg',
    content:
      '“I book every month now—these folks are absolute pros. My home always smells fresh and looks spotless.”',
  },
];

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
};

export default function TestimonialCarousel() {
  // page: current index, direction: 1 (next) or -1 (prev)
  const [[page, direction], setPage] = useState([0, 0]);
  const testimonialCount = testimonials.length;

  const paginate = (newDirection) => {
    setPage(([prevPage]) => [
      (prevPage + newDirection + testimonialCount) % testimonialCount,
      newDirection,
    ]);
  };

  // Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, []); // empty deps so it only sets up once

  const { name, role, avatar, content } = testimonials[page];

  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>
        <p className="mt-2 text-gray-600">
          Don’t just take our word for it—hear from our satisfied customers
          across Nairobi
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto mt-12 px-4">
        {/* Left arrow (hidden on mobile) */}
        <button
          onClick={() => paginate(-1)}
          className="hidden lg:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Animated card */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-yellow-400 mx-0.5" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 italic leading-relaxed mb-6">
              {content}
            </p>

            {/* Avatar & name */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-gray-800">{name}</div>
                <div className="text-gray-500 text-sm">{role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right arrow (hidden on mobile) */}
        <button
          onClick={() => paginate(1)}
          className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-gray-100 focus:outline-none"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() =>
              setPage(([prev]) => [
                idx,
                idx > prev ? 1 : idx < prev ? -1 : direction,
              ])
            }
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === page ? 'bg-blue-600' : 'bg-gray-300'
            } focus:outline-none`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
