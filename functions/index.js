

const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', reason);
});

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.post('/sendEmail', async (req, res) => {
  const { email, name, serviceType, serviceDate, status, serviceTime } = req.body;

 

  const user = 'subbhamk@gmail.com';
  const pass = 'xjhsluvswztqhtta';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  let subject, text;
  if (status === 'accepted') {
    subject = 'Your Service Request Has Been Accepted';
    text = `
Hello ${name},

Your booking for ${serviceType} has been accepted.

Service Date: ${serviceDate}
Time:         ${serviceTime}

Thank you!
    `.trim();
  } else if (status === 'rejected') {
    subject = 'Your Service Request Has Been Rejected';
    text = `
Hello ${name},

We are sorry to inform you that your booking for ${serviceType} on ${serviceDate} at ${serviceTime} has been rejected.

Please contact us if you have any questions.

Sorry for the inconvenience.
    `.trim();
  } else {
    return res.status(400).send('Invalid status');
  }

  try {
    await transporter.sendMail({
      from: user,
      to: email,
      subject,
      text,
    });

    console.log(`✅ Email (${status}) sent to ${email}`);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

// REMOVE this line for Firebase Functions:
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
exports.api = onRequest(app);