import { Router } from "express";
import {getLearningPath, deleteLearningPath, bulkAddLearningPaths } from "../controllers/LearningPathController";

const learningPathRouter = Router();

learningPathRouter.get("/:userId", getLearningPath);
learningPathRouter.delete("/:userId", deleteLearningPath)
learningPathRouter.post("/bulk/:userId", bulkAddLearningPaths);

export default learningPathRouter;