import { Router } from "express";
import { addUserRequest, getAllUserRequestsByUserId } from "../controllers/UserRequestController";

const userRequestRouter= Router();

userRequestRouter.get("/:userId", getAllUserRequestsByUserId);
userRequestRouter.put("/:id", () => {
  // update ingredient
});
userRequestRouter.delete("/:id", () => {
  // delete ingredient
});
userRequestRouter.post("/", addUserRequest);

export default userRequestRouter;
