"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLearningPath = exports.addLearningPath = void 0;
const LearningPath_1 = __importDefault(require("../../../db/models/LearningPath"));
const addLearningPath = async (req, res) => {
    try {
        const { userId, name, instruction, description, completed, output } = req.body;
        const learningPath = await LearningPath_1.default.create({
            userId,
            name,
            instruction,
            description,
            completed,
            output,
        });
        res.status(201).json(learningPath);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.addLearningPath = addLearningPath;
const getLearningPath = async (req, res) => {
    try {
        // Extracting userId from the request parameters
        const userId = parseInt(req.params.userId, 10);
        // Check if userId is valid
        if (isNaN(userId)) {
            res.status(400).json({ message: "Invalid userId provided." });
            return;
        }
        // Querying the database for all requests with the specified userId
        const learningPath = await LearningPath_1.default.findAll({
            where: { userId: userId },
        });
        // Sending back the found requests
        res.status(200).json(learningPath);
    }
    catch (error) {
        // Log the error and send back a generic error message
        console.error("Error fetching user requests by userId:", error);
        res
            .status(500)
            .json({ message: "Internal server error while fetching user requests." });
    }
};
exports.getLearningPath = getLearningPath;
//# sourceMappingURL=LearningPathController.js.map