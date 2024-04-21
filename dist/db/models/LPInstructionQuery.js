"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class LPInstructionQuery extends sequelize_1.Model {
}
LPInstructionQuery.init({
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
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: "User", // Ensure this matches the table name
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
    tableName: "LPInstructionQuery",
});
exports.default = LPInstructionQuery;
//# sourceMappingURL=LPInstructionQuery.js.map