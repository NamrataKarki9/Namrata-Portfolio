const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Required fields missing.' });

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      });
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: `Portfolio: ${subject || 'Message'} from ${name}`,
        html: `<h3>From: ${name} (${email})</h3><p>${message.replace(/\n/g, '<br>')}</p>`
      });
    }
    res.json({ success: true, message: "Message received! I'll get back to you soon." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send. Please email directly.' });
  }
});

module.exports = router;
