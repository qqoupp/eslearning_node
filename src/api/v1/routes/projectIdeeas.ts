import { Router } from "express";

import { getProjectIdeea } from "../controllers/ProjectIdeeeaController";

const projectIdeasRouter = Router();

projectIdeasRouter.get("/", getProjectIdeea);

export default projectIdeasRouter;