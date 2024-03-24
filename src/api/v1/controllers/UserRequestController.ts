import { Request, Response } from 'express';
import { UserRequest} from '../../../db/models/Associations';
import { Express } from 'express';
import { get } from 'http';

const addUserRequest = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, input, output } = req.body; 
        const newUserRequest = await UserRequest.create({ userId, input, output });

        res.status(201).json(newUserRequest);
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getAllUserRequestsByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
      // Extracting userId from the request parameters
      const userId = parseInt(req.params.userId, 10);
      
      // Check if userId is valid
      if (isNaN(userId)) {
          res.status(400).json({ message: "Invalid userId provided." });
          return;
      }

      // Querying the database for all requests with the specified userId
      const userRequests = await UserRequest.findAll({
          where: { userId: userId }
      });

      // Sending back the found requests
      res.status(200).json(userRequests);
  } catch (error) {
      // Log the error and send back a generic error message
      console.error("Error fetching user requests by userId:", error);
      res.status(500).json({ message: "Internal server error while fetching user requests." });
  }
};
 export { addUserRequest, getAllUserRequestsByUserId}