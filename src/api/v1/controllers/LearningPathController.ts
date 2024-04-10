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
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
      res.status(400).json({ message: "Invalid userId provided." });
      return;
    }

    const learningPath = await LearningPath.findAll({
      where: { userId: userId },
    });

    res.status(200).json(learningPath);
  } catch (error) {
    console.error("Error fetching user requests by userId:", error);
    res
      .status(500)
      .json({ message: "Internal server error while fetching user requests." });
  }
};
const deleteLearningPath = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedLearningPath= await LearningPath.destroy({ where: { id } });

    res.status(200).json(deletedLearningPath);
  } catch (error) {
    res.status(400).json({ error });
  }
};
export { addLearningPath, getLearningPath, deleteLearningPath };
