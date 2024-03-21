"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TechnologyController_1 = require("../controllers/TechnologyController");
const technologiesRouter = (0, express_1.Router)();
technologiesRouter.get("/", TechnologyController_1.getTechnologies);
technologiesRouter.put("/:id", () => {
    // update ingredient
});
technologiesRouter.delete("/:id", () => {
    // delete ingredient
});
technologiesRouter.post("/", () => {
    // create ingredient
});
exports.default = technologiesRouter;
//# sourceMappingURL=technologies.js.map