require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQLDB_USER || "",
    password: process.env.MYSQLDB_ROOT_PASSWORD || "",
    database: process.env.MYSQLDB_DATABASE || "",
    host: process.env.MYSQLDB_HOST || process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.MYSQLDB_LOCAL_PORT || 3306),

    dialect: "mysql",
    logging: true,
  },
  staging: {
    username: process.env.MYSQLDB_USER_STAGE || "",
    password: process.env.MYSQLDB_ROOT_PASSWORD_STAGE || "",
    database: process.env.MYSQLDB_DATABASE_STAGE || "",
    host: process.env.MYSQLDB_HOST || process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.MYSQLDB_LOCAL_PORT || 3306),
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: process.env.MYSQLDB_USER_PROD || "",
    password: process.env.MYSQLDB_ROOT_PASSWORD_PROD || "",
    database: process.env.MYSQLDB_DATABASE_PROD || "",
    host: process.env.MYSQLDB_HOST || process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.MYSQLDB_LOCAL_PORT || 3306),
    dialect: "mysql",
    logging: false,
  },
};
