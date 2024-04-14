"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LPInstruction = exports.LearningPath = exports.UserRequest = exports.User = void 0;
const User_1 = __importDefault(require("./User"));
exports.User = User_1.default;
const UserRequest_1 = __importDefault(require("./UserRequest"));
exports.UserRequest = UserRequest_1.default;
const LearningPath_1 = __importDefault(require("./LearningPath"));
exports.LearningPath = LearningPath_1.default;
const LPInstruction_1 = __importDefault(require("./LPInstruction"));
exports.LPInstruction = LPInstruction_1.default;
User_1.default.hasMany(UserRequest_1.default, {
    foreignKey: "userId",
});
UserRequest_1.default.belongsTo(User_1.default, {
    foreignKey: "userId",
});
LPInstruction_1.default.belongsTo(LearningPath_1.default, {
    foreignKey: "learningPathId",
});
LearningPath_1.default.hasMany(LPInstruction_1.default, {
    foreignKey: "learningPathId",
});
//# sourceMappingURL=Associations.js.map