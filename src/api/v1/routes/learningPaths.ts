import { Router } from "express";
import { addLearningPath, getLearningPath } from "../controllers/LearningPathController";

const learningPathRouter = Router();

learningPathRouter.post("/", addLearningPath);
learningPathRouter.get("/:userId", getLearningPath);


export default learningPathRouter;