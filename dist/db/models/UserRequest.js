"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
class UserRequest extends sequelize_1.Model {
}
UserRequest.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'User', // Ensure this matches the table name
            key: 'id',
        },
        allowNull: false,
    },
    technology: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    input: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: config_1.default,
    // paranoid: true,
    tableName: 'UserRequest'
});
exports.default = UserRequest;
//# sourceMappingURL=UserRequest.js.map