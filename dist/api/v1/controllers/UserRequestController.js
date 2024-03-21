"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Associations_1 = require("../../../db/models/Associations");
const addUserRequest = async (req, res) => {
    try {
        const { userId, input, output } = req.body; // Assuming these are the fields in UserRequest
        const newUserRequest = await Associations_1.UserRequest.create({ userId, input, output });
        res.status(201).json(newUserRequest);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.default = addUserRequest;
//# sourceMappingURL=UserRequestController.js.map