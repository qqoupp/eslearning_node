import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface TokenAttributes  {
    id: number;
    userId: number;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface TokenInput extends Optional<TokenAttributes, 'id'> {}
export interface TokenOutput extends Required<TokenAttributes> {}

class Token extends Model<TokenAttributes, TokenInput> implements TokenAttributes {
    public id!: number;
    public userId!: number;
    public token!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}
Token.init({
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
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: false,
    tableName: 'Token'
});

export default Token;