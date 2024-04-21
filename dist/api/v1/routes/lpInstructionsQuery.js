"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LPInstructionQueryController_1 = require("../controllers/LPInstructionQueryController");
const lpInstructionsQueryRouter = (0, express_1.Router)();
lpInstructionsQueryRouter.post('/:learningPathId/:userId', LPInstructionQueryController_1.bulkAddLearningPathInstructionsQuery);
lpInstructionsQueryRouter.get('/:learningPathId', LPInstructionQueryController_1.getLearningPathInstructionsQuery);
lpInstructionsQueryRouter.delete('/:userId', LPInstructionQueryController_1.deleteAllLearningPathInstructionsQuery);
exports.default = lpInstructionsQueryRouter;
//# sourceMappingURL=lpInstructionsQuery.js.map