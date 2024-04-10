import { Express } from "express";
import { Request, Response } from "express";
import LearningPath from "../../../db/models/LearningPath";

const addLearningPath = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, name, instruction, description, completed, output } =
      req.body;
    const learningPath = await LearningPath.create({
      userId,
      name,
      instruction,
      description,
      completed,
      output,
    });
    res.status(201).json(learningPath);
  } catch (error) {
    res.status(400).json({ error });
  }
};
const getLearningPath = async (req: Request, res: Response): Promise<void> => {
  try {
    // Extracting userId from the request parameters
    const userId = parseInt(req.params.userId, 10);

    // Check if userId is valid
    if (isNaN(userId)) {
      res.status(400).json({ message: "Invalid userId provided." });
      return;
    }

    // Querying the database for all requests with the specified userId
    const learningPath = await LearningPath.findAll({
      where: { userId: userId },
    });

    // Sending back the found requests
    res.status(200).json(learningPath);
  } catch (error) {
    // Log the error and send back a generic error message
    console.error("Error fetching user requests by userId:", error);
    res
      .status(500)
      .json({ message: "Internal server error while fetching user requests." });
  }
};
export { addLearningPath, getLearningPath };
