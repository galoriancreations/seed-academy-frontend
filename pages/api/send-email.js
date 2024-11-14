// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: 'your-recipient@example.com',
//       subject: `New message from ${name}`,
//       text: `You have a new message from ${name} (${email}):\n\n${message}`,
//     });
//     res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ message: 'Failed to send email' });
//   }
// }
// // import nodemailer from 'nodemailer';

// // export async function POST(req) {
// //   try {
// //     const { name, email, message } = await req.json();

// //     // יצירת transporter באמצעות nodemailer
// //     const transporter = nodemailer.createTransport({
// //       service: 'gmail',
// //       auth: {
// //         user: 'YOUR_EMAIL@gmail.com', // עדכני כאן את המייל שלך
// //         pass: 'YOUR_APP_PASSWORD', // כאן תכניסי את סיסמת ה-APP (לא הסיסמה הרגילה)
// //       },
// //     });

// //     // הגדרת תוכן המייל
// //     const mailOptions = {
// //       from: email,
// //       to: 'RECIPIENT_EMAIL@gmail.com', // כתובת שאליה ישלח המייל
// //       subject: `New Message from ${name}`,
// //       text: message,
// //     };

// //     // שליחת המייל
// //     await transporter.sendMail(mailOptions);

// //     return new Response(JSON.stringify({ success: true }), { status: 200 });
// //   } catch (error) {
// //     console.error('Error sending email:', error);
// //     return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
// //   }
// // }

