"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProjectIdeeeaController_1 = require("../controllers/ProjectIdeeeaController");
const projectIdeasRouter = (0, express_1.Router)();
projectIdeasRouter.get("/", ProjectIdeeeaController_1.getProjectIdeea);
exports.default = projectIdeasRouter;
//# sourceMappingURL=projectIdeeas.js.map