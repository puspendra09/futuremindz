const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        auth: {
            user: 'your-email@example.com',
            pass: 'your-password',
        },
    });

    const mailOptions = {
        from: name,
        to: 'recipient@example.com',
        subject: 'Contact Form Request',
        text: message,
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent successfully!');
    });
});

app.listen(3000, () => console.log('Server is running on port 3000'));