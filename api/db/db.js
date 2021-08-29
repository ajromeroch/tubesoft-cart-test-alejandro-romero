const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_NAME, PSQL_USER, PSQL_PASS, DB_PORT, DB_HOST } = process.env;

const db = new Sequelize(DB_NAME || "tubesoft", PSQL_USER, PSQL_PASS, {
  port: DB_PORT,
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = db;
