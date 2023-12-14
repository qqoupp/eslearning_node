// src/controllers/userController.ts
import { Request, Response } from 'express';
import  User  from '../../../db/models/User';

const bcrypt = require('bcrypt');

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create( {email: req.body.email, password: hashedPassword});
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};
 export default addUser;