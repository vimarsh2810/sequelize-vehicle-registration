const Sequelize = require('sequelize');

const sequelize = require('../configs/connection.js');
const { Vehicle } = require('./vehicle.js');
const { User } = require('./user.js');

const VehicleRegistration = sequelize.define('vehicleRegistration', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  registrationDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  expiryDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
}, { timestamps: false });

VehicleRegistration.belongsTo(User);
User.hasMany(VehicleRegistration);
VehicleRegistration.belongsTo(Vehicle);
Vehicle.hasOne(VehicleRegistration);

module.exports = { VehicleRegistration };