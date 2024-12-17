
import React from 'react';
import { homeContent } from '../../constant/homeContent';

export default function HomePage() {
  const { heroSection, programOverview } = homeContent;

  return (
    <main
      className="relative bg-cover bg-center text-white min-h-screen"
      style={{ backgroundImage: `url('${heroSection.backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-40">
        <h1 className="text-5xl font-bold mb-4">{heroSection.title}</h1>
        <p className="text-lg mb-8 max-w-4xl mx-auto">{heroSection.description}</p>
        <a
          href="#program"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg mb-10"
        >
          {heroSection.buttonText}
        </a>

        {/* Program Overview Section */}
        <div className="bg-white text-gray-900 w-full max-w-7xl p-8 rounded-lg shadow-lg text-center relative mt-12 mx-auto">
          <h2 className="text-3xl font-bold mb-6">{programOverview.title}</h2>
          <p className="text-lg">{programOverview.description}</p>
        </div>
      </section>
    </main>
  );
}
