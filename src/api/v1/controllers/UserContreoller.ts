// src/controllers/userController.ts
import { Request, Response } from 'express';
import  User  from '../../../db/models/User';

const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};
 export default addUser;