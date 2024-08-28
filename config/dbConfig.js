const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bumbadb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;