import Task from "../models/Task.js";
import asyncHandler from "../utils/asyncHandler.js";

export const createTask = asyncHandler(async (req, res) => {
  const { title, description, priority, status, dueDate } = req.body;

  const task = await Task.create({
    title,
    description,
    priority,
    status,
    dueDate,
  });

  res.status(201).json({
    success: true,
    message: "Task created successfully.",
    data: task,
  });
});
