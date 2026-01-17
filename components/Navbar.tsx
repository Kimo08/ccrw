"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Mass", href: "/schedule" },
    { name: "Gallery", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-600 to-gray-700 shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 flex-shrink-0"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg p-1 overflow-hidden">
            <Image
              src="/icons/jesus-resurrected.jpg"
              alt="Church logo"
              width={40}
              height={40}
              className="w-full h-full object-cover rounded"
            />
          </div>
          z
          <div className=" sm:block">
            <p className="text-white font-bold text-sm lg:text-base leading-tight">
              Catholic Church
            </p>
            <p className="text-blue-100 text-xs lg:text-sm">Of Resurrection</p>
          </div>
        </Link>

        {/* Desktop Links (Visible on large screens) */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium text-sm hover:text-blue-100 transition-colors duration-200 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile and Tablet Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none p-2 hover:bg-blue-500 rounded-md transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile and Tablet Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-600 shadow-xl lg:hidden animate-in fade-in slide-in-from-top-2">
            <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-white font-medium text-sm sm:text-base hover:bg-blue-600 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HamburgerMenu;
