import { Router } from "express";
import {addUser,login} from '../controllers/UserContreoller';


const userRouter= Router();
userRouter.get("/login", login);
userRouter.put("/:id", () => {
  // update ingredient
});
userRouter.delete("/:id", () => {
  // delete ingredient
});
userRouter.post("/", addUser);

export default userRouter;
