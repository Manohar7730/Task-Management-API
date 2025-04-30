const Task = require("../models/task");

module.exports.home = async (req, res) => {
  try {
    const tasks = await Task.find();

    if (tasks.length === 0) {
      return res.status(200).json({
        success: true,
        message: "Task list is empty",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.create = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const newTask = new Task({
      title,
      description,
      status,
    });

    const savedTask = await newTask.save();

    res.status(201).json({
      success: true,
      data: savedTask,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.delete = async (req,res) =>{
  try{
    const {id} = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: deletedTask,
    });
  }catch(err){
    res.status(500).json({success: false, message: err.message})
  }
}