"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LPInstructionController_1 = require("../controllers/LPInstructionController");
const express_1 = require("express");
const lpInstructionsRouter = (0, express_1.Router)();
lpInstructionsRouter.post('/:learningPathId/:userId', LPInstructionController_1.bulkAddLearningPathInstructions);
lpInstructionsRouter.get('/:learningPathId', LPInstructionController_1.getLearningPathInstructions);
lpInstructionsRouter.delete('/:userId', LPInstructionController_1.deleteAllLearningPathInstructions);
exports.default = lpInstructionsRouter;
//# sourceMappingURL=lpInstructions.js.map