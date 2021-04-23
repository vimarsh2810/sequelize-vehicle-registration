const Sequelize = require('sequelize');

const sequelize = require('../configs/connection.js');

const Vehicle = sequelize.define('vehicle', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(25),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  registered: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { timestamps: false });

module.exports = { Vehicle };