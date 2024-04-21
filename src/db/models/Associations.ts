import User from "./User";
import UserRequest from "./UserRequest";
import LearningPath from "./LearningPath";
import LPInstruction from "./LPInstruction";
import LPInstructionQuery from "./LPInstructionQuery";

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

LPInstruction.belongsTo(User, {
  foreignKey: "userId",
});
User.hasMany(LPInstruction, {
  foreignKey: "userId",
});

LPInstructionQuery.belongsTo(LearningPath, {
  foreignKey: "learningPathId",
});
LearningPath.hasMany(LPInstructionQuery, {
  foreignKey: "learningPathId",
});

LPInstructionQuery.belongsTo(User, {
  foreignKey: "userId",
});

User.hasMany(LPInstructionQuery, {
  foreignKey: "userId",
});


export { User, UserRequest, LearningPath, LPInstruction, LPInstructionQuery};
