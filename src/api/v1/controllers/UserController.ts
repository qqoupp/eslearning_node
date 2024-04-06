// src/controllers/userController.ts
import { Request, Response } from 'express';
import  User  from '../../../db/models/User';
import exp from 'constants';
import Token from '../../../db/models/Tokens';
import {generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken} from '../auth/token/tockenMiddleware';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const bcrypt = require('bcrypt');
let refreshed = false;

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create( { email: req.body.email, username: req.body.username, password: hashedPassword});
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
      return;
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      res.status(400).json({
        status: 400,
        success: false,
        message: "wrong password",
      });
        return;
    }
    const token = generateAccessToken(user);
    const refreshToken = await Token.findOne({ where: { userId: user.id } })
    if (!refreshToken)
    {
      
      const refreshToken = generateRefreshToken(user);
      await Token.create({ userId: user.id, token: refreshToken });
    }else{
      const existingRefreshToken = verifyRefreshToken(refreshToken.token);
      if(!existingRefreshToken.success){
        const refreshToken = generateRefreshToken(user);
        await Token.update({ token: refreshToken }, { where: { userId: user.id } });
        refreshed = true;
      }else{
        refreshed = false;
      }
    }
    res.status(200).json({
      status: 200,
      success: true,
      message: "User logged in successfully",
      token: token,
      refreshToken: refreshToken?.token,
      refreshed: refreshed,
    });
  } catch (error) {
    console.log('error',error);
    res.status(400).json({ error });
  };
};
 export {addUser,  login};