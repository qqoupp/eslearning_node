import React from 'react';
import { bulkAddLearningPathInstructions, getLearningPathInstructions } from '../controllers/LPInstructionController';
import { Router } from 'express';

const lpInstructionsRouter = Router();

lpInstructionsRouter.post('/:learningPathId', bulkAddLearningPathInstructions);
lpInstructionsRouter.get('/:learningPathId', getLearningPathInstructions);

export default lpInstructionsRouter;