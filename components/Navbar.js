"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-950 text-gray-200 fixed top-0 left-0 right-0 z-50 shadow-lg pt-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-blue-400">
            <Link href="/">DeveloperWafi</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="#contact" text="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-blue-400 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-gray-900 border-t border-gray-700 px-4 transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-4">
          <MobileNavLink
            href="/"
            text="Home"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavLink
            href="/about"
            text="About"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavLink
            href="/services"
            text="Services"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavLink
            href="/contact"
            text="Contact"
            onClick={() => setIsOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}

// Reusable NavLink Component for Desktop
const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="relative text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
  >
    {text}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
);

// Reusable MobileNavLink Component for Mobile
const MobileNavLink = ({ href, text, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="block text-lg py-2 px-3 rounded-md text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-200"
  >
    {text}
  </Link>
);

export default Navbar;
