import Task from "../models/Task.js";

/**
 * @desc Create a new task
 * @route POST /api/tasks
 * @access Public
 */

export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, dueDate } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      dueDate,
    });

    res.status(201).json({
      success: true,
      message: "Task created successfully.",
      data: task,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create task.",
      error: error.message,
    });
  }
};
