// functions/index.js

const { onRequest }        = require('firebase-functions/v2/https');
const { defineSecret }     = require('firebase-functions/params');
const express              = require('express');
const cors                 = require('cors');
const nodemailer           = require('nodemailer');

// 🎯 Define your two secrets (make sure you created them via
//    firebase functions:secrets:create GMAIL_EMAIL and
//    firebase functions:secrets:create GMAIL_PASS)
const gmailEmail = defineSecret('GMAIL_EMAIL');
const gmailPass  = defineSecret('GMAIL_PASS');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post('/sendEmail', async (req, res) => {
  const { email, name, serviceType, serviceDate, serviceTime } = req.body;

  // Pull in secrets at runtime:
  const user = await gmailEmail.value();
  const pass = await gmailPass.value();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: email,
      subject: 'Your Service Request Has Been Accepted',
      text: `
Hello ${name},

Your booking for ${serviceType} has been accepted.

Service Date: ${serviceDate}
Time:         ${serviceTime}

Thank you!
      `.trim()
    });
    console.log('✅ Email sent to', email);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// 👉 Export with the correct secret refs (no typos!) and desired region
exports.sendEmail = onRequest(
  {
    region: 'us-central1',
    secrets: [ gmailEmail, gmailPass ],
  },
  app
);