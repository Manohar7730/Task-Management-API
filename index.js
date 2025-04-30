require('dotenv').config();
const express = require("express");
const connectDB = require("./config/mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

module.exports = app;
