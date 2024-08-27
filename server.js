const express = require("express");
const { configDotenv } = require("dotenv");
const cors = require("cors");
const path = require("path");

// importing routes
const userRoutes = require("./routes/userRoutes.js");

configDotenv(); // for using env variables
const app = express();

app.use(cors());
app.use(express.json());

// Routing requests to their specific routes
app.use("/user", userRoutes);

// view uploaded files
app.get("/uploads/:id", (req, res) => {
  const filename = req.params.id;
  console.log(req);
  res.sendFile(path.join(__dirname, `/uploads/${filename}`));
});

const PORT = process.env.PORT;
const timeStamp = new Date();
app.listen(PORT, () => {
  console.log(
    "Server started on :",
    timeStamp.toLocaleString(),
    " at PORT : ",
    PORT
  );
});
