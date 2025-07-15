import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import logo from "./assets/logo.png";
import Home from './pages/Home.jsx';
import HomeCleaning from './pages/HomeCleaning.jsx'; 

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const hideMainLayout = location.pathname === '/editor';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(v => !v);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Function to handle navigation - either scroll to section or navigate to page
  const handleNavigation = (path, sectionId = null) => {
    if (location.pathname === '/' && sectionId) {
      // If we're on home page and have a section ID, scroll to it
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (sectionId) {
      // If we're not on home page but need to go to a section, navigate to home first
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Regular navigation to different pages
      navigate(path);
    }
    closeMobileMenu();
  };

  const btnBase = `
    px-3 py-2 font-medium rounded-lg
    bg-transparent
    transform transition duration-200 ease-out
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `;

  return (
    <div className="app min-h-screen">
      {!hideMainLayout && (
        <>
          {/* HEADER */}
          <header className="fixed top-0 left-0 right-0 z-50">
            <nav className={`
              transition-all duration-500 ease-in-out
              px-6 py-4
              ${isScrolled
                ? 'mt-4 mx-auto max-w-6xl bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200 rounded-2xl'
                : 'w-full bg-white shadow-sm border-b border-gray-100'}
            `}>
              <div className="max-w-6xl mx-auto flex items-center justify-between">
                <button onClick={() => handleNavigation('/')} className="flex items-center">
                  <img className="h-10 w-20" src={logo} alt="App Logo" />
                </button>

                <div className="hidden lg:flex flex-grow justify-center space-x-8">
                  {[
                    { path: '/', label: 'Home', sectionId: 'Hero' },
                    { path: '/', label: 'Services', sectionId: 'ServicesSection' },
                    { path: '/', label: 'How it works', sectionId: 'HowItWorksSection' },
                    { path: '/', label: 'Testimonials', sectionId: 'TestimonialCarousel' },
                    { path: '/', label: 'Contact', sectionId: 'QuoteSection' },
                  ].map(({ path, label, sectionId }) => (
                    <button
                      key={sectionId}
                      onClick={() => handleNavigation(path, sectionId)}
                      className={`${btnBase} hover:-translate-y-0.5 hover:scale-105 hover:bg-blue-100 hover:text-blue-600`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <div className="hidden lg:flex">
                  <button
                    onClick={() => handleNavigation('/', 'QuoteSection')}
                    className="px-4 py-2 font-medium rounded-lg bg-blue-600 text-white transform transition duration-200 ease-out hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Get a Free Quote
                  </button>
                </div>

                <div className="lg:hidden">
                  <button
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    className={`
                      p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition
                      ${isMobileMenuOpen ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}
                    `}
                  >
                    {isMobileMenuOpen ? 'X' : '≡'}
                  </button>
                </div>
              </div>

              {isMobileMenuOpen && (
                <div className="lg:hidden mt-2 px-6 pb-4 space-y-2 border-t border-gray-200 animate-slide-down">
                  {[
                    { path: '/', label: 'Home', sectionId: 'hero' },
                    { path: '/homecleaning', label: 'Home Cleaning' }, // This stays as separate page
                    { path: '/', label: 'Services', sectionId: 'services' },
                    { path: '/', label: 'How it works', sectionId: 'how-it-works' },
                    { path: '/', label: 'Testimonials', sectionId: 'testimonials' },
                    { path: '/', label: 'Contact', sectionId: 'contact' },
                  ].map(({ path, label, sectionId }) => (
                    <button
                      key={sectionId || path}
                      onClick={() => handleNavigation(path, sectionId)}
                      className="block w-full text-left px-3 py-2 rounded-lg bg-transparent transform transition duration-200 ease-out hover:bg-blue-100 hover:text-blue-600"
                    >
                      {label}
                    </button>
                  ))}
                  <button
                    onClick={() => handleNavigation('/', 'contact')}
                    className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg transform transition duration-200 ease-out hover:bg-blue-700"
                  >
                    Get a quote
                  </button>
                </div>
              )}
            </nav>
          </header>

          {/* ROUTED PAGES */}
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/homecleaning" element={<HomeCleaning />} />
              {/* Add other routes here if needed */}
            </Routes>
          </main>
        </>
      )}
    </div>
  );
};

export default App;