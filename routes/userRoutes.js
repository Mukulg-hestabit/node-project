const express = require("express");
const multer = require("multer");
const {
  insertUserToTable,
  deleteUser,
  getUser,
  updateUser,
} = require("../functions/helperFunctions");

// Declaring where and how files will be stored.
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

// Create API For Student and Teachers
app.post("/signup", async (req, res) => {
  try {
    const data = insertUserToTable(req.body);
    const createdUser = await data;
    res.status(200).json({ message: "sucess", user: createdUser });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete API For Student and Teachers
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await deleteUser(id);
    res.status(200).json({ message: "User Deleted Sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// upload avatar image for users
app.post("/upload/avatar", uploads.single("avatar"), (req, res) => {
  res.json({ message: "File Uploaded", path: req.file.path });
});

// show all users
app.get("/getall", (req, res) => {
  res.status(200).json({});
});

// Read User Information and Give Response if user is valid
app.get("/login", async (req, res) => {
  try {
    const { full_name, email, role } = req.body;
    const userInfo = await getUser(full_name, email, role);
    if (userInfo.length == 0) {
      res.status(404).json({ msg: "not found", userInfo: {} });
    } else {
      res.cookie("user", JSON.stringify(userInfo), { httpOnly: true });
      res.status(200).json({ msg: "sucess", userInfo });
    }
  } catch (err) {
    console.log(err);
  }
});

// update user email
app.post("/update/email", async (req, res) => {
  try {
    const { email, id } = req.body;
    const userInfo = await updateUser(email, id);
    console.log(userInfo);
    if (userInfo.length == 0) {
      res.status(404).json({ msg: "not found", userInfo: {} });
    } else {
      res.status(200).json({ msg: "sucess", userInfo });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
