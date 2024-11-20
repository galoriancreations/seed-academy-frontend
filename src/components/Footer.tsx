import Link from 'next/link';
import { 
  FACEBOOK_URL, 
  TWITTER_URL, 
  LINKEDIN_URL, 
  INSTAGRAM_URL, 
  ABOUT_URL, 
  CONTACT_URL, 
  TERMS_URL,
  PRIVACY_URL
} from "@/constant/urls.constant";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
  <div className="container mx-auto text-center">
    {/* קישורים לדפים פנימיים */}
    <div className="mb-4 flex justify-center space-x-6">
      <Link href={ABOUT_URL} className="text-white hover:text-gray-300">
        About Us
      </Link>
      <Link href={CONTACT_URL} className="text-white hover:text-gray-300">
        Contact
      </Link>
      <Link href={TERMS_URL} className="text-white hover:text-gray-300">
        Terms of Service
      </Link>
      <Link href={PRIVACY_URL} className="text-white hover:text-gray-300">
        Privacy Policy
      </Link>
    </div>

    {/* קישורים לרשתות חברתיות */}
    <div className="mb-4 flex justify-center space-x-6">
      <a href={FACEBOOK_URL} className="text-white hover:text-gray-300">
        <i className="fab fa-facebook"></i>
      </a>
      <a href={INSTAGRAM_URL} className="text-white hover:text-gray-300">
        <i className="fab fa-instagram"></i>
      </a>
      <a href={LINKEDIN_URL} className="text-white hover:text-gray-300">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href={TWITTER_URL} className="text-white hover:text-gray-300">
        <i className="fab fa-twitter"></i>
      </a>
    </div>

    {/* זכויות יוצרים */}
    <p className="text-sm text-gray-300">
      © 2025 Ting Global Academy. All rights reserved.
    </p>
  </div>
</footer>

  );
};

export default Footer;
