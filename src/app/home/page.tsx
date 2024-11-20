
// import React from 'react';
// export default function HomePage() {
//     return (
//       <main className="bg-white text-gray-900">
//         <section className="bg-blue-800 text-white py-20 text-center">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Ting Global’s SEED Academy</h1>
//           <p className="text-lg mb-8">
//             Empowering the next generation of leaders with AI-enhanced training. Discover how our immersive, personalized leadership program prepares youth to create a positive impact, promote human well-being, and build a sustainable future for all.
//           </p>
//           <a href="#program" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
//             Discover Your Leadership Potential
//           </a>
//         </div>
//       </section>

//       <section id="program" className="py-16 bg-gray-100">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-8">Program Overview</h2>
//           <p className="text-center text-gray-700 max-w-3xl mx-auto">
//             At SEED Academy, we redefine leadership training for youth, combining advanced AI technology with experiential simulations, customized learning paths, and a commitment to ethical decision-making, human well-being, and environmental sustainability.
//           </p>
//         </div>
//       </section>
//       </main>
//     );
//   }

import React from 'react';

export default function HomePage() {
  return (
    <main
      className="relative bg-cover bg-center text-white min-h-screen"
      style={{ backgroundImage: "url('/images/background.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Ting Global’s SEED Academy
        </h1>
        <p className="text-lg mb-8 max-w-4xl">
          Empowering the next generation of leaders with AI-enhanced training.
          Discover how our immersive, personalized leadership program prepares
          youth to create a positive impact, promote human well-being, and
          build a sustainable future for all.
        </p>
        <a
          href="#program"
          className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg mb-20"
        >
          Discover Your Leadership Potential
        </a>

        {/* Program Overview Section */}
        <div className="bg-white text-gray-900 w-full max-w-5xl p-8 rounded-lg shadow-lg text-center relative mt-12">
          <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
          <p className="text-lg">
            At SEED Academy, we redefine leadership training for youth,
            combining advanced AI technology with experiential simulations,
            customized learning paths, and a commitment to ethical
            decision-making, human well-being, and environmental sustainability.
          </p>
        </div>
      </section>
    </main>
  );
}
