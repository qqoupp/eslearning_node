"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Technology_1 = __importDefault(require("./models/Technology"));
const isDev = process.env.NODE_ENV === "development";
const dbInit = () => {
    Technology_1.default.sync({ alter: isDev });
};
exports.default = dbInit;
//# sourceMappingURL=init.js.map