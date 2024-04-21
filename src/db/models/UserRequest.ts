import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface UserRequestAttributes  {
    id: number;
    userId: number;
    technology: string;
    input: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserRequestInput extends Optional<UserRequestAttributes, 'id'> {}
export interface UserRequestOutput extends Required<UserRequestAttributes> {}

class UserRequest extends Model<UserRequestAttributes, UserRequestInput> implements UserRequestAttributes {
    public id!: number;
    public userId!: number;
    public technology!: string;
    public input!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
UserRequest.init({
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
    technology: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    input: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    // paranoid: true,
    tableName: 'UserRequest'
});

export default UserRequest;