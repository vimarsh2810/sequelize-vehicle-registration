const Sequelize = require('sequelize');

const sequelize = require('../configs/connection.js');
const { State } = require('../models/state.js');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(25),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(65),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
}, { timestamps: false });

User.belongsTo(State);
State.hasMany(User);

module.exports = { User };