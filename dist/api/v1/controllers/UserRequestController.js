"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRequest = exports.getAllUserRequestsByUserId = exports.addUserRequest = void 0;
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
const deleteUserRequest = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUserRequest = await Associations_1.UserRequest.destroy({ where: { id } });
        res.status(200).json(deletedUserRequest);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.deleteUserRequest = deleteUserRequest;
const getAllUserRequestsByUserId = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId, 10);
        if (isNaN(userId)) {
            res.status(400).json({ message: "Invalid userId provided." });
            return;
        }
        const userRequests = await Associations_1.UserRequest.findAll({
            where: { userId: userId }
        });
        res.status(200).json(userRequests);
    }
    catch (error) {
        console.error("Error fetching user requests by userId:", error);
        res.status(500).json({ message: "Internal server error while fetching user requests." });
    }
};
exports.getAllUserRequestsByUserId = getAllUserRequestsByUserId;
//# sourceMappingURL=UserRequestController.js.map