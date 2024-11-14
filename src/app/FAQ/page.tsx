'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';


export default function FAQPage() {
  const [faqs, setFaqs] = useState<{ question: string, answer: string }[]>([]); // הגדרה של סוג state
  const [loading, setLoading] = useState(true); // מצב טעינה
  const [error, setError] = useState<string | null>(null); // שגיאה

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('api/FAQ');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();

        // בדיקה אם הנתונים מכילים את השדות הנדרשים
        if (Array.isArray(data) && data.every(faq => faq.question && faq.answer)) {
          setFaqs(data); // עדכון השאלות
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // הצגת השגיאה
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false); // סיום טעינה
      }
    };

    fetchFaqs(); // קריאה ל-API
  }, []); // קריאה אחת בלבד

  if (loading) {
    return <p>Loading...</p>; // הצגת הודעת טעינה
  }

  if (error) {
    return <p>Error: {error}</p>; // הצגת הודעת שגיאה
  }

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20 bg-blue-50 text-center">
        {/* <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1> */}
        {/* <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          <QuestionMarkCircleIcon className="h-10 w-10 text-blue-600 mr-4" />
          Frequently Asked Questions
        </h1> */}
        <div className="container mx-auto text-center mb-12">
          {/* אייקון עם נוכחות מרשימה */}
          <QuestionMarkCircleIcon className="h-20 w-20 text-blue-600 mx-auto animate-bounce mb-4" />

          {/* כותרת גדולה ומרכזית */}
          <h1 className="text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="container mx-auto px-6 mt-8 text-left">
          {/* {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </div>
          ))}
   */}
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
              <p className="mt-4 text-gray-700">
                {faq.answer}
                {/* הוספת קישור לתשובה */}
                {faq.question.toLowerCase().includes('scholarships') && (
                  <span className="block mt-2">
                    For more information on eligibility and how to apply, please <a href="/contact" className="text-blue-600">contact us</a>.
                  </span>
                )}
                {faq.question.toLowerCase().includes('apply') && (
                  <span className="block mt-2">
                    Ready to join? Start your application <a href="/join" className="text-blue-600">here</a>.
                  </span>
                )}

                {faq.question.toLowerCase().includes('program') && (
                  <span className="block mt-2">
                    Want to learn more about the program? Visit our <a href="/program" className="text-blue-600">Program page</a>.
                  </span>
                )}

                {faq.question.toLowerCase().includes('about') && (
                  <span className="block mt-2">
                    Learn more about us on our <a href="/about" className="text-blue-600">About page</a>.
                  </span>
                )}
              </p>
            </div>
          ))}
          {/* הודעה בסוף - עיצוב מרהיב ומודגש */}
          <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg text-center">
            <p className="text-2xl font-semibold text-blue-800">
              For any additional questions not listed here, feel free to contact us.
            </p>
            <p className="mt-4 text-lg text-blue-700">
              We are here to support your journey to becoming an effective and purpose-driven leader.
            </p>
            <div className="mt-8">
              <div className="mt-8">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );


}
