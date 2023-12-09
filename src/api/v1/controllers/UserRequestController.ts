// src/controllers/userController.ts
import { Request, Response } from 'express';
import { UserRequest} from '../../../db/models/Associations';
import { Express } from 'express';

const addUserRequest = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, input, output } = req.body; // Assuming these are the fields in UserRequest

        const newUserRequest = await UserRequest.create({ userId, input, output });

        res.status(201).json(newUserRequest);
  } catch (error) {
    res.status(400).json({ error });
  }
};
 export default addUserRequest;