import { Router } from "express";
import { bulkAddLearningPathInstructionsQuery, deleteAllLearningPathInstructionsQuery, getLearningPathInstructionsQuery,  } from "../controllers/LPInstructionQueryController";

const lpInstructionsQueryRouter = Router();

lpInstructionsQueryRouter.post('/:learningPathId/:userId', bulkAddLearningPathInstructionsQuery);
lpInstructionsQueryRouter.get('/:learningPathId', getLearningPathInstructionsQuery);
lpInstructionsQueryRouter.delete('/:userId', deleteAllLearningPathInstructionsQuery);

export default lpInstructionsQueryRouter;