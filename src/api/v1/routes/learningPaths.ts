import { Router } from "express";
import { addLearningPath, getLearningPath, deleteLearningPath } from "../controllers/LearningPathController";

const learningPathRouter = Router();

learningPathRouter.post("/", addLearningPath);
learningPathRouter.get("/:userId", getLearningPath);
learningPathRouter.delete("/:userId", deleteLearningPath)


export default learningPathRouter;