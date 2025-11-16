/* eslint-env node */
/* eslint-disable no-undef */

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Wszystkie pola są wymagane.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', // lub inny provider np. SendGrid
      auth: {
        user: process.env.EMAIL_USER, // w Vercel Environment Variables
        pass: process.env.EMAIL_PASS, // w Vercel Environment Variables
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Wiadomość od ${name}`,
      text: message,
    });

    res.status(200).json({ message: 'Wysłano!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Błąd serwera.' });
  }
}