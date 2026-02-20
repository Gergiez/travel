
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../store';
import { Menu, X, Plane } from 'lucide-react';

const Header: React.FC = () => {
  const { config } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const activeStyles = `text-[${config.accentColor}] font-bold border-b-2 border-[${config.accentColor}]`;
  const inactiveStyles = 'text-slate-600 hover:text-slate-900 transition-colors';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Plane className="w-8 h-8" style={{ color: config.accentColor }} />
            <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">
              {config.brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${location.pathname === link.path ? 'text-slate-900 border-b-2 border-slate-900' : inactiveStyles}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/destinations"
              className="px-5 py-2 rounded-full text-white font-medium transition-all hover:scale-105 active:scale-95"
              style={{ backgroundColor: config.primaryColor }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/destinations"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-3 rounded-md text-white font-medium mt-4"
            style={{ backgroundColor: config.primaryColor }}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
