// // 'use client';

// // import { useState } from 'react';
// // import Swal from 'sweetalert2';
// // import { EnvelopeIcon } from '@heroicons/react/24/outline';

// // export default function ContactPage() {
// //   // ניהול מצב לשדות הטופס והודעות שגיאה
// //   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
// //   const [errors, setErrors] = useState({ name: '', email: '', message: '' });

// //   // פונקציה לניהול שינויים בשדות
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //     setErrors({ ...errors, [name]: '' });
// //   };

// //   // בדיקה אם הטופס תקין לפני שליחה
// //   const validateForm = () => {
// //     let valid = true;
// //     const newErrors = { name: '', email: '', message: '' };

// //     // בדיקת שדה השם
// //     if (!formData.name.trim()) {
// //       newErrors.name = 'Name is required.';
// //       valid = false;
// //     }

// //     // בדיקת שדה האימייל
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required.';
// //       valid = false;
// //     } else if (!emailRegex.test(formData.email)) {
// //       newErrors.email = 'Please enter a valid email address.';
// //       valid = false;
// //     }

// //     // בדיקת שדה ההודעה
// //     if (!formData.message.trim()) {
// //       newErrors.message = 'Message is required.';
// //       valid = false;
// //     }

// //     setErrors(newErrors);
// //     return valid;
// //   };

// //   // טיפול בשליחת הטופס
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (validateForm()) {
// //       Swal.fire({
// //         icon: 'success',
// //         title: 'Message Sent!',
// //         text: 'Your message has been sent successfully.',
// //         confirmButtonText: 'OK',
// //         confirmButtonColor: '#3085d6',
// //       });
// //       setFormData({ name: '', email: '', message: '' }); // איפוס השדות לאחר השליחה
// //     }
// //   };

// //   return (
// //     <main className="bg-white text-gray-900 min-h-screen">
// //       {/* כותרת דף */}
// //       <section className="py-20 bg-blue-50 text-center">
// //         <div className="container mx-auto text-center mb-12">
// //           {/* אייקון של מעטפה עם נוכחות מרשימה */}
// //           <EnvelopeIcon className="h-20 w-20 text-green-600 mx-auto animate-bounce mb-4" />

// //           {/* כותרת גדולה ומרכזית */}
// //           <h1 className="text-5xl font-extrabold text-gray-900">
// //             Contact Us
// //           </h1>
// //         </div>

// //         <p className="mt-4 text-lg text-gray-700">
// //           Have questions? Reach out to us, and we’ll get back to you as soon as possible.
// //         </p>
// //       </section>

// //       {/* טופס יצירת קשר */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-6">
// //           <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
// //           <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
// //             {/* שדה שם */}
// //             <div>
// //               <label className="block text-gray-700">Name</label>
// //               <input
// //                 type="text"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
// //                 placeholder="Your Name"
// //               />
// //               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
// //             </div>

// //             {/* שדה אימייל */}
// //             <div>
// //               <label className="block text-gray-700">Email</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
// //                 placeholder="Your Email"
// //               />
// //               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //             </div>

// //             {/* שדה הודעה */}
// //             <div>
// //               <label className="block text-gray-700">Message</label>
// //               <textarea
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleInputChange}
// //                 className={`w-full px-4 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
// //                 placeholder="Your Message"
// //               />
// //               {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
// //             </div>

// //             {/* כפתור שליחה */}
// //             <button
// //               type="submit"
// //               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
// //             >
// //               Send Message
// //             </button>
// //           </form>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // }
// "use client";

// import emailjs from "@emailjs/browser";
// import Swal from "sweetalert2";
// import { useState } from "react";
// import { EnvelopeIcon } from "@heroicons/react/24/outline";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", message: "" });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = { name: "", email: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required.";
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//       valid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       emailjs
//         .send(
//           process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
//           process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
//           formData,
//           process.env.NEXT_PUBLIC_EMAILJS_USER_ID

//         )
//         .then(
//           () => {
//             Swal.fire({
//               icon: "success",
//               title: "Message Sent!",
//               text: "Your message has been sent successfully.",
//               confirmButtonText: "OK",
//               confirmButtonColor: "#3085d6",
//             });
//             setFormData({ name: "", email: "", message: "" });
//           },
//           (error) => {
//             console.error("Message sending failed:", error);
//             Swal.fire({
//               icon: "error",
//               title: "Error!",
//               text: "There was an error sending your message.",
//               confirmButtonText: "OK",
//               confirmButtonColor: "#d33",
//             });
//           }
//         );
//     }
//   };

//   return (
//     <main className="bg-white text-gray-900 min-h-screen">
//       {/* Header Section */}
//       <section className="py-20 bg-blue-50 text-center">
//         <div className="container mx-auto text-center mb-12">
//           <EnvelopeIcon className="h-20 w-20 text-green-600 mx-auto animate-bounce mb-4" />
//           <h1 className="text-5xl font-extrabold text-gray-900">Contact Us</h1>
//         </div>
//         <p className="mt-4 text-lg text-gray-700">
//           Have questions? Reach out to us, and we’ll get back to you as soon as possible.
//         </p>
//       </section>

//       {/* Form Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
//           <form className="max-w-lg mx-auto space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-gray-700">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
//                 placeholder="Your Name"
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//             </div>
//             <div>
//               <label className="block text-gray-700">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
//                 placeholder="Your Email"
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>
//             <div>
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"}`}
//                 placeholder="Your Message"
//               />
//               {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     </main>
//   );
// }
////********************************** */
// "use client";

// import { useState } from "react";
// import emailjs from "emailjs-com";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState({ name: "", email: "", message: "" });
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = { name: "", email: "", message: "" };

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required.";
//       valid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//       valid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address.";
//       valid = false;
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required.";
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!validateForm()) return;
  
//     try {
//       const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
//       const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
//       const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
//       console.log(serviceId, templateId, userId)
//       if (!serviceId || !templateId || !userId) {
//         setErrorMessage("Email service configuration is missing.");
//         return;
//       }

//       await emailjs.send(
//         serviceId,
//         templateId,
//         {
//           name: formData.name,
//           email: formData.email,
//           message: formData.message,
//         },
//         userId
//       );

//       setSuccessMessage("Thank you! Your message has been sent.");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       if (error?.text) {
//         console.error("Error details:", error.text);  // פרטי שגיאה נוספים אם יש
//       }
//       setErrorMessage("Failed to send your message. Please try again.");
//     }
//   };

//   return (
//     <div>
//       <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Contact Us</h1>
//         <p className="mt-4 text-lg">
//           Have a question? Fill out the form below and we will get back to you.
//         </p>
//       </header>

//       <main className="py-10 px-6">
//         <section className="max-w-4xl mx-auto mb-12">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
//           {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
//           {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               placeholder="Your Name"
//               className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Your Email"
//               className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Your Message"
//               className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
//               rows={4}
//             />
//             {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>
//       </main>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";  

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
          background: 'linear-gradient(to right, #00c6ff, #0072ff, #00c6a0, #00ff72)', // הגרדיאנט שלך
        }}
      >
        {/* רקע כהה עם שקיפות */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg sm:text-xl font-light max-w-3xl mx-auto">
            Have a question? Fill out the form below and we will get back to you.
          </p>
          {/* <a
            href="#contact-form"
            className="mt-8 inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-100 transition-all"
          >
            Fill Out the Form
          </a> */}
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
              className={`w-full p-3 border rounded-lg ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className={`w-full p-3 border rounded-lg ${errors.message ? "border-red-500" : "border-gray-300"}`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
