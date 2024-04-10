"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LearningPathController_1 = require("../controllers/LearningPathController");
const learningPathRouter = (0, express_1.Router)();
learningPathRouter.post("/", LearningPathController_1.addLearningPath);
learningPathRouter.get("/:userId", LearningPathController_1.getLearningPath);
exports.default = learningPathRouter;
//# sourceMappingURL=learningPaths.js.map