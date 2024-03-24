"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserRequestsByUserId = exports.addUserRequest = void 0;
const Associations_1 = require("../../../db/models/Associations");
const addUserRequest = async (req, res) => {
    try {
        const { userId, technology, input, output } = req.body;
        const newUserRequest = await Associations_1.UserRequest.create({ userId, technology, input, output });
        res.status(201).json(newUserRequest);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.addUserRequest = addUserRequest;
const getAllUserRequestsByUserId = async (req, res) => {
    try {
        // Extracting userId from the request parameters
        const userId = parseInt(req.params.userId, 10);
        // Check if userId is valid
        if (isNaN(userId)) {
            res.status(400).json({ message: "Invalid userId provided." });
            return;
        }
        // Querying the database for all requests with the specified userId
        const userRequests = await Associations_1.UserRequest.findAll({
            where: { userId: userId }
        });
        // Sending back the found requests
        res.status(200).json(userRequests);
    }
    catch (error) {
        // Log the error and send back a generic error message
        console.error("Error fetching user requests by userId:", error);
        res.status(500).json({ message: "Internal server error while fetching user requests." });
    }
};
exports.getAllUserRequestsByUserId = getAllUserRequestsByUserId;
//# sourceMappingURL=UserRequestController.js.map