const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const multer = require("multer"); // Import multer
const app = express();
const port = 3001;

// Use CORS middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage: storage });

// Simple GET route
app.get("/", (req, res) => {
  res.send("Welcome");
});

// POST route for file upload and sending email
app.post("/send-email", upload.single('resume'), (req, res) => {
  const { name, email, subject, message } = req.body;
  let resumeName = req.file ? req.file.filename : null;

  // if (resumeName) {
  //   resumeName = resumeName.replace(/[^a-zA-Z0-9]/g, '-'); // Sanitize filename
  // } else {
  //   console.log("No resume uploaded.");
  //   return res.status(400).send("No resume uploaded."); // Return error if no file is uploaded
  // }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "info@futuremindzllc.com",
      pass: "gnszegbedsipqtpj", // Replace with app password
    },
  });

  let mailOptions = {
    from: name,
    to: email,
    subject: subject,
    text: message,
  };

  // Attach the uploaded resume if it exists
  const filePath = path.join(__dirname, "./public/" + resumeName);
  
  if (fs.existsSync(filePath)) {
    mailOptions.attachments = [
      {
        filename: resumeName,
        path: filePath,
      },
    ];
  } else {
    console.log("File does not exist at path:", filePath);
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error for debugging
      return res.status(500).send(error.toString());
    }
    res.status(200).send("Email sent successfully!");
  });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});