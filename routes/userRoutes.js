const express = require("express");
const multer = require("multer")
const uploads = multer({dest:"uploads"})

const app = express.Router();

app.get("/", (req, res) => {
  res.json({ message: "User Route is working" });
});

app.post("/upload/avatar", uploads.single("avatar") , (req, res) => {
  res.json({ message: "File Uploaded" , path:req.file.path });
});

app.post("/upload/galary",uploads.array("avatar",12), (req, res) => {
  const paths = []
  req.files.map((e)=>paths.push(e.path))
  res.json({ message: "File Uploaded" , path:paths });
})

module.exports=app;
