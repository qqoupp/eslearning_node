"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRefreshToken = exports.validateAccessToken = void 0;
const Tokens_1 = __importDefault(require("../../../db/models/Tokens"));
const tockenMiddleware_1 = require("../auth/token/tockenMiddleware");
const User_1 = __importDefault(require("../../../db/models/User"));
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validateAccessToken = async (req, res, next) => {
    try {
        let accessToken = req.headers.authorization;
        const user = await User_1.default.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        if (!accessToken) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        accessToken = accessToken.replace("Bearer ", "");
        if (!(0, tockenMiddleware_1.verifyAccessToken)(accessToken).success) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        res.json({
            success: true,
            accessToken: accessToken,
        });
    }
    catch (error) {
        console.error("Error validating access token:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
exports.validateAccessToken = validateAccessToken;
const checkRefreshToken = async (req, res, next) => {
    try {
        const user = await User_1.default.findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        const refreshToken = await Tokens_1.default.findOne({ where: { userId: user.id } });
        if (!refreshToken) {
            return res.status(401).json({ success: false, message: "Unauthorized1" });
        }
        const existingRefreshToken = (0, tockenMiddleware_1.verifyRefreshToken)(refreshToken.token);
        if (!existingRefreshToken.success) {
            return res.status(401).json({ success: false, message: "Unauthorized2" });
        }
        const accessToken = (0, tockenMiddleware_1.generateAccessToken)(user);
        return res.status(200).json({ success: true, message: "Generated a new access token", accessToken });
    }
    catch (error) {
        console.error("Error validating refresh token:", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};
exports.checkRefreshToken = checkRefreshToken;
//# sourceMappingURL=TokenController.js.map