import { Router } from "express";
import {getLearningPath, deleteLearningPath, bulkAddLearningPaths, changeCompletedStatus } from "../controllers/LearningPathController";

const learningPathRouter = Router();

learningPathRouter.get("/:userId", getLearningPath);
learningPathRouter.delete("/:userId", deleteLearningPath)
learningPathRouter.post("/bulk/:userId", bulkAddLearningPaths);
learningPathRouter.post("/:learningPathId", changeCompletedStatus )

export default learningPathRouter;