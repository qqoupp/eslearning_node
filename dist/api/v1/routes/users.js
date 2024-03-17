"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userRouter = (0, express_1.Router)();
userRouter.post("/login", UserController_1.login);
userRouter.put("/:id", () => {
    // update ingredient
});
userRouter.delete("/:id", () => {
    // delete ingredient
});
userRouter.post("/", UserController_1.addUser);
exports.default = userRouter;
//# sourceMappingURL=users.js.map