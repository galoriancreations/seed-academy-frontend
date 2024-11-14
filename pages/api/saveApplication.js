// pages/api/saveApplication.js

import { Client } from 'pg'; // משתמשים ב-PostgreSQL לדוגמה

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, goals, background, leadershipAspirations, avatar } = req.body;

    // אם חסרים פרטים בטופס
    if (!name || !email || !goals || !background || !leadershipAspirations || !avatar) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // חיבור לבסיס נתונים (כאן PostgreSQL לדוגמה)
    const client = new Client({
      user: 'your_db_user',  // שם משתמש ב-DB
      host: 'localhost',
      database: 'your_db_name',
      password: 'your_db_password',
      port: 5432,  // פורט של PostgreSQL
    });

    try {
      await client.connect();  // חיבור ל-DB

      // תחילה, נבדוק אם כבר קיימת רשומה עם כתובת האימייל הזו
      const existingUserResult = await client.query(
        'SELECT * FROM applications WHERE email = $1',
        [email]
      );

      // אם יש רשומה עם האימייל הזה, נבצע עדכון במקום יצירת רשומה חדשה
      if (existingUserResult.rows.length > 0) {
        const updateQuery = `
          UPDATE applications
          SET name = $1, goals = $2, background = $3, leadership_aspirations = $4, avatar = $5
          WHERE email = $6
        `;
        await client.query(updateQuery, [
          name,
          goals,
          background,
          leadershipAspirations,
          avatar,
          email,
        ]);

        await client.end(); // סיום החיבור
        return res.status(200).json({ message: 'Application updated successfully!' });
      }

      // אם לא קיימת רשומה, ניצור רשומה חדשה
      const result = await client.query(
        'INSERT INTO applications (name, email, goals, background, leadership_aspirations, avatar) VALUES ($1, $2, $3, $4, $5, $6)',
        [name, email, goals, background, leadershipAspirations, avatar] // הנתונים שנשלחו מהטופס
      );

      await client.end(); // סיום החיבור
      return res.status(200).json({ message: 'Application saved successfully!' }); // החזרה לתגובה שהבקשה בוצעה בהצלחה

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error saving or updating application.' }); // אם יש בעיה בביצוע הבקשה
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // אם לא הייתה בקשה מסוג POST
  }
}
