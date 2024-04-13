"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const technologies_1 = __importDefault(require("./technologies"));
const users_1 = __importDefault(require("./users"));
const userRequests_1 = __importDefault(require("./userRequests"));
const llm_1 = __importDefault(require("./llm"));
const tokens_1 = __importDefault(require("./tokens"));
const projectIdeeas_1 = __importDefault(require("./projectIdeeas"));
const learningPaths_1 = __importDefault(require("./learningPaths"));
const router = (0, express_1.Router)();
router.use('/technologies', technologies_1.default);
router.use('/users', users_1.default);
router.use('/userRequests', userRequests_1.default);
router.use('/llm', llm_1.default);
router.use('/tokens', tokens_1.default);
router.use('/projectIdeas', projectIdeeas_1.default);
router.use('/learningPaths', learningPaths_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map