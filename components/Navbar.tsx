"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Mass", href: "/schedule" },
    { name: "Gallery", href: "/" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/icons/jesus-resurrected.jpg"
            alt="logo"
            width={36}
            height={36}
          />
          <p className="text-4px">Catholic Church Of Resurrection</p>
        </Link>

        {/* Desktop Links (Visible on large screens) */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gray-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon (Visible on small screens) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* You can use an icon library or simple text for the icon */}☰
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default HamburgerMenu;
