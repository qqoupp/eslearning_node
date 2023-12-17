import { Router } from "express";
import {generate} from '../controllers/LLMController';

const llmRequestRouter= Router();

llmRequestRouter.get("/", generate);

export default llmRequestRouter;
