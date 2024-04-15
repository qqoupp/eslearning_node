import { Express } from "express";
import { Request, Response } from "express";
import LearningPath from "../../../db/models/LearningPath";
import LPInstruction from "../../../db/models/LPInstruction";

const bulkAddLearningPathInstructions = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { task } = req.body;
  const learningPathId = parseInt(req.params.learningPathId, 10);
  try {
    await LPInstruction.destroy({ where: { learningPathId } });

    for (let instruction of task) {
      await LPInstruction.create({
        learningPathId,
        step: instruction.step,
        solution: instruction.solution,
      });
    }

    res
      .status(201)
      .json({ message: "Learning path instructions added successfully." });
  } catch (error) {
    console.error("Error adding learning path instructions:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while adding learning path instructions.",
      });
  }
};

const getLearningPathInstructions = async (
  req: Request,
  res: Response
): Promise<void> => {
  const learningPathId = parseInt(req.params.learningPathId, 10);
  try {
    const instructions = await LPInstruction.findAll({
      where: { learningPathId },
    });
    res.status(200).json(instructions);
  } catch (error) {
    console.error("Error fetching learning path instructions:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching learning path instructions.",
      });
  }
};

export { bulkAddLearningPathInstructions, getLearningPathInstructions };
