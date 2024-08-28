const express = require("express");
const multer = require("multer");
const teacherRoutes = require("./teacherRoutes");
const studentRoutes = require("./studentRoutes");
const { insertUserToTable } = require("../functions/mapDataToDb");

// Declaring where and how files will store in multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname.replace(" ", "-"));
  },
});

const uploads = multer({ storage: storage });

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "User Route is working" });
});

app.post("/signup", async (req, res) => {
  try {
    const data = insertUserToTable(req.body);
    const createdUser = await data;
    res.status(200).json({ message: "sucess", user: createdUser });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/upload/avatar", uploads.single("avatar"), (req, res) => {
  res.json({ message: "File Uploaded", path: req.file.path });
});

app.get("/getall", (req, res) => {
  res.status(200).json({});
});

app.get("/login", (req, res) => {});

app.use("/teacher", teacherRoutes);
app.use("/student", studentRoutes);

module.exports = app;
