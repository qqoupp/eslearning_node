"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.addUser = void 0;
const User_1 = __importDefault(require("../../../db/models/User"));
const Tokens_1 = __importDefault(require("../../../db/models/Tokens"));
const tockenMiddleware_1 = require("../auth/token/tockenMiddleware");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
let refreshed = false;
const addUser = async (req, res) => {
    try {
        const existingUser = await User_1.default.findOne({
            where: { email: req.body.email },
        });
        if (existingUser) {
            res.status(400).json({ error: "User already exists" });
            return;
        }
        // Define password requirements
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
        // Validate password format
        if (!passwordRegex.test(req.body.password)) {
            res
                .status(400)
                .json({
                error: "Password must be at least 8 characters long and include at least one number, one uppercase letter, one lowercase letter, and one special character.",
            });
            return;
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User_1.default.create({
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).json({ error });
    }
};
exports.addUser = addUser;
const login = async (req, res) => {
    try {
        const user = await User_1.default.findOne({ where: { email: req.body.email } });
        if (!user) {
            res.status(404).json({
                status: 404,
                success: false,
                message: "User not found",
            });
            return;
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "wrong password",
            });
            return;
        }
        const token = (0, tockenMiddleware_1.generateAccessToken)(user);
        const refreshToken = await Tokens_1.default.findOne({ where: { userId: user.id } });
        if (!refreshToken) {
            const refreshToken = (0, tockenMiddleware_1.generateRefreshToken)(user);
            await Tokens_1.default.create({ userId: user.id, token: refreshToken });
        }
        else {
            const existingRefreshToken = (0, tockenMiddleware_1.verifyRefreshToken)(refreshToken.token);
            if (!existingRefreshToken.success) {
                const refreshToken = (0, tockenMiddleware_1.generateRefreshToken)(user);
                await Tokens_1.default.update({ token: refreshToken }, { where: { userId: user.id } });
                refreshed = true;
            }
            else {
                refreshed = false;
            }
        }
        res.status(200).json({
            status: 200,
            success: true,
            message: "User logged in successfully",
            token: token,
            refreshToken: refreshToken?.token,
            refreshed: refreshed,
        });
    }
    catch (error) {
        console.log("error", error);
        res.status(400).json({ error });
    }
};
exports.login = login;
//# sourceMappingURL=UserController.js.map