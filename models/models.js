const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: 'USER'},
});