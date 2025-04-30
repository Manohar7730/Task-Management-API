const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.home);
router.post("/create", taskController.create);
router.delete("/delete/:id",taskController.delete);

module.exports = router;
