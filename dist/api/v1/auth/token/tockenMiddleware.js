"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAccessToken = exports.verifyRefreshToken = exports.generateRefreshToken = exports.generateAccessToken = void 0;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id, createdAt: user.createdAt, username: user.username, email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
};
exports.generateAccessToken = generateAccessToken;
const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id, createdAt: user.createdAt, username: user.username, email: user.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
};
exports.generateRefreshToken = generateRefreshToken;
function verifyRefreshToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        return { success: true, data: decoded };
    }
    catch (error) {
        return { success: false, error: error };
    }
}
exports.verifyRefreshToken = verifyRefreshToken;
function verifyAccessToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        return { success: true, data: decoded };
    }
    catch (error) {
        return { success: false, error: error };
    }
}
exports.verifyAccessToken = verifyAccessToken;
//# sourceMappingURL=tockenMiddleware.js.map