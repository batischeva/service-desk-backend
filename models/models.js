const sequelize = require('../db.js');
const {DataTypes} = require('sequelize');
const moment = require('moment');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false},
  role: {type: DataTypes.STRING, defaultValue: 'USER', allowNull: false},
});

const Agent = sequelize.define('agent', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  last_name: {type: DataTypes.STRING, allowNull: false},
  first_name: {type: DataTypes.STRING, allowNull: false},
  middle_name: {type: DataTypes.STRING},
});

const Client = sequelize.define('client', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  last_name: {type: DataTypes.STRING, allowNull: false},
  first_name: {type: DataTypes.STRING, allowNull: false},
  middle_name: {type: DataTypes.STRING},
});

const Request = sequelize.define('request', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  description: {type: DataTypes.STRING, allowNull: false},
  createdAt: {
    type: DataTypes.DATE,                   
    get() {
      return moment(this.getDataValue('createdAt')).format('D.MM.YYYY HH:mm:ss');
    }
  },
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      return moment(this.getDataValue('updatedAt')).format('D.MM.YYYY HH:mm:ss');
    }
  }
});

const Status = sequelize.define('status', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Category = sequelize.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

const Priority = sequelize.define('priority', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false, unique: true},
});

User.hasOne(Agent);
Agent.belongsTo(User);

User.hasOne(Client);
Client.belongsTo(User);

Agent.hasMany(Request);
Request.belongsTo(Agent);

Client.hasMany(Request);
Request.belongsTo(Client);

Status.hasMany(Request);
Request.belongsTo(Status);

Category.hasMany(Request);
Request.belongsTo(Category);

Priority.hasMany(Request);
Request.belongsTo(Priority);

module.exports = {
  User,
  Agent,
  Client,
  Request,
  Status,
  Category,
  Priority,
}