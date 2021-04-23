const Sequelize = require('sequelize');

const sequelize = require('../configs/connection.js');

const State = sequelize.define('state', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  stateName: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true
  },
  dateCreated: {
    type: Sequelize.DATE,
    allowNull: false
  },
  dateModified: {
    type: Sequelize.DATE,
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
}, {timestamps: false});

module.exports = { State };