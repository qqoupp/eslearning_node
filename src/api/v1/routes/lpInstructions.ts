import React from 'react';
import { bulkAddLearningPathInstructions, deleteAllLearningPathInstructions, getLearningPathInstructions } from '../controllers/LPInstructionController';
import { Router } from 'express';

const lpInstructionsRouter = Router();

lpInstructionsRouter.post('/:learningPathId/:userId', bulkAddLearningPathInstructions);
lpInstructionsRouter.get('/:learningPathId', getLearningPathInstructions);
lpInstructionsRouter.delete('/:userId', deleteAllLearningPathInstructions);

export default lpInstructionsRouter;