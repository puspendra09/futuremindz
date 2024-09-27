const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const multer = require("multer"); // Import multer
const app = express();
const port = 3001;
const jsonData = JSON.parse(fs.readFileSync("./json/jobs.json", "utf8"));
const currentTimestampInMilliseconds = Date.now();

// Use CORS middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public"); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use original file name
  },
});

const upload = multer({ storage: storage });

// Simple GET route
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/jobs", (req, res) => {
  const cleanedData = removeEmpty(jsonData);
  res.json(cleanedData);
});

app.post("/jobs", (req, res) => {
  let newJob = req.body;
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  newJob.id = currentTimestampInMilliseconds;
  newJob.alias = currentTimestampInMilliseconds;
  newJob.shortDescription = extractFirst100Words(newJob.description);
  newJob.date = formattedDate;

  jsonData.push(newJob);
  fs.writeFileSync("./json/jobs.json", JSON.stringify(jsonData, null, 2));
  res.status(201).json(newJob);
});

// POST route for file upload and sending email
app.post("/send-email", upload.single("resume"), (req, res) => {
  const { name, email, subject, message } = req.body;
  let resumeName = req.file ? req.file.filename : null;

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
    html: message, // Use 'html' property to send HTML content
  };

  // Attach the uploaded resume if it exists
  const filePath = path.join(__dirname, "./public/" + resumeName);

  if (fs.existsSync(filePath)) {
    console.log(`Resume file found: ${resumeName}`);
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

function removeEmpty(obj) {
  // Check if the input is an object or an array
  if (typeof obj !== "object" || obj === null) {
    return obj; // Return if not an object or is null
  }

  // If it's an array, filter out empty elements
  if (Array.isArray(obj)) {
    return obj
      .map(removeEmpty) // Recursively call for each element
      .filter(
        (item) =>
          item !== undefined &&
          item !== null &&
          !(typeof item === "object" && Object.keys(item).length === 0)
      ); // Remove empty items
  }

  // For objects, iterate over keys and remove empty properties
  return Object.keys(obj).reduce((acc, key) => {
    const value = removeEmpty(obj[key]); // Recursively clean the value
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === "object" && Object.keys(value).length === 0)
    ) {
      acc[key] = value; // Only add non-empty values
    }
    return acc;
  }, {});
}

function extractFirst100Words(html) {
  // Remove HTML tags using regex
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Split text into words
  const words = text.split(" ");

  // Get the first 100 words
  const first100Words = words.slice(0, 100).join(" ");

  return first100Words;
}

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
