"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.MYSQLDB_DATABASE;
const dbUser = process.env.MYSQLDB_USER;
const dbHost = process.env.DB_HOST || 'localhost';
const dbDriver = process.env.DB_DRIVER || 'mysql';
const dbPassword = process.env.MYSQLDB_ROOT_PASSWORD;
const dbPort = process.env.MYSQLDB_LOCAL_PORT || '3306';
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    port: parseInt(dbPort),
});
exports.default = sequelizeConnection;
//# sourceMappingURL=config.js.map