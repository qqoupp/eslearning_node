"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class LPInstruction extends sequelize_1.Model {
}
LPInstruction.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    learningPathId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "LearningPath", // Ensure this matches the table name
            key: "id",
        },
        allowNull: false,
    },
    step: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    solution: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: config_1.default,
    // paranoid: true,
    tableName: "LPInstruction",
});
exports.default = LPInstruction;
//# sourceMappingURL=LPInstruction.js.map