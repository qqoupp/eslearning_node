import { Express } from "express";
import { Request, Response } from "express";
import LearningPath from "../../../db/models/LearningPath";
import LPInstructionQuery from "../../../db/models/LPInstructionQuery";

const bulkAddLearningPathInstructionsQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { task } = req.body;
  const learningPathId = parseInt(req.params.learningPathId, 10);
  const userId = parseInt(req.params.userId, 10);
  try {
    await LPInstructionQuery.destroy({ where: { learningPathId } });

    for (let instruction of task) {
      await LPInstructionQuery.create({
        userId,
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

const deleteAllLearningPathInstructionsQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = parseInt(req.params.userId, 10);
  try {
    await LPInstructionQuery.destroy({ where: { userId} });
    res
      .status(200)
      .json({ message: "All learning path instructions deleted successfully." });
  } catch (error) {
    console.error("Error deleting learning path instructions:", error);
    res
      .status(500)
      .json({
        error: "An error occurred while deleting learning path instructions.",
      });
  }
}

const getLearningPathInstructionsQuery = async (
  req: Request,
  res: Response
): Promise<void> => {
  const learningPathId = parseInt(req.params.learningPathId, 10);
  try {
    const instructions = await LPInstructionQuery.findAll({
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

export { bulkAddLearningPathInstructionsQuery, getLearningPathInstructionsQuery, deleteAllLearningPathInstructionsQuery };
