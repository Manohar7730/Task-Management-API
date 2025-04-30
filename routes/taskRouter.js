const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.home);
router.post("/create", taskController.create);

module.exports = router;
