const { Sequelize } = require("sequelize");
const sequlize = new Sequelize(
  "postgres://postgres:password@localhost:5432/sello"
);

module.exports = sequlize;
