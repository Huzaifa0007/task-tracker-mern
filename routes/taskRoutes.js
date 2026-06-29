import express from "express";

import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask,
  getDashboardStats,
} from "../controllers/taskController.js";

import protect from "../middleware/authMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";
import { createTaskValidation } from "../validators/taskValidator.js";

const router = express.Router();

router.post("/", protect, createTaskValidation, validateRequest, createTask);

router.get("/", protect, getTasks);

router.get("/stats/dashboard", protect, getDashboardStats);

router.get("/:id", protect, getTaskById);

router.put("/:id", protect, createTaskValidation, validateRequest, updateTask);

router.delete("/:id", protect, deleteTask);

export default router;
