
import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold">Our Mission and Vision</h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Ting Global’s SEED Academy is dedicated to empowering young leaders committed to positive change through AI-powered, ethical training and mentorship.
          </p>
          <a
            href="#story"
            className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Learn More About Our Story
          </a>
        </div>
      </section>

      <section id="story" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Our Story</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Ting Global’s SEED Academy was founded with a vision to transform the way we train young leaders.
             We believe that effective leadership in the 21st century requires a new approach — one that is personalized,
              technologically advanced, and emphasizes responsibility and ethical decision-making.
          </p>
          <p className="text-center text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mt-6">
            By collaborating with Living Cities Earth, we integrate holistic development strategies 
            into our programs to ensure that our young leaders are equipped to foster thriving communities, 
            while championing human well-being and environmental sustainability.
          </p>
        </div>
      </section>


      {/* Meet the Team Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Dr. Alex Johnson</h3>
              <p className="mt-4 text-gray-700">Founder & CEO</p>
              <p className="text-gray-600">Expert in AI and leadership development.</p>
            </div>
            {/* Member 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Emily Zhang</h3>
              <p className="mt-4 text-gray-700">Head of Education</p>
              <p className="text-gray-600">Passionate about personalized learning paths.</p>
            </div>
            {/* Member 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">Michael Lee</h3>
              <p className="mt-4 text-gray-700">Community Manager</p>
              <p className="text-gray-600">Building global connections for young leaders.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
