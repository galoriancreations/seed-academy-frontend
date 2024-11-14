// import emailjs from '@emailjs/browser';

// const handleSubmit = (event) => {
//   event.preventDefault();

//   if (validateForm()) {
//     // שלח את המייל דרך EmailJS
//     emailjs
//       .send(
//         'service_962v2n5',      // מזהה השירות שלך
//         'template_becvotu',     // מזהה הטמפלט שלך
//         formData,          // נתוני הטופס (שם, אימייל, הודעה)
//         'user_z55N8wWTKXnockOAe'          // מזהה המשתמש שלך (מוגדר ב-EmailJS)
//       )
//       .then(
//         (response) => {
//           console.log('Message sent successfully:', response);
//           Swal.fire({
//             icon: 'success',
//             title: 'Message Sent!',
//             text: 'Your message has been sent successfully.',
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#3085d6',
//           });
//           setFormData({ name: '', email: '', message: '' }); // איפוס השדות לאחר השליחה
//         },
//         (error) => {
//           console.error('Message sending failed:', error);
//           Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'There was an error sending your message.',
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#d33',
//           });
//         }
//       );
//   }
// };
