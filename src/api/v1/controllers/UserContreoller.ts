// src/controllers/userController.ts
import { Request, Response } from 'express';
import  User  from '../../../db/models/User';

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
      res.status(401).json({ error: 'Invalid login' });
      return;
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (passwordMatch) {
      const userWithoutPassword = user.get({ plain: true });
      delete (userWithoutPassword as { password?: string }).password;
      res.status(200).json(userWithoutPassword);
    } else {
      res.status(401).json({ error: 'Invalid login' });
    }
  } catch (error) {
    res.status(400).json({ error });
  };
};
 export {addUser,  login};