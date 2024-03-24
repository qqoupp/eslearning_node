"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRequestController_1 = require("../controllers/UserRequestController");
const userRequestRouter = (0, express_1.Router)();
userRequestRouter.get("/:userId", UserRequestController_1.getAllUserRequestsByUserId);
userRequestRouter.put("/:id", () => {
    // update ingredient
});
userRequestRouter.delete("/:id", () => {
    // delete ingredient
});
userRequestRouter.post("/", UserRequestController_1.addUserRequest);
exports.default = userRequestRouter;
//# sourceMappingURL=userRequests.js.map