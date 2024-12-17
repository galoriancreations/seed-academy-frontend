
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaHome,
  FaInfoCircle,
  FaRegFolder,
  FaQuestionCircle,
  FaUserPlus,
  FaPhone,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import {
  ABOUT_URL,
  CONTACT_URL,
  FAQ_URL,
  HOME_URL,
  JOIN_URL,
  PROGRAM_URL,
} from '@/constant/urls.constant';

const menuItems = [
  { label: 'Home', href: HOME_URL, icon: <FaHome className="mr-2" /> },
  { label: 'About Us', href: ABOUT_URL, icon: <FaInfoCircle className="mr-2" /> },
  { label: 'Program', href: PROGRAM_URL, icon: <FaRegFolder className="mr-2" /> },
  { label: 'FAQ', href: FAQ_URL, icon: <FaQuestionCircle className="mr-2" /> },
  { label: 'Join', href: JOIN_URL, icon: <FaUserPlus className="mr-2" /> },
  { label: 'Contact', href: CONTACT_URL, icon: <FaPhone className="mr-2" /> },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
  
    <header className="bg-gray-100 bg-opacity-80 text-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* לוגו */}
        <Link href={HOME_URL}>
          <img src="/images/logo.png" alt="Ting Global Academy" className="h-10 sm:h-20" />
        </Link>

        {/* תפריט לדסקטופ */}
        <div className="hidden md:flex space-x-6 items-center">

          {menuItems.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center hover:text-blue-500 space-x-2"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>

        {/* איקון תפריט המבורגר לנייד */}
        <button
          // className="md:hidden text-gray-800 focus:outline-none"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* תפריט לנייד */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 bg-opacity-80 text-gray-800 shadow-md py-4">
          <div className="flex flex-col space-y-4 items-center">
            {menuItems.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center hover:text-blue-500"
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
