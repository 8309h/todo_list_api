const express = require("express");
const TaskRouter = express.Router();
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/taskController");
const { validateTask } = require("../utils/validator");

// GET all tasks (paginated)
TaskRouter.get("/getall", getAllTasks);

// GET a specific task by ID
TaskRouter.get("/:id", getTaskById);

// POST create a new task
TaskRouter.post("/create", validateTask, createTask);

// PUT update an existing task by ID
TaskRouter.put("/:id", validateTask, updateTaskById);

// DELETE delete a task by ID
TaskRouter.delete("/:id", deleteTaskById);

module.exports = TaskRouter;
