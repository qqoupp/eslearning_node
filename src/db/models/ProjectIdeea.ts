import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface ProjectIdeeaAttributes {
  id: number;
  name: string;
  type: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface ProjectIdeeaInput extends Optional<ProjectIdeeaAttributes, 'id'> {}
export interface ProjectIdeeaOuput extends Required<ProjectIdeeaAttributes> {}

class ProjectIdeea extends Model<ProjectIdeeaAttributes, ProjectIdeeaInput> implements ProjectIdeeaAttributes {
    public id!: number
    public name!: string
    public description!: string
    public type!: string
  
    // timestamps! 
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  ProjectIdeea.init({
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
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName: 'ProjectIdeea'
  })

  export default ProjectIdeea;