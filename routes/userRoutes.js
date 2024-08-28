const express = require("express");
const multer = require("multer");
const uploads = multer({ dest: "uploads" });
const { insertUserToTable } = require("./mapDataToDb.js");

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "User Route is working" });
});

app.post("/signup",  (req, res) => {
  const data = insertUserToTable(req.body);
  // console.log("Response of SQL ",data);
  res.send({ message: "sucess" });
});

app.post("/upload/avatar", uploads.single("avatar"), (req, res) => {
  res.json({ message: "File Uploaded", path: req.file.path });
});

app.post("/upload/galary", uploads.array("avatar", 12), (req, res) => {
  const paths = [];
  req.files.map((e) => paths.push(e.path));
  res.json({ message: "File Uploaded", path: paths });
});

module.exports = app;
