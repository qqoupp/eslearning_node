import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface TechnologyAttributes {
  id: number;
  name: string;
  type: string;
  description?: string;
  short_description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface TechnologyInput extends Optional<TechnologyAttributes, 'id'> {}
export interface TechnologyOuput extends Required<TechnologyAttributes> {}

class Technology extends Model<TechnologyAttributes, TechnologyInput> implements TechnologyAttributes {
    public id!: number
    public name!: string
    public description!: string
    public short_description!: string
    public type!: string
  
    // timestamps! 
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Technology.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    short_description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'Technology'
  })


  
  export default Technology;