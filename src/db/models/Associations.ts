import User from "./User";
import UserRequest from "./UserRequest";
import LearningPath from "./LearningPath";
import LPInstruction from "./LPInstruction";

User.hasMany(UserRequest, {
  foreignKey: "userId",
});
UserRequest.belongsTo(User, {
  foreignKey: "userId",
});

LPInstruction.belongsTo(LearningPath, {
  foreignKey: "learningPathId",
});
LearningPath.hasMany(LPInstruction, {
  foreignKey: "learningPathId",
});

export { User, UserRequest, LearningPath, LPInstruction};
