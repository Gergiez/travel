
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { config } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">{config.brandName}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Crafting unforgettable journeys across the globe. Experience luxury, culture, and adventure with WorldClass styling.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Travel Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-slate-500" />
                <span>{config.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-slate-500" />
                <span>{config.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-slate-500" />
                <span>{config.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">Stay Inspired</h4>
            <p className="text-slate-400 mb-4">Subscribe for exclusive travel offers and stories.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-slate-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-slate-700 text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-md font-medium text-white transition-all hover:brightness-110"
                style={{ backgroundColor: config.accentColor }}
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {config.brandName}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <Link to="/admin/login" className="hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
