import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.MYSQLDB_DATABASE as string
const dbUser = process.env.MYSQLDB_USER as string
const dbHost = process.env.DB_HOST || 'localhost'
const dbDriver = process.env.DB_DRIVER as Dialect || 'mysql'
const dbPassword = process.env.MYSQLDB_ROOT_PASSWORD

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelizeConnection