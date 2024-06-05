import { Router } from "express";
import { generate, generateInstruction, generateInstructionQuery } from "../controllers/LLMController";

const llmRequestRouter= Router();

llmRequestRouter.post("/", generate);
llmRequestRouter.post("/instruction", generateInstruction);
llmRequestRouter.post("/instructionQuery",generateInstructionQuery)

export default llmRequestRouter;
