import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface LPInstructionQueryAttributes {
  id: number;
  learningPathId: number;
  userId: number;
  step: string;
  solution: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface LPInstructionQueryInput
  extends Optional<LPInstructionQueryAttributes, "id"> {}
export interface LPInstructionOutput
  extends Required<LPInstructionQueryAttributes> {}

class LPInstructionQuery
  extends Model<LPInstructionQueryAttributes, LPInstructionQueryInput>
  implements LPInstructionQueryAttributes
{
  public id!: number;
  public learningPathId!: number;
  public userId!: number;
  public step!: string;
  public solution!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
LPInstructionQuery.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    learningPathId: {
      type: DataTypes.INTEGER,
      references: {
        model: "LearningPath", // Ensure this matches the table name
        key: "id",
      },
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User", // Ensure this matches the table name
        key: "id",
      },
      allowNull: false,
    },
    step: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    solution: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
    // paranoid: true,
    tableName: "LPInstructionQuery",
  }
);

export default LPInstructionQuery;
