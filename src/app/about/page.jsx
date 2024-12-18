
"use client";

import React, { useEffect, useState } from 'react';
import classNames from 'classnames'; // יבוא של classnames
import { aboutContent } from '../../constant/aboutContent'; // עדיין משתמש בנתונים של heroSection ו-storySection

export default function AboutPage() {
  const [teamSection, setTeamSection] = useState(null); // סטייט חדש לנתוני הצוות
  const { heroSection, storySection } = aboutContent;

  useEffect(() => {
    // קריאה ל-API כדי להביא את המידע על הצוות
    fetch('/api/teamSection')
      .then((response) => response.json())
      .then((data) => setTeamSection(data))
      .catch((error) => console.error('Error fetching team section:', error));
  }, []);

  // אם המידע לא הושלם, מציגים Loader
  if (!teamSection) {
    return <div>Loading...</div>;
  }

  return (
    <main className="text-gray-900">
      {/* Hero Section */}
      <section
        className={classNames('relative py-24 text-white w-full mx-0', {
          'bg-gradient-to-r from-blue-400 via-blue-500 to-green-400': heroSection.backgroundGradient,
        })}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-extrabold">{heroSection.title}</h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            {heroSection.description}
          </p>
          <a
            href="#story"
            className={classNames(
              'mt-8 inline-block px-6 py-3 font-semibold rounded-lg shadow-md transition-all',
              {
                'bg-white text-blue-600 hover:bg-blue-100': heroSection.buttonStyle === 'light',
                'bg-blue-600 text-white hover:bg-blue-700': heroSection.buttonStyle === 'dark',
              }
            )}
          >
            {heroSection.buttonText}
          </a>
        </div>
      </section>

      {/* Story Section */}
      <section
        id="story"
        className="py-16 w-full mx-0"
        style={{ backgroundColor: '#f8fbff' }}
      >
        <div>
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">{storySection.title}</h2>
          {storySection.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-center text-gray-700 max-w-3xl mx-auto text-md leading-relaxed mt-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-blue-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-700 mb-12">{teamSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamSection.members.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                <p className="mt-4 text-gray-700">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
