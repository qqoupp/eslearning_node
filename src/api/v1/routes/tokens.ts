import { Router } from "express";
import  {validateAccessToken, checkRefreshToken}  from "../controllers/TokenController";

const tokenRouter = Router();

tokenRouter.post("/validate", validateAccessToken);

tokenRouter.post("/refresh", checkRefreshToken);  

export default tokenRouter;