import { Request, Response } from 'express';
import { UserRequest} from '../../../db/models/Associations';
import { Express } from 'express';
import { get } from 'http';

const addUserRequest = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, technology, input} = req.body; 
        const newUserRequest = await UserRequest.create({ userId, technology, input });

        res.status(201).json(newUserRequest);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const deleteUserRequest = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedUserRequest = await UserRequest.destroy({ where: { id } });

    res.status(200).json(deletedUserRequest);
  } catch (error) {
    res.status(400).json({ error });
  }
}

const getAllUserRequestsByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
      const userId = parseInt(req.params.userId, 10);
      
      if (isNaN(userId)) {
          res.status(400).json({ message: "Invalid userId provided." });
          return;
      }

      const userRequests = await UserRequest.findAll({
          where: { userId: userId }
      });

      res.status(200).json(userRequests);
  } catch (error) {
      console.error("Error fetching user requests by userId:", error);
      res.status(500).json({ message: "Internal server error while fetching user requests." });
  }
};
 export { addUserRequest, getAllUserRequestsByUserId, deleteUserRequest}