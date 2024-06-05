import { Router } from "express";
import { addUserRequest, getAllUserRequestsByUserId, deleteUserRequest } from "../controllers/UserRequestController";

const userRequestRouter= Router();

userRequestRouter.get("/:userId", getAllUserRequestsByUserId);
userRequestRouter.put("/:id", () => {
  // update ingredient
});
userRequestRouter.delete("/:id", deleteUserRequest )
userRequestRouter.post("/", addUserRequest);

export default userRequestRouter;
