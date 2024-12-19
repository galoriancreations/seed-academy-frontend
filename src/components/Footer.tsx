

import { FACEBOOK_URL, LINKEDIN_URL, TWITTER_URL } from "@/constant/urls.constant";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={24} />, href: FACEBOOK_URL },
    { icon: <FaTwitter size={24} />, href: TWITTER_URL },
    { icon: <FaLinkedin size={24} />, href: LINKEDIN_URL },
  ];

  return (
  
    <footer className=" bg-blue-400 bg-opacity-10 text-gray-800 py-8 mt-auto border-t border-gray-300">
      <div className="container mx-auto px-6 text-center">
        
        <div className="mt-4 space-x-6 mb-4">
          {footerLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-gray-400">
              {label}
            </Link>
          ))}
        </div>

        <p className="mb-4">&copy; 2024 Ting Global Academy. All Rights Reserved.</p>

        <div className="mt-4 flex justify-center space-x-6 mb-4">
          {socialLinks.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
