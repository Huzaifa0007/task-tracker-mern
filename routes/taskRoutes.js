import express from "express";

import { createTask } from "../controllers/taskController.js";

import { createTaskValidation } from "../validators/taskValidator.js";

import validateRequest from "../middleware/validateRequest.js";

const router = express.Router();

router.post(
  "/",

  createTaskValidation,

  validateRequest,

  createTask,
);

export default router;
