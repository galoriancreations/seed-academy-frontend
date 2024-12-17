import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { PROGRAM_CONTENT } from "../../constant/programContent"; // import the constants
import Button from "../../components/Button";

export default function ProgramPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative py-24 text-white w-full mx-0" style={{
        background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)',
      }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">
            {PROGRAM_CONTENT.header.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            {PROGRAM_CONTENT.header.description}
          </p>
          <BookOpenIcon className="h-20 w-20 text-green-400 mx-auto animate-pulse mb-4" />
          {/* <a href="#program-details" className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-all">
            Learn More About Our Program
          </a> */}
          <Button
            href="#program-details"
            label="Learn More About Our Program"
            variant="primary"
            className="mt-8"
          />

        </div>
      </section>

      {/* Key Features Section */}
      <section id="program-details" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAM_CONTENT.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600">{feature.title}</h3>
                <p className="mt-4 text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAO Program Section */}
      <section className="relative py-24 bg-blue-400 text-white">
        <div className="container mx-auto px-6 text-center flex flex-wrap items-center justify-between">
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                {PROGRAM_CONTENT.dao.title}
              </h2>
              <p className="text-base sm:text-lg font-light mb-8">{PROGRAM_CONTENT.dao.description}</p>
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">Key Benefits of the DAO Integration</h3>
                <ul className="space-y-4 text-left">
                  {PROGRAM_CONTENT.dao.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
                        <span className="text-white text-xl">🌐</span>
                      </div>
                      <p className="text-gray-800 font-semibold text-lg leading-relaxed tracking-wide mt-2">
                        {benefit}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 px-4">
              <img src="/images/DAO.jpg" alt="Avatar Selection" className="rounded-lg shadow-lg w-full h-auto max-w-full mx-auto md:ml-8" />
            </div>
          </div>
        </div>
      </section>

      {/* AI in Leadership Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">{PROGRAM_CONTENT.aiLeadership.title}</h2>
          <div className="text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800">The Technology Behind the Training</h3>
            <p className="mt-4 text-gray-700">{PROGRAM_CONTENT.aiLeadership.description}</p>
          </div>
          <div className="text-left max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Benefits of AI-Enhanced Learning</h3>
            <p className="mt-4 text-gray-700">{PROGRAM_CONTENT.aiLeadership.benefits}</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-400 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">{PROGRAM_CONTENT.callToAction.title}</h2>
          <p className="text-lg mb-8">{PROGRAM_CONTENT.callToAction.description}</p>
          <a href="/join" className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Apply Now
          </a>


        </div>
      </section>
    </main>
  );
}


