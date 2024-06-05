"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllLearningPathInstructions = exports.getLearningPathInstructions = exports.bulkAddLearningPathInstructions = void 0;
const LPInstruction_1 = __importDefault(require("../../../db/models/LPInstruction"));
const bulkAddLearningPathInstructions = async (req, res) => {
    const { task } = req.body;
    const learningPathId = parseInt(req.params.learningPathId, 10);
    const userId = parseInt(req.params.userId, 10);
    try {
        await LPInstruction_1.default.destroy({ where: { learningPathId } });
        for (let instruction of task) {
            await LPInstruction_1.default.create({
                userId,
                learningPathId,
                step: instruction.step,
                solution: instruction.solution,
            });
        }
        res
            .status(201)
            .json({ message: "Learning path instructions added successfully." });
    }
    catch (error) {
        console.error("Error adding learning path instructions:", error);
        res
            .status(500)
            .json({
            error: "An error occurred while adding learning path instructions.",
        });
    }
};
exports.bulkAddLearningPathInstructions = bulkAddLearningPathInstructions;
const deleteAllLearningPathInstructions = async (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    try {
        await LPInstruction_1.default.destroy({ where: { userId } });
        res
            .status(200)
            .json({ message: "All learning path instructions deleted successfully." });
    }
    catch (error) {
        console.error("Error deleting learning path instructions:", error);
        res
            .status(500)
            .json({
            error: "An error occurred while deleting learning path instructions.",
        });
    }
};
exports.deleteAllLearningPathInstructions = deleteAllLearningPathInstructions;
const getLearningPathInstructions = async (req, res) => {
    const learningPathId = parseInt(req.params.learningPathId, 10);
    try {
        const instructions = await LPInstruction_1.default.findAll({
            where: { learningPathId },
        });
        res.status(200).json(instructions);
    }
    catch (error) {
        console.error("Error fetching learning path instructions:", error);
        res
            .status(500)
            .json({
            error: "An error occurred while fetching learning path instructions.",
        });
    }
};
exports.getLearningPathInstructions = getLearningPathInstructions;
//# sourceMappingURL=LPInstructionController.js.map