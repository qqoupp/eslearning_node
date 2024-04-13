"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkAddLearningPaths = exports.deleteLearningPath = exports.getLearningPath = void 0;
const LearningPath_1 = __importDefault(require("../../../db/models/LearningPath"));
const getLearningPath = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        if (isNaN(userId)) {
            res.status(400).json({ message: "Invalid userId provided." });
            return;
        }
        const learningPath = await LearningPath_1.default.findAll({
            where: { userId: userId },
        });
        res.status(200).json(learningPath);
    }
    catch (error) {
        console.error("Error fetching user requests by userId:", error);
        res
            .status(500)
            .json({ message: "Internal server error while fetching user requests." });
    }
};
exports.getLearningPath = getLearningPath;
const deleteLearningPath = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedLearningPath = await LearningPath_1.default.destroy({ where: { userId } });
        res.status(200).json(deletedLearningPath);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.deleteLearningPath = deleteLearningPath;
const bulkAddLearningPaths = async (req, res) => {
    const { technologies } = req.body; // Assuming userId is sent along with the technologies in the body
    const userId = parseInt(req.params.userId, 10);
    try {
        // First, delete existing entries for this user
        await LearningPath_1.default.destroy({ where: { userId } });
        // Then, iterate over each technology and its instructions to add them to the database
        for (let tech of technologies) {
            for (let instruction of tech.instructions) {
                await LearningPath_1.default.create({
                    userId,
                    name: tech.name,
                    instruction: instruction.instruction,
                    description: instruction.description,
                    // Assuming 'output' and 'completed' are not part of the JSON and setting default values
                    output: '',
                    completed: false,
                });
            }
        }
        res.status(201).json({ message: "Learning paths added successfully." });
    }
    catch (error) {
        console.error("Error adding learning paths:", error);
        res.status(500).json({ error: "An error occurred while adding learning paths." });
    }
};
exports.bulkAddLearningPaths = bulkAddLearningPaths;
//# sourceMappingURL=LearningPathController.js.map