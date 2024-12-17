
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Button from "../../components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        Swal.fire({
          icon: "error",
          title: "Configuration Error",
          text: "Email service configuration is missing.",
          confirmButtonText: "OK",
        });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userId
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "There was an error sending your message.",
        confirmButtonText: "OK",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div>
      <section
        className="relative py-24 text-white w-full mx-0"
        style={{
          background: "linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Have a question? Fill out the form below and we will get back to you.
          </p>
          <Button
            href="#contact-form"
            label="Fill Out the Form"
            className="mt-8 !bg-blue-500 !text-white font-semibold rounded-lg shadow-md hover:!bg-blue-600 transition"
          />


        </div>
      </section>

      <main className="py-10 px-6">
        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"
                }`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <Button
              label="Send Message"
              variant="primary"
              className="w-full py-3"
              onClick={handleSubmit}
            />

          </form>
        </section>
      </main>
    </div>
  );
}
