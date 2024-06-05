import { Router } from "express";
import { getTechnologies } from "../controllers/TechnologyController";

const technologiesRouter = Router();
technologiesRouter.get("/", getTechnologies);
technologiesRouter.put("/:id", () => {
  // update ingredient
});
technologiesRouter.delete("/:id", () => {
  // delete ingredient
});
technologiesRouter.post("/", () => {
  // create ingredient
});

export default technologiesRouter;
