const mysql = require("mysql2");
require("dotenv").config({ path: "./config.env" });
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
const mysqlconnection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  waitForConnections: true,
  queueLimit: 0,
});
module.exports = mysqlconnection;
