// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Home, Info, Calendar, Mail, Hammer, Menu, X, Store } from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur text-balance p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold flex items-center gap-2">
            <h2>AutoShop</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 font-medium">
            <Link className="hover:text-yellow-400 flex items-center gap-1 transition-colors" to="/" onClick={closeMenu}>
              <Home size={18} /> Home
            </Link>
            <Link className="hover:text-yellow-400 flex items-center gap-1 transition-colors" to="/about" onClick={closeMenu}>
              <Info size={18} /> About
            </Link>
            <Link className="hover:text-yellow-400 flex items-center gap-1 transition-colors" to="/services" onClick={closeMenu}>
              <Hammer size={18} /> Services
            </Link>
            <Link className="hover:text-yellow-400 flex items-center gap-1 transition-colors" to="/booking" onClick={closeMenu}>
              <Calendar size={18} /> Booking
            </Link>
            <Link className="hover:text-yellow-400 flex items-center gap-1 transition-colors" to="/contact" onClick={closeMenu}>
              <Mail size={18} /> Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          md:hidden transition-all duration-300 ease-in-out
          ${isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
          }
          overflow-hidden
        `}>
          <div className="pt-4 pb-2 space-y-2 border-t border-gray-700 mt-2">
            <Link
              className="block py-3 px-4 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex items-center gap-2"
              to="/"
              onClick={closeMenu}
            >
              <Home size={18} /> Home
            </Link>
            <Link
              className="block py-3 px-4 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex items-center gap-2"
              to="/about"
              onClick={closeMenu}
            >
              <Info size={18} /> About
            </Link>
            <Link
              className="block py-3 px-4 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex items-center gap-2"
              to="/services"
              onClick={closeMenu}
            >
              <Hammer size={18} /> Services
            </Link>
            <Link
              className="block py-3 px-4 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex items-center gap-2"
              to="/booking"
              onClick={closeMenu}
            >
              <Calendar size={18} /> Booking
            </Link>
            <Link
              className="block py-3 px-4 hover:bg-gray-800 hover:text-white rounded-md transition-colors flex items-center gap-2"
              to="/contact"
              onClick={closeMenu}
            >
              <Mail size={18} /> Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}