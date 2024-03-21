"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequest = exports.User = void 0;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const UserRequest_1 = __importDefault(require("./UserRequest"));
exports.UserRequest = UserRequest_1.default;
User_1.default.hasMany(UserRequest_1.default, {
    foreignKey: "userId",
});
UserRequest_1.default.belongsTo(User_1.default, {
    foreignKey: "userId",
});
//# sourceMappingURL=Associations.js.map