const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
