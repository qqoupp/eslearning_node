import { Router } from "express";
import addUser from '../controllers/UserContreoller';


const userRouter= Router();
userRouter.get("/", () => {
    // get all ingredients
    });
userRouter.put("/:id", () => {
  // update ingredient
});
userRouter.delete("/:id", () => {
  // delete ingredient
});
userRouter.post("/", addUser);

export default userRouter;
