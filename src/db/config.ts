import { Dialect, Sequelize } from 'sequelize'
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.MYSQLDB_DATABASE as string
const dbUser = process.env.MYSQLDB_USER as string
const dbHost = process.env.DB_HOST || 'localhost'
const dbDriver = process.env.DB_DRIVER as Dialect || 'mysql'
const dbPassword = process.env.MYSQLDB_ROOT_PASSWORD
const dbPort = process.env.MYSQLDB_LOCAL_PORT || '3306'

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
  port: parseInt(dbPort),
})

export default sequelizeConnection