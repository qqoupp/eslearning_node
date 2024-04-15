import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface LPInstructionAttributes {
  id: number;
  learningPathId: number;
  step: string;
  solution: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface LPInstructionInput
  extends Optional<LPInstructionAttributes, "id"> {}
export interface LPInstructionOutput
  extends Required<LPInstructionAttributes> {}

class LPInstruction
  extends Model<LPInstructionAttributes, LPInstructionInput>
  implements LPInstructionAttributes
{
  public id!: number;
  public learningPathId!: number;
  public step!: string;
  public solution!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}
LPInstruction.init(
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
    tableName: "LPInstruction",
  }
);

export default LPInstruction;
