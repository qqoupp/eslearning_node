import { Router } from "express";
import {addUser,login} from '../controllers/UserController';



const userRouter= Router();
userRouter.post("/login",login);
userRouter.put("/:id", () => {
  // update ingredient
});
userRouter.delete("/:id", () => {
  // delete ingredient
});
userRouter.post("/", addUser);

export default userRouter;
