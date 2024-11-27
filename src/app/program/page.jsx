
import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { TELEGRAM_URL, WHATSAPP_URL } from "../../constant/urls.constant";



export default function ProgramPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">Our Program</h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Our AI-enhanced leadership program includes immersive simulations, personalized learning paths, and a focus on ethical, sustainable leadership.
          </p>
          <BookOpenIcon className="h-20 w-20 text-orange-400 mx-auto animate-pulse mb-4" />
          <a
            href="#program-details"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Learn More About Our Program
          </a>
        </div>
      </section> */}


      {/* <section
        className="relative py-24 text-white w-full mx-0"
        style={{
          background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">
            Our Program
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Our AI-enhanced leadership program includes immersive simulations, personalized learning paths, and a focus on ethical, sustainable leadership.
          </p>
          <BookOpenIcon className="h-20 w-20 text-Green-400 mx-auto animate-pulse mb-4" />
          <a
            href="#program-details"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Learn More About Our Program
          </a>
        </div>
      </section> */}
      <section
        className="relative py-24 text-white w-full mx-0"
        style={{
          background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)', // הגרדיאנט החיים שלך
        }}
      >
        {/* רקע כהה עם שקיפות */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl">
            Our Program
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Our AI-enhanced leadership program includes immersive simulations, personalized learning paths, and a focus on ethical, sustainable leadership.
          </p>
          <BookOpenIcon className="h-20 w-20 text-green-400 mx-auto animate-pulse mb-4" /> {/* אייקון */}
          <a
            href="#program-details"
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-all"
          >
            Learn More About Our Program
          </a>
        </div>
      </section>





      {/* Key Features Section */}
      <section id="program-details" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-8 text-blue-700">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Personalized Learning Paths</h3>
              <p className="mt-4 text-gray-700">
                Our AI-powered platform tailors each participant's learning journey, adjusting to their individual strengths, development areas, and leadership aspirations.
                This personalized approach ensures that each learner receives the guidance and resources they need to thrive and grow as a leader.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Immersive Simulations</h3>
              <p className="mt-4 text-gray-700">Engage in interactive, virtual scenarios that challenge your leadership and decision-making abilities.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-600">Global Learning Networks</h3>
              <p className="mt-4 text-gray-700">Collaborate with peers from around the world in leadership labs and networking events.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 text-center rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Join Our Learning Networks</h2>
        <p className="text-xl text-gray-600 mb-6">Connect with peers in our WhatsApp and Telegram groups to stay updated and learn together.</p>
        <div className="flex justify-center gap-6">
          <a href={WHATSAPP_URL} className="bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-green-600 hover:scale-105">WhatsApp Group</a>
          <a href={TELEGRAM_URL} className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-blue-600 hover:scale-105">Telegram Group</a>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="relative py-24 bg-blue-400 text-white">
        <div className="container mx-auto px-6 text-center flex flex-wrap items-center justify-between">
          {/* Background Effect */}
          <div className="absolute inset-0 bg-transparent"></div> 

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                Expanded DAO Leadership Program
              </h2>
              <p className="text-base sm:text-lg font-light mb-8">
                Our advanced program incorporates a Decentralized Autonomous Organization (DAO) model designed for visionary leaders. It offers opportunities for profit-sharing through customized avatars, empowering participants to achieve personal and collective growth.
              </p>
              {/* Highlight Section */}
              <div className="bg-white text-gray-900 rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">
                  Key Benefits of the DAO Integration
                </h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed tracking-wide mt-2">
                      Decentralized governance empowering participants to lead.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">🌐</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed tracking-wide mt-2">
                      Create and utilize custom avatars for personal branding.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">💰</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed tracking-wide mt-2">
                      Profit-sharing opportunities for active contributors.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-3 mr-4">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-lg leading-relaxed tracking-wide mt-2">
                      Exclusive access to leadership resources and tools.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 mt-8 md:mt-0 px-4">
              <img
                src="/images/DAO.jpg"
                alt="Avatar Selection"
                className="rounded-lg shadow-lg w-full h-auto max-w-full mx-auto md:ml-8"
              />
            </div>
          </div>
        </div>
      </section>


      {/* AI in Leadership Section */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">AI in Leadership: Our Approach</h2>
          <div className="text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800">The Technology Behind the Training</h3>
            <p className="mt-4 text-gray-700">Discover the advanced AI technology driving our curriculum, from personalized learning algorithms to realistic VR simulations.</p>
          </div>
          <div className="text-left max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Benefits of AI-Enhanced Learning</h3>
            <p className="mt-4 text-gray-700">AI-powered learning offers deep personalization and engagement, preparing leaders for the challenges of the digital world.</p>
          </div>
        </div>
      </section>

      {/* Additional Learning Initiatives Section */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-8">Additional Learning Initiatives by Ting Global</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Future Leaders Program */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Future Leaders Program</h3>
            <p className="mt-4 text-gray-700">
              A comprehensive training initiative designed to equip young talents with the skills, knowledge, and vision needed to become leaders of tomorrow, focusing on innovative thinking, ethical decision-making, and sustainable practices.
            </p>
          </div>
          {/* TING Innovation Nation Games */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">TING Innovation Nation Games</h3>
            <p className="mt-4 text-gray-700">
              A global event where think tanks in cities, universities, and schools collaborate to solve Sustainable Development Goals (SDGs) and prepare for the new digital economy.
            </p>
          </div>
          {/* TING Future of Work Portal */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">TING Future of Work Portal</h3>
            <p className="mt-4 text-gray-700">
              A comprehensive platform exploring the future landscape of work, providing insights, resources, and tools to help young people and organizations adapt to the evolving job market.
            </p>
          </div>
          {/* TING Thinking Method Workshops */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">TING Thinking Method Workshops</h3>
            <p className="mt-4 text-gray-700">
              Interactive workshops teaching innovative thinking methodologies, empowering participants to tackle complex problems and develop creative solutions.
            </p>
          </div>
          {/* Share On Magic Games */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600">Share On Magic Games</h3>
            <p className="mt-4 text-gray-700">
              Experiential games designed to foster a spirit of sharing and mutual care in a collaborative environment.
            </p>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="py-20 bg-blue-400 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">Join Our Program Today</h2>
          <p className="text-lg mb-8">Be part of a new generation of leaders.</p>
          <a href="/join" className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Apply Now
          </a>
        </div>
      </section>
    </main>
  );
}
