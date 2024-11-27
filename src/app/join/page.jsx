
'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function JoinPage() {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const avatars = ['Visionary Leader', 'Innovative Thinker', 'Revolutionary Spirit']; // לאווטארים בשמות תיאוריים
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goals: '',
    background: '',
    leadershipAspirations: '',
    message: '', // הוספת שדה ההודעה
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    goals: '',
    background: '',
    leadershipAspirations: '',
    message: '', // הוספת שדה ההודעה לשגיאות
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      goals: '',
      background: '',
      leadershipAspirations: '',
      message: '', // הוספת שדה ההודעה
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }
    if (!formData.goals.trim()) {
      newErrors.goals = 'Please tell us about your goals.';
      valid = false;
    }
    if (!formData.background.trim()) {
      newErrors.background = 'Please provide your background information.';
      valid = false;
    }
    if (!formData.leadershipAspirations.trim()) {
      newErrors.leadershipAspirations = 'Please tell us about your leadership aspirations.';
      valid = false;
    }
    if (!formData.message.trim()) { // בדיקת שדה ההודעה
      newErrors.message = 'Please enter a message.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // שליחה לשרת
      const response = await fetch('/api/saveApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          avatar: selectedAvatar,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Application Submitted!',
          text: 'Thank you for applying. We will contact you soon.',
          confirmButtonText: 'OK',
        });
        setFormData({
          name: '',
          email: '',
          goals: '',
          background: '',
          leadershipAspirations: '',
          message: '', // אפס את שדה ההודעה
        });
        setSelectedAvatar('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
        });
      }
    }
  };

  return (
    <main className="bg-white text-gray-900">
      {/* <section className="bg-blue-800 text-white py-20 text-center"
       style={{
        background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)',
      }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Join Our Leadership Program</h1>
          <p className="text-lg mb-8">
            Become part of a new generation of leaders. Our program offers personalized learning, immersive simulations, and a commitment to sustainable leadership.
          </p>
          <a href="#benefits" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
            Discover the Benefits
          </a>
        </div>
      </section> */}
      <section
        className="relative py-24 text-white w-full mx-0"
        style={{
          background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)', // הגרדיאנט שלך
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div> {/* רקע כהה עם שקיפות */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">Join Our Leadership Program</h1>
          <p className="text-lg mb-8">
            Become part of a new generation of leaders. Our program offers personalized learning, immersive simulations, and a commitment to sustainable leadership.
          </p>
          <a
            href="#benefits"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300"
          >
            Discover the Benefits
          </a>
        </div>
      </section>


      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">How to Apply</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Ready to take the next step in your leadership journey? Fill out the form below to apply.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Select Your Avatar</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {avatars.map((avatar, index) => (
                <button
                  key={index}
                  className={`p-4 border rounded text-lg font-semibold transition-all duration-300 ${selectedAvatar === avatar ? 'border-blue-500 bg-blue-100' : 'border-gray-300 hover:border-blue-400'}`}
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  {avatar}
                </button>
              ))}
            </div>
            <p className="mt-4 text-lg">Selected Avatar: {selectedAvatar || 'None'}</p>
          </div>

          <form className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <h3 className="text-3xl font-semibold text-center mb-8 text-gray-800">Join Our Program</h3>

            {/* טופס */}
            {['name', 'email', 'goals', 'background', 'leadershipAspirations'].map((field, index) => (
              <div className="mb-6" key={index}>
                <label htmlFor={field} className="block text-lg text-gray-800 font-semibold mb-2">{field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}  // אם זה שדה אימייל, ייווצר כ-input מסוג אימייל
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder={`Enter your ${field}`}
                />
                {errors[field] && <p className="text-red-500 text-sm mt-2">{errors[field]}</p>}
              </div>
            ))}


            {/* שדה ההודעה */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-gray-800 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-6 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Enter your message"
                rows={3} // מספר השורות שיוצגו כברירת מחדל
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
