import User from "./User";
import UserRequest from "./UserRequest";

User.hasMany(UserRequest, {
  foreignKey: "userId",
});
UserRequest.belongsTo(User, {
  foreignKey: "userId",
});

export { User, UserRequest };
