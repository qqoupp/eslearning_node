// src/controllers/userController.ts
import { Request, Response } from 'express';
import  User  from '../../../db/models/User';
import exp from 'constants';
const jwt = require('jsonwebtoken');
require('dotenv').config();

const bcrypt = require('bcrypt');

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create( { email: req.body.email, password: hashedPassword});
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
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.ACCESS_TOKEN_SECRET);
    {
      expiresIn: "1h";
    };
    res.status(200).json({
      status: 200,
      success: true,
      message: "User logged in successfully",
      token: token,
    });
  } catch (error) {
    console.log('error',error);
    res.status(400).json({ error });
  };
};
 export {addUser,  login};