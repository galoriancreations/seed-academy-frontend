
// 'use client';

// import React, { ReactNode, useState } from 'react';
// import Link from 'next/link';
// import { FaHome, FaInfoCircle, FaRegFolder, FaQuestionCircle, FaUserPlus, FaPhone, FaUniversity } from 'react-icons/fa';

// import './globals.css';

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function Layout({ children }: LayoutProps) {
//   // State למעקב אחרי מצב התפריט (פתוח או סגור)
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // פונקציה להפעלת/סגירת התפריט
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     // הוספת תגית <html> ו-<body>
//     <html lang="he">
//       <body className="bg-gray-50">
//         <div className="flex flex-col min-h-screen">
//           {/* כותרת עליונה */}
//           <header className="bg-blue-600 text-white py-4 shadow-md">
//             <nav className="container mx-auto flex justify-between items-center px-6">
//               {/* הלוגו בצד שמאל */}
//               <Link href="/home">
//                 <img src="/images/logo.png" alt="Ting Global Academy" className="h-8 sm:h-20" />
//               </Link>

//               {/* תפריט ניווט */}
//               <div className="hidden md:flex space-x-6">
//                 <Link href="/home" className="flex items-center hover:text-gray-300">
//                   <FaHome className="mr-2" />
//                   Home
//                 </Link>
//                 <Link href="/about" className="flex items-center hover:text-gray-300">
//                   <FaInfoCircle className="mr-2" />
//                   About Us
//                 </Link>
//                 <Link href="/program" className="flex items-center hover:text-gray-300">
//                   <FaRegFolder className="mr-2" />
//                   Program
//                 </Link>
//                 <Link href="/FAQ" className="flex items-center hover:text-gray-300">
//                   <FaQuestionCircle className="mr-2" />
//                   FAQ
//                 </Link>
//                 {/* <Link href="/scholarships" className="flex items-center hover:text-gray-300">
//                   <FaUniversity className="mr-2" />
//                   Scholarships & Financial Aid
//                 </Link> */}
                
//                 <Link href="/join" className="flex items-center hover:text-gray-300">
//                   <FaUserPlus className="mr-2" />
//                   Join
//                 </Link>
//                 <Link href="/contact" className="flex items-center hover:text-gray-300">
//                   <FaPhone className="mr-2" />
//                   Contact
//                 </Link>
//               </div>

//               {/* כפתור המבורגר למכשירים קטנים */}
//               <div className="md:hidden">
//                 <button
//                   className="text-white"
//                   aria-label="Open menu"
//                   onClick={toggleMenu} // קריאה לפונקציה לפתיחת/סגירת התפריט
//                 >
//                   <div className="w-8 h-1 bg-white mb-2"></div>
//                   <div className="w-8 h-1 bg-white mb-2"></div>
//                   <div className="w-8 h-1 bg-white"></div>
//                 </button>
//               </div>
//             </nav>
//           </header>

//           {/* תפריט המבורגר שנראה רק כאשר הוא פתוח */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-blue-600 text-white py-4">
//               <div className="flex flex-col space-y-4 items-center">
//                 <Link href="/home" className="flex items-center hover:text-gray-300">
//                   <FaHome className="mr-2" />
//                   Home
//                 </Link>
//                 <Link href="/about" className="flex items-center hover:text-gray-300">
//                   <FaInfoCircle className="mr-2" />
//                   About Us
//                 </Link>
//                 <Link href="/program" className="flex items-center hover:text-gray-300">
//                   <FaRegFolder className="mr-2" />
//                   Program
//                 </Link>
//                 <Link href="/FAQ" className="flex items-center hover:text-gray-300">
//                   <FaQuestionCircle className="mr-2" />
//                   FAQ
//                 </Link>
//                 {/* <Link href="/scholarships" className="flex items-center hover:text-gray-300">
//                   <FaUniversity className="mr-2" />
//                   Scholarships & Financial Aid
//                 </Link> */}
//                 <Link href="/join" className="flex items-center hover:text-gray-300">
//                   <FaUserPlus className="mr-2" />
//                   Join
//                 </Link>
//                 <Link href="/contact" className="flex items-center hover:text-gray-300">
//                   <FaPhone className="mr-2" />
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           )}

//           {/* תוכן הדף */}
//           <main className="container mx-auto flex-1 p-6">
//             {children}
//           </main>

//           {/* כותרת תחתונה */}
//           <footer className="bg-blue-600 text-white py-4">
//             <div className="container mx-auto text-center">
//               © 2025 Ting Global Academy . All rights reserved.
//             </div>
//           </footer>
//         </div>
//       </body>
//     </html>
//   );
// }
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
import './globals.css';
export default function Layout({ children}: LayoutProps ) {
  return (
    <html lang="he">
      <body className="bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container mx-auto flex-1 p-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

