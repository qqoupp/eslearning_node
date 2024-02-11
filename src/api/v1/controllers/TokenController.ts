import Token from "../../../db/models/Tokens";
import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from "../auth/token/tockenMiddleware";
import express from "express";
import User from "../../../db/models/User";
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateAccessToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        let accessToken = req.headers.authorization;
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (!accessToken) {
            return res.status(401).json({success: false, message: "No token provided"});
        }
        accessToken = accessToken.replace("Bearer ", "");

        if(!verifyAccessToken(accessToken).success){
            return res.status(401).json({success: false, message: "Unauthorized"});
        }
        res.json({
            success: true,
            accessToken: accessToken,
        });
    }
    catch(error){
        console.error("Error validating access token:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

const checkRefreshToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {

    try{
        
        const user = await User.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const refreshToken = await Token.findOne({ where: { userId: user.id } });

        if(!refreshToken){
           return  res.status(401).json({success: false, message: "Unauthorized1"});
        }

           const existingRefreshToken = verifyRefreshToken(refreshToken.token);

           if(!existingRefreshToken.success){
               return  res.status(401).json({success: false, message: "Unauthorized2"});
           }
           const accessToken = generateAccessToken(user);
           return res.status(200).json({success: true,message: "Generated a new access token",accessToken});

    }
    catch(error){
        console.error("Error validating refresh token:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export  {validateAccessToken, checkRefreshToken};