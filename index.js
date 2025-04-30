require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongoose");
const router = require("./routes/taskRouter");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

app.get("/", router);

module.exports = app;
