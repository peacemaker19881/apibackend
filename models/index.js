const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

const Student = require('./studentModel')(sequelize, Sequelize);
const User = require('./userModel')(sequelize, Sequelize);

module.exports = {
  sequelize,
  Student,
  User,
};