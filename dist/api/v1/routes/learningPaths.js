"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LearningPathController_1 = require("../controllers/LearningPathController");
const learningPathRouter = (0, express_1.Router)();
learningPathRouter.get("/:userId", LearningPathController_1.getLearningPath);
learningPathRouter.delete("/:userId", LearningPathController_1.deleteLearningPath);
learningPathRouter.post("/bulk/:userId", LearningPathController_1.bulkAddLearningPaths);
learningPathRouter.post("/:learningPathId", LearningPathController_1.changeCompletedStatus);
exports.default = learningPathRouter;
//# sourceMappingURL=learningPaths.js.map