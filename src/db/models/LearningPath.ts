import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface LearningPathAttributes  {
    id: number;
    userId: number;
    name: string;
    instruction: string;
    description: string;
    output: string;
    completed: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface LearningPathInput extends Optional<LearningPathAttributes, 'id'> {}
export interface LearningPathOutput extends Required<LearningPathAttributes> {}

class LearningPath extends Model<LearningPathAttributes, LearningPathInput> implements LearningPathAttributes {
    public id!: number;
    public userId!: number;
    public name!: string;
    public instruction!: string;
    public description!: string;
    public output!: string;
    public completed!: boolean;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
LearningPath.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User', // Ensure this matches the table name
            key: 'id',
        },
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instruction: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    output: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    // paranoid: true,
    tableName: 'LearningPath'
});

export default LearningPath;