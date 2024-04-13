import { Router } from "express";
import { generate, generateInstruction } from "../controllers/LLMController";

const llmRequestRouter= Router();

llmRequestRouter.post("/", generate);
llmRequestRouter.post("/instruction", generateInstruction);

export default llmRequestRouter;
