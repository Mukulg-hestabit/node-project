const express = require("express");
const http = require("http");
const { configDotenv } = require("dotenv");
const cors = require("cors");
const path = require("path");
const { Server } = require("socket.io");
const { sendNotification } = require("./controller/userController.js");

// importing routes
const userRoutes = require("./routes/userRoutes.js");

configDotenv(); // for using env variables
const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log("Server started at PORT : ", PORT);
});

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("signup", (id) => {
    sendNotification(id);
    io.emit("newuser", "{'message':'A New User Has Joined'}");
  });
  socket.on("user-approve", (id) => {
    io.emit("user-approved", `Congratulations You are now approved!!`);
  });
});

// Routing requests to their specific routes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// view uploaded files
app.get("/uploads/:id", (req, res) => {
  const filename = req.params.id;
  res.sendFile(path.join(__dirname, `/uploads/${filename}`));
});
