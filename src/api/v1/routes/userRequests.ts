import { Router } from "express";
import addUserRequest from '../controllers/UserRequestController';

const userRequestRouter= Router();

userRequestRouter.get("/", () => {
    // get all ingredients
    });
userRequestRouter.put("/:id", () => {
  // update ingredient
});
userRequestRouter.delete("/:id", () => {
  // delete ingredient
});
userRequestRouter.post("/", addUserRequest);

export default userRequestRouter;
