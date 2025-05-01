require("dotenv").config();
const express = require("express");
const connectDB = require("./config/mongoose");
const router = require("./routes/taskRouter");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});

const corsOptions = {
  origin: "https://trackitdaily.netlify.app/", // Replace with your Netlify URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
};

app.use(cors());

app.use(express.json());

app.use("/", router);

module.exports = app;
