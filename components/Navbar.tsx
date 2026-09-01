
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Kezdőlap', path: '/' },
    { name: 'Termékújság', path: '/ujsag' },
    { name: 'Szolgáltatások', path: '/szolgaltatasok' },
    { name: 'Kedvezmények', path: '/kedvezmenyek' },
    { name: 'Kapcsolat', path: '/kapcsolat' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                src="/logo_szoveggel.png"
                alt="Onder Papírbolt"
                className="h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors px-4 py-2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                  isActive(link.path)
                    ? 'bg-teal-50 text-teal-700 font-semibold'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kapcsolat"
              className="ml-3 bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Látogasson el hozzánk!
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Menü bezárása' : 'Menü megnyitása'}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-teal-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3.5 text-base font-medium rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 ${
                  isActive(link.path) ? 'bg-teal-50 text-teal-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/kapcsolat"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-orange-500 text-white px-4 py-3.5 rounded-xl text-base font-semibold hover:bg-orange-600 transition-colors mt-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Látogasson el hozzánk!
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
