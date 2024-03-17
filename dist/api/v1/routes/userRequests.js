"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRequestController_1 = __importDefault(require("../controllers/UserRequestController"));
const userRequestRouter = (0, express_1.Router)();
userRequestRouter.get("/", () => {
    // get all ingredients
});
userRequestRouter.put("/:id", () => {
    // update ingredient
});
userRequestRouter.delete("/:id", () => {
    // delete ingredient
});
userRequestRouter.post("/", UserRequestController_1.default);
exports.default = userRequestRouter;
//# sourceMappingURL=userRequests.js.map