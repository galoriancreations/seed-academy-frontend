import Link from 'next/link'; 
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import {
  FACEBOOK_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  INSTAGRAM_URL,
  ABOUT_URL,
  CONTACT_URL,
  TERMS_URL,
  PRIVACY_URL,
} from '@/constant/urls.constant';

const internalLinks = [
  { label: 'About Us', href: ABOUT_URL },
  { label: 'Contact', href: CONTACT_URL },
  { label: 'Terms of Service', href: TERMS_URL },
  { label: 'Privacy Policy', href: PRIVACY_URL },
];

const socialLinks = [
  { icon: <FaFacebook />, href: FACEBOOK_URL, label: 'Facebook' },
  { icon: <FaInstagram />, href: INSTAGRAM_URL, label: 'Instagram' },
  { icon: <FaLinkedin />, href: LINKEDIN_URL, label: 'LinkedIn' },
  { icon: <FaTwitter />, href: TWITTER_URL, label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8"> {/* צבע רקע כחול */}
      <div className="container mx-auto text-center">
        {/* Internal Links */}
        <div className="mb-4 flex justify-center flex-wrap gap-6">
          {internalLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-white hover:text-blue-300 transition duration-300"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mb-4 flex justify-center flex-wrap gap-6">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition duration-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300 mt-4">
          © {new Date().getFullYear()} Seed Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
