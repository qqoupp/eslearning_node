import { Router } from "express";
import { generate } from "../controllers/LLMController";

const llmRequestRouter= Router();

llmRequestRouter.post("/", generate);

export default llmRequestRouter;
