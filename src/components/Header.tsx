'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaHome, FaInfoCircle, FaRegFolder, FaQuestionCircle, FaUserPlus, FaPhone } from 'react-icons/fa';
import { ABOUT_URL, CONTACT_URL, FAQ_URL, HOME_URL, JOIN_URL, PROGRAM_URL } from '@/constant/urls.constant';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6">
        {/* הלוגו בצד שמאל */}
        <Link href={HOME_URL}>
          <img src="/images/logo.png" alt="Ting Global Academy" className="h-8 sm:h-20" />
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href={HOME_URL} className="flex items-center hover:text-gray-300">
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link href={ABOUT_URL} className="flex items-center hover:text-gray-300">
            <FaInfoCircle className="mr-2" />
            About Us
          </Link>
          <Link href={PROGRAM_URL} className="flex items-center hover:text-gray-300">
            <FaRegFolder className="mr-2" />
            Program
          </Link>
          <Link href={FAQ_URL} className="flex items-center hover:text-gray-300">
            <FaQuestionCircle className="mr-2" />
            FAQ
          </Link>
          <Link href={JOIN_URL} className="flex items-center hover:text-gray-300">
            <FaUserPlus className="mr-2" />
            Join
          </Link>
          <Link href={CONTACT_URL} className="flex items-center hover:text-gray-300">
            <FaPhone className="mr-2" />
            Contact
          </Link>
        </div>

        {/* כפתור המבורגר למכשירים קטנים */}
        <div className="md:hidden">
          <button
            className="text-white"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <div className="w-8 h-1 bg-white mb-2"></div>
            <div className="w-8 h-1 bg-white mb-2"></div>
            <div className="w-8 h-1 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* תפריט המבורגר שנראה רק כאשר הוא פתוח */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white py-4">
          <div className="flex flex-col space-y-4 items-center">
            <Link href={HOME_URL} className="flex items-center hover:text-gray-300">
              <FaHome className="mr-2" />
              Home
            </Link>
            <Link href={ABOUT_URL} className="flex items-center hover:text-gray-300">
              <FaInfoCircle className="mr-2" />
              About Us
            </Link>
            <Link href={PROGRAM_URL}  className="flex items-center hover:text-gray-300">
              <FaRegFolder className="mr-2" />
              Program
            </Link>
            <Link href={FAQ_URL}  className="flex items-center hover:text-gray-300">
              <FaQuestionCircle className="mr-2" />
              FAQ
            </Link>
            <Link href={JOIN_URL} className="flex items-center hover:text-gray-300">
              <FaUserPlus className="mr-2" />
              Join
            </Link>
            <Link href={CONTACT_URL}  className="flex items-center hover:text-gray-300">
              <FaPhone className="mr-2" />
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
