"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TokenController_1 = require("../controllers/TokenController");
const tokenRouter = (0, express_1.Router)();
tokenRouter.post("/validate", TokenController_1.validateAccessToken);
tokenRouter.post("/refresh", TokenController_1.checkRefreshToken);
exports.default = tokenRouter;
//# sourceMappingURL=tokens.js.map