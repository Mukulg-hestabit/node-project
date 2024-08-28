const express = require("express");
const { getUser } = require("../functions/mapDataToDb");

const app = express.Router();

app.get("/login", async (req, res) => {
  try {
    const { full_name, email } = req.body;
    const userInfo = await getUser(full_name, email, "teacher");
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
