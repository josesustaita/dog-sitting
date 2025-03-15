'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scrolling to anchor
  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl font-bold">Home Away From Home</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, 'hero')}
            className="hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#facility"
            onClick={(e) => handleScroll(e, 'facility')}
            className="hover:text-gray-300"
          >
            Facility
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, 'pricing')}
            className="hover:text-gray-300"
          >
            Pricing
          </a>
          <a
            href="#booking"
            onClick={(e) => handleScroll(e, 'booking')}
            className="hover:text-gray-300"
          >
            Booking
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="hover:text-gray-300"
          >
            Contact
          </a>
          {/* Social icons */}
          <div className="flex space-x-3 ml-4">
            <Link href="https://facebook.com" target="_blank">
              <FiFacebook className="h-5 w-5 hover:text-gray-400" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FiInstagram className="h-5 w-5 hover:text-gray-400" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FiTwitter className="h-5 w-5 hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6 fill-current">
            {isOpen ? (
              <path d="M4 5h16v2H4zm0 12h16v2H4z" />
            ) : (
              <path d="M4 5h16v2H4zm0 6h16v2H4z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2">
          <a
            href="#hero"
            onClick={(e) => handleScroll(e, 'hero')}
            className="block py-1 hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="block py-1 hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#facility"
            onClick={(e) => handleScroll(e, 'facility')}
            className="block py-1 hover:text-gray-300"
          >
            Facility
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleScroll(e, 'pricing')}
            className="block py-1 hover:text-gray-300"
          >
            Pricing
          </a>
          <a
            href="#booking"
            onClick={(e) => handleScroll(e, 'booking')}
            className="block py-1 hover:text-gray-300"
          >
            Booking
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, 'contact')}
            className="block py-1 hover:text-gray-300"
          >
            Contact
          </a>
          {/* Social icons */}
          <div className="flex space-x-3 mt-3">
            <Link href="https://facebook.com" target="_blank">
              <FiFacebook className="h-5 w-5 hover:text-gray-400" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <FiInstagram className="h-5 w-5 hover:text-gray-400" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FiTwitter className="h-5 w-5 hover:text-gray-400" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
