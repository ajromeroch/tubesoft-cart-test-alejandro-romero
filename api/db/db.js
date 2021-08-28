const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const { DB_NAME, PSQL_USER, PSQL_PASS, DB_PORT, DB_HOST } = process.env;

const db = new Sequelize("postgres://localhost:5432/tubesoft", {
  logging: false,
});

// const db = new Sequelize(DB_NAME, PSQL_USER, PSQL_PASS, {
//   port: DB_PORT,
//   host: DB_HOST,
//   dialect: "postgres",
//   logging: false,
// });

module.exports = db;
