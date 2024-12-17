
'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

export default function FAQPage() {
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('api/FAQ');
        if (!response.ok) {
          throw new Error('Failed to fetch FAQs');
        }
        const data = await response.json();

        if (Array.isArray(data) && data.every((faq) => faq.question && faq.answer)) {
          setFaqs(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto text-center mb-12">
          <QuestionMarkCircleIcon className="h-20 w-20 text-blue-600 mx-auto animate-bounce mb-4" />
          <h1 className="text-5xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="container mx-auto px-6 mt-8 text-left space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer ${
                expanded === index ? 'border-l-4 border-blue-600' : ''
              }`}
              onClick={() => toggleExpand(index)} // שינוי כאן
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <span className="text-blue-600 hover:text-blue-800 transition">
                  {expanded === index ? '-' : '+'}
                </span>
              </div>
              {expanded === index && (
                <p className="mt-4 text-gray-700">
                  {faq.answer}
                  {faq.question.toLowerCase().includes('scholarships') && (
                    <span className="block mt-2">
                      For more information, please <a href="/contact" className="text-blue-600">contact us</a>.
                    </span>
                  )}
                  {faq.question.toLowerCase().includes('apply') && (
                    <span className="block mt-2">
                      Start your application <a href="/join" className="text-blue-600">here</a>.
                    </span>
                  )}
                  {faq.question.toLowerCase().includes('program') && (
                    <span className="block mt-2">
                      Learn more on our <a href="/program" className="text-blue-600">Program page</a>.
                    </span>
                  )}
                  {faq.question.toLowerCase().includes('about') && (
                    <span className="block mt-2">
                      Visit our <a href="/about" className="text-blue-600">About page</a>.
                    </span>
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg text-center">
          <p className="text-2xl font-semibold text-blue-800">
            For any additional questions not listed here, feel free to contact us.
          </p>
          <p className="mt-4 text-lg text-blue-700">
            We are here to support your journey to becoming an effective and purpose-driven leader.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
