'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  // ניהול מצב לשדות הטופס והודעות שגיאה
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  // פונקציה לניהול שינויים בשדות
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  // בדיקה אם הטופס תקין לפני שליחה
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    // בדיקת שדה השם
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      valid = false;
    }

    // בדיקת שדה האימייל
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    // בדיקת שדה ההודעה
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // טיפול בשליחת הטופס
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been sent successfully.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      });
      setFormData({ name: '', email: '', message: '' }); // איפוס השדות לאחר השליחה
    }
  };

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* כותרת דף */}
      <section className="py-20 bg-blue-50 text-center">
        <div className="container mx-auto text-center mb-12">
          {/* אייקון של מעטפה עם נוכחות מרשימה */}
          <EnvelopeIcon className="h-20 w-20 text-green-600 mx-auto animate-bounce mb-4" />

          {/* כותרת גדולה ומרכזית */}
          <h1 className="text-5xl font-extrabold text-gray-900">
            Contact Us
          </h1>
        </div>

        <p className="mt-4 text-lg text-gray-700">
          Have questions? Reach out to us, and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* טופס יצירת קשר */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
          <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
            {/* שדה שם */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* שדה אימייל */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* שדה הודעה */}
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Your Message"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            {/* כפתור שליחה */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}