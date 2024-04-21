"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LLMController_1 = require("../controllers/LLMController");
const llmRequestRouter = (0, express_1.Router)();
llmRequestRouter.post("/", LLMController_1.generate);
llmRequestRouter.post("/instruction", LLMController_1.generateInstruction);
llmRequestRouter.post("/instructionQuery", LLMController_1.generateInstructionQuery);
exports.default = llmRequestRouter;
//# sourceMappingURL=llm.js.map