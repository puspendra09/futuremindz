const express = require("express");
const cors = require("cors"); // Import cors
const app = express();
const nodemailer = require("nodemailer");
const path = require("path"); // To handle file paths
const fs = require("fs"); // To ensure file existence
const port = 3001;

// Use CORS middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/send-email", (req, res) => {
  const { name, email, message, resumeName } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "puspendras20@gmail.com",
      pass: "wlgd kqvv hvim tofu", // Replace with app password
    },
  });

  const filePath = path.join(__dirname, './public/' + resumeName); // Correct file path

  // Check if the file exists before attempting to attach it
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  const mailOptions = {
    from: name,
    to: email,
    subject: "Contact Form Request",
    text: `Hi ${name}, trying to contact you, ${message} Please find attached file`,
    attachments: [
      {
        filename: resumeName,
        path: filePath,
      },
    ],
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully!");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
